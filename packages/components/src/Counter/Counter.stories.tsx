import { Story, Meta } from "@storybook/react";

import Counter, { CounterProps } from "./Counter";

export default {
  title: "Example/Counter",
  component: Counter,
} as Meta;

const Template: Story<CounterProps> = (args) => <Counter {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  value: 125000,
  caption: "Cost of Old Bill"
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
