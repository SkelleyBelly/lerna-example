import { Story, Meta } from "@storybook/react";

import Counter, { CounterProps } from "./Counter";

export default {
  title: "Counter",
  component: Counter,
} as Meta;

const Template: Story<CounterProps> = (args) => <Counter {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  value: 125000,
  caption: "Cost of Old Bill"
};
