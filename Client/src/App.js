import './App.css';
import { useEffect, useState } from 'react';
import MapContainer from './containers/MapContainer';
import WebPlayback from './playercomponents/WebPlayback';
import Login from './Login';


function App() {

    const [token, setToken] = useState('');
  
    useEffect(() => {
  
      async function getToken() {
        const response = await fetch('/auth/token');
        const json = await response.json();
        setToken(json.access_token);
      }
  
      getToken();
  
    }, []);
  
    return (
      <>
          { (token === '') ? <Login/> : <>
          <MapContainer token={token}/>
          <WebPlayback token={token} /></> }
      </>
    );
  }
  
  
  export default App;