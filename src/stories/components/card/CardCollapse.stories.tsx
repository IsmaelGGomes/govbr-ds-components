import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { CardCollapse } from '../../../components/card/CardCollapse';
import { Wrapper } from '../../../Wrapper';

export default {
    title: 'Componentes/Card/Com collapse',
    component: CardCollapse,
    argTypes: {
        children: {
            control: 'text',
        },
        fixed: {
            options: ['h-fixed', 'no fixed'],
            control: {type: 'radio'},
        },
    },
} as ComponentMeta<typeof CardCollapse>;

const Template: ComponentStory<typeof CardCollapse> = (args) => (
    <Wrapper>
        <CardCollapse {...args} />
    </Wrapper>
);

export const example = Template.bind({});

example.storyName = 'Exemplo Isolado';
example.args = {
    children: 'Simples',
    disabled: false,
    fixed:'h-fixed',
};