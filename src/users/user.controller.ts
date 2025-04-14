// auth.controller.ts
import { Controller, Post, Body, Param } from '@nestjs/common';
import { Get, UseGuards, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from './user.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get('')
  getAllUser() {
    return this.userService.findAll();
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.userService.findById(id);
  }
}
