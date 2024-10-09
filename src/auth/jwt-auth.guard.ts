import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);

    if (!token) {
      console.log('No token provided');
      return false;
    } else {
      try {
        const decoded = this.jwtService.verify(token);
        request.user = decoded;
        return true;
      } catch (error) {
        console.log('Error verifying token:', error.message);
        return false;
      }
    }
  }

  private extractTokenFromHeader(request: any): string | null {
    const authHeader = request.headers?.authorization || '';
    if (!authHeader.startsWith('Bearer ')) {
      return null;
    }
    const token = authHeader.split(' ')[1];
    return token || null;
  }
}
