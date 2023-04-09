import React from 'react';
import { Meta, Story } from '@storybook/react';

import { TextInput } from '../index';

const meta: Meta = {
  title: 'User Inputs/Text Input',
  component: TextInput,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = args => (
  <div className="dsr-flex dsr-gap-4 dsr-items-center">
    <TextInput label="Label" name="field-name" value="value" {...args} />
    <TextInput label="Label" name="field-name" value="value" {...args} isDisabled />
  </div>
);

export const Default = Template.bind({});

Default.args = {};

export const WithPostfix = Template.bind({});

WithPostfix.args = {
  prefixRenderer: <div className="dsr-px-2.5">Points</div>,
  postfixRenderer: <div className="dsr-px-2.5">pts</div>,
};

const InvalidInputsTemplate: Story = args => (
  <div style={{ width: '720px', maxWidth: '100%' }}>
    <div style={{ paddingBottom: '1rem' }}>
      <div style={{ paddingBottom: '0.5rem' }}>Should be valid</div>
      <TextInput {...args} label="Email" name="email" type="email" isRequired value="" />
    </div>
    <div style={{ paddingBottom: '1rem' }}>
      <div style={{ paddingBottom: '0.5rem' }}>Input with invalid parameter set</div>
      <TextInput {...args} label="Password" name="password" type="password" isInvalid value="wrong_password" />
    </div>
    <div style={{ paddingBottom: '1rem' }}>
      <div style={{ paddingBottom: '0.5rem' }}>Number Input with value in invalid range (35 for 1-5)</div>
      <TextInput {...args} label="Rate (scale of 1-5)" name="rating" type="number" value={35} min={1} max={5} isRequired />
    </div>
    <div style={{ paddingBottom: '1rem' }}>
      <div style={{ paddingBottom: '0.5rem' }}>Email Input with invalid email as value</div>
      <TextInput {...args} label="Your Email" name="email" type="email" value="as@" />
    </div>
  </div>
);

export const InvalidInputs = InvalidInputsTemplate.bind({});

InvalidInputs.args = {};

export const WithIcons = Template.bind({});

WithIcons.args = {
  leftIcon: 'search',
  rightIcon: 'home',
  isLoading: true,
};