"use client"

import { FC } from 'react';
import Button from './button';

interface HeaderProps {
  title: string;
  icon: string;
}

const Header: FC<HeaderProps> = ({ title, icon }) => {
  return (
    <header className="bg-green-600 text-white p-4 flex items-center justify-between">
      <div className="flex items-center">
        <img src={icon} alt="icon" className="h-8 w-8 mr-2" />
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>
      <Button className="ml-auto" variant="secondary" size="small">
        Log In
      </Button>
    </header>
  );
};

export default Header;
