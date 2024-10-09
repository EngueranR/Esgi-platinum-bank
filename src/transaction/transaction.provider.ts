import { Transaction } from './transaction.entity';

export const TransactionProviders = [
  {
    provide: 'TRANSACTION_REPOSITORY',
    useValue: Transaction,
  },
];
