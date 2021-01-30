import { Story, Meta } from "@storybook/react";

import Table, { TableProps } from "./Table";
import RatingComponent, { RatingProps } from "./Rating";

export default {
  title: "Table",
  component: Table,
  argTypes: { onToggle: { action: "toggled" } },
} as Meta;

const Template: Story<TableProps> = (args) => <Table {...args} />;

const RatingTemplate: Story<RatingProps> = (args) => (
  <RatingComponent {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  data: [
    {
      company: "AT&T",
      rating: 5,
      term: 5,
      setup: 50,
      monthly: 950,
      total: 72000,
      selected: false,
    },
    {
      company: "Comcast",
      rating: 4,
      term: 12,
      setup: 0,
      monthly: 1050,
      total: 98000,
      selected: true,
    },
    {
      company: "Sprint",
      rating: 2,
      term: 5,
      setup: 450,
      monthly: 1005,
      total: 83500,
      selected: true,
    },
    {
      company: "Level(3)",
      rating: 5,
      term: 20,
      setup: 450,
      monthly: 999,
      total: 91000,
      selected: false,
    },
    {
      company: "Verizon",
      rating: 5,
      term: 5,
      setup: 2500,
      monthly: 1100,
      total: 105000,
      selected: true,
    },
    {
      company: "Cox",
      rating: 3,
      term: 10,
      setup: 399,
      monthly: 1350,
      total: 135000,
      selected: false,
    },
  ],
};

export const Rating = RatingTemplate.bind({});
Rating.args = {
  value: 3,
};
