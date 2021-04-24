import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { Categories } from './categories.model';

class CreateCategoriesDto {
  @ApiProperty({ description: '分类标题', example: '随笔' })
  title: string;
  @ApiProperty({ description: '创建时间', example: '2021年4月24日16:35:59' })
  createDate: string;
  @ApiProperty({ description: '更新时间', example: '2021年4月24日16:36:07' })
  updateDate: string;
}

@Controller('categories')
@ApiTags('分类')
export class CategoriesController {
  constructor(@InjectModel(Categories) private readonly categoriesModel: ModelType<CreateCategoriesDto>) { }
  @Get()
  @ApiOperation({ summary: '显示分类列表' })
  async index() {
    return await this.categoriesModel.find();
  }

  @Post()
  @ApiOperation({ summary: '创建分类' })
  async create(@Body() createPostDto: CreateCategoriesDto) {
    await this.categoriesModel.create(createPostDto);
    return {
      body: createPostDto,
      succes: true,
    };
  }

  @Get(':id')
  @ApiOperation({ summary: '分类帖子查询' })
  async detail(@Param('id') id: string) {
    return await this.categoriesModel.findById(id);
  }

  @Put(':id')
  @ApiOperation({ summary: '编辑分类' })
  async update(@Param('id') id: string, @Body() updatePostDto: CreateCategoriesDto) {
    return await this.categoriesModel.findByIdAndUpdate(id, updatePostDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除分类' })
  async remove(@Param('id') id: string) {
    return await this.categoriesModel.findByIdAndDelete(id);
  }
}
