// components/Navbar.js
'use client'
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">MyShop</div>
      <div className="menu-icon" onClick={toggleMenu}>
        {showMenu ? '✕' : '☰'}
      </div>
      <div className={`nav-links ${showMenu ? 'show' : ''}`}>
        <Link href="/" onClick={() => setShowMenu(false)}>Home</Link>
        <Link href="/men" onClick={() => setShowMenu(false)}>Men</Link>
        <Link href="/women" onClick={() => setShowMenu(false)}>Women</Link>
        <Link href="/contact" onClick={() => setShowMenu(false)}>Contact</Link>
      </div>
    </nav>
  );
}
