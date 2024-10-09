import { BankAccount } from './bank-account.entity';

export const bankAccountProviders = [
  {
    provide: 'BANK_ACCOUNT_REPOSITORY',
    useValue: BankAccount,
  },
];
