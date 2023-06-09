import { Document, Schema, model, models } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
}
const UserSchema: Schema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);
const User = models.user || model<IUser>('user', UserSchema);
export default User;
