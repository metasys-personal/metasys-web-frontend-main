import type { Meta, StoryObj } from "@storybook/react"
import { Text } from "./text"

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Text size="sm">Small text</Text>
      <Text size="base">Base text</Text>
      <Text size="lg">Large text</Text>

      <Text tone="muted">Muted text</Text>
      <Text tone="danger">Danger text</Text>
      <Text tone="success">Success text</Text>

      <Text weight="normal">Normal weight</Text>
      <Text weight="medium">Medium weight</Text>
      <Text weight="semibold">Semibold weight</Text>
    </div>
  ),
}
