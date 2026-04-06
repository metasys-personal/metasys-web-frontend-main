import type { Meta, StoryObj } from "@storybook/react";
import Container from "./container";

const meta: Meta<typeof Container> = {
  title: "Layout/Container",
  component: Container,
  tags: ["autodocs"],
  args: {
    maxWidth: "xl",
    children: (
      <div className="bg-gray-100 p-4 rounded">
        This content is wrapped inside the Container.
      </div>
    ),
  },
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {};

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-6">
      <Container maxWidth="sm" className="bg-gray-50 p-3 rounded">sm</Container>
      <Container maxWidth="md" className="bg-gray-50 p-3 rounded">md</Container>
      <Container maxWidth="lg" className="bg-gray-50 p-3 rounded">lg</Container>
      <Container maxWidth="xl" className="bg-gray-50 p-3 rounded">xl</Container>
      <Container maxWidth="full" className="bg-gray-50 p-3 rounded">full</Container>
    </div>
  ),
};
