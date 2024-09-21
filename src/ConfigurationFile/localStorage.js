export const setItemInLocalStorage = (key, value)=> localStorage.setItem(key, JSON.stringify(value))

export const getItemInLocalStorage = (key)=> JSON.parse(localStorage.getItem(key))