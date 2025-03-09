import { useState } from "react";

const Input = () => {
  const [input, setInputValue] = useState("");

  return (
    <div>
      <h2>
        input값이 변경될 때마다 화면에 즉시 반영되는 input 컴포넌트 만들기
      </h2>
      <input value={input} onChange={(e) => setInputValue(e.target.value)} />
      <p>{input}</p>
    </div>
  );
};

export default Input;
