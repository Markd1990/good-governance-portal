import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink
} from "./ui/navigation-menu";

const Navbar = () => (
  <header className="header">
    <div className="header-left">
      <Image src="/globe.svg" alt="Logo" width={32} height={32} />
      <span className="site-title">Good Governance Portal</span>
    </div>
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/about">About</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/news">News</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/data">Data & Transparency</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/engage">Engage</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/faqs">FAQs</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
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

export default Navbar;
