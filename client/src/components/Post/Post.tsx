import { colors } from '@/styles/colors';
import { css } from '@emotion/react';
import Toolbar from './Toolbar';
import { useState } from 'react';
import { IPostWithChannelData } from '@/app/types';

const cardCss = {
  wrapper: css({
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

interface Props {
  post: IPostWithChannelData;
}

export default function Post({ post }: Props) {
  const [showToolbar, setShowToolbar] = useState(false);

  const { title, description, link, date, Channel } = post;
  const { link: authorLink, title: author } = Channel;
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
            href={link}
            target='_blank'
            rel='noopener noreferrer'
          >
            {title}
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
          / <span>{date}</span>
        </div>

        <div css={cardCss.content.description}>{description}</div>
      </div>
    </article>
  );
}
