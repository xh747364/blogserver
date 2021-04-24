import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { Posts } from './post.model';
import { IsNotEmpty } from "class-validator";
class CreatePostDto {
  @ApiProperty({ description: '帖子标题', example: '帖子标题示例' })
  @IsNotEmpty({ message: "请输入标题" })
  title: string;
  @ApiProperty({ description: '帖子内容', example: '帖子内容示例' })
  @IsNotEmpty({ message: "请输入内容" })
  content: string;
  @ApiProperty({ description: '帖子分类', example: '帖子分类示例' })
  categories: string;
  @ApiProperty({ description: '帖子标签', example: '帖子标签示例' })
  tags: string;
  @ApiProperty({ description: '创建时间', example: '2021年4月24日14:59:18' })
  createDate: string;
  @ApiProperty({ description: '更新时间', example: '2021年4月24日16:29:49' })
  updateDate: string;
}

@Controller('posts')
@ApiTags('帖子')
export class PostsController {
  constructor(@InjectModel(Posts) private readonly postModel: ModelType<CreatePostDto>) { }
  @Get()
  @ApiOperation({ summary: '显示博客列表' })
  async index() {
    return await this.postModel.find();
  }

  @Post()
  @ApiOperation({ summary: '创建帖子' })
  async create(@Body() createPostDto: CreatePostDto) {
    await this.postModel.create(createPostDto);
    return {
      body: createPostDto,
      succes: true,
    };
  }

  @Get(':id')
  @ApiOperation({ summary: '博客详情' })
  async detail(@Param('id') id: string) {
    return await this.postModel.findById(id);
  }

  @Put(':id')
  @ApiOperation({ summary: '编辑帖子' })
  async update(@Param('id') id: string, @Body() updatePostDto: CreatePostDto) {
    return await this.postModel.findByIdAndUpdate(id, updatePostDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除帖子' })
  async remove(@Param('id') id: string) {
    return await this.postModel.findByIdAndDelete(id);
  }
}
