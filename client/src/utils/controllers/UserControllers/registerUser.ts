import { API_URL } from "utils/constants";

interface userRegistration {
  username: string;
  password: string;
  email: string;
  aboutMe?: string;
  passwordMatch: boolean;
  avatar?: string;
}

interface returnValueInterface {
  status: boolean;
  data: {
    message: string;
    cookie?: string;
  };
}

const registerUser = async (
  userData: userRegistration
): Promise<returnValueInterface> => {
  const returnValue = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    body: JSON.stringify({
      username: userData.username,
      password: userData.password,
      email: userData.email,
      aboutMe: userData.aboutMe,
      avatar: userData.avatar,
    }),
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
        } as returnValueInterface;
      } else {
        return {
          status: false,
          data: {
            message: response.data.message,
          },
        } as returnValueInterface;
      }
    });

  return returnValue as returnValueInterface;
};

export default registerUser;
