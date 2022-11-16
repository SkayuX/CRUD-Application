// import react essentials
import { useEffect, useState } from "react";

// import utilities
import getUserController from "../utils/controllers/getUser";
import getCookieByKey from "../utils/hooks/getCookieByKey"
import { User } from '../utils/types'

const Home = () => {

    const [user, setUser] = useState<User>()
    const [pageLoaded, setPageLoaded] = useState<boolean>(true)

    useEffect(() => {
        getUserData();
        setPageLoaded(true);
    }, [])

    const getUserData = async () => {
        let sessionId = getCookieByKey('sid');
        if (!sessionId) {
            sessionId = 'default'
        };
        const user: User | null = await getUserController(sessionId);
        console.log(user)
        if (!user) return;

        setUser(user);
    }

    return (
        <>
            {pageLoaded ? (
                <>
                    {user ? (
                        <>
                            {user.name}
                        </>
                    ) : (
                        <>
                            No User
                        </>
                    )}
                </>
            ) : (
                <>
                    Loading
                </>
            )}
        </>
    )
}

export default Home;