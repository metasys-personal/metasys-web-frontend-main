import type { Meta, StoryObj } from "@storybook/react"
import { Chip } from "./chip"

const meta: Meta<typeof Chip> = {
  title: "Components/Chip",
  component: Chip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Chip>Default</Chip>
      <Chip variant="outline">Outline</Chip>
      <Chip variant="soft">Soft</Chip>
      <Chip intent="success">Success</Chip>
      <Chip intent="warning">Warning</Chip>
      <Chip intent="error" onRemove={() => alert("Removed!")}>Error</Chip>
    </div>
  ),
}
