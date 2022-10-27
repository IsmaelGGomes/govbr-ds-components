/* eslint-disable react/button-has-type */
import type { FC, HTMLProps } from 'react';
import type { ThemeColorName } from '../../types/colors';
import { cn } from '../../utils/classname';

type Props = HTMLProps<HTMLButtonElement> & {
    variant: ThemeColorName;
    dark?: boolean;
    block?: boolean;
    size?: 'small' | 'large' | 'medium';
    loading?: boolean;
};

export const Button: FC<Props> = (props) => {
    const { variant, className, type, children, size, dark, block, loading, ...restOfProps } = props;

    const classnames = [
        'br-button mr-3 ',
        variant,
        className,
        size !== 'medium' ? size : undefined,
        dark && 'inverted',
        block && 'block',
        loading && 'loading',
    ];

    return (
        <button
            type={(type as 'button' | 'submit' | 'reset') ?? 'button'}
            className={cn(classnames)}
            {...restOfProps}
        >
            {children}
        </button>
    );
};
