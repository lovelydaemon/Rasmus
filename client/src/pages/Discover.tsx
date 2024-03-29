import { useState } from 'react';

import { ISearchData } from '@/app/types';
import Channel from '@/components/Channel/Channel';
import Search from '@/components/Search/Search';

export default function Discover() {
  const [data, setData] = useState<ISearchData | null>(null);
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
        setData(resData);
      });
  }

  function handleToggleFollow(channelId: string) {
    window
      .fetch(`http://localhost:3001/api/channels/${channelId}/follow`, {
        method: 'PATCH',
      })
      .then((res) => res.json())
      .then((data) => setData({ channel: data }))
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <h1>Follow your favorite websites</h1>
      <Search onSubmit={handleSubmit} />
      <br />
      {data && (
        <Channel channel={data.channel} onToggleFollow={handleToggleFollow} />
      )}
    </div>
  );
}
