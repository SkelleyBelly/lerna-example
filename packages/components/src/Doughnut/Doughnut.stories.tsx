import { Story, Meta } from "@storybook/react";

import Doughnut, { DoughnutProps } from "./Doughnut";

export default {
  title: "Doughnut",
  component: Doughnut,
} as Meta;

const Template: Story<DoughnutProps> = (args) => <Doughnut {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  value: 40
};