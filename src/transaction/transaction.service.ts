import { Inject, Injectable } from '@nestjs/common';
import { Transaction } from './transaction.entity';
import { ITransaction } from './transaction.interface';
import { Op } from 'sequelize';

@Injectable()
export class TransactionService {
  constructor(
    @Inject('TRANSACTION_REPOSITORY')
    private transactionRepository: typeof Transaction,
  ) {}

  async findAll(): Promise<Transaction[]> {
    return await this.transactionRepository.findAll<Transaction>();
  }

  async findTwentyLast(accountId: number): Promise<Transaction[]> {
    const transactions = await this.transactionRepository.findAndCountAll({
      limit: 20,
      where: {
        [Op.or]: [
          { sourceAccountId: accountId },
          { destinationAccountId: accountId },
        ],
      },
    });

    return transactions.rows;
  }

  async findOne(id: number): Promise<Transaction> {
    return await this.transactionRepository.findOne<Transaction>({
      where: { id },
    });
  }

  async create(transaction: ITransaction): Promise<Transaction> {
    return await this.transactionRepository.create<Transaction>({
      ...transaction,
    });
  }

  async update(id: number, transaction: ITransaction): Promise<Transaction> {
    const findID = await this.transactionRepository.findByPk<Transaction>(id);
    if (!findID) {
      throw new Error('Transaction not found');
    } else {
      await this.transactionRepository.update(
        { ...transaction },
        { where: { id: findID.id } },
      );
      return await this.transactionRepository.findByPk<Transaction>(id);
    }
  }

  async remove(id: number): Promise<number> {
    return this.transactionRepository.destroy({ where: { id } });
  }
}
