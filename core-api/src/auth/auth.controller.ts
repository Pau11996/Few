import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { ValidationPipe } from '../pipes/validation.pipe';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('Authorization')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UsePipes(ValidationPipe)
  @Post('/register')
  @UseInterceptors(FileInterceptor('avatar'))
  register(@Body() userDto: CreateUserDto, @UploadedFile() avatar) {
    return this.authService.register(userDto, avatar);
  }

  @Post('/login')
  login(@Body() userDto: CreateUserDto) {
    return this.authService.login(userDto);
  }
}
