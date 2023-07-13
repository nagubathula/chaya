import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';

import { Button, CheckboxGroup } from '../../index';
import { CheckboxGroupType } from '../../components/CheckboxGroup';


const meta: Meta = {
  title: 'User Inputs/CheckboxGroup',
  component: CheckboxGroup,
  parameters: {
    controls: { expanded: true },
  },
};
export default meta;

const GENDER_OPTIONS = [
  { value: 1, label: 'Male' },
  { value: 2, label: 'Female' },
  { value: 9, label: 'N/A' },
];

const defaultValue = [GENDER_OPTIONS[0].value ];

const CheckboxExample = (props: CheckboxGroupType<number>) => {
  const [value, setValue] = useState(props.value ?? []);
  return (
    <CheckboxGroup {...props} value={value} onChange={setValue} />
  );
};

const Template: Story<CheckboxGroupType<number>> = args => <CheckboxExample {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: 'Select Gender',
  value: defaultValue,
  options: GENDER_OPTIONS,
};

const RequiredTemplate: Story<CheckboxGroupType<number>> = args => (
  <div className="dsr-flex dsr-flex-wrap dsr-flex-start dsr-mx-0">
    <form
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        alert('submitted');
      }}
    >
      <CheckboxExample {...args} options={args?.options} color="default" />
      <Button size="sm" className="dsr-mt-3" type="submit">
        Submit
      </Button>
    </form>
  </div>
);

export const Required = RequiredTemplate.bind({});

Required.args = {
  isRequired: true,
  label: 'Select Gender',
  options: GENDER_OPTIONS,
};

export const Disabled = Template.bind({});

Disabled.args = {
  isDisabled: true,
  label: 'Select Gender',
  value: defaultValue,
  options: GENDER_OPTIONS,
};

export const Horizontal = Template.bind({});

Horizontal.args = {
  label: 'Select Gender',
  value: defaultValue,
  alignment: 'horizontal',
  options: GENDER_OPTIONS,
};

const CheckboxColorsTemplate: Story<CheckboxGroupType<number>> = args => (
  <div className="dsr-flex dsr-flex-wrap dsr-flex-start dsr-mx-0">
    <div className="md:dsr-w-1/3 dsr-p-2">
      <CheckboxExample {...args} options={args?.options} color="default" />
    </div>
    <div className="md:dsr-w-1/3 dsr-p-2">
      <CheckboxExample {...args} options={args?.options} color="primary" />
    </div>
    <div className="md:dsr-w-1/3 dsr-p-2">
      <CheckboxExample {...args} options={args?.options} color="secondary" />
    </div>
    <div className="md:dsr-w-1/3 dsr-p-2">
      <CheckboxExample {...args} options={args?.options} color="danger" />
    </div>
    <div className="md:dsr-w-1/3 dsr-p-2">
      <CheckboxExample {...args} options={args?.options} color="warning" />
    </div>
    <div className="md:dsr-w-1/3 dsr-p-2">
      <CheckboxExample {...args} options={args?.options} color="success" />
    </div>
  </div>
);

export const colors = CheckboxColorsTemplate.bind({});
colors.args = { options: GENDER_OPTIONS, value: defaultValue };


const SizesColorsTemplate: Story<CheckboxGroupType<number>> = args => (
  <div className="dsr-flex dsr-flex-wrap dsr-flex-start dsr-mx-0">
    <div className="md:dsr-w-1/3 dsr-p-2">
      <CheckboxExample {...args} options={args?.options} size="xs" />
    </div>
    <div className="md:dsr-w-1/3 dsr-p-2">
      <CheckboxExample {...args} options={args?.options} size="sm" />
    </div>
    <div className="md:dsr-w-1/3 dsr-p-2">
      <CheckboxExample {...args} options={args?.options} size="md" />
    </div>
    <div className="md:dsr-w-1/3 dsr-p-2">
      <CheckboxExample {...args} options={args?.options} size="lg" />
    </div>
    <div className="md:dsr-w-1/3 dsr-p-2">
      <CheckboxExample {...args} options={args?.options} size="xl" />
    </div>
  </div>
);

export const sizes = SizesColorsTemplate.bind({});
sizes.args = { options: GENDER_OPTIONS, value: defaultValue };