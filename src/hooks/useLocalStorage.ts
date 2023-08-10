import { useState, useEffect } from "react";

function useLocalStorage<T>(
  key: string,
  initialValue?: T
): [T | undefined, (value: T) => void, () => T | undefined] {
  const fetchInitialValue = (): T | undefined => {
    if (typeof window !== "undefined") {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    }
    return initialValue;
  };

  const [storedValue, setStoredValueState] = useState<T | undefined>(
    fetchInitialValue
  );

  useEffect(() => {
    if (typeof window !== "undefined" && storedValue !== undefined) {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    }
  }, [storedValue]);

  const setStoredValue = (value: T) => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(key, JSON.stringify(value));
      setStoredValueState(value);
    }
  };

  const getStoredValue = (): T | undefined => {
    if (typeof window !== "undefined") {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    }
    return initialValue;
  };

  return [storedValue, setStoredValue, getStoredValue];
}

export default useLocalStorage;
