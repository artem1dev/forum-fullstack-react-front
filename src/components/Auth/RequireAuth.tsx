import { useLocation, Navigate, Outlet } from "react-router-dom";

interface IRoles {
  allowedRoles: string[]
}
interface IUser {
  user: {
    user: string,
  }
  role: string
}
const RequreAuth = ( {allowedRoles}: IRoles ) =>{
    const location = useLocation();
    const storedData = localStorage.getItem('authorized');
    const currentUser: IUser | null = storedData ? JSON.parse(storedData) : null;
    return(
      (currentUser && allowedRoles.includes(currentUser.role as never))
      ? <Outlet />
      : (currentUser?.user
          ? <Navigate to='/unauthorized' state={{ from: location }} replace />
          : <Navigate to='/login' state={{ from: location }} replace />
      )
);
}

export default RequreAuth;