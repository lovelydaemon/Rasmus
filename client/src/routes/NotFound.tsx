import { colors } from '@/styles/colors';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

const notFoundCss = {
  wrapper: css({
    marginTop: '12rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '400px',
    textAlign: 'center',
  }),
  h2: css({
    fontSize: '20px',
  }),
  description: css({
    color: colors.lightGray,
    marginTop: '24px',
  }),
  button: {
    wrapper: css({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }),
    link: css({
      padding: '12px 18px',
      backgroundColor: colors.brand,
      borderRadius: '4px',
      fontSize: '12px',
      fontWeight: '700',
      color: colors.white,
      textTransform: 'uppercase',
      transition: 'opacity 0.3s ease-out',
      ':hover': {
        opacity: '0.8',
      },
    }),
  },
};

export default function NotFound() {
  return (
    <div css={notFoundCss.wrapper}>
      <h2 css={notFoundCss.h2}>Page not found</h2>
      <p css={notFoundCss.description}>
        The page may have been moved or deleted
      </p>
      <div css={notFoundCss.button.wrapper}>
        <Link css={notFoundCss.button.link} to='/my'>
          back to home
        </Link>
      </div>
    </div>
  );
}
