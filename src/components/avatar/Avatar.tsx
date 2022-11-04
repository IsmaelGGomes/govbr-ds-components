import type { HTMLProps, FC, CSSProperties } from "react";
import { cn } from '../../utils/classname';

type Props = HTMLProps<HTMLElement> & {
    variant: string;
    children: string;
    size?: 'small' | 'large' | 'medium';
    title: string;
};

export const Avatar: FC<Props> = (props) => {
    const { variant, className, type, children, size, title, ...restOfProps } = props;

    /* const Styles : CSSProperties {

    } */

    const classnamesFirstSpan = [
        'br-avatar mr-3',
        variant,
        className,
        size !== 'medium' ? size : undefined,
        title,
    ]
    const classnamesSecondSpan = [
        'content',
    ]
    const classnamesHyperText = [
        'fas fa-user',
    ]
    return (
        <span className={cn(classnamesFirstSpan)} {...restOfProps} title={children}>
            <span className={cn(classnamesSecondSpan)} {...restOfProps}>
                <i className={cn(classnamesHyperText)} {...restOfProps} aria-hidden="true"></i>
            </span>
        </span>
    )
}
