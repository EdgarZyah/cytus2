import React from 'react';
import { Link } from 'react-router-dom';

const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
};

const navigation = [
    { name: 'Home', href: '/#1' },
    { name: 'Characters', href: '/#2' },
    { name: 'Gameplay', href: '/#3' },
    { name: 'Download', href: '/#4' },
    { name: 'About me', href: '/profile' },
];

const Sidebar = () => {
    return (
        <div className="text-white h-full w-1/4 flex fixed right-0">
            <div className="font-serif text-6xl text-white font-semibold m-auto h-min w-min">
                <ul className="space-y-5">
                    {navigation.map((item, index) => (
                        <li key={index}>
                            <Link
                                to={item.href}
                                className="text-xl text-white hover:text-blue-200 hover:underline"
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (item.href.startsWith('/#')) {
                                        const sectionId = item.href.slice(2);
                                        scrollToSection(sectionId);
                                    } else {
                                        window.location.href = item.href;
                                    }
                                }}
                            >
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
