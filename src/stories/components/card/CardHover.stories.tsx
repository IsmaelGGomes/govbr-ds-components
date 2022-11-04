import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { CardHover } from '../../../components/card/';
import { Wrapper } from '../../../Wrapper';

export default {
    title: 'Componentes/Card/Com hover',
    component: CardHover,
    argTypes: {
        /* children: {
            control: 'text',
        },
        fixed: {
            options: ['h-fixed', 'no fixed'],
            control: {type: 'radio'},
        }, */
    },
} as ComponentMeta<typeof CardHover>;

const Template: ComponentStory<typeof CardHover> = (args) => (
    <Wrapper>
        <CardHover {...args} />
    </Wrapper>
);

export const example = Template.bind({});

example.storyName = 'Exemplo Isolado';
example.args = {
    /* children: 'Simples',
    disabled: false,
    hidden: true, */
};