"use client";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import { FC, ReactNode } from "react";

// ======================================================
type Props = { children: ReactNode };
// ======================================================

const CustomerLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default CustomerLayout;
