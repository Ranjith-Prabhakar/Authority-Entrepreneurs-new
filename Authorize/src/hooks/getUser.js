import { useSelector } from "react-redux";
export function useGetUser() {
  const user = useSelector((state) => state.user.user);
  return user;
}
