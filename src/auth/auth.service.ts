import { Injectable } from '@nestjs/common';
import { Auth } from './auth.entity';
import { UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async authenticateUserToken(auth: Auth): Promise<{ access_token: string }> {
    const verifyUserAccount = await this.userService.findAccount(
      auth.email,
      auth.password,
    );

    if (!verifyUserAccount) {
      throw new UnauthorizedException();
    } else {
      const payload = { email: auth.email };
      return {
        access_token: await this.jwtService.sign(payload),
      };
    }
  }
}
