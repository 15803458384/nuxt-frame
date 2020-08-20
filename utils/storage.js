import Cookies from 'js-cookie';
/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
  if (!name) return;
  if (typeof content !== 'string') {
    content = JSON.stringify(content);
  }
  window.localStorage.setItem(name, content);
};

/**
 * 获取localStorage
 */
export const getStore = name => {
  if (!name) return;
  return window.localStorage.getItem(name);
};

/**
 * 删除localStorage
 */
export const removeStore = name => {
  if (!name) return;
  window.localStorage.removeItem(name);
};

/**
 * 存储sessionStorage
 */
export const setSession = (name, content) => {
  if (!name) return;
  if (typeof content !== 'string') {
    content = JSON.stringify(content);
  }
  window.sessionStorage.setItem(name, content);
};

/**
 * 获取sessionStorage
 */
export const getSession = name => {
  if (!name) return;
  return window.sessionStorage.getItem(name);
};

/**
 * 删除sessionStorage
 */
export const removeSession = name => {
  if (!name) return;
  window.sessionStorage.removeItem(name);
};

/**
 * 存储cookie
 *  @param {key} name
 *  @param {value} content
 *  @param {每一项value的key} parameterName
 */

export const setCookie = (name, content, parameterName) => {
  if (!name) return;
  if (parameterName) {
    if (Cookies.get(name)) {
      var obj = JSON.parse(Cookies.get(name));
      obj[parameterName] = content;
      Cookies.set(name, obj, { expires: 30 });
    }
  } else {
    Cookies.set(name, content, { expires: 30 });
  }
};

/**
 * 获取cookie
 * @param {key} name
 * @param {每一项value的key} parameterName
 */
export const getCookie = (name, parameterName) => {
  if (!name) return;
  if (parameterName) {
    if (Cookies.get(name)) {
      var obj = JSON.parse(Cookies.get(name));
      return obj[parameterName];
    }
  }
  if (Cookies.get(name)) {
    return Cookies.get(name);
  }
};

/**
 * 删除cookie
 * @param {key} name
 * @param {每一项value的key} parameterName
 */

export const removeCookie = (name, parameterName) => {
  if (!name) return;
  if (parameterName) {
    if (Cookies.get(name)) {
      var obj = JSON.parse(Cookies.get(name));
      delete obj[parameterName];
      Cookies.set(name, obj, { expires: 30 });
    }
  } else {
    Cookies.remove(name);
  }
};
