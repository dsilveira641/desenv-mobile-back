import { Body, Controller, Get, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
@ApiTags("Autenticação")
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @HttpCode(HttpStatus.OK)
    @Post('login')
    @ApiOperation({ summary: "Login de usuário através do email e senha" })
    signIn(@Body() signInDto: Record<string, any>) {
        return this.authService.signIn(signInDto.email, signInDto.senha);
    }

    // @UseGuards(AuthGuard)
    // @Get('profile')
    // getProfile(req) {
    //     return req.user;
    // }
    
}

