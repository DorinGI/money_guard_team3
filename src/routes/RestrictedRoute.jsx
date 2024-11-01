import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/selectors';

export const RestrictedRoute = ({ component, redirectTo = '/dashboard' }) => {
  const location = useLocation();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log(isLoggedIn, location.state?.from);

  return isLoggedIn ? (
    <Navigate to={location.state?.from ? location.state?.from : redirectTo} />
  ) : (
    component
  );
};
