import React from 'react';
import { Title } from './title';
import { cn } from '@/lib/utils'

interface Props {
    title?: string;
    endAdornment?: React.ReactNode;
    className?: string;
    contentClassName?: string;
}

export const FormaBlock: React.FC<React.PropsWithChildren<Props>> = ({
    title,
    endAdornment,
    className,
    contentClassName,
    children,
}) => {
return (
    <div className={cn('bg-[hsl(217.2 32.6% 17.5%)] rounded-3xl', className)}>
        {title && (
            <div className="flex items-center justify-center p-5 px-7 border-b border-gray-200">
                <Title text={title} size="lg" className="font-bold " />
                {endAdornment}
            </div>
        )}
<div className={cn('px-5 py-4 ', contentClassName)}>
    {children}
    </div>
    </div>
);
};