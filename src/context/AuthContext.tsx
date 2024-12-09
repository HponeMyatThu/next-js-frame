import React, { createContext, useContext } from "react";

type AuthContextType = {
  token: string | null;
};

const AuthContext = createContext<AuthContextType>({
  token: null,
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const initialValues = {
    token: "token",
  };

  return <AuthContext.Provider value={{...initialValues}}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
