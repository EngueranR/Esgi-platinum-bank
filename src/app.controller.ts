import { Controller, Get, Header, HttpCode, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from './auth/jwt-auth.guard';

@Controller('user+')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @HttpCode(201)
  @UseGuards(AuthGuard)
  @Header('content-type', 'application/json')
  getHello(): string {
    return this.appService.getHello();
  }
}
