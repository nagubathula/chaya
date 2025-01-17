import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Switch, TextInput } from '../../../index';
import { SettingCardProps } from '../../../components/SettingCard';
import { SettingCard } from '../../../index';

const meta: Meta = {
  title: 'Components/Display/SettingCard',
  component: SettingCard,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<SettingCardProps> = args => (
  <div className="dsr-flex dsr-flex-col dar-justify-center dsr-items-center dsr-p-30">
    <SettingCard {...args}>
      {args?.children}
    </SettingCard>
  </div>
);

export const WithSwitch = Template.bind({});

WithSwitch.args = {
  labels: {
    title: 'Enable Notifications',
    description: 'Receive notifications for new messages',
  },
  children: (
    <Switch value={true} onChange={() => {}} />
  ),
};

export const WithTextInput = Template.bind({});

WithTextInput.args = {
  labels: {
    title: 'Username',
    description: 'Your username is used to login to your account',
  },
  children: (
    <TextInput hideLabel label="Username" name="username" value="" />
  ),
};


