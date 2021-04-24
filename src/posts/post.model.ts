import { prop } from '@typegoose/typegoose';

export class Posts {
  @prop()
  title: string;
  @prop()
  content: string;
  @prop()
  categories: string;
  @prop()
  tags: string;
  @prop()
  createDate: string;
  @prop()
  updateDate: string;
}
