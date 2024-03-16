import { Link } from 'react-router-dom';

import classes from './NotFound.module.scss';

export default function NotFound() {
  return (
    <div className={classes['container']}>
      <h2 className={classes['h2']}>Page not found</h2>
      <p className={classes['error']}>
        The page may have been moved or deleted
      </p>
      <div className={classes['button']}>
        <Link className={classes['button__link']} to='/my'>
          back to home
        </Link>
      </div>
    </div>
  );
}
