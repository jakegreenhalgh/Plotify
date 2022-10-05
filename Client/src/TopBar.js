import './App.css';
import { IoLogOutOutline } from 'react-icons/io5';
import { useEffect, useState } from 'react';

function TopBar ({token, setToken, userid, userquiz}) {

    const[user,setUser] = useState("")

    const logout = () => {
        setToken("")
    }

    const fetchUserDetails = () => {
        console.log(user);
    }

    return (
        <div className='topbar'>
            <p></p>
        <p>Welcome!</p>
        <ul>
            <li><a href='./quiz' userid={userid} userquiz={userquiz}>Quiz</a></li>
            <li><a href='./' token={token}>Home</a></li>
        </ul>
        <IoLogOutOutline onClick={logout} value={{ size: "35px", color: "#D9DCD6" }} className="btn-body"/>
        <p></p>
        </div>
    )
}

export default TopBar;