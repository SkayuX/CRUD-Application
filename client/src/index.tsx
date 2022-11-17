import ReactDOM from "react-dom/client";
import Router from "./Router";

import { AuthProvider } from "./utils/hooks/authProvider";
import { AppStateProvider } from './utils/hooks/appStateProvider'
import { ThemeProvider } from "./utils/hooks/themeProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <AuthProvider>
    <ThemeProvider>
        <AppStateProvider>
          <Router />
        </AppStateProvider>
      </ThemeProvider>
  </AuthProvider>
);
