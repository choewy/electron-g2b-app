import { useEffect } from 'react';

import { sizeStore } from './size.store';

export class SizeHook {
  useObserver() {
    const setSize = sizeStore.useSetState();

    useEffect(() => {
      const handler = () => {
        setSize({ width: window.innerWidth, height: window.innerHeight });
      };

      window.addEventListener('resize', handler);

      return () => {
        window.removeEventListener('resize', handler);
      };
    }, [setSize]);
  }
}

export const sizeHook = new SizeHook();
