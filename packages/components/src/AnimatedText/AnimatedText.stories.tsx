import { Story, Meta } from "@storybook/react";

import AnimatedText, { AnimatedTextProps } from "./AnimatedText";

export default {
  title: "Animated Text",
  component: AnimatedText,
} as Meta;

const Template: Story<AnimatedTextProps> = (args) => <AnimatedText {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  value: 125000,
};
