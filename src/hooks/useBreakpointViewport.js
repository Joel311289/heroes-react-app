/* eslint-disable no-undef */
import { useEffect, useState } from 'react';

const getDeviceConfig = (width) => {
  if (width < 576) {
    return 'xs';
  } else if (width < 768) {
    return 'sm';
  } else if (width < 992) {
    return 'md';
  } else if (width < 1200) {
    return 'lg';
  } else if (width < 1600) {
    return 'xl';
  } else {
    return 'xxl';
  }
};

export const useBreakpointViewport = () => {
  const [brkPnt, setBrkPnt] = useState(() => getDeviceConfig(window.innerWidth));

  useEffect(() => {
    const calcInnerWidth = _.throttle(() => {
      setBrkPnt(getDeviceConfig(window.innerWidth));
    }, 200);

    window.addEventListener('resize', calcInnerWidth);
    return () => window.removeEventListener('resize', calcInnerWidth);
  }, []);

  return brkPnt;
};
