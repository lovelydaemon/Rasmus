import Card from '@/components/Card/Card';
import Channel from '@/components/Channel/Channel';
import Search from '@/components/Search/Search';
import { useState } from 'react';

interface ChannelData {
  description: string;
  generator: string;
  items: Item[];
  language: string;
  link: string;
  title: string;
  ttl: string;
}
interface Item {
  title: string;
  pubDate: string;
  link: string;
  isoDate: string;
  guid: string;
  content: string;
  contentSnippet: string;
}

export default function Discover() {
  const [data, setData] = useState<ChannelData | null>(null);
  function handleSubmit(data: { url: string }) {
    window
      .fetch('http://localhost:3001/', {
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
      {data && <Channel title={data?.title} link={data?.link} />}
      <br />
      <br />
      {data && data.items.length ? (
        <div>
          {data.items.map((item) => (
            <Card
              key={item.link}
              item={item}
              author={data.title}
              authorLink={data.link}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
