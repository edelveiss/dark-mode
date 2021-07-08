import { useLocalStorage } from "./useLocalStorage";

export const useSearchForm = (key, initialValue) => {
  const [values, setValues] = useLocalStorage(key, initialValue);

  const handleChanges = (e) => {
    setValues(e.target.value);
  };

  return [values, handleChanges];
};
