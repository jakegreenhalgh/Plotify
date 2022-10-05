import './App.css';
import { useEffect, useState } from 'react';
import MapContainer from './containers/MapContainer';
import Login from './Login';
import QuizContainer from './containers/QuizContainer';
import { getUser } from './services/QuizService';


function App() {

    const [token, setToken] = useState('');
  
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
        setUserId(userJson.id);
        getUser(parseInt(userJson.id)).then(user => setUserQuiz(user))

}
    
    getToken();
    }, []);

  
    return (
      <div className='App'>
          { (token === '') ? <Login/> : <div className='App-header'>
          {/* {userId ? <QuizContainer userId={userId} userQuiz={userQuiz}/> : <div>Loading</div>}  */}
          <TopBar token={token} setToken={setToken} userId={userId} userQuiz={userQuiz}/>
          <Router>
            <Routes>
          <Route path="/quiz" element={<QuizContainer/>} />
          <Route path="/" element={<MapContainer/>}/>
        </Routes>
    </Router>
          {/* <MapContainer token={token} /> */}
          </div> }
      </div>
    );
  }
  
  
  export default App;