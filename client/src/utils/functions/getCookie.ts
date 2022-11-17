import Cookies from "universal-cookie";

const cookies = new Cookies();

/**
 * @param {string} key
 * @returns {string | null | undefined}
 */
const getCookie = (key: string): string | null | undefined => {
  const cookie = cookies.get(key);

  if (!cookie) {
    return null;
  }

  return cookie;
};

export default getCookie;
