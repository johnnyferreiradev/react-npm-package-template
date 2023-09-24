import { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonProps } from '../../lib';

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Botão',
  },
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {};
