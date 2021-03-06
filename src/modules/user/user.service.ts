import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create.user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private usersRepository: Repository<User>) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  create(dto: CreateUserDto): Promise<User> {
    return this.usersRepository.save(dto);
  }

  async findArticlesByUserId(id: number) {
    return await this.usersRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.articles', 'articles')
      .select(['user.firstName', 'articles'])
      .where(`user.id = ${id}`)
      .getMany();
  }
}
