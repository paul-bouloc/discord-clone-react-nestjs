import { Body, Controller, Post } from '@nestjs/common'
import { ZodValidate } from 'src/core/validation'
import { RegisterDto } from 'src/modules/auth/application/dtos/register.dto'
import { RegisterUc } from 'src/modules/auth/application/use-cases/register.uc'

@Controller('auth')
export class AuthController {
  constructor(private readonly registerUc: RegisterUc) {}

  @Post('register')
  @ZodValidate(RegisterDto)
  register(@Body() body: RegisterDto) {
    return this.registerUc.execute(body)
  }
}
