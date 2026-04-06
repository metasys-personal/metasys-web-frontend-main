import type { Meta, StoryObj } from "@storybook/react"
import Popover from "./popover"

const meta: Meta<typeof Popover> = {
  title: "Components/Popover",
  component: Popover,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex gap-4">
      <Popover trigger={<button className="px-4 py-2 border rounded">Click Me</button>}>
        <p>This is a simple popover content.</p>
      </Popover>
      <Popover trigger={<button className="px-4 py-2 border rounded">Another</button>} align="right">
        <p>Right-aligned content</p>
      </Popover>
    </div>
  ),
}
