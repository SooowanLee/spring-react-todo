import { createContext, useState } from "react";

// 컨텍스트를 생성
export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [number, setNumber] = useState(10);
  return (
    <AuthContext.Provider value={{ number }}>{children}</AuthContext.Provider>
  );
}
