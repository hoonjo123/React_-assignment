import React, { useContext } from "react";
import { UserContext } from "../App";

function HomePage() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>Home Page</h1>
      {user ? <p>Welcome, {user.name}!</p> : <p>Please log in.</p>}
    </div>
  );
}

export default HomePage;
