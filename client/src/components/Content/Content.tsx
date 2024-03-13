import { Outlet } from 'react-router-dom';
import { mq } from '@/styles/media-queries';
import { css } from '@emotion/react';

interface Props {
  children?: React.ReactNode;
}

const contentCss = {
  main: css({
    marginLeft: '64px',
  }),
  content: css({
    [mq.sm]: {
      maxWidth: '576px',
    },
    [mq.md]: {
      maxWidth: '720px',
    },
    [mq.lg]: {
      maxWidth: '900px',
    },
    [mq.xl]: {
      maxWidth: '900px',
    },
    padding: '0 24px',
    margin: '0 auto',
  }),
};

export default function Content({ children }: Props) {
  return (
    <main css={contentCss.main}>
      <div css={contentCss.content}>
        {children}
        <Outlet />
      </div>
    </main>
  );
}
