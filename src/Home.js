import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      This is home page
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/profile">profile</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
