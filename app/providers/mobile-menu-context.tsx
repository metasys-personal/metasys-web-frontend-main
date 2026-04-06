"use client";

import { createContext, useContext, useState } from "react";

type MobileMenuContextType = {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  toggleMobileMenu: () => void;
};

const MobileMenuContext = createContext<MobileMenuContextType | undefined>(
  undefined
);

export function MobileMenuProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () =>
    setMobileMenuOpen((prev) => !prev);

  return (
    <MobileMenuContext.Provider
      value={{ mobileMenuOpen, setMobileMenuOpen, toggleMobileMenu }}
    >
      {children}
    </MobileMenuContext.Provider>
  );
}

export function useMobileMenu() {
  const context = useContext(MobileMenuContext);
  if (!context) {
    throw new Error(
      "useMobileMenu must be used within MobileMenuProvider"
    );
  }
  return context;
}
