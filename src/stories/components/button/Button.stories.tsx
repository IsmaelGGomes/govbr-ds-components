import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../../../components/button';
import { Wrapper } from '../../../Wrapper';

export default {
    title: 'Componentes/Botão/Simples',
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

/* block.storyName = 'Bloco';
block.args = {
    variant: 'secondary',
    children: 'Bloco',
    dark: false,
    block: true,
    size: 'medium',
    disabled: false,
    loading: false,
};

dense.storyName = 'Tamanho';
dense.args = {
    variant: 'primary',
    children: 'Grande',
    dark: false,
    block: false,
    size: 'large',
    disabled: false,
    loading: false,
};

loading.storyName = 'Carregando';
loading.args = {
    variant: 'primary',
    dark: false,
    block: false,
    size: 'medium',
    disabled: false,
    loading: true,
};

dark.storyName = 'Fundo escuro';
dark.args = {
    variant: 'primary',
    children: 'Fundo Escuro',
    dark: true,
    block: false,
    size: 'medium',
    disabled: false,
    loading: false,
}; */
