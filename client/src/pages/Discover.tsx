import Card from '@/components/Card/Card';
import Channel from '@/components/Channel/Channel';
import Search from '@/components/Search/Search';
import { useState } from 'react';

interface SearchData {
  channel: ChannelData;
  posts: Post[];
}

export interface ChannelData {
  id: string;
  title: string;
  link: string;
  shortLink: string;
  createdAt: string;
  updatedAt: string;
}

export interface Post {
  id: string;
  title: string;
  description: string;
  link: string;
  date: string;
  createdAt: string;
  updatedAt: string;
  channelId: string;
}

export default function Discover() {
  const [data, setData] = useState<SearchData | null>(null);
  function handleSubmit(data: { url: string }) {
    window
      .fetch('http://localhost:3001/api/', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => res.json())
      .then((resData) => {
        console.log(resData);
        setData(resData);
      });
  }

  return (
    <div>
      <h1>Follow your favorite websites</h1>
      <Search onSubmit={handleSubmit} />
      <br />
      <br />
      {data && <Channel channel={data.channel} />}
      <br />
      <br />
      {data && data.posts.length ? (
        <div>
          {data.posts.map((post) => (
            <Card
              key={post.id}
              post={post}
              author={data.channel.title}
              authorLink={data.channel.link}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
