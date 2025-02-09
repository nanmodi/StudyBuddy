import { createContext, useContext, useState, useEffect } from "react";
import { usePrivy } from "@privy-io/react-auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { user, login, logout, isAuthenticated } = usePrivy();
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthUser(user);
    } else {
      setAuthUser(null);
    }
  }, [user, isAuthenticated]);

  return (
    <AuthContext.Provider value={{ authUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
