import React from 'react';

import {addDecorator, Meta, Story} from '@storybook/react';
import { TextInput } from '../src';
import ThemeContextDecorator from "../src/themeDecorator";

addDecorator(ThemeContextDecorator);


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
      <TextInput label="Label" name="field-name" value="value" {...args} />
);

export const Default = Template.bind({});

Default.args = {};