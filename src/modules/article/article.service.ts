import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from './entities/article.entity';
import { CreateArticleDto, FindAllArticleDto, UpdateArticleDto } from './dto/article.request.dto';

@Injectable()
export class ArticleService {
  constructor(@InjectRepository(Article) private articleRepository: Repository<Article>) {}

  /**
   * 게시물을 생성합니다.
   * @param dto
   */
  create(dto: CreateArticleDto) {
    const { title, content, userId } = dto;
    const user = { id: userId };
    const article = { title, content, user };
    return this.articleRepository.save(article);
  }

  /**
   * 쿼리 조건을 만족하는 게시물을 조회합니다.
   * @param queryParam
   */
  async findAll(queryParam: FindAllArticleDto) {
    const { userId } = queryParam;
    return await this.articleRepository
      .createQueryBuilder('article')
      .leftJoinAndSelect('article.user', 'user')
      .select(['user.firstName', 'article'])
      .where(`user.id = ${userId}`)
      .getMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} article`;
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return `This action updates a #${id} article`;
  }

  remove(id: number) {
    return `This action removes a #${id} article`;
  }
}
