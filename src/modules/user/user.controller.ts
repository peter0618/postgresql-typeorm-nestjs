import { Body, Logger } from '@nestjs/common';
import { Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create.user.dto';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  private readonly logger: Logger = new Logger(this.constructor.name);

  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(): Promise<User[]> {
    this.logger.debug(`findAll()`);
    return this.userService.findAll();
  }

  @Post()
  async create(@Body() dto: CreateUserDto): Promise<User> {
    this.logger.debug(`create(dto: ${JSON.stringify(dto)})`);
    return this.userService.create(dto);
  }
}
