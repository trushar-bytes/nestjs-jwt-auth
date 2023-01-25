import { ApiProperty } from '@nestjs/swagger'
import { Expose } from 'class-transformer'

export class LoginResponseDto {
    @ApiProperty({ example: 'test' })
    accessToken: string

    @ApiProperty({ example: 'testrefresh' })
    refreshToken: string

}
