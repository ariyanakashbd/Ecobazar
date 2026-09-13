import { useEffect, useRef } from "react";

function useOutsideClick(ref, callback, enabled = true) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!enabled) return;

    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        callbackRef.current();
      }
    }

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [ref, enabled]);
}

export default useOutsideClick;