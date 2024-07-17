// import { NavBar } from "@/components/shared";
import { ReactNode } from "react";
// import Footer from "../_components/shared/Footer";


const MainLayout = ({ children }) => {
  return (
    <div>
      {/* <NavBar /> */}
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;