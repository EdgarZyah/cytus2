import React, { useState, useEffect } from 'react';

const navigation = [
];

function smoothScrollTo(targetId) {
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach((link) => {
            link.addEventListener('click', (e) => {
                e.preventDefault(); // Prevent the default behavior of the anchor tag
                const targetId = link.getAttribute('href');
                smoothScrollTo(targetId);
            });
        });
    }, []); // Adding an empty dependency array ensures this effect runs once on mount

    return (
        <nav className="py-2 opacity-90 fixed">
            <div className="mx-auto px-2 sm:px-6 lg:px-8 sticky top-20">
                <div className="relative flex h-16 items-center justify-between">
                    <a href="/#" className="font-serif text-6xl text-white font-semibold">
                        <img
                            src="https://rayark.com/g/cytus2/assets/image/logo_large.png"
                            className="w-80 h-auto"
                            alt="Nier Icon"
                        />
                    </a>
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="block text-4xl text-white hover:text-NieR focus:outline-none"
                        >
                            ☰
                        </button>
                    </div>
                    <div className="hidden lg:flex space-x-8 lg:space-x-4 lg:block">
                        {navigation.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className="text-2xl text-white hover:text-NieR"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
                {isOpen && (
                    <div className="lg:hidden">
                        <ul className="mt-2 space-y-2">
                            {navigation.map((item, index) => (
                                <li key={index}>
                                    <a
                                        href={item.href}
                                        className="block text-2xl text-white hover:text-NieR"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
