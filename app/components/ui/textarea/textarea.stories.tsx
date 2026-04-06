import type { Meta, StoryObj } from "@storybook/react"
import { TextArea } from "./textarea"

const meta: Meta<typeof TextArea> = {
  title: "Components/TextArea",
  component: TextArea,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-96">
      <TextArea placeholder="Vertical resize (default)" />
      <TextArea placeholder="No resize" resize="none" />
      <TextArea placeholder="Horizontal resize" resize="horizontal" />
      <TextArea placeholder="Both directions" resize="both" />
    </div>
  ),
}
