import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
  const [userinfo, setUser] = useState({});

  return (
    <AuthContext.Provider value={{userinfo , setUser}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
