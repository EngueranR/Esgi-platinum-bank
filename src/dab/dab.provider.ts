import { DAB } from './dab.entity';

export const dabProviders = [
  {
    provide: 'DAB_REPOSITORY',
    useValue: DAB,
  },
];
