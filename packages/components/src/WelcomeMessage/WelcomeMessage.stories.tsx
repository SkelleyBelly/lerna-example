import { Story, Meta } from "@storybook/react";

import WelcomeMessage, { WelcomeMessageProps } from "./WelcomeMessage";

export default {
  title: "Example/WelcomeMessage",
  component: WelcomeMessage,
} as Meta;

const Template: Story<WelcomeMessageProps> = (args) => (
  <WelcomeMessage {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  name: "Charles",
};
