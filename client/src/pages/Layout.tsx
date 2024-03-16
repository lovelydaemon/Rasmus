import Content from '@/components/Content/Content';
import Sidebar from '@/components/Sidebar/Sidebar';

interface Props {
  children?: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Sidebar />
      <Content>{children}</Content>
    </>
  );
}
