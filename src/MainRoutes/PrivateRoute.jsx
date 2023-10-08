import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  const path = location.pathname;


  if(loading){
        return <span className="loading loading-spinner text-error"></span>;
  }

  if (user) {
    return children;
  }
  return <Navigate state={path} to="/login"></Navigate>;
};

export default PrivateRoute;
