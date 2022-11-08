import React from "react";
import type { FC, HTMLProps, ReactHTMLElement } from "react";

type Props = HTMLProps<HTMLButtonElement> & {
    variant: string;
    NameRef1: string;
    NameRef2: string;
    NameRef3: string;
}


export const Breadcrumb: FC<Props> = (props) => {
    const {NameRef1,NameRef2,NameRef3} = props;

    const componentsContent = [
        <ul className="crumb-list">
            <li className="crumb"><i className="icon fas fa-chevron-right"></i><a href="#">{NameRef1}</a>
            </li>
            <li className="crumb"><i className="icon fas fa-chevron-right"></i><a href="#">{NameRef2}</a>
            </li>
            <li className="crumb"><i className="icon fas fa-chevron-right"></i><a href="#">{NameRef3}</a>
            </li>
        </ul>
    ]

    return (
        <div className="br-breadcrumb">
            
            <ul className="crumb-list">
                <li className="crumb home">
                    <a className="br-button circle" href="#">
                        <span className="sr-only">Página inicial</span>
                        <i className="fas fa-home"></i>
                    </a>
                </li>
                { componentsContent }
                <li className="crumb" data-active="active"><i className="icon fas fa-chevron-right"></i><span>Página atual</span>
                </li>
            </ul>
        </div>
    );
}