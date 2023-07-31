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

  
  const logout = async () => {
    try {
      await axios.post("http://192.168.1.101:8800/api/auth/logout", null, {
        withCredentials: true,
      });
      setCurrentUser(null); // Update the currentUser state to null after logout
    } catch (err) {
      console.error("Logout error:", err);
      // Handle any errors during logout if necessary
    }
  };
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}> {/* Include logout in the context */}
      {children}
    </AuthContext.Provider>
  );
};
