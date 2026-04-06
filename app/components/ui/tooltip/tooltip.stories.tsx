import type { Meta, StoryObj } from "@storybook/react"
import Tooltip from "./tooltip"

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex gap-8">
      <Tooltip content="This is a tooltip">
        <button className="px-4 py-2 border rounded">Hover me</button>
      </Tooltip>

      <Tooltip content="Another tooltip" side="top">
        <span className="px-4 py-2 border rounded">Hover me too</span>
      </Tooltip>
    </div>
  ),
}
