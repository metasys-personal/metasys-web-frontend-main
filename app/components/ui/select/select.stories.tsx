import type { Meta, StoryObj } from "@storybook/react"
import { Select } from "./select"

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Select
      placeholder="Choose an option"
      options={[
        { value: "apple", label: "Apple" },
        { value: "banana", label: "Banana" },
        { value: "orange", label: "Orange" },
      ]}
      onValueChange={(value) => console.log("Selected:", value)}
    />
  ),
}
