import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { CategoriesController } from './categories.controller';
import { Categories } from './categories.model';

@Module({
  imports: [
    TypegooseModule.forFeature([Categories])
  ],
  controllers: [CategoriesController]
})
export class CategoriesModule { }
