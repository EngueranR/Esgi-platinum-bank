import { CreditCard } from './credit-card.entity';

export const CreditCardProviders = [
  {
    provide: 'CREDIT_CARD_REPOSITORY',
    useValue: CreditCard,
  },
];
