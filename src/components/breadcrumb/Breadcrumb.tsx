import React from "react";
import type { FC, HTMLProps, ReactHTMLElement } from "react";

type Props = HTMLProps<HTMLButtonElement> & {
    variant: string;
}


export const Breadcrumb: FC<Props> = (props) => {

    const dropdown = [
        < div className="dropdown" >
            <div className="row">
                <div className="col">
                    <div>
                        <button className="br-button circle small" type="button" id="triggerexample" data-toggle="dropdown" aria-label="Abrir Acesso Rápido" data-target="target">
                            <i className="fas fa-ellipsis-v" aria-hidden="true"></i>
                        </button>
                        <div className="br-list target" id="target" hidden={false}>
                            <div className="header">
                            </div>
                            <a className="br-item" href="javascript:void(0)">Link de acesso 1</a>
                            <a className="br-item" href="javascript:void(0)">Link de acesso 2</a>
                            <a className="br-item" href="javascript:void(0)">Link de acesso 3</a>
                            <a className="br-item" href="javascript:void(0)">Link de acesso 5</a>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    ]

    const componentsContent = [
        <ul className="crumb-list">
            <li className="crumb"><i className="icon fas fa-chevron-right"></i><a className="br-item" href="javascript:void(0)">Link de acesso 5</a>
            </li>
            <li className="crumb"><i className="icon fas fa-chevron-right"></i><a href="#">Página Ancestral 02</a>
            </li>
            <li className="crumb"><i className="icon fas fa-chevron-right"></i><a href="#">Página Ancestral 03</a>
            </li>
        </ul>
    ]

    return (
        <div className="br-breadcrumb">

            <ul className="crumb-list">
                <li className="crumb home"><a className="br-button circle" href="#"><span className="sr-only">Página inicial</span><i className="fas fa-home"></i></a></li>
                {componentsContent}
                <li className="crumb" data-active="active"><i className="icon fas fa-chevron-right"></i><span>Página atual</span>
                </li>
            </ul>
            <div className="">
                {dropdown}
            </div>
        </div>
    );
}