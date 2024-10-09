import { Inject, Injectable } from '@nestjs/common';
import { CreditCard } from './credit-card.entity';
import { ICreditCard } from './credit-card.interface';

@Injectable()
export class CreditCardService {
  constructor(
    @Inject('CREDIT_CARD_REPOSITORY')
    private creditCardRepository: typeof CreditCard,
  ) {}

  async findAll(): Promise<CreditCard[]> {
    return await this.creditCardRepository.findAll<CreditCard>();
  }

  async findOne(id: number): Promise<CreditCard> {
    return await this.creditCardRepository.findOne<CreditCard>({
      where: { id },
    });
  }

  async findAccount(cardNumber: string, pin: string): Promise<CreditCard> {
    return await this.creditCardRepository.findOne<CreditCard>({
      where: { cardNumber, pin },
    });
  }

  async create(creditCard: ICreditCard): Promise<CreditCard> {
    return await this.creditCardRepository.create<CreditCard>({
      ...creditCard,
    });
  }

  async update(id: number, creditCard: ICreditCard): Promise<CreditCard> {
    const findID = await this.creditCardRepository.findByPk<CreditCard>(id);
    if (!findID) {
      throw new Error('Credit card not found');
    } else {
      await this.creditCardRepository.update(
        { ...creditCard },
        { where: { id: findID.id } },
      );
      return await this.creditCardRepository.findByPk<CreditCard>(id);
    }
  }

  async remove(id: number): Promise<number> {
    return this.creditCardRepository.destroy({ where: { id } });
  }
}
