import { Inject, Injectable } from '@nestjs/common';
import { Bank } from './bank.entity';
import { IBank } from './bank.interface';

@Injectable()
export class BankService {
  constructor(@Inject('BANK_REPOSITORY') private bankRepository: typeof Bank) {}

  async findAll(): Promise<Bank[]> {
    return await this.bankRepository.findAll<Bank>();
  }

  async findOne(id: number): Promise<Bank> {
    return await this.bankRepository.findOne<Bank>({ where: { id } });
  }

  async create(bank: IBank): Promise<Bank> {
    return await this.bankRepository.create<Bank>({ ...bank });
  }

  async update(id: number, bank: IBank): Promise<Bank> {
    const findID = await this.bankRepository.findByPk<Bank>(id);
    if (!findID) {
      throw new Error('Bank not found');
    } else {
      await this.bankRepository.update(
        { ...bank },
        { where: { id: findID.id } },
      );
      return await this.bankRepository.findByPk<Bank>(id);
    }
  }

  async remove(id: number): Promise<number> {
    return this.bankRepository.destroy({ where: { id } });
  }
}
