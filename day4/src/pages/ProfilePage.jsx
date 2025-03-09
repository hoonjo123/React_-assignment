import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../App";

function ProfilePage() {
  const { userId } = useParams();
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>Profile Page</h1>
      {user ? (
        <p>Viewing profile of user ID: {userId}</p>
      ) : (
        <p>Please log in to view profiles.</p>
      )}
    </div>
  );
}

export default ProfilePage;
