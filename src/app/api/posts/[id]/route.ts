import { NextApiRequest } from 'next';
import connect from '@/utils/db';
import Post from '@/model/Post';
import { NextResponse } from 'next/server';
import { json } from 'stream/consumers';

export const GET = async (
  request: NextApiRequest,
  { params }: { params: { id: string } }
) => {
  try {
    await connect();
    const id = params.id;
    const post: any = await Post.findById(id);
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err) {
    return new NextResponse('Database Error', { status: 500 });
  }
};
