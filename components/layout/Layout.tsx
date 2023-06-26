import { ReactNode } from "react";
import Nav from "./Nav";
import Footer from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <main className="flex flex-col justify-between h-screen">
        <div>
          <Nav />
          {children}
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Layout;
