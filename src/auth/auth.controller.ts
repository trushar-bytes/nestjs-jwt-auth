import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginRequestDto } from './dto/login-request.dto';
import { LoginResponseDto } from './dto/login-response.dto';
import { RefreshTokenGuard } from './guards/refresh-token.guard';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }
    /**
     * 
     * @param {LoginRequestDto} body 
     * @returns LoginResponseDto
     */
    @Post('login')
    async create(@Body() body: LoginRequestDto): Promise<LoginResponseDto> {
        return this.authService.login(body);
    }

    /**
     * 
     * @param req 
     * @returns LoginResponseDto
     */
    @Get('refresh')
    @UseGuards(RefreshTokenGuard)
    async refresh(@Req() req: any): Promise<LoginResponseDto> {
        return this.authService.refreshToken(req.user.email, req.user.type);
    }
}
