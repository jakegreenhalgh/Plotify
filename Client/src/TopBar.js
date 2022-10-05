import './App.css';
import { IoLogOutOutline } from 'react-icons/io5';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
        <p></p>
        <IoLogOutOutline onClick={logout} value={{ size: "35px", color: "#D9DCD6" }} className="logout-btn"/>
        <p></p>
        </div>
    )
}

export default TopBar;