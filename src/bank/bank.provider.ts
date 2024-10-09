import { Bank } from './bank.entity';

export const bankProviders = [
  {
    provide: 'BANK_REPOSITORY',
    useValue: Bank,
  },
];
