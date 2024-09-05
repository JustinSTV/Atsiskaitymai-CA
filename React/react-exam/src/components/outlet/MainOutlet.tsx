import { Outlet } from "react-router-dom";
import Header from "../UI/organism/Header";
import Footer from "../UI/organism/Footer";

const MainOutlet = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
 
export default MainOutlet;