import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport'
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule, JwtService } from '@nestjs/jwt'
import { JwtStrategy } from './jwt.strategy'
import { RefreshTokenStrategy } from './refresh-token.strategy';

@Module({
    imports: [
        JwtModule.register({})
    ],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy, RefreshTokenStrategy, JwtService],
})
export class AuthModule { }
