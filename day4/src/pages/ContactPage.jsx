import React, { useContext, useEffect } from 'react';
import { UserContext } from '../App';

function ContactPage() {
  const { user } = useContext(UserContext);

  useEffect(() => {
    console.log('ContactPage User:', user);
  }, [user]);

  return (
    <div>
      <h1>연락처 페이지</h1>
    </div>
  );
}

export default ContactPage;
