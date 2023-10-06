import { Navigate, Outlet } from "react-router-dom";
import HeaderMusic from "../components/Shared/HeaderMusic";
import Navbar from "../components/Shared/Navbar";


const ProtectedRoutes = () => {

  if (localStorage.getItem('token') !== null) {
    return (
      <>
        <div className="tracks__Page__global">
          <Navbar/>
          <HeaderMusic />
          <Outlet />
        </div>
      </>
    );
  } else {
    return <Navigate to="/auth/login" />;
  }
};

export default ProtectedRoutes;
