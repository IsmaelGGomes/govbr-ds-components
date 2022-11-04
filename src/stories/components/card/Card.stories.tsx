import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Card } from '../../../components/card/';
import { Wrapper } from '../../../Wrapper';

export default {
    title: 'Componentes/Card/Completo',
    component: Card,
    argTypes: {
        children: {
            control: 'text',
        },
        fixed: {
            options: ['h-fixed', 'no fixed'],
            control: {type: 'radio'},
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
    children: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore perferendis nam porro atque ex at, numquam non optio ab eveniet error vel ad exercitationem, earum et fugiat recusandae harum? Assumenda. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore perferendis nam porro atque ex at, numquam non optio ab eveniet error vel ad exercitationem, earum et fugiat recusandae harum? Assumenda.',
    disabled: false,
    fixed:'h-fixed',
};