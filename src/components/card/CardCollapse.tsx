/* eslint-disable react/button-has-type */
import { FC, HTMLProps, useState } from 'react';
import React from 'react';
import type { ThemeColorName } from '../../types/colors';
import { cn } from '../../utils/classname';

type Props = HTMLProps<HTMLButtonElement> & {
    disabled: boolean;
    fixed: string;
    hidden: boolean;
};

export const CardCollapse: React.FC<Props> = (props) => {
    const { className, fixed, hidden, ...restOfProps } = props;

    const [localHidden, setLocalHidden] = useState(hidden);

    const toggleHidden = () => {
        setLocalHidden(!localHidden)
    }

    const classnames = [
        'br-card',
        fixed == 'h-fixed' ? fixed: undefined,
        className,
    ];

    const header = [
        <div className="card-header">
            <div className="d-flex">
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
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore perferendis nam porro atque ex at, numquam non optio ab eveniet error vel ad exercitationem, earum et fugiat recusandae harum? Assumenda. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore perferendis nam porro atque ex at, numquam non optio ab eveniet error vel ad exercitationem, earum et fugiat recusandae harum? Assumenda.</p>
        </div>
    ]

    const footer = [
        <div className="card-footer">
            <div className="text-right">
                <button 
                    className="br-button circle"
                    type="button" 
                    aria-label="Expandir o card"
                    data-toggle="collapse" 
                    data-target="expanded" 
                    aria-controls="expanded" 
                    aria-expanded="false" 
                    data-visible="false"
                    onClick={toggleHidden}
                >
                    {localHidden ? (
                        <i className="fas fa-chevron-down" aria-hidden="true"></i>
                    ) : (
                        <i className="fas fa-chevron-up" aria-hidden="true"></i>
                    )}
                </button>
            </div>
            <div id="expanded" hidden={localHidden}>
                <div className="br-list mt-3">
                    <div className="br-item">
                        <div className="row">
                            <div className="col-auto"><i className="fas fa-heartbeat" aria-hidden="true"></i>
                            </div>
                            <div className="col">
                                <p className="m-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div><span className="br-divider"></span>
                    <div className="br-item">
                        <div className="row">
                            <div className="col-auto"><i className="fas fa-heartbeat" aria-hidden="true"></i>
                            </div>
                            <div className="col">
                                <p className="m-0">Nesciunt, laudantium ea officiis hic tempora velit aperiam nemo accusamus nisi, eligendi ducimus! Incidunt ullam minima ratione amet sequi.</p>
                            </div>
                        </div>
                    </div><span className="br-divider"></span>
                    <div className="br-item">
                        <div className="row">
                            <div className="col-auto"><i className="fas fa-heartbeat" aria-hidden="true"></i>
                            </div>
                            <div className="col">
                                <p className="m-0">Voluptates, iste recusandae.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ]

return (
    <div className="col-sm-6 col-md-4 col-lg-5 ">
        <div className={cn(classnames)} {...restOfProps}>
            {header}

            {content}

            {footer}

        </div>
    </div>
);
};
