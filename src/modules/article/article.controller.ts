import { Body, Controller, Delete, Get, Logger, Param, Patch, Post, Query } from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto, FindAllArticleDto, UpdateArticleDto } from './dto/article.request.dto';

@Controller('article')
export class ArticleController {
  private readonly logger: Logger = new Logger(this.constructor.name);
  constructor(private readonly articleService: ArticleService) {}

  /**
   * 게시물 생성
   * @param dto
   */
  @Post()
  create(@Body() dto: CreateArticleDto) {
    this.logger.debug(`create(dto : ${JSON.stringify(dto)})`);
    return this.articleService.create(dto);
  }

  /**
   * 쿼리조건을 만족하는 게시물을 조회합니다.
   * @param queryParam
   */
  @Get()
  findAll(@Query() queryParam: FindAllArticleDto) {
    this.logger.debug(`findAll(queryParam: ${JSON.stringify(queryParam)})`);
    return this.articleService.findAll(queryParam);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.articleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArticleDto: UpdateArticleDto) {
    return this.articleService.update(+id, updateArticleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.articleService.remove(+id);
  }
}
