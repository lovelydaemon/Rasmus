import { clsx } from 'clsx';

import Spinner from '../Spinner/Spinner';

import classes from './Loading.module.scss';

interface Props {
  children?: React.ReactNode;
}

export default function Loading({ children }: Props) {
  return (
    <div>
      <Spinner size={18} strokeWidth={2} />
      <span className={clsx(classes['text'], classes['loader__text'])}>
        {children}
      </span>
    </div>
  );
}
