

import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  className?: string;
}

export const Container: React.FC<React.PropsWithChildren<Props>> = ({ className, children }) => {
  return <div className={cn('mx-auto xl:max-w-[1280px] lg:max-w-[1024px] sm:max-w-[100vh] md:max-w-[100vh]', className)}>{children}</div>;
};