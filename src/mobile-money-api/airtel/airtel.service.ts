import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import {
  OAuthTokenResponse,
  PaymentRequestDto,
  RefundRequestDto,
  DisbursementRequestDto,
} from '../dto/create-mobile-money-api.dto';

@Injectable()
export class AirtelMoneyService {
  private token: string;

  private readonly clientId: string;
  private readonly clientSecret: string;
  private readonly stagingUrl: string;

  constructor(
    private readonly http: HttpService,
    private readonly config: ConfigService,
  ) {
    this.clientId = this.config.get<string>('AIRTEL_CLIENT_ID')!;
    this.clientSecret = this.config.get<string>('AIRTEL_CLIENT_SECRET')!;
    this.stagingUrl = this.config.get<string>('AIRTEL_STAGING_URL', 'https://openapiuat.airtel.africa');
  }

  private async getAccessToken(): Promise<string> {
    if (this.token) return this.token;

    try {
      const response = await firstValueFrom(
        this.http.post<OAuthTokenResponse>(
          `${this.stagingUrl}/auth/oauth2/token`,
          {
            client_id: this.clientId,
            client_secret: this.clientSecret,
            grant_type: 'client_credentials',
          },
          {
            headers: {
              'Content-Type':
                'application/json',
              Accept: '*/*',
            },
          },
        ),
      );

      this.token = response.data.access_token;
      return this.token;
    } catch (error) {
      throw new HttpException(
        'Failed to fetch Airtel OAuth token',
        HttpStatus.BAD_GATEWAY,
      );
    }
  }

  public async ussdPush(paymentDto: PaymentRequestDto): Promise<any> {
    const token = await this.getAccessToken();
    try {
      const response = await firstValueFrom(
        this.http.post(
          `${this.stagingUrl}/merchant/v2/payments/`,
          paymentDto,
          {
            headers: {
              Accept: '*/*',
              'Content-Type': 'application/json',
              'X-Country': paymentDto.subscriber.country,
              'X-Currency': paymentDto.subscriber.currency || '',
              Authorization: `Bearer ${token}`,
            },
          },
        ),
      );

      return response.data;
    } catch (error) {
      throw new HttpException(
        error.response?.data || 'USSD Push failed',
        error.response?.status || HttpStatus.BAD_GATEWAY,
      );
    }
  }

  public async refund(refundDto: RefundRequestDto): Promise<any> {
    const token = await this.getAccessToken();
    try {
      const response = await firstValueFrom(
        this.http.post(
          `${this.stagingUrl}/standard/v2/payments/refund`,
          { transaction: refundDto },
          {
            headers: {
              Accept: '*/*',
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          },
        ),
      );

      return response.data;
    } catch (error) {
      throw new HttpException(
        error.response?.data || 'Refund failed',
        error.response?.status || HttpStatus.BAD_GATEWAY,
      );
    }
  }

  public async getTransactionStatus(id: string, country?: string, currency?: string,
  ): Promise<any> {
    const token = await this.getAccessToken();
    try {
      const response = await firstValueFrom(
        this.http.get(
          `${this.stagingUrl}/standard/v1/payments/${id}`,
          {
            headers: {
              Accept: '*/*',
              'X-Country': country || '',
              'X-Currency': currency || '',
              Authorization: `Bearer ${token}`,
            },
          },
        ),
      );

      return response.data;
    } catch (error) {
      throw new HttpException(
        error.response?.data || 'Transaction enquiry failed',
        error.response?.status || HttpStatus.BAD_GATEWAY,
      );
    }
  }

  public async disburse(disbursementDto: DisbursementRequestDto): Promise<any> {
    const token = await this.getAccessToken();
    try {
      const response = await firstValueFrom(
        this.http.post(
          `${this.stagingUrl}/standard/v3/disbursements`,
          disbursementDto,
          {
            headers: {
              Accept: '*/*',
              'Content-Type': 'application/json',
              'X-Country': this.config.get<string>('DEFAULT_COUNTRY', ''),
              'X-Currency': this.config.get<string>('DEFAULT_CURRENCY', ''),
              Authorization: `Bearer ${token}`,
            },
          },
        ),
      );

      return response.data;
    } catch (error) {
      throw new HttpException(
        error.response?.data || 'Disbursement failed',
        error.response?.status || HttpStatus.BAD_GATEWAY,
      );
    }
  }

  public async getDisbursementStatus(id: string, country?: string, currency?: string,): Promise<any> {
    const token = await this.getAccessToken();
    try {
      const response = await firstValueFrom(
        this.http.get(
          `${this.stagingUrl}/standard/v3/disbursements/${id}`,
          {
            headers: {
              Accept: '*/*',
              'X-Country': country || this.config.get<string>('DEFAULT_COUNTRY', ''),
              'X-Currency': currency || this.config.get<string>('DEFAULT_CURRENCY', ''),
              Authorization: `Bearer ${token}`,
            },
          },
        ),
      );

      return response.data;
    } catch (error) {
      throw new HttpException(
        error.response?.data || 'Disbursement enquiry failed',
        error.response?.status || HttpStatus.BAD_GATEWAY,
      );
    }
  }
}
