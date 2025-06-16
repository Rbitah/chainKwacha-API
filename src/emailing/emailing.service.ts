import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailingService {
  private transporter: nodemailer.Transporter;

  constructor(
    private readonly configService: ConfigService,
  ) {
    this.transporter = nodemailer.createTransport({
      host: this.configService.get<string>('HOST'),
      port: this.configService.get<number>('PORRT'),
      secure: false,
      auth: {
        user: this.configService.get<string>('EMAIL_USER'),
        pass: this.configService.get<string>('EMAIL_PASS'),
      },
    });
  }

  //Welcome Email + Verification Code
  async sendWelcomeVerificationEmail(to: string, code: string, username: string): Promise<void> {
    const from = this.configService.get<string>('EMAIL_USER');

    const mailOptions = {
      from: `"ChainKwacha Team" <${from}>`,
      to,
      subject: 'Welcome to ChainKwacha! Verify Your Email',
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;border:1px solid #eee;padding:30px;border-radius:10px;background:#fefefe;">
          <h2 style="color:#4CAF50;">Welcome to ChainKwacha 👋</h2>
           <h2 style="font-size:20px;">${username}</h2>
          <p style="font-size:16px;">We're excited to have you onboard. To activate your account, please use the verification code below:</p>
          <div style="text-align:center;margin:20px 0;">
            <span style="font-size:32px;font-weight:bold;color:#333;background:#e0ffe0;padding:10px 20px;border-radius:6px;">${code}</span>
          </div>
          <p style="font-size:14px;color:#666;">This code will expire in 10 minutes. If you didn't sign up, you can safely ignore this email.</p>
          <p style="margin-top:30px;font-weight:bold;">— ChainKwacha Team</p>
        </div>
      `
    };

    await this.transporter.sendMail(mailOptions);
  }

  // Send 2FA Code
  async send2FA_code_ViaEmail(to: string, code: string, username: string): Promise<void> {
    const from = this.configService.get<string>('EMAIL_USER');

    const mailOptions = {
      from: `"ChainKwacha Security" <${from}>`,
      to,
      subject: 'Your 2FA Code',
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;border:1px solid #ddd;padding:20px;border-radius:10px;background:#fff;">
          <h2 style="color:#f39c12;">2-Factor Authentication Code</h2>
           <h2 style="font-size:20px;">${username}</h2>
          <p style="font-size:15px;">Please use the following code to complete your login:</p>
          <div style="text-align:center;margin:20px 0;">
            <span style="font-size:28px;font-weight:bold;color:#444;background:#fef3c7;padding:10px 20px;border-radius:5px;">${code}</span>
          </div>
          <p style="font-size:13px;color:#999;">Do not share this code with anyone. It will expire shortly.</p>
          <p style="margin-top:20px;">— ChainKwacha Security Team</p>
        </div>
      `
    };

    await this.transporter.sendMail(mailOptions);
  }

  async sendTransactionEmail(){
    
  }
}
