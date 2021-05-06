import React from 'react';

import { Button } from './Select';

export default {
  title: 'Select component',
  component: Select,
  argTypes: {
    color: { control: 'color' }
  }
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});ñk4 –¥ +çl'

Primary.args = {
  primary: true,
  label: 'Select'
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Select'
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Select'
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Select'
};
