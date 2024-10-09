import { CreditCardService } from '../credit-card/credit-card.service';
import { Injectable } from '@nestjs/common';
import { Auth } from './auth.entity';
import { UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly CreditCardService: CreditCardService,
  ) {}

  async authenticateUserToken(auth: Auth): Promise<{ access_token: string }> {
    const verifyUserAccount = await this.CreditCardService.findAccount(
      auth.cardNumber,
      auth.pin,
    );

    if (!verifyUserAccount) {
      throw new UnauthorizedException();
    } else {
      const payload = { cardNumber: auth.cardNumber };
      return {
        access_token: await this.jwtService.sign(payload),
      };
    }
  }
}
