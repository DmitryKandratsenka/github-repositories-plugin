import { useEffect, useMemo, useState } from 'react';

export default function useDebounce<T>(value: T, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
      setTimer(null);
    }, delay);

    setTimer(handler);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return useMemo(() => ({ debouncedValue, timer }), [debouncedValue, timer]);
}
