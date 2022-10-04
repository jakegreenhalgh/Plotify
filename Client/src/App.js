import './App.css';
import { useEffect, useState } from 'react';
import MapContainer from './containers/MapContainer';
import Login from './Login';
import QuizContainer from './containers/QuizContainer';
import { getUser } from './services/QuizService';


function App() {

    const [token, setToken] = useState('');
    const [userId, setUserId] = useState('');
    const [userQuiz, setUserQuiz] = useState('');
  
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
        console.log("parse");
        getUser(userJson.id).then(user => setUserQuiz(user))
      


    //   fetch("https://api.spotify.com/v1/me", {
    //     method: 'GET', headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json',
    //         'Authorization': 'Bearer ' + token
    //     }
    // })
    //     .then(res => res.json())
    //     .then(user => setUserId(user.id))
    
}
    


      getToken();
  
    }, []);

//     useEffect(() => {


//         fetch("https://api.spotify.com/v1/me", {
//             method: 'GET', headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//                 'Authorization': 'Bearer ' + token
//             }
//         })
//             .then(res => res.json())
//             .then(user => setUserId(user.id))

// }, [setToken]);

    const logout = () => {
        setToken("")
    }
  
    return (
      <div className='App'>
          { (token === '') ? <Login/> : <div className='App-header'>
          <button onClick={logout}>Logout</button>
          <QuizContainer userId={userId} userQuiz={userQuiz}/>
          <MapContainer token={token} />
          </div> }
      </div>
    );
  }
  
  
  export default App;