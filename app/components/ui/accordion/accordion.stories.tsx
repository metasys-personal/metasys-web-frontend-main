import type { Meta, StoryObj } from "@storybook/react"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./accordion"

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

// Single Collapsible (Default)
export const SingleCollapsible: Story = {
  render: () => (
    <div className="w-full max-w-2xl">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>What is our refund policy?</AccordionTrigger>
          <AccordionContent>We offer a 30-day money-back guarantee on all purchases.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How do I contact support?</AccordionTrigger>
          <AccordionContent>You can reach our support team 24/7 via email or live chat.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
}

// Multiple Open Items
export const MultipleOpen: Story = {
  render: () => (
    <div className="w-full max-w-2xl">
      <Accordion type="multiple">
        <AccordionItem value="item-1">
          <AccordionTrigger>Getting Started</AccordionTrigger>
          <AccordionContent>Create an account and follow our onboarding guide to get started.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Pricing Plans</AccordionTrigger>
          <AccordionContent>We offer Free, Professional, and Enterprise pricing tiers.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
}

// With Default Expanded Item
export const DefaultExpanded: Story = {
  render: () => (
    <div className="w-full max-w-2xl">
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger>Popular Question</AccordionTrigger>
          <AccordionContent>This section is expanded by default for prominence.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Another Question</AccordionTrigger>
          <AccordionContent>This section starts collapsed.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
}
