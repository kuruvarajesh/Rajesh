import { Outlet, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie'

const ProtectedRoute = () => {
//   const navigate = useNavigate();
const accessToken = Cookies.get("access_token")
let auth = {'token':accessToken?true:false}
console.log(auth.token)
//   if (!isAuthenticated) {
//     navigate('/login'); 
//     return null;
//   }
return(
    auth.token?<Outlet />:<Navigate to="/login" />
)

//   return <Route {...rest} element={<Component />} />;
};

export default ProtectedRoute;
