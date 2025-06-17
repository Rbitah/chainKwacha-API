export class CreateMobileMoneyApiDto { }

export interface OAuthTokenResponse {
  access_token: string;
  expires_in: number;
  token_type: string;
}

export interface SubscriberDto {
  country: string;
  currency?: string;
  msisdn: string;
}

export interface TransactionDto {
  amount: number;
  country?: string;
  currency?: string;
  id: string;
}

export interface PaymentRequestDto {
  reference: string;
  subscriber: SubscriberDto;
  transaction: TransactionDto;
}

export interface RefundRequestDto {
  airtel_money_id: string;
}


export interface SubscriberDto {
  country: string;
  currency?: string;
  msisdn: string;
}

export interface TransactionDto {
  amount: number;
  country?: string;
  currency?: string;
  id: string;
}

export interface PaymentRequestDto {
  reference: string;
  subscriber: SubscriberDto;
  transaction: TransactionDto;
}

export interface RefundRequestDto {
  airtel_money_id: string;
}

export interface DisbursementPayeeDto {
  msisdn: string;
  wallet_type: 'NORMAL';
}

export interface DisbursementTransactionDto {
  amount: number;
  id: string;
  type: 'B2C' | 'B2B';
}

export interface DisbursementRequestDto {
  payee: DisbursementPayeeDto;
  reference: string;
  pin: string;
  transaction: DisbursementTransactionDto;
}
