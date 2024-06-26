"use client"
import { useState, FC } from 'react';
import Button from './button';

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle('blur-background', !isOpen);
  };

  return (
    <>
      <nav className="bg-green-600 text-white w-64 p-4 flex flex-col absolute top-0 left-0 z-50">
        <Button
          className="mr-auto"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          variant="secondary"
          size="small"
        >
          {`${isOpen ? 'X' : '☰'}`}
        </Button>
        <ul className={`${isOpen ? 'block' : 'hidden'} flex-grow mt-4`}>
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

    </>
  );
};

export default Navbar;