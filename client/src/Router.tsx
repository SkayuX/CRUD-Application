import {
  BrowserRouter,
  Routes as Switch,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import LoadingPage from "./pages/LoadingPage";

import { useAuth } from "./utils/hooks/authProvider";

import "./index.css";

const Router = () => {
  const { loading } = useAuth();

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <>
          <BrowserRouter>
            <Switch>
              <Route path="/" element={<HomePage />} />
              <Route path="login" element={<LoginPage />} />
            </Switch>
          </BrowserRouter>
        </>
      )}
    </>
  );
};

const PrivateRoute = ({ children }: any) => {
  const { authed } = useAuth();

  if (!authed) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};

// eslint-disable-next-line no-lone-blocks
{
  /* <Route path="private" element={
    <PrivateRoute>
        <Prywat />
    </PrivateRoute>} 
/> */
}

export default Router;
