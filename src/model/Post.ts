import { Document, Schema, model, models } from 'mongoose';

export interface IPost extends Document {
  title: string;
  desc: string;
  img: string;
  content: string;
  username: string;
}

const PostSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    content: { type: String, required: true },
    username: { type: String, required: true },
  },
  { timestamps: true }
);

const Posts = models.post || model<IPost>('post', PostSchema);
export default Posts;
