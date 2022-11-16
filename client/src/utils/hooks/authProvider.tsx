import { createContext, useContext, useEffect, useState } from "react";
import { User } from "utils/types";
import getUserController from "../controllers/getUser";
import getCookieByKey from "./getCookieByKey";

const AuthContext = createContext<any>(null);

interface AuxProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuxProps) => {
  const [authed, setAuthed] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    initializeCheck().then(() => setLoading(false));
  }, []);

  const initialUserCheck = async () => {
    let sessionId = getCookieByKey("sid");
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
      value={{ authed, loading, setAuthed, user, setUser, setLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
