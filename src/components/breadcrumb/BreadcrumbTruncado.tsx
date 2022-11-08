import React, { useState } from "react";
import type { FC, HTMLProps, ReactHTMLElement } from "react";

type Props = HTMLProps<HTMLDListElement> & {
    variant: string;
    NameRef1: string;
    NameRef2: string;
    NameRef3: string;
    info: string;
}

export const BreadcrumbTruncado: FC<Props> = (props) => {
    const { NameRef1, NameRef2, NameRef3 } = props;

    const [IsHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(false);
    };

    const handleMouseLeave = () => {
        setIsHover(true);
    }

    const componentsContent = [
        <div className="br-breadcrumb">


            <ul className="crumb-list">
                <li className="crumb"><i className="icon fas fa-chevron-right"></i><a href="#">{NameRef1}</a>
                </li>
                <li className="crumb"><i className="icon fas fa-chevron-right"></i><a href="#">{NameRef2}</a>
                </li>
                <li className="crumb"><i className="icon fas fa-chevron-right"></i><a href="#">{NameRef3}</a>
                </li>
                <li className="crumb"><i className="icon fas fa-chevron-right"></i><a href="#" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >Página Ancestral com Título Grande</a>
                </li>
                
            </ul>
            <div className='tooltip' style={{
                content: " ", 
                position: 'fixed', 
                top: '52%', 
                left: '70%', 
                marginLeft: '-5px', 
                marginTop: '1px',
                borderWidth: '5px', 
                borderStyle: 'solid', 
                borderColor: '#155bcb transparent transparent transparent',
                transform: 'rotate(180deg)',
                visibility: IsHover ? 'hidden' : 'visible',
                
            }}></div>
            <div className="breadcrumb" style={{
                    width: '200px',
                    height: '62px',
                    border: 'none',
                    padding: '10px',
                    paddingLeft: '5px',
                    position:'fixed',
                    top:'1.7em',
                    left:'26em',
                    marginTop:'10px',
                    borderRadius: '6px',
                    background: '#155bcb',
                    color: 'white',
                    font: 'bold',
                    fontWeight: '10px',
                    visibility: IsHover ? 'hidden' : 'visible',

                }}><span className="text" role="">Página Ancestral Com Título Grande</span>

                </div>
        </div>
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
                {componentsContent}
                <li className="crumb" data-active="active"><i className="icon fas fa-chevron-right"></i><span>Página atual</span>
                </li>
            </ul>
        </div>
    );
}