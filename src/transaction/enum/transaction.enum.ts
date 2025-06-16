export enum TransactionStatus {
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
  FAILED = 'FAILED',
  CANCELLED = 'CANCELLED',
  REFUNDED = 'REFUNDED',
}

export enum TransactionType {
  DEPOSIT = 'DEPOSIT',
  WITHDRAWAL = 'WITHDRAWAL',
  PAYMENT = 'PAYMENT',
  TRANSFER = 'TRANSFER',
}

export enum PaymentMethod {
  BANK = 'BANK',
  MOBILE_MONEY = 'MOBILE_MONEY',
  CARD = 'CARD',
  WALLET = 'WALLET'
}
