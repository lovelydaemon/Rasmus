import { clsx } from 'clsx';
import { useState } from 'react';

import classes from './FollowButton.module.scss';

interface Props {
  isFollowing: boolean;
  onToggleFollow: () => void;
}

export default function FollowButton({ isFollowing, onToggleFollow }: Props) {
  const [mouseOver, setMouseOver] = useState(false);
  return (
    <button
      className={clsx(
        classes['follow-button'],
        isFollowing && classes['follow-button_followed'],
      )}
      type='button'
      onClick={onToggleFollow}
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
    >
      {!isFollowing ? 'follow' : mouseOver ? 'unfollow' : 'following'}
    </button>
  );
}
