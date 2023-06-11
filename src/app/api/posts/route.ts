import { NextApiRequest } from 'next';
import connect from '@/utils/db';
import Post from '@/model/Post';
import { NextResponse } from 'next/server';

export const GET = async (request: NextApiRequest) => {
  try {
    await connect();
    const posts: any = await Post.find();
    return new NextResponse(posts, { status: 200 });
  } catch (err) {
    return new NextResponse('Database Error', { status: 500 });
  }
};
