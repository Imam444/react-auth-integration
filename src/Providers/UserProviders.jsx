import { createContext } from "react";
import PropTypes from 'prop-types';

 export const UserContext = createContext(null)
const UserProviders = ({children}) => {
    const userInfo ={name:'nodi sagor khal bil'}
    return (
        <UserContext.Provider value={userInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProviders;
UserProviders.propTypes = {
    children:PropTypes.node
}