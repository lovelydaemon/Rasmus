import { IPostWithChannelData } from '@/app/types';
import Post from '@/components/Post/Post';
import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState<IPostWithChannelData[] | null>(null);

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
      {data?.length ? (
        <div>
          {data.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      ) : null}
    </div>
  );
}
