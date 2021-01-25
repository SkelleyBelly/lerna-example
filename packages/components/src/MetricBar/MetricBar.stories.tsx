import { Story, Meta } from "@storybook/react";

import MetricBar, {MetricBarProps} from "./MetricBar";

export default {
  title: "Example/MetricBar",
  component: MetricBar,
} as Meta;

const Template: Story<MetricBarProps> = (args) => <MetricBar {...args} />;

export const Primary = Template.bind({});
Primary.args ={
  avgEstimateValue: 95000,
  oldBillValue: 125000,
  savingValue: 40
}
