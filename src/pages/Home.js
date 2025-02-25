import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to Resignation Management</h1>
      <Link to="/login"><button>HR Login</button></Link>
      <Link to="/submit-resignation"><button>Submit Resignation</button></Link>
    </div>
  );
};

export default Home;
