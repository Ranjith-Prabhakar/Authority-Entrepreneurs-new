import { useDispatch } from "react-redux";
import { removeLoggedOutUser } from "../store/slices/userSlice";
import { toast } from "react-hot-toast";
export default function useLogoutUser() {
  const dispatch = useDispatch();
  return () => {
    dispatch(removeLoggedOutUser());
    toast.success("User has logged out..");
  };
}
