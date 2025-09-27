import { Body, Controller, Post, Res } from '@nestjs/common'
import { Response } from 'express'
import { ZodValidate } from 'src/core/validation'
import { LoginDto } from 'src/modules/auth/application/dtos/login.dto'
import { RegisterDto } from 'src/modules/auth/application/dtos/register.dto'
import { LoginUc } from 'src/modules/auth/application/use-cases/login.uc'
import { RegisterUc } from 'src/modules/auth/application/use-cases/register.uc'

@Controller('auth')
export class AuthController {
  constructor(
    private readonly registerUc: RegisterUc,
    private readonly loginUc: LoginUc,
  ) {}

  @Post('register')
  @ZodValidate(RegisterDto)
  register(@Body() body: RegisterDto) {
    return this.registerUc.execute(body)
  }

  @Post('login')
  @ZodValidate(LoginDto)
  login(@Body() body: LoginDto, @Res({ passthrough: true }) res: Response) {
    return this.loginUc.execute(body, res)
  }
}
