import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { SelectComponent } from './select.component';

const meta: Meta<SelectComponent> = {
  title: 'Example/Select',
  component: SelectComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<SelectComponent>;

export const Basic: Story = {
  args: {
    options: [
      { value: 'value_1', label: 'Valor 1' },
      {
        value: 'value_2',
        label: 'Valor 2',
      },
    ],
    disabled: false,
    error: false,
  },
};
