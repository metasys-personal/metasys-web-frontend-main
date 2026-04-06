import type { Meta, StoryObj } from "@storybook/react";
import Grid from "./grid";

const meta: Meta<typeof Grid> = {
  title: "Layout/Grid",
  component: Grid,
  tags: ["autodocs"],
  args: {
    sm: 1,
    md: 2,
    lg: 4,
    gap: "gap-4",
    children: (
      <>
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="bg-purple-200 p-4 rounded">
            Item {i + 1}
          </div>
        ))}
      </>
    ),
  },
};

export default meta;
type Story = StoryObj<typeof Grid>;

export const Default: Story = {};

export const ResponsiveGrid: Story = {
  args: {
    sm: 1,
    md: 3,
    lg: 4,
  },
};

export const TightGap: Story = {
  args: {
    gap: "gap-1",
  },
};

export const WideGap: Story = {
  args: {
    gap: "gap-8",
  },
};

export const TwelveColumnDemo: Story = {
  args: {
    sm: 2,
    md: 6,
    lg: 12,
  },
};
