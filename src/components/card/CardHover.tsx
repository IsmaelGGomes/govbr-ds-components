/* eslint-disable react/button-has-type */
import { FC, HTMLProps,  } from 'react';
import React from 'react';

type Props = HTMLProps<HTMLButtonElement> & {

};

export const CardHover: React.FC<Props> = (props) => {
    const { className, ...restOfProps } = props;


    return (
        <div className="row">
            <div className="col-md">
                <div className="br-card hover">
                    <div className="card-content">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore perferendis nam porro atque ex at, numquam non optio ab eveniet error vel ad exercitationem, earum et fugiat recusandae harum? Assumenda.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};