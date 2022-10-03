import './App.css';
import { useEffect, useState } from 'react';
import MapContainer from './containers/MapContainer';
<<<<<<< HEAD
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import QuizContainer from './containers/QuizContainer';

function App() {
  const CLIENT_ID = "b1456a8b38284b83a4818759f42a75c3"
//   const CLIENT_ID = "9d1cfe0cdf784d4797707581938d0db6"
  const REDIRECT_URI = "http://localhost:3000"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"
=======
import Login from './Login';


function App() {
>>>>>>> main

    const [token, setToken] = useState('');
  
    useEffect(() => {
  
      async function getToken() {
        const response = await fetch('/auth/token');
        const json = await response.json();
        setToken(json.access_token);
      }
  
      getToken();
  
    }, []);

    const logout = () => {
        setToken("")
    }
  
    return (
      <div className='App'>
          { (token === '') ? <Login/> : <div className='App-header'>
          <button onClick={logout}>Logout</button>
          <MapContainer token={token} />
          </div> }
      </div>
    );
  }
  
  
  export default App;