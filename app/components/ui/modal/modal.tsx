"use client"

import * as Dialog from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import { cn } from "../../../lib/cn"

export const Modal = Dialog.Root
export const ModalTrigger = Dialog.Trigger

export function ModalContent({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Dialog.Content>) {
  return (
    <Dialog.Portal>
      {/* Accessible overlay */}
      <Dialog.Overlay
        className="fixed inset-0 bg-black/40 backdrop-blur-sm data-[state=open]:animate-fade-in"
      />

      <Dialog.Content
        {...props}
        role="dialog"
        aria-modal="true"
        className={cn(
          "fixed left-1/2 top-1/2 w-[90%] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-lg bg-background p-6 shadow-lg focus:outline-none",
          "data-[state=open]:animate-scale-in",
          className
        )}
      >
        {children}

        {/* Close button - focusable, accessible */}
        <Dialog.Close
          aria-label="Close modal"
          className="absolute right-4 top-4 rounded p-1 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 hover:opacity-80"
        >
          <X className="h-5 w-5" />
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  )
}

export const ModalTitle = Dialog.Title
export const ModalDescription = Dialog.Description



// Usage

{/* <Modal>
  <ModalTrigger asChild>
    <Button>Open Modal</Button>
  </ModalTrigger>

  <ModalContent>
    <ModalTitle className="text-xl font-semibold">Welcome</ModalTitle>
    <ModalDescription className="text-sm text-muted-foreground">
      This modal meets accessibility standards.
    </ModalDescription>

    <div className="mt-4">
      <Button>Continue</Button>
    </div>
  </ModalContent>
</Modal> */}

