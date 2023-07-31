import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {
    try {
    // const res = await axios.post("http://192.168.1.101:8800/api/auth/login", inputs, {
      const res = await axios.post("https://pupcb-api2-73ce947d432d.herokuapp.com/api/auth/login", inputs, {

      withCredentials: true,
    });

    setCurrentUser(res.data);
  } catch (error) {
    console.error("Error during login:", error);
  }
  
}
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};