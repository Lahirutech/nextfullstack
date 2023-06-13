import mongoose from 'mongoose';

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
  } catch (err) {
    console.log('connection error');

    throw new Error('connection failed');
  }
};
export default connect;
