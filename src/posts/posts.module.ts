import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { Posts } from './post.model';
import { PostsController } from './posts.controller';

@Module({
  imports: [
    TypegooseModule.forFeature([Posts])
  ],
  controllers: [PostsController]
})
export class PostsModule { }
