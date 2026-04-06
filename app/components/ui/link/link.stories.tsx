import type { Meta, StoryObj } from "@storybook/react"
import { Link } from "./link"

const meta: Meta<typeof Link> = {
  title: "Components/Link",
  component: Link,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Link href="#">Default Link</Link>
      <Link href="#" variant="subtle">Subtle Link</Link>
      <Link href="#" variant="button">Button Link</Link>
      <Link href="#" size="sm">Small Link</Link>
      <Link href="#" size="lg">Large Link</Link>
    </div>
  ),
}
