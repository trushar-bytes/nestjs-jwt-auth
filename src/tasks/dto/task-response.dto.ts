import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsString, MaxLength, MinLength } from "class-validator"

export class TaskResponseDto {
    @IsEmail()
    @ApiProperty({ example: 'test@test.com' })
    title: string
}
