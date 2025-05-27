import React from 'react';
 import '../styles/Header.css';
import { FiBell, FiPlus } from 'react-icons/fi';

function Header() {
  return (
    <div className="header-container">
      <div className="search-bar">
        <input type="text" placeholder="Search here..." />
      </div>

      <div className="header-actions">
        <FiBell className="icon" />

        <div className="user-profile">
          <img
            src="https://i.pravatar.cc/40"
            alt="User Avatar"
            className="avatar"
          />
          <span className="username">John Doe</span>
        </div>

        <button className="add-btn">
          <FiPlus />
        </button>
      </div>
    </div>
  );
}

export default Header;
