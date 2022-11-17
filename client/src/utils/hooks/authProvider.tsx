import { createContext, useContext, useEffect, useState } from "react";
import { User } from "../types";
import getUserController from "../controllers/UserControllers/getUser";
import getCookie from "../functions/getCookie";

const AuthContext = createContext<any>(null);

interface AuxProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuxProps) => {
  const [authed, setAuthed] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>();
  const [loading, setLoaded] = useState<boolean>(true);

  useEffect(() => {
    initializeCheck().then(() => setLoaded(true));
  }, []);

  const initialUserCheck = async () => {
    let sessionId = getCookie("sid");
    if (!sessionId) {
      setUser(null);
      setAuthed(false);
      return;
    }
    const user: User | null = await getUserController(sessionId);
    if (!user) {
      setUser(null);
      setAuthed(false);
      return;
    }
    setUser(user);
    setAuthed(true);
  };

  const initializeCheck = async () => {
    await initialUserCheck();
  };

  return (
    <AuthContext.Provider
      value={{
        authed,
        authLoaded: loading,
        setAuthed,
        user,
        setUser,
        setLoaded,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
