import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Breadcrumb } from '../../../components/breadcrumb/';
import { Wrapper } from '../../../Wrapper';

export default {
    title: 'Componentes/Breadcrumb/Geral',
    component: Breadcrumb,
    argTypes: {

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
    NameRef1: 'Página Ancestral 01', 
    NameRef2: 'Página Ancestral 02',
    NameRef3: 'Página Ancestral 03',
};