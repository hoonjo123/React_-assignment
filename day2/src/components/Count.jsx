import { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>버튼 클릭 시 count가 증가하는 컴포넌트 만들기</h2>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}> + </button>
      <button onClick={() => setCount(count - 1)}> - </button>
    </div>
  );
};

export default Count;
