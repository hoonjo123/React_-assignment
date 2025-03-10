import React, { useContext, useEffect } from 'react';
import { UserContext } from '../App';

function HomePage() {
  const { user } = useContext(UserContext);

  useEffect(() => {
    console.log('HomePage User:', user);
  }, [user]);

  return (
    <div>
      <h1>홈페이지</h1>
      {user ? <p>안녕하세요, {user.name}님!</p> : <p>로그인해주세요</p>}
    </div>
  );
}

export default HomePage;
