import { Transform } from 'class-transformer';
import { IsNumber } from 'class-validator';

export class CreateArticleDto {
  /**
   * 게시물 제목
   */
  title: string;

  /**
   * 게시물 내용
   */
  content: string;

  /**
   * 게시자 id (사용자)
   */
  userId: number;
}

export class UpdateArticleDto {}

export class FindAllArticleDto {
  @IsNumber()
  @Transform((transformParam) => {
    return parseInt(transformParam.value);
  })
  userId: number;
}
