import { useState } from "react";
import { loginUser, signUpUser } from "../../services/user";
import { toast } from "react-hot-toast";
import useSetUser from "../../hooks/setUser";

export function useAuthHook() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const dispatchUserToStore = useSetUser();

  async function authHandler(setShowModal) {
    try {
      if (isLogin) {
        const user = await loginUser({ username, password });
        if (user?.id) {
          console.log("User logged in:", user);

          dispatchUserToStore({ username, password });

          toast.success("Login success");
          setUserName("");
          setPassword("");
          setEmail("");
          setShowModal(false);
        }
      } else {
        const signUpUserStatus = await signUpUser({
          username,
          password,
          email,
        });
        if (signUpUserStatus?.id) {
          console.log("User registered:", signUpUserStatus);
          toast.success("User registered successfully. Login to continue");
          setUserName("");
          setPassword("");
          setEmail("");
          setIsLogin(true);
        }
      }
    } catch (error) {
      console.error("Auth Error:", error);
      toast.error("Authentication failed");
    }
  }

  return [
    isLogin,
    setIsLogin,
    username,
    setUserName,
    password,
    setPassword,
    email,
    setEmail,
    authHandler,
  ];
}
