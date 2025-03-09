import React, { useRef } from "react";

const Input = () => {
  const inputRef = useRef(null);

  const onClickButton = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h2>useRef를 사용하여 input 요소에 자동 포커스 주는 기능 구현</h2>
      <input ref={inputRef} />
      <button onClick={onClickButton}>focus</button>
    </div>
  );
};

export default Input;
