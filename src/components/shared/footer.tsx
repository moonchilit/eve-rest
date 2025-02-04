import React from 'react';
import { cn } from '@/lib/utils'

interface Props {
    className?: string;

}

export const Footer: React.FC<Props> = ({ className }) => {
    return (
        <footer className =
        {cn(
          'w-full'
          
          ,className)}>
           <div className="flex items-center justify-center">
              <h2 className="pt-[2rem] pb-[2rem]"><a>Powered by moonchilit</a></h2>
           </div>

            
        </footer>
    );
};