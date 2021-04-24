import { prop } from '@typegoose/typegoose';

export class Tags {
  @prop()
  title: string;
  @prop()
  createDate: string;
  @prop()
  updateDate: string;
}
