import { IChannelWithPostsData } from '@/app/types';
import Post from '@/components/Post/Post';

interface Props {
  data: IChannelWithPostsData[] | undefined;
}

export default function PostList({ data }: Props) {
  if (!data || !data.length) return null;

  return (
    <div>
      {data.map((channel) => (
        <div
          key={channel.id}
          css={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
        >
          {channel.posts.length &&
            channel.posts.map((post) => (
              <Post
                key={post.id}
                post={post}
                author={channel.title}
                authorLink={channel.link}
              />
            ))}
        </div>
      ))}
    </div>
  );
}
