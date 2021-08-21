import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Article } from '../../article/entities/article.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn({
    type: 'int',
    unsigned: true,
    comment: 'user ID',
  })
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(() => Article, (article) => article.user)
  articles: Article[];
}
