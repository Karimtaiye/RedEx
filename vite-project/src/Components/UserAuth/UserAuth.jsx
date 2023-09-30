import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from 'react-redux'
import Header from "../Header/Header";


const UserAuth = ({children}) => {
    // const userLogin = useSelector(state => state.events.user)
    // const userAuth = userLogin.token
    // const location = useLocation();
    
  return (
    <>
    <Header />
    {children}
    </>

    // userAuth? <Outlet />: <Navigate to="/login" state={{ from : location }} replace />
  )
}

export default UserAuth