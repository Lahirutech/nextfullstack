import { NextApiRequest } from 'next';
import connect from '@/utils/db';
import Post from '@/model/Post';
import { NextResponse } from 'next/server';

export const GET = async (request: NextApiRequest) => {
  try {
    await connect();
    const posts: any = await Post.find();
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    return new NextResponse('Database Error', { status: 500 });
  }
};

export const POST = async (request: Request) => {
  const body = await request.json();
  const newPost = new Post(body);
  try {
    await connect();
    await newPost.save();
    return new NextResponse('Post has been created', { status: 201 });
  } catch (err) {
    return new NextResponse('Database Error', { status: 500 });
  }
};
