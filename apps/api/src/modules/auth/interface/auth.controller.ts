import { Body, Controller, Post } from '@nestjs/common'
import { ZodValidate } from 'src/core/validation'
import { RegisterDto } from 'src/modules/auth/application/dtos/register.dto'

@Controller('auth')
export class AuthController {
  @Post('register')
  @ZodValidate(RegisterDto)
  register(@Body() body: RegisterDto) {
    return body
  }
}
