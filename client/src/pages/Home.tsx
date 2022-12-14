// import react essentials
import { useAuth } from "../utils/hooks/authProvider";
import { useEffect, useState } from "react";

// import utilities
import { User } from "../utils/types";

const HomePage = () => {
  const { user } = useAuth();

  const [userData, setUserData] = useState<User>();
  const [pageLoaded, setPageLoaded] = useState<boolean>(true);

  useEffect(() => {
    setPageLoaded(true);
  }, []);

  useEffect(() => {
    setUserData(user);
  }, [user]);

  return (
    <>
      {pageLoaded ? (
        <>{userData ? <>{userData.name}</> : <>No User</>}</>
      ) : (
        <>Loading</>
      )}
    </>
  );
};

export default HomePage;
