import { IPostWithChannelData } from '@/app/types';
import Post from '@/components/Post/Post';

interface Props {
  data: IPostWithChannelData[] | null;
}

export default function PostList({ data }: Props) {
  if (!data || !data.length) return null;

  return (
    <div css={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {data.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
