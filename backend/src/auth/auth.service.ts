import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service'; 

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<{ token: string, userId: number }> {
    const user = await this.userService.findByEmailAndPassword(email, password);

    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const payload = { email: user.email, sub: user.id };
    const token = this.jwtService.sign(payload);

    return { token, userId: user.id };
  }
}
