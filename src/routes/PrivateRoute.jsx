import { useContext } from "react";
import { UserContext } from "../Providers/UserProviders";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(UserContext)
    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if (user) {
        return children
    }
    return <Navigate to="/login"></Navigate>;
       
};

export default PrivateRoute;
PrivateRoute.propTypes = {
  children: PropTypes.node,
};
