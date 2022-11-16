import { API_URL } from "utils/constants";

interface loginReturn {
  status: boolean;
  data: {
    message: string;
    cookie?: string;
  };
}

const loginUser = async (
  username: string,
  password: string
): Promise<loginReturn> => {
  let returnValue: loginReturn = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    body: JSON.stringify({ username: username, password: password }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((response) => {
      if (response.status) {
        return {
          status: true,
          data: {
            message: response.data.message,
            cookie: response.data.cookie,
          },
        };
      } else {
        return {
          status: false,
          data: {
            message: response.data.message,
          },
        };
      }
    });

  return returnValue;
};

export default loginUser;
