import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { TagsController } from './tags.controller';
import { Tags } from './tags.model';

@Module({
  imports: [
    TypegooseModule.forFeature([Tags])
  ],
  controllers: [TagsController]
})
export class TagsModule { }
