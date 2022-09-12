import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { ValidationPipe } from '../pipes/validation.pipe';

@ApiTags('Authorization')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UsePipes(ValidationPipe)
  @Post('/register')
  register(@Body() userDto: CreateUserDto) {
    return this.authService.register(userDto);
  }

  @Post('/login')
  login(@Body() userDto: CreateUserDto) {
    return this.authService.login(userDto);
  }
}
