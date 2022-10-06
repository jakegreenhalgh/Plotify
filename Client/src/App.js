import './App.css';
import { useEffect, useState } from 'react';
import MapContainer from './containers/MapContainer';
import Login from './Login';
import QuizContainer from './containers/QuizContainer';
import { getUser } from './services/QuizService';
import TopBar from './TopBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

    const [token, setToken] = useState('');
    const [userid, setUserId] = useState('');
    const [userquiz, setUserQuiz] = useState([])
  
    useEffect(() => {
  
        async function getToken() {
            const response = await fetch('/auth/token');
            const json = await response.json();
            setToken(json.access_token);

            const userResponse = await fetch("https://api.spotify.com/v1/me", {
                method: 'GET', headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + json.access_token
                }
            
        });
        const userJson = await userResponse.json();
        setUserId(1152767803);
        getUser(parseInt(1152767803)).then(user => setUserQuiz(user))
        // setUserId(userJson.id);
        // getUser(parseInt(userJson.id)).then(user => setUserQuiz(user))

}
    
    getToken();
    }, []);

  
    return (
      <div className='App'>
          { (token === '') ? <Login/> : <div className='App-header'>
          {/* {userId ? <QuizContainer userId={userId} userQuiz={userQuiz}/> : <div>Loading</div>}  */}
          <TopBar token={token} setToken={setToken} userid={userid} userquiz={userquiz}/>
          <Router>
            <Routes>
          <Route path="/quiz" element={<QuizContainer userid={userid} userquiz={userquiz} />} />
          <Route path="/" element={<MapContainer token={token}/>}/>
        </Routes>
    </Router>
          {/* <MapContainer token={token} /> */}
          </div> }
      </div>
    );
  }
  
  
  export default App;