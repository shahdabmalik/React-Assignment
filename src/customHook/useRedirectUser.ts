import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useRedirectUser = (path: string) => {
  const navigate = useNavigate();

  // Redirecting logged out user back to home page
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      localStorage.setItem("loggedIn", "false");
      navigate(path);
    } else {
      return;
    }
  }, [navigate, path]);
};

export default useRedirectUser;
