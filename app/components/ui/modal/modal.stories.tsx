import type { Meta, StoryObj } from "@storybook/react"
import { Modal, ModalTrigger, ModalContent, ModalTitle, ModalDescription } from "./modal"

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Modal>
      <ModalTrigger className="px-4 py-2 border rounded bg-white shadow-sm">Open Modal</ModalTrigger>
      <ModalContent>
        <ModalTitle>Modal Title</ModalTitle>
        <ModalDescription>This is the modal description content.</ModalDescription>
      </ModalContent>
    </Modal>
  ),
}
