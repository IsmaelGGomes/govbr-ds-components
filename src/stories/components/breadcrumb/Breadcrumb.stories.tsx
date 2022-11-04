import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Breadcrumb } from '../../../components/breadcrumb/';
import { Wrapper } from '../../../Wrapper';

export default {
    title: 'Componentes/Breadcrumb/Geral',
    component: Breadcrumb,
    argTypes: {
        fixed: {
            options: ['h-fixed', 'no fixed'],
            control: {type: 'radio'},
        }, 
    },
} as ComponentMeta<typeof Breadcrumb>;

const Template: ComponentStory<typeof Breadcrumb> = (args) => (
    <Wrapper>
        <Breadcrumb {...args} />
    </Wrapper>
);

export const example = Template.bind({});

example.storyName = 'Exemplo Isolado';
example.args = {
    disabled: false,
    fixed:'h-fixed',
    hidden: true, 
};