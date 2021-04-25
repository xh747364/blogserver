import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { CategoriesModule } from './categories/categories.module';
import { TagsModule } from './tags/tags.module';

@Module({
  imports: [
    TypegooseModule.forRoot("mongodb://localhost:27017/nest", {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true
    }),
    PostsModule,
    CategoriesModule,
    TagsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
