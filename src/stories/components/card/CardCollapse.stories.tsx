import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../../../components/button';
import { Wrapper } from '../../../Wrapper';

export default {
    title: 'Componentes/Card/Card com collapse',
    component: Button,
    argTypes: {
        children: {
            control: 'text',
        },

        variant: {
            options: ['primary', 'secondary', 'tertiary'],
            control: { type: 'radio' },
        },

        size: {
            options: ['small', 'medium', 'large'],
            control: { type: 'radio' },
        },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
    <Wrapper>
        <Button {...args} />
    </Wrapper>
);

export const example = Template.bind({});
/* export const dark = Template.bind({});
export const dense = Template.bind({});
export const loading = Template.bind({});
export const block = Template.bind({}); */

example.storyName = 'Exemplo Isolado';
example.args = {
    variant: 'primary',
    children: 'Simples',
    dark: false,
    block: false,
    size: 'medium' as unknown as undefined,
    disabled: false,
    loading: false,
};
