import { AuthProvider } from "./utils/hooks/authProvider";
import ReactDOM from "react-dom/client";
import Router from "Router";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <AuthProvider>
    <Router />
  </AuthProvider>
);
