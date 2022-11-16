import Cookies, { CookieSetOptions } from "universal-cookie";

const cookies = new Cookies();

/**
 * @param {string} key
 * @param {string} value
 * @returns {boolean}
 */
const setCookie = (
  key: string,
  value: string,
  options?: CookieSetOptions
): boolean => {
  if (!key || !value) {
    return false;
  }

  cookies.set(key, value, options);

  return true;
};

export default setCookie;
