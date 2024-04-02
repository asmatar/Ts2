import React from "react";
import Header from "./UI/Header.tsx";
import Footer from "./UI/Footer.tsx";

type LayoutProps = {
  children: React.ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
