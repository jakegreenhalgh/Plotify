import React from 'react';

function Login() {
    return (
        <div className="App">
            <header className="App-header">
                <h2>Welcome to Plotify</h2>
                <h3>Where you can see what music is trending by just clicking on a plot of land</h3>
                <a className="btn-spotify" href="/auth/login" >
                    Login with Spotify 
                </a>
            </header>
        </div>
    );
}

export default Login;