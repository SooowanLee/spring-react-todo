import { createContext, useContext, useState } from "react";

// 컨텍스트를 생성
export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const [number, setNumber] = useState(10);

  const [isAuthenticated, setAuthenticated] = useState(false);

  //   setInterval(() => setNumber(number + 1), 10000);

  function login(username, password) {
    if (username === "testName" && password === "test") {
      setAuthenticated(true);
      return true;
    } else {
      setAuthenticated(false);
      return false;
    }
  }

  return (
    <AuthContext.Provider
      value={{ number, isAuthenticated, setAuthenticated, login }}
    >
      {children}
    </AuthContext.Provider>
  );
}
