import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (initialValue) => {
  const [value, setValue] = useLocalStorage("toggled", initialValue);
  useEffect(() => {
    const body = document.querySelector("body");
    const sbar = document.querySelector("#searchInput");
    if (localStorage.getItem("toggled")) {
      body.classList.toggle("dark-mode");
      sbar.classList.toggle("dark-mode");
    }
  }, [value]);
  return [value, setValue];
};
