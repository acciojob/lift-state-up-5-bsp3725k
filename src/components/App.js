
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State for login status
  
  const handleLogin = (event) => {
    event.preventDefault(); // Prevent page reload
    setIsLoggedIn(true); // Update state to logged in
   
  };
  
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }} id="messageDiv">
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
        {!isLoggedIn && (
        <form onSubmit={handleLogin}>
          <label>
            Username: <input type="text" required />
          </label>
          <br /><br/>
          <label>
            Password: <input type="password" required />
          </label>
          <br /><br/>
          <button type="submit">Log In</button>
        </form>
        )}
        {isLoggedIn && <p>You are successfully logged in!</p>}  {/* Display message conditionally */}
    </div>
  )
}

export default App
