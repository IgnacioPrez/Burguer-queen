export const saveInLocalStorage = (key, value) => window.localStorage.setItem(key, JSON.stringify(value))
export const getInLocalStorage = (key) => JSON.parse(window.localStorage.getItem(key))
export const removeFromLocalStorage = (key) => window.localStorage.removeItem(key)
