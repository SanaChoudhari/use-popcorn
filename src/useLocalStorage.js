import { useState, useEffect } from "react";
export function useLocalStorage(initialState, key) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key); //returns null if key is not present
    //early return
    return storedValue ? JSON.parse(storedValue) : initialState;
  });
  useEffect(
    function () {
      localStorage.setItem("watached", JSON.stringify(value));
    },
    [value, key]
  );
  return [value, setValue];
}
