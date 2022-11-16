import { useState } from "react";
import loginUser from "../utils/controllers/loginUser";

const LoginPage = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [useEmail, setUseEmail] = useState<boolean>(false);

  const inputStyle = {
    margin: "10px",
    border: "1px solid black",
    padding: "5px",
  };

  const handleLogin = async () => {
    const loginData = await loginUser(username, password);
    console.log(loginData);
  };

  return (
    <>
      <input
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        placeholder={useEmail ? "Email" : "Username"}
        style={inputStyle}
        type="text"
        name="username"
      />
      <br />
      <button
        onClick={() => setUseEmail((prev) => !prev)}
        style={inputStyle}
        type="button"
      >
        Use {useEmail ? <>Username</> : <>Email</>}
      </button>
      <br />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        placeholder={"Password"}
        style={inputStyle}
        type="password"
      />
      <br />
      <button onClick={handleLogin} style={inputStyle} type="submit">
        Submit
      </button>
    </>
  );
};

export default LoginPage;
