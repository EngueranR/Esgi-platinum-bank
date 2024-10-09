import { Sequelize } from 'sequelize-typescript';
import { User } from 'src/user/user.entity';

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
      });
      sequelize.addModels([User]);
      await sequelize.sync({ force: true });
      return sequelize;
    },
  },
];
