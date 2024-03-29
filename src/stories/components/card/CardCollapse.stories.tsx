import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { CardCollapse } from '../../../components/card/';
import { Wrapper } from '../../../Wrapper';

export default {
    title: 'Componentes/Card/Com collapse',
    component: CardCollapse,
    argTypes: {
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
    disabled: false,
    fixed:'h-fixed',
    hidden: true, 
};