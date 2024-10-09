import { Inject, Injectable } from '@nestjs/common';
import { BankAccount } from './bank-account.entity';
import { IBankAccount } from './bank-account.interface';

@Injectable()
export class BankAccountService {
  constructor(
    @Inject('BANK_ACCOUNT_REPOSITORY')
    private bankAccountRepository: typeof BankAccount,
  ) {}

  async findAll(): Promise<BankAccount[]> {
    return await this.bankAccountRepository.findAll<BankAccount>();
  }

  async findOne(id: number): Promise<BankAccount> {
    return await this.bankAccountRepository.findOne<BankAccount>({
      where: { id },
    });
  }

  async create(bankAccount: IBankAccount): Promise<BankAccount> {
    return await this.bankAccountRepository.create<BankAccount>({
      ...bankAccount,
    });
  }

  async update(id: number, bankAccount: IBankAccount): Promise<BankAccount> {
    const findID = await this.bankAccountRepository.findByPk<BankAccount>(id);
    if (!findID) {
      throw new Error('Bank account not found');
    } else {
      await this.bankAccountRepository.update(
        { ...bankAccount },
        { where: { id: findID.id } },
      );
      return await this.bankAccountRepository.findByPk<BankAccount>(id);
    }
  }

  async remove(id: number): Promise<number> {
    return this.bankAccountRepository.destroy({ where: { id } });
  }
}
