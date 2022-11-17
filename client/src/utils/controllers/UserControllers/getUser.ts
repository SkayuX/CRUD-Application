import { User } from "utils/types";
import { API_URL } from "../../constants";

const getUserController = async (sessionId: string): Promise<User | null> => {
  let user;

  user = fetch(`${API_URL}/auth/fetchUser`, {
    body: JSON.stringify({ sessionId: sessionId }),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      if (response.status) {
        return response.data.user as User;
      } else {
        return null;
      }
    })
    .catch((error: Error) => {
      console.log(Error("Couldn't fetch user"));
      return null;
    });

  return user;
};

export default getUserController;
