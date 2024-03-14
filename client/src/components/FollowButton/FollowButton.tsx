import { colors } from '@/styles/colors';
import { css } from '@emotion/react';
import { useState } from 'react';

interface Props {
  following: boolean;
  onToggleFollow: () => void;
}

const followButtonCss = {
  button: css({
    width: '90px',
    border: `1px solid ${colors.brand}`,
    borderRadius: `4px`,
    backgroundColor: 'transparent',
    color: colors.brand,
    cursor: 'pointer',
    textTransform: 'uppercase',
    padding: '4px 6px',
    fontSize: '11px',
    fontWeight: '700',
    transition: 'opacity 0.3s ease-out',
    ':hover': {
      opacity: '0.8',
    },
  }),
};
export default function FollowButton({ following, onToggleFollow }: Props) {
  const [mouseOver, setMouseOver] = useState(false);
  return (
    <button
      css={followButtonCss.button}
      style={
        following
          ? { borderColor: colors.lightGray, color: colors.lightGray }
          : undefined
      }
      type='button'
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
      onClick={onToggleFollow}
    >
      {!following ? 'follow' : mouseOver ? 'unfollow' : 'following'}
    </button>
  );
}
