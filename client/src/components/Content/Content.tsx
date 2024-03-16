import { Outlet } from 'react-router-dom';

import classes from './Content.module.scss';

interface Props {
  children?: React.ReactNode;
}

export default function Content({ children }: Props) {
  return (
    <main className={classes['main']}>
      <div className={classes['main__content']}>
        {children}
        <Outlet />
      </div>
    </main>
  );
}
