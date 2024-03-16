import { cssVar } from '@/utils/cssvar';

import classes from './Spinner.module.scss';

interface Props {
  color?: string;
  size?: number;
  strokeWidth?: number;
}

export default function Spinner({
  size = 24,
  strokeWidth = 3,
  color = '#F96933',
}: Props) {
  return (
    <span
      className={classes['spinner']}
      style={cssVar({
        '--spinner-size': size + 'px',
        '--spinner-border-width': strokeWidth + 'px',
        '--spinner-border-color': color,
      })}
    />
  );
}
