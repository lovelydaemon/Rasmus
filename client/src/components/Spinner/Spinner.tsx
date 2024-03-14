import { rotate } from '@/styles/animations';

interface Props {
  size?: number;
  strokeWidth?: number;
  color?: string;
}

export default function Spinner({
  size = 24,
  strokeWidth = 3,
  color = '#FFFFFF',
}: Props) {
  return (
    <span
      css={{
        width: size + 'px',
        height: size + 'px',
        border: `${strokeWidth}px solid ${color}`,
        borderBottomColor: 'transparent',
        borderRadius: '50%',
        display: 'inline-block',
        animation: `${rotate} 1s linear infinite`,
      }}
    />
  );
}
