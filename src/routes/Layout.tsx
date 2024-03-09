import Sidebar from '@/components/Sidebar/Sidebar';
import Content from '@/components/Content/Content';

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
