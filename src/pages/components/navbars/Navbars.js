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
                            className="w-40 md:w-80 h-auto"
                            alt="cytus icon"
                        />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
