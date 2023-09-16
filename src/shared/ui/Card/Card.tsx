import { HTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Card.module.scss';

export type CardVariant = 'main' | 'black' | 'greyOne' | 'greyTwo' | 'green' | 'outline';
export type CardPadding = '0' | '8' | '16' | '24' | '32' | '54';
export type CardBorder = 'round' | 'normal' | 'partial';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    header?: ReactNode;
    variant?: CardVariant;
    max?: boolean;
    padding?: CardPadding;
    border?: CardBorder;
    width?: string;
    height?: string;
    jump?: boolean;
    fullHeight?: boolean;
}

const mapPaddingToClass: Record<CardPadding, string> = {
    '0': 'gap_0',
    '8': 'gap_8',
    '16': 'gap_16',
    '24': 'gap_24',
    '32': 'gap_32',
    '54': 'gap_54',
};

export const Card = memo((props: CardProps) => {
    const {
        className,
        children,
        jump,
        width,
        height,
        variant = 'main',
        max,
        padding = '8',
        border = 'normal',
        fullHeight,
        header,
        ...otherProps
    } = props;

    const paddingClass = mapPaddingToClass[padding];

    return (
        <div
            style={{ width, height }}
            className={classNames(
                cls.Card,
                {
                    [cls.max]: max,
                    [cls.jump]: jump,
                    [cls.fullHeight]: fullHeight,
                    [cls.header]: !!header,
                },
                [className, cls[variant], cls[paddingClass], cls[border]],
            )}
            {...otherProps}
        >
            {header && (
                <div className={cls.headerContent}>
                    {header}
                </div>
            )}
            {children}
        </div>
    );
});
