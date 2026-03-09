import { formatTedxText } from '../../utils/textFormatting';

interface WordmarkProps {
  event?: string;
  className?: string;
}

export default function Wordmark({ event = 'UoK', className = '' }: WordmarkProps) {
  return (
    <div className={`font-extrabold leading-none inline-flex items-baseline ${className}`}>
      {formatTedxText(event === 'UoK' ? "TEDx UoK" : `TEDx ${event}`, true)}
    </div>
  );
}
