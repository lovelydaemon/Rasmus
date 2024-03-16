import {
  Bookmark as BookmarkIcon,
  Star as StarIcon,
  Check as CheckIcon,
  X as CloseIcon,
} from 'react-feather';

import classes from './Toolbar.module.scss';

const size = 20;
export default function Toolbar() {
  return (
    <div className={classes['toolbar']}>
      <button
        aria-label='Read later'
        className={classes['toolbar__button']}
        title='Read later'
        type='button'
      >
        <BookmarkIcon size={size} />
      </button>
      <button
        aria-label='Save to board'
        className={classes['toolbar__button']}
        title='Save to board'
        type='button'
      >
        <StarIcon size={size} />
      </button>
      <button
        aria-label='Mark as unread'
        className={classes['toolbar__button']}
        title='Mark as unread'
        type='button'
      >
        <CheckIcon size={size} />
      </button>
      <button
        aria-label='Mark as read and hide'
        className={classes['toolbar__button']}
        title='Mark as read and hide'
        type='button'
      >
        <CloseIcon size={size} />
      </button>
    </div>
  );
}
