import { Outlet } from "react-router-dom";
import Header from "../UI/Header";
import Footer from "../UI/Footer";

const BaseOutlet = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default BaseOutlet;