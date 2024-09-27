import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Patt() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="/">MySearch</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
   </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Patt;
// import React, { useState } from 'react';
// import axios from 'axios';
// import './Form.css';

// function Form() {
//   const [username, setUsername] = useState('');  // State to store the username input
//   const [userData, setUserData] = useState(null);  // State to store the fetched user data
//   const [responseMessage, setResponseMessage] = useState('');  // State for status message

//   const BASE_URL = 'https://api.github.com/users/';

//   async function handleFetch() {
//     if (!username) {
//       setResponseMessage('Please enter a GitHub login name.');
//       return;
//     }

//     try {
//       const userResult = await axios.get(`${BASE_URL}${username}`);
//       setUserData(userResult.data);  // Store the fetched data in state
//       setResponseMessage('Data fetched successfully!');
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       setResponseMessage('Error fetching user data. User not found or other issue.');
//     }
//   }

//   return (
//     <div>
//       <div>
//         <label htmlFor="username">GitHub Login:</label>
//         <input
//           type="text"
//           id="username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}  // Update username input
//           required
//         /><br />
//         <button onClick={handleFetch}>Fetch User</button>
//       </div>

//       {responseMessage && <p>{responseMessage}</p>}

//       {userData && (
//         <div>
//           <h3>Fetched User:</h3>
//           <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} width="100" />
//           <p><strong>Login:</strong> {userData.login}</p>
//           <p><strong>Name:</strong> {userData.name || ' '}</p>
//           <p><strong>Profile URL:</strong> <a href={userData.html_url}>{userData.html_url}</a></p>
//           <p><strong>Public Repos:</strong> {userData.public_repos}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Form;