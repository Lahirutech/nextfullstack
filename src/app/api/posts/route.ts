import connect from '@/utils/db';
import Post from '@/model/Post';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest) => {
  try {
    await connect();
    const posts: any = await Post.find();
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    return new NextResponse('Database Error', { status: 500 });
  }
};

export const POST = async (request: NextRequest) => {
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
