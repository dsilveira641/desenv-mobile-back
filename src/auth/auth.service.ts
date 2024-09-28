import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/services/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(userEmail: string, pass: string): Promise<any> {
    const user = await this.usersService.findByEmail(userEmail);

    if (!user) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    // Código para comparar a senha com hash
    // const isPassWordValid = await bcrypt.compare(senha, user.senha);
    if (user?.senha !== pass) {
      throw new UnauthorizedException();
    }
    // O nome sub recebeu o id para ser consistente com o JWT
    const payload = { sub: user.id, username: user.email };
    // Gera o token JWT
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
