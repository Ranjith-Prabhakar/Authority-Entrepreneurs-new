import { useDispatch } from "react-redux";
import { addLoggedInUser } from "../store/slices/userSlice";

export default function useSetUser() {
  const dispatch = useDispatch();

  return (userPayload) => {
    if (userPayload) {
      console.log("Dispatching user payload to Redux:", userPayload);
      dispatch(addLoggedInUser(userPayload));
    } else {
      console.warn("Attempted to dispatch empty user payload.");
    }
  };
}
