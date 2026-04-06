import type { Meta, StoryObj } from "@storybook/react"
import { Input } from "./input"

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-96">
      <Input label="Default Input" placeholder="Type something..." />
      <Input label="Small Input" size="sm" placeholder="Small size" />
      <Input label="Large Input" size="lg" placeholder="Large size" />
      <Input label="Error Input" error="This field is required" />
      <Input label="With Hint" hint="Helper text goes here" />
    </div>
  ),
}
