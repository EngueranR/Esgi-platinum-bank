import { Sequelize } from 'sequelize-typescript';
import { CreditCard } from 'src/credit-card/credit-card.entity';
import { BankAccount } from 'src/bank-account/bank-account.entity';
import { Bank } from 'src/bank/bank.entity';
import { User } from 'src/user/user.entity';
import { Transaction } from 'src/transaction/transaction.entity';
import { DAB } from 'src/dab/dab.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: parseInt(process.env.DATABASE_PORT),
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        models: [BankAccount, User, CreditCard, Bank, DAB, Transaction],
      });

      User.hasMany(BankAccount);
      BankAccount.belongsTo(User);
      BankAccount.hasMany(CreditCard);
      CreditCard.belongsTo(BankAccount);
      DAB.hasOne(Bank);
      await sequelize.sync({ force: true });
      return sequelize;
    },
  },
];
