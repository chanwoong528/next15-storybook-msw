'use client';

import { initMsw } from '@/mocks';
import { useEffect, useState } from 'react';


initMsw();


export const MswProvider = ({ children }: { children: React.ReactNode }) => {

  const [mswReady, setMswReady] = useState(false);
  useEffect(() => {
    const init = async () => {
      await initMsw();
      setMswReady(true);
    };

    if (!mswReady) {
      init();
    }

  }, [mswReady]);

  return <>{children}</>;
};