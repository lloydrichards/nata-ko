import { useEffect, useState } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

const useResizeObserver = (ref) => {
  const [dimensions, setDimentions] = useState();
  useEffect(() => {
    const observeTarget = ref.current;
    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => setDimentions(entry.contentRect));
    });
    if (observeTarget != null) {
      resizeObserver.observe(observeTarget);
    } else {
    }
    return () => {
      resizeObserver.disconnect();
    };
  }, [ref]);
  return dimensions;
};

export default useResizeObserver;
