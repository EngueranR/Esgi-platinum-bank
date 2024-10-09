import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ICreditCard } from './credit-card.interface';
import { CreditCard } from './credit-card.entity';
import { CreditCardService } from './credit-card.service';
import { AuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('credit-card')
export class CreditCardController {
  constructor(private creditCardService: CreditCardService) {}

  @Get()
  @UseGuards(AuthGuard)
  async findAll(): Promise<CreditCard[]> {
    return await this.creditCardService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  async findOne(@Param('id') id: number): Promise<CreditCard> {
    return await this.creditCardService.findOne(id);
  }

  @Post()
  async create(@Body() creditCard: ICreditCard): Promise<CreditCard> {
    return await this.creditCardService.create(creditCard);
  }

  @Put(':id')
  @UseGuards(AuthGuard)
  async update(
    @Param('id') id: number,
    @Body() creditCard: ICreditCard,
  ): Promise<CreditCard> {
    return await this.creditCardService.update(id, creditCard);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  async remove(@Param('id') id: number): Promise<number> {
    return await this.creditCardService.remove(id);
  }
}
