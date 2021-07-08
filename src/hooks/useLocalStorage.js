import { useState } from "react";
export const useLocalStorage = (key, initialValue = "") => {
  const [storedValue, setStoredValue] = useState(() => {
    //console.log("useLocalStorage key", key);
    const item = window.localStorage.getItem(key);
    if (item) {
      // console.log("useLocalStorage item", item);
      return JSON.parse(item);
    } else {
      window.localStorage.setItem(key, JSON.stringify(initialValue));
      // console.log("useLocalStorage else", initialValue);
      return initialValue;
    }
  });
  const setValue = (value) => {
    // Save state
    setStoredValue(value);
    // Save to local storage
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
};
