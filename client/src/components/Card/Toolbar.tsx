import { colors } from '@/styles/colors';
import { css } from '@emotion/react';
import {
  Bookmark as BookmarkIcon,
  Star as StarIcon,
  Check as CheckIcon,
  X as CloseIcon,
} from 'react-feather';

const toolbarCss = {
  wrapper: css({
    display: 'flex',
    float: 'right',
  }),
  button: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    border: 'none',
    color: colors.lightGray,
    cursor: 'pointer',
    padding: '3px',
    transition: 'color 0.3s ease-out',
    ':hover': {
      color: colors.white,
    },
  }),
};

const size = 20;
export default function Toolbar() {
  return (
    <div css={toolbarCss.wrapper}>
      <button css={toolbarCss.button} type='button' aria-label='Read later'>
        <BookmarkIcon size={size} />
      </button>
      <button css={toolbarCss.button} type='button' aria-label='Save to board'>
        <StarIcon size={size} />
      </button>
      <button css={toolbarCss.button} type='button' aria-label='Mark as unread'>
        <CheckIcon size={size} />
      </button>
      <button
        css={toolbarCss.button}
        type='button'
        aria-label='Mark as read and hide'
      >
        <CloseIcon size={size} />
      </button>
    </div>
  );
}
