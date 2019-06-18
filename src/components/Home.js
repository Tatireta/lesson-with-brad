import React from 'react';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="App">
        <Link to='/form'>Form</Link>{' '}
        <Link to='/dogs'>Dogs</Link>
        <h1>Home</h1>
    </div>
  );
}

export default Home;