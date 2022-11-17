import { useContext, createContext, useState, useEffect } from "react";

import { useAuth } from "./authProvider";
import { useTheme } from "./themeProvider";

const AppStateContext = createContext<any>(null);

interface AuxProps {
  children: React.ReactNode;
}

export const AppStateProvider = ({ children }: AuxProps) => {
  const { authLoaded } = useAuth();
  const { themeLoaded } = useTheme();

  const [loading, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (authLoaded && themeLoaded) {
      setLoaded(true);
    } else {
      return;
    }
  }, [authLoaded, themeLoaded]);

  const AppStateProviderValue = { appLoaded: loading };

  return (
    <AppStateContext.Provider value={AppStateProviderValue}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => useContext(AppStateContext);
