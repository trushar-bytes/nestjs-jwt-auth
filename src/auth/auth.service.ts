import { HttpException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginRequestDto } from './dto/login-request.dto';
import { LoginResponseDto } from './dto/login-response.dto';

export interface JwtPayload {
    email: string,
    type: string
}

@Injectable()
export class AuthService {

    constructor(
        private jwtService: JwtService
    ) { }

    /**
     * 
     * @param {LoginRequestDto} body 
     * @returns LoginResponseDto
     */
    async login(body: LoginRequestDto): Promise<LoginResponseDto> {

        // NOTE: right now we have generate token based on requested email id and didnt store in database 
        //but if are working on application we need to store access token and refresh token to user table 

        const payload: JwtPayload = { email: body.email, type: 'access_token' }
        const accessToken: string = await this.jwtService.sign(payload, {
            secret: process.env.JWT_SECRET,
            expiresIn: '1m'// change based on requirement
        })
        payload.type = 'refresh_token'
        const refreshToken: string = await this.jwtService.sign(payload, {
            secret: process.env.JWT_SECRET,
            expiresIn: '2m'// change based on requirement
        })
        return {
            accessToken,
            refreshToken
        }
    }
    /**
     * 
     * @param {string} email 
     * @returns LoginResponseDto
     */
    async refreshToken(email: string, type: string): Promise<LoginResponseDto> {
        // for refresh token we need it from database and check its exist or not and after generate new refresh token we need to update that in user table
        if (type === 'access_token') {
            throw new UnauthorizedException()
        }
        const payload: JwtPayload = { email: email, type: 'access_token' }
        const accessToken: string = await this.jwtService.sign(payload, {
            secret: process.env.JWT_SECRET,
            expiresIn: '1m'// change based on requirement
        })
        payload.type = 'refresh_token'
        const refreshToken: string = await this.jwtService.sign(payload, {
            secret: process.env.JWT_SECRET,
            expiresIn: '2m'// change based on requirement
        })
        return {
            accessToken,
            refreshToken
        }
    }

}
