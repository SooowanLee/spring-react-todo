import { createContext, useContext, useState } from "react";

// 1. 컨텍스트를 생성
export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

//2. 다른 컴포넌트와 컨텍스트를 공유
export default function AuthProvider({ children }) {
  //3. 컨텍스트에 State 넣기
  const [isAuthenticated, setAuthenticated] = useState(false);

  function login(username, password) {
    if (username === "testName" && password === "test") {
      setAuthenticated(true);
      return true;
    } else {
      setAuthenticated(false);
      return false;
    }
  }

  function logout() {
    setAuthenticated(false);
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
