import connect from '@/utils/db';
import { NextApiRequest } from 'next';
import bcrypt from 'bcryptjs';
import User from '@/model/User';
import { NextResponse } from 'next/server';

export const POST = async (request: Request) => {
  const { name, email, password } = await request.json();
  await connect();
  const hashedPassword = await bcrypt.hash(password, 5);
  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });
  const user = await User.find({ email });

  if (user.length > 0) {
    console.log('user already exist');
    return new NextResponse(
      JSON.stringify({ message: 'User already exists' }),
      {
        status: 403,
      }
    );
  } else {
    try {
      await newUser.save();
      return new NextResponse('User has been created', {
        status: 201,
      });
    } catch (err: any) {
      return new NextResponse(err, {
        status: 500,
      });
    }
  }
};
