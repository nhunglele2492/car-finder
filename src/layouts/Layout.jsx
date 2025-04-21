import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
  return (
    <div className="font-medium text-base">
      <Header />
      <ToastContainer />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
