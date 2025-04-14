import { Controller, Post, Body, Param } from '@nestjs/common';
import { Get, UseGuards, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from './user.service';
import { RolesGuard } from 'src/common/roles.guard';
import { Roles } from 'src/common/roles.decorator';
import { UserRole } from './entities/user.entity';

@Controller('users')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class UsersController {
  constructor(private userService: UsersService) {}

  @Roles(UserRole.ADMIN)
  @Get('')
  getAllUser() {
    return this.userService.findAll();
  }

  @Roles(UserRole.ADMIN)
  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.userService.findById(id);
  }
}
