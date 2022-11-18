import {
  BrowserRouter,
  Routes as Switch,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/Home";
import LoginPage from "./pages/auth/Login";
import LoadingPage from "./pages/utils/LoadingPage";

import { useAppState } from "./utils/hooks/appStateProvider";
import { useAuth } from "./utils/hooks/authProvider";

import "./index.css";

const Router = () => {
  const { appLoaded } = useAppState();

  return (
    <>
      {appLoaded ? (
        <>
          <BrowserRouter>
            <Switch>
              <Route path="/" element={<HomePage />} />
              <Route path="login" element={<LoginPage />} />
            </Switch>
          </BrowserRouter>
        </>
      ) : (
        <LoadingPage />
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
