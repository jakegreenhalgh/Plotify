import './App.css';
import { useEffect, useState } from 'react';
import MapContainer from './containers/MapContainer';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import QuizContainer from './containers/QuizContainer';

function App() {
  const CLIENT_ID = "b1456a8b38284b83a4818759f42a75c3"
//   const CLIENT_ID = "9d1cfe0cdf784d4797707581938d0db6"
  const REDIRECT_URI = "http://localhost:3000/auth/callback/"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"

  const [token, setToken] = useState("")

  useEffect(() => {
      const hash = window.location.hash
      let token = window.localStorage.getItem("token")

      if (!token && hash) {
          token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

          window.location.hash = ""
          window.localStorage.setItem("token", token)
      }

      setToken(token)

  }, [])

  const logout = () => {
      setToken("")
      window.localStorage.removeItem("token")
  }

  return (
      <div className="App">
            <header className="App-header">
                <h1>Spotify React</h1>
            
              {!token ?
                  <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login
                      to Spotify</a>
                  : <button onClick={logout}>Logout</button>}
                  <Router>
                    <Routes>
                        <Route path="/quiz" element={<QuizContainer/>}   />
                    </Routes>
                  </Router>
                  <MapContainer token={token}/>
          </header>
      </div>
  );
}

export default App;
