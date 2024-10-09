import { Injectable } from '@nestjs/common';
import { Auth } from './entities/auth.entity';
import { UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  authList: Auth[] = [
    {
      email: 'jeanMoulin@email.fr',
      password: 'jeanMouMou',
    },
  ];

  async authenticateUserToken(auth: Auth): Promise<{ access_token: string }> {
    const verifyAuth = this.authList.find(
      (user) => user.email === auth.email && user.password === auth.password,
    );
    if (!verifyAuth) {
      throw new UnauthorizedException();
    } else {
      const payload = { email: auth.email };
      return {
        access_token: await this.jwtService.sign(payload),
      };
    }
  }
}
