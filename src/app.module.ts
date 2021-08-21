import { Logger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigurationModule } from './configuration/configuration.module';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './modules/user/user.module';
import { ArticleModule } from './modules/article/article.module';

@Module({
  imports: [ConfigurationModule, DatabaseModule, UserModule, ArticleModule],
  controllers: [AppController],
  providers: [AppService, Logger],
})
export class AppModule {}
