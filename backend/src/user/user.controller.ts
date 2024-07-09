import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthService } from '../auth/auth.service';

@Controller('user')
export class UserController {
  constructor(
    private userService: UserService,
    private authService: AuthService, 
  ) {}

  @Post('register')
  async register(
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    if (!email || !password) {
      throw new BadRequestException('Email and password are required');
    }
    return this.userService.register(email, password);
  }

  @Post('login')
  async login(
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    if (!email || !password) {
      throw new BadRequestException('Email and password are required');
    }
    console.log("działa")
    const { token, userId } = await this.authService.validateUser(email, password);
    console.log("token: ", token)
    return { message: 'Login successful', token, userId };
  }
}
