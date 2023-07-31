import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/authContext";

const Logout = () => {
  const { logout } = useContext(AuthContext);

  useEffect(() => {
    logout(); // Call the logout function when the component is rendered
  }, [logout]);

  return null;
};

export default Logout;