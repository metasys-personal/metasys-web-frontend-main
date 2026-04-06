// button.stories.tsx
import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "./button"

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

// Primary Button
export const Primary: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button variant="primary" size="sm">Primary SM</Button>
      <Button variant="primary" size="md">Primary MD</Button>
      <Button variant="primary" size="lg">Primary LG</Button>
    </div>
  ),
}

// Outline Button
export const Outline: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button variant="outline" size="sm">Outline SM</Button>
      <Button variant="outline" size="md">Outline MD</Button>
      <Button variant="outline" size="lg">Outline LG</Button>
    </div>
  ),
}

// Ghost Button
export const Ghost: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button variant="ghost" size="sm">Ghost SM</Button>
      <Button variant="ghost" size="md">Ghost MD</Button>
      <Button variant="ghost" size="lg">Ghost LG</Button>
    </div>
  ),
}

// Disabled Button
export const Disabled: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button variant="primary" disabled>Primary</Button>
      <Button variant="outline" disabled>Outline</Button>
      <Button variant="ghost" disabled>Ghost</Button>
    </div>
  ),
}
