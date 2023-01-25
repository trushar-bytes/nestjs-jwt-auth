import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsString, MaxLength, MinLength } from "class-validator"

export class LoginRequestDto {
    @IsEmail()
    @ApiProperty({ example: 'test@test.com' })
    email: string

    @IsString()
    @MinLength(6)
    @MaxLength(32)
    @ApiProperty({ example: 'Test@123' })
    password: string
}
