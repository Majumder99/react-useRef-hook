import React, { useEffect, useRef } from "react";

const FocusInput = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    //Focus on input variable
    inputRef.current.focus();
  }, []);
  return (
    <>
      <input ref={inputRef} type="text" />
    </>
  );
};

export default FocusInput;
