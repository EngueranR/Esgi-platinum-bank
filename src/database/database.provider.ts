import { Sequelize } from 'sequelize-typescript';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'username',
        password: 'password',
        database: 'database',
      });
      sequelize.addModels([]);
      await sequelize.sync({ force: true });
      return sequelize;
    },
  },
];
