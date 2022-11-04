import React from 'react';
import { Avatar } from "../../../components/avatar/Avatar";
import type { Story, ComponentMeta } from '@storybook/react';
import { Wrapper } from '../../../Wrapper';

export default {
    title: 'Componentes/Avatar/Avatar icônico',
    component: Avatar,
    argTypes: {
        variant: {
            control: {
                type: 'radio',
                options: ['primary', 'secondary', 'tertiary'],
            }
        },
        size: {
            control: {
                type: 'radio',
                options: ['small', 'medium', 'large'],
            },
        },
    },
}

export const Primary: Story<typeof Avatar> = (args) => (
    <Wrapper>
        <Avatar {...args}/>
    </Wrapper>
)

Primary.storyName = 'Exemplo Isolado';
Primary.args = {

    children: 'NameUser'
};