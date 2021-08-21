import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../user/entities/user.entity';

/**
 * 게시물 Entity
 */
@Entity()
export class Article {
  /**
   * 게시물 유일 식별자
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * 게시물 제목
   */
  @Column()
  title: string;

  /**
   * 게시물 내용
   */
  @Column()
  content: string;

  /**
   * 사용자
   */
  @ManyToOne(() => User, (user) => user.articles)
  user: User;
}
