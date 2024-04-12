import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Example/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 10px">
        <ui-btn label="Primary"></ui-btn>
        <ui-btn label="Primary Disabled" disabled="true"></ui-btn>
      </div>

      <div style="display: flex; gap: 10px; marginTop: 10px">
        <ui-btn label="Danger" danger="true"></ui-btn>
        <ui-btn label="Danger Disabled" danger="true" disabled="true"></ui-btn>
      </div>
  `,
  }),
};

export const Secondary: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 10px">
        <ui-btn label="Secondary" variant="secondary"></ui-btn>
        <ui-btn label="Secondary Disabled" variant="secondary" disabled="true"></ui-btn>
      </div>

      <div style="display: flex; gap: 10px; marginTop: 10px">
        <ui-btn label="Danger Secondary" variant="secondary" danger="true"></ui-btn>
        <ui-btn label="Danger Disabled" variant="secondary" danger="true" disabled="true"></ui-btn>
      </div>
  `,
  }),
};

export const Tertiary: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 10px">
        <ui-btn label="Tertiary" variant="tertiary"></ui-btn>
        <ui-btn label="Tertiary Disabled" variant="tertiary" disabled="true"></ui-btn>
      </div>
  `,
  }),
};

export const Large: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 10px">
        <ui-btn label="Primary" size="large"></ui-btn>
        <ui-btn label="Secondary" size="large" variant="secondary"></ui-btn>
        <ui-btn label="Tertiary" size="large" variant="tertiary"></ui-btn>
      </div>
  `,
  }),
};
