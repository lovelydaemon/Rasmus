import Loading from '@/components/Loading/Loading';
import PostList from '@/components/PostList/PostList';
import { useGetPostsQuery } from '@/services/post';

export default function Home() {
  const { data, isLoading } = useGetPostsQuery();

  return (
    <div>
      <h1>All Personal Feeds</h1>
      {isLoading && <Loading>Loading feeds...</Loading>}
      <PostList data={data} />
    </div>
  );
}
