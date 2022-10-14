import './App.css';
import { IoLogOutOutline } from 'react-icons/io5';
import { useEffect, useState } from 'react';
import logo from './images/logothing.png';

function TopBar ({token, setToken, userid, userquiz}) {

    const[user,setUser] = useState("")

    const logout = () => {
        setToken("")
    }


    return (
        <div className='topbar'>
            <p></p>
        <div className='logo-name'>
            <img src={logo} alt='logo' className='our-logo'/> 
            <p>Plotify</p>
        </div>
        <ul className='links'>
            <li><a href='./' className='nav-link' 
            >Home</a></li>
            <li><a href='./quiz' className='nav-link'
            >Quiz</a></li> 
        </ul>
        <IoLogOutOutline onClick={logout} className="btn-body"/>
        <p></p>
        </div>
    )
}

export default TopBar;