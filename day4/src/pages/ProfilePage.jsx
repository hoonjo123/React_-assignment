import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../App';

function ProfilePage() {
  const { userId } = useParams();
  const { user } = useContext(UserContext);

  useEffect(() => {
    console.log('ProfilePage User:', user);
  }, [user]);

  return (
    <div>
      <h1>프로필페이지</h1>
      {user ? (
        <>
          <p>유저아이디: {userId}</p>
          <p>현재 사용자: {JSON.stringify(user)}</p>
        </>
      ) : (
        <p>로그인해주세요.</p>
      )}
    </div>
  );
}

export default ProfilePage;
