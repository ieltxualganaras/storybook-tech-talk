import React from 'react';

import { Select } from './Select';

export default {
  title: 'Components/Inputs/Select',
  component: Select,
  argTypes: {
    color: { control: 'color' },
    size: { control: {
      type: 'select',
      options: ['small', 'medium', 'large']
    }}
  },
  args: {
    options: [
      "Option 1",
      "Option 2",
      "Option 3",
      "Option 4"
  ]}
};

const Template = (args) => <Select {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};
