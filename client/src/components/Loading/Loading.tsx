import { colors } from '@/styles/colors';
import Spinner from '../Spinner/Spinner';

interface Props {
  children?: React.ReactNode;
}
export default function Loading({ children }: Props) {
  return (
    <div>
      <Spinner size={18} strokeWidth={2} color={colors.brand} />
      <span css={{ marginLeft: '12px', color: colors.lightGray }}>
        {children}
      </span>
    </div>
  );
}
