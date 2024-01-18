// Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom';

const navigation = [
  { name: 'Home', href: '/#' },
  { name: 'Characters', href: '#characters' },
  { name: 'Gameplay', href: '/#gameplay' },
  { name: 'Download', href: '/#download' },
  { name: 'About me', href: '/profile' },
];

const Sidebar = () => {
  return (
    <div className=" text-white h-full w-1/4  flex fixed right-0">
      <div className="font-serif text-6xl text-white font-semibold m-auto h-min w-min">
      <ul className="space-y-5">
        {navigation.map((item, index) => (
          <li key={index}>
            <Link to={item.href} className="text-xl">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default Sidebar;
