import './App.css';
import { useEffect, useState } from 'react';
import MapContainer from './containers/MapContainer';
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