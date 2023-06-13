import mongoose from 'mongoose';

const connect = async () => {
  try {
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGO);
  } catch (err) {
    throw new Error('connection failed');
  }
};
export default connect;
