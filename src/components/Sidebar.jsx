import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css'
import logo from "../assets/health-care-logo.jpg";

function Sidebar() {
  return (
    <>
    <div className="sidebar-container">
      <div className='one'>
          <div className="logo"><img src={logo} alt="" /></div>
      <h2 className="sidebar-title">General</h2>
      <ul className="sidebar-links">
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/history">History</Link></li>
        <li><Link to="/calendar">Calendar</Link></li>
        <li><Link to="/appointment">Appointments</Link></li>
        <li><Link to="/statistics">Statistics</Link></li>
        <li><Link to="/tests">Tests</Link></li>
        </ul>
        </div>
      <div className='two'>
        <h2 className="sidebar-title">Tools</h2>
        <ul>
        <li><Link to="/chat">Chat</Link></li>
        <li><Link to="/support">Support</Link></li>
      </ul>
      </div>
      <div className='three'>
      <ul>
        <li><Link to="/setting">Setting</Link></li>
      </ul>
      </div>
    </div>
    </>
  )
}

export default Sidebar
