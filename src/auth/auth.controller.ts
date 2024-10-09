import { UserService } from './../user/user.service';
import { Controller, Post, Body, Param, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Auth } from './auth.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  authenfication(@Body() auth: Auth) {
    return this.authService.authenticateUserToken(auth);
  }
}
