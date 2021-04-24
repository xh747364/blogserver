import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { Tags } from './tags.model';

class CreateTagsDto {
  @ApiProperty({ description: '标签标题', example: 'Vue' })
  title: string;
  @ApiProperty({ description: '创建时间', example: '2021年4月24日16:35:59' })
  createDate: string;
  @ApiProperty({ description: '更新时间', example: '2021年4月24日16:36:07' })
  updateDate: string;
}

@Controller('tags')
@ApiTags("标签")
export class TagsController {
  constructor(@InjectModel(Tags) private readonly tagsModel: ModelType<CreateTagsDto>) { }

  @Get()
  @ApiOperation({ summary: "标签列表" })
  async index() {
    return await this.tagsModel.find()
  }

  @Post()
  @ApiOperation({ summary: '创建分类' })
  async create(@Body() createPostDto: CreateTagsDto) {
    await this.tagsModel.create(createPostDto);
    return {
      body: createPostDto,
      succes: true,
    };
  }

  @Put(':id')
  @ApiOperation({ summary: '编辑分类' })
  async update(@Param('id') id: string, @Body() updatePostDto: CreateTagsDto) {
    return await this.tagsModel.findByIdAndUpdate(id, updatePostDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除分类' })
  async remove(@Param('id') id: string) {
    return await this.tagsModel.findByIdAndDelete(id);
  }
}
