import { IChannelWithPostsData } from '@/app/types';
import PostList from '@/components/PostList/PostList';
import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState<IChannelWithPostsData[] | null>(null);

  useEffect(() => {
    window
      .fetch('http://localhost:3001/api/posts')
      .then((res) => res.json())
      .then((d) => setData(d))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>All Personal Feeds</h1>
      <br />
      <PostList data={data} />
    </div>
  );
}
