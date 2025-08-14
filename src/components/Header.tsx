// This file has been replaced by Navbar.tsx in the same folder. You can safely delete this file.

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => (
  <header className="header">
    <div className="header-left">
      {/* Logo or Site Title */}
      <Image src="/globe.svg" alt="Logo" width={32} height={32} />
      <span className="site-title">Good Governance Portal</span>
    </div>
    <nav className="nav-links">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/news">News</Link>
      <Link href="/data">Data & Transparency</Link>
      <Link href="/engage">Engage</Link>
      <Link href="/faqs">FAQs</Link>
    </nav>
    <div className="header-actions">
      <input type="text" placeholder="Search..." className="search-bar" />
      {/* Uncomment for multilingual support */}
      {/* <select className="language-selector">
        <option value="en">EN</option>
        <option value="es">ES</option>
      </select> */}
      <Link href="/login" className="login-link">Login/Register</Link>
    </div>
  </header>
);

export default Header;
