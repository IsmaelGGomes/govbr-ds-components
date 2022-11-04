/* eslint-disable react/button-has-type */
import { Children, FC, HTMLProps } from 'react';
import type { ThemeColorName } from '../../types/colors';
import { cn } from '../../utils/classname';

type Props = HTMLProps<HTMLButtonElement> & {
    disabled: boolean;
    fixed: string;
};

export const Card: React.FC<Props> = (props) => {
    const { className,fixed,children, ...restOfProps } = props;

    const classnames = [
        'br-card',
        fixed == 'h-fixed' ? fixed: undefined,
        className,
        children,
    ];
    
    const header = [
        <div className="card-header">
            <div className="d-flex ">
                {/* <span className="br-avatar mt-1" title="Fulano da Silva"><span className="w-25 h-10 content"><img src="https://picsum.photos/id/823/400" alt="Avatar" /></span></span> */}
                <div className="ml-3">
                    <div className="text-weight-semi-bold text-up-02">Maria Amorim</div>
                    <div>UX Designer</div>
                </div>
                <div className="ml-auto">
                    <button className="br-button circle" type="button" aria-label="Ícone ilustrativo"><i className="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        </div>
    ]

    const content = [
        <div className="card-content" >
            <p>{ children }</p>
        </div>
    ]

    const footer = [
        <div className="card-footer">
            <div className="d-flex">
                <div>
                    <button className="br-button" type="button">
                        Button
                    </button>
                </div>
                <div className="ml-auto">
                    <button className="br-button circle" type="button" aria-label="Ícone ilustrativo">
                        <i className="fas fa-heart" aria-hidden="true"></i>
                    </button>
                    <button className="br-button circle" type="button" aria-label="Ícone ilustrativo 3">
                        <i className="fas fa-share-alt" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        </div>
    ]

    return (
        <div className="col-sm-6 col-md-4 col-lg-5">
            <div className={cn(classnames)} {...restOfProps}>
                {header}
        
                {content}

                {footer}

            </div>
        </div>
    );
};
