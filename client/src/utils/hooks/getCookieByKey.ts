import Cookies from "universal-cookie"

const cookies = new Cookies();

const getCookieByKey = (key: string): string | null | undefined => {
    const cookie = cookies.get(key);

    if (!cookie || cookie.value) {
        return null;
    }

    return cookie.value;
}

export default getCookieByKey;