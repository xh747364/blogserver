import { prop } from '@typegoose/typegoose';

export class Categories {
  @prop()
  title: string;
  @prop()
  createDate: string;
  @prop()
  updateDate: string;
}
