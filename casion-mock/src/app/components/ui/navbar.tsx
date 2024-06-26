"use client"

import { useState } from "react"
import  Button  from './button'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="flex h-screen">
      <nav className={`${isOpen ? 'bg-green-600' : ''} text-white w-64 p-4 flex flex-col`}>
        <Button
          className="mr-auto"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          variant="secondary"
          size="medium"
        >
        {`${isOpen ? "X" : "☰"}`}
        </Button>
        <ul className={`${isOpen ? 'block' : 'hidden'} flex-grow`}>
        <li className="py-2 px-4 hover:bg-green-700">
            <a href="#" className="block w-full h-full hover:text-red-500">
              Casino
            </a>
          </li>
          <li className="py-2 px-4 hover:bg-green-700">
            <a href="#" className="block w-full h-full hover:text-red-500">
              Betting
            </a>
          </li>
          <li className="py-2 px-4 hover:bg-green-700">
            <a href="#" className="block w-full h-full hover:text-red-500">
              Support
            </a>
          </li>
          <li className="py-2 px-4 hover:bg-green-700">
            <a href="#" className="block w-full h-full hover:text-red-500">
              FAQ
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;