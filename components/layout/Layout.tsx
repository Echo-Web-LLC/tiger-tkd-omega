import { ReactNode } from "react";
import Nav from "./Nav";
import Footer from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <main>
        <Nav />
        {children}
        <Footer />
      </main>
    </>
  );
};

export default Layout;
