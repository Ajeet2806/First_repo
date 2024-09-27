// import React, { useState } from 'react';
// import axios from 'axios'; 
// import './Form.css';

// function Form() {
//     const [formData, setFormData] = useState({
//         login: '',  
//     });

//     const [responseData, setResponseData] = useState(null); 
//     const [responseMessage, setResponseMessage] = useState(''); 

//     const handleChange = (evt) => {
//         const { name, value } = evt.target;
//         setFormData((prevData) => ({
//             ...prevData,
//             [name]: value,  
//         }));
//     };

//     const handleSubmit = async (evt) => {
//         evt.preventDefault();
//         try {
//             const { login } = formData; 
//             if (!login) {
//                 setResponseMessage('Please enter a GitHub login name.');
//                 return;
//             }
//             const response = await axios.get(`https://api.github.com/users/${login}`);

//             console.log('API response:', response.data);
//             setResponseData(response.data); 
//             setResponseMessage('Data fetched successfully!');
//         } catch (error) {
//             console.error('Error fetching data from the API:', error);
//             setResponseMessage('Error fetching user data. User not found or other issue.');
//         }
//     };

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label htmlFor="login">GitHub Login:</label>
//                     <input
//                         type="text"
//                         id="login"
//                         name="login"
//                         value={formData.login}
//                         onChange={handleChange}
//                         required
//                     /><br />
//                     <button type="submit">Fetch User</button>
//                 </div>
//             </form>

//             {responseMessage && <p>{responseMessage}</p>}
            
//             {responseData && (
//                 <div>
//                     <h3>Fetched User:</h3>
//                     <img src={responseData.avatar_url} alt={`${responseData.login}'s avatar`} width="100" />
//                     <p><strong>Login:</strong> {responseData.login}</p>
//                     <p><strong>Name:</strong> {responseData.name || " "}</p>
//                     <p><strong>Profile URL:</strong> <a href={responseData.html_url}>{responseData.html_url}</a></p>
//                     <p><strong>Public Repos:</strong> {responseData.public_repos}</p>
//                 </div>
// //             )}
// //         </div>
// //     );
// // }

// // //export default Form;
 
import React, { useState } from 'react';
import axios from 'axios';
import './Form.css';

function Form1() {
  const [data, setData] = useState('');
  const [name, setName] = useState('');

  async function show() {
    const url = 'https://api.github.com/users';
    const userResult = await axios.get(`${url}/${name}`);
    setData(userResult.data.avatar_url);
  }

  return (
    <>
      <div>
        <label>Enter Text:</label>
        <input
          value={name}
          placeholder={"Type Your Name Here"}
          onChange={event => { setName(event.target.value); }}
        />
        <br />
        <br />
        You Entered: {name}
      </div>
      <br />
      <button onClick={show}>Submit</button>
      {data && <img src={data} alt="User Avatar" />}
    </>
  );
}

export default Form1;
