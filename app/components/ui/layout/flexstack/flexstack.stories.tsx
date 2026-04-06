import type { Meta, StoryObj } from "@storybook/react";
import FlexStack from "./flexstack";

const meta: Meta<typeof FlexStack> = {
  title: "Layout/FlexStack",
  component: FlexStack,
  tags: ["autodocs"],
  args: {
    direction: "col",
    gap: 3,
    children: (
      <>
        <div className="bg-blue-200 p-3 rounded">Item 1</div>
        <div className="bg-blue-200 p-3 rounded">Item 2</div>
        <div className="bg-blue-200 p-3 rounded">Item 3</div>
      </>
    ),
  },
};

export default meta;
type Story = StoryObj<typeof FlexStack>;

export const Default: Story = {};

export const Row: Story = {
  args: {
    direction: "row",
  },
};

export const ResponsiveDirections: Story = {
  args: {
    direction: "col",
    mdDirection: "row",
    lgDirection: "col",
  },
};

export const WithAlignment: Story = {
  args: {
    direction: "row",
    align: "center",
    justify: "between",
  },
};

export const CustomGap: Story = {
  args: {
    gap: 8,
  },
};
