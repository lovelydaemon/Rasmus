import { colors } from '@/styles/colors';
import { css } from '@emotion/react';
import Toolbar from './Toolbar';
import { useState } from 'react';

const cardCss = {
  wrapper: css({
    display: 'flex',
    gap: '16px',
    backgroundColor: colors.darkGray,
    borderRadius: '4px',
    padding: '16px',
  }),
  image: css({
    width: '130px',
    height: '78px',
    backgroundColor: colors.gray,
    borderRadius: '4px',
  }),
  content: {
    wrapper: css({
      fontSize: '13px',
      lineHeight: '18px',
      wordBreak: 'break-word',
      color: colors.lightGray,
    }),
    titleLink: css({
      fontSize: '16px',
      fontWeight: '700',
      ':link, :visited': {
        color: colors.white,
      },
    }),
    authorLink: css({
      ':link, :visited': {
        color: colors.lightGray,
      },
      ':hover,:active': {
        color: colors.white,
        textDecoration: 'underline',
      },
    }),
    description: css({
      display: '-webkit-box',
      WebkitLineClamp: '3',
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
      marginTop: '8px',
    }),
  },
};

interface Item {
  title: string;
  pubDate: string;
  link: string;
  isoDate: string;
  guid: string;
  content: string;
  contentSnippet: string;
}

interface Props {
  author: string;
  authorLink: string;
  item: Item;
}
export default function Card({ item, author, authorLink }: Props) {
  const [showToolbar, setShowToolbar] = useState(false);
  return (
    <article
      onMouseEnter={() => setShowToolbar(true)}
      onMouseLeave={() => setShowToolbar(false)}
      css={cardCss.wrapper}
    >
      <div css={cardCss.content.wrapper}>
        <div
          css={{
            display: 'inline-block',
            width: '70%',
          }}
        >
          <a
            css={cardCss.content.titleLink}
            href={item.link}
            target='_blank'
            rel='noopener noreferrer'
          >
            {item.title}
          </a>
        </div>

        {showToolbar && <Toolbar />}

        <div css={{ marginTop: '8px' }}>
          <a
            css={cardCss.content.authorLink}
            href={authorLink}
            target='_blank'
            rel='noopener noreferrer'
          >
            {author}
          </a>{' '}
          / <span>{item.pubDate}</span>
        </div>

        <div css={cardCss.content.description}>{item.content}</div>
      </div>
    </article>
  );
}
