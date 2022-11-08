import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { BreadcrumbTruncado } from '../../../components/breadcrumb/';
import { Wrapper } from '../../../Wrapper';

export default {
    title: 'Componentes/Breadcrumb/Truncado',
    component: BreadcrumbTruncado,
    argTypes: {

    },
} as ComponentMeta<typeof BreadcrumbTruncado>;

const Template: ComponentStory<typeof BreadcrumbTruncado> = (args) => (
    <Wrapper>
        <BreadcrumbTruncado {...args} />
    </Wrapper>
);

export const example = Template.bind({});

example.storyName = 'Exemplo Isolado';
example.args = {
    NameRef1: 'Página Ancestral 01', 
    NameRef2: 'Página Ancestral 02',
    NameRef3: 'Página Ancestral 03',
};