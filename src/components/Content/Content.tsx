import { Outlet } from 'react-router-dom';
import { mq } from '@/styles/media-queries';

interface Props {
  children?: React.ReactNode;
}

export default function Content({ children }: Props) {
  return (
    <main css={{ marginLeft: '64px' }}>
      <div
        css={{
          [mq.sm]: {
            maxWidth: '576px',
          },
          [mq.md]: {
            maxwidth: '720px',
          },
          [mq.lg]: {
            maxwidth: '900px',
          },
          [mq.xl]: {
            maxwidth: '900px',
          },
          margin: '0 auto',
        }}
      >
        {children}
        <Outlet />
      </div>
    </main>
  );
}
