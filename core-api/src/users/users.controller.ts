import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './entities/user.entity';
import { Roles } from '../auth/roles-auth.decorator';
import { RolesGuard } from '../auth/roles.guard';

@ApiTags('Users')
@Controller('api')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOperation({ summary: 'User creation' })
  @ApiResponse({ status: 201, type: User })
  @Roles('admin')
  @UseGuards(RolesGuard)
  @Post('/users')
  create(@Body() userDto: CreateUserDto) {
    return this.usersService.createUser(userDto);
  }

  @ApiOperation({ summary: 'Get all user' })
  @ApiResponse({ status: 201, type: [User] })
  @Roles('admin')
  @UseGuards(RolesGuard)
  @Get('/users')
  getAll() {
    return this.usersService.getAllUsers();
  }

  @ApiOperation({ summary: 'Get one user' })
  @ApiResponse({ status: 201, type: [User] })
  @Roles('customer', 'admin')
  @UseGuards(RolesGuard)
  @Get('/users/:id')
  getOneUser(@Param('id') id: string) {
    return this.usersService.getOneUser(id);
  }

  @ApiOperation({ summary: 'Change User Info' })
  @ApiResponse({ status: 201, type: [User] })
  @Roles('admin', 'customer')
  @UseGuards(RolesGuard)
  @Put('/users/:id')
  updateUserInfo(@Body() userDto: CreateUserDto, @Param('id') id: string) {
    return this.usersService.updateUserInfo(userDto, id);
  }
}
