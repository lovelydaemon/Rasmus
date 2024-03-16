import { IChannelWithPostsData } from '@/app/types';
import Post from '@/components/Post/Post';

import classes from './PostList.module.scss';

interface Props {
  data: IChannelWithPostsData[] | undefined;
}

export default function PostList({ data }: Props) {
  if (!data || !data.length) return null;

  return (
    <div>
      {data.map((channel) => (
        <div key={channel.id} className={classes['list']}>
          {!!channel.posts.length &&
            channel.posts.map((post) => (
              <Post
                key={post.id}
                author={channel.title}
                authorLink={channel.link}
                post={post}
              />
            ))}
        </div>
      ))}
    </div>
  );
}
