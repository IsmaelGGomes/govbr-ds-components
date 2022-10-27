import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Card } from '../../../components/card/Card';
import { Wrapper } from '../../../Wrapper';

export default {
    title: 'Componentes/Card/Completo',
    component: Card,
    argTypes: {
        children: {
            control: 'text',
        },
        fixed: {
            control: {type: 'boolean'}
        },
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
    <Wrapper>
        <Card {...args} />
    </Wrapper>
);

export const example = Template.bind({});

example.storyName = 'Exemplo Isolado';
example.args = {
    children: 'Simples',
    disabled: false,
};