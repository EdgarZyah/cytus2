import React, { useEffect, useState } from 'react';
import Sidebar from '../components/sidebars/Sidebar';
import Navbar from '../components/navbars/Navbars';
import Characters from './Characters';
import Gameplay from './Gameplay';
import Download from './Download';
const Home = () => {
    const backgroundGameImageUrl = 'https://rayark.com/g/cytus2/assets/image/LOGO_TITLE.gif';

    const hero1 = {
        backgroundImage: `url(${backgroundGameImageUrl})`,
        height: '100vh',
        backgroundSize: 'cover',
        top: 0,
        left: 0,
        width: '100%',
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        document.title = 'Cytus II';
    }, []);

    // Loading screen
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate the loading process
        const loadingTimer = setTimeout(() => {
            setLoading(false);
        }, 6300);

        return () => clearTimeout(loadingTimer);
    }, []);

    const [quote, setQuote] = useState('');

    useEffect(() => {
        const fetchQuote = async () => {
            try {
                const response = await fetch('https://api.quotable.io/random');
                const data = await response.json();
                setQuote(data.content);
            } catch (error) {
                console.error('Error fetching quote:', error);
            }
        };

        fetchQuote();
    }, []);

    return (
        <div id='1' style={hero1} className="flex-row relative bg-cover bg-center w-full h-full  items-center justify-center text-white">
            {loading && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
                    <img
                        src="https://media1.tenor.com/m/Bx7NKZ0YFYMAAAAd/cytusii-cytus.gif"
                        className="w-full h-full object-cover opacity-100 transition-opacity duration-3000 ease-out"
                        alt="Loading GIF"
                    />
                </div>
            )}

            <header id="header" className="absolute inset-x-0 top-0 z-50">
                <nav>
                    <Navbar />
                </nav>
                <nav className="sticky absolute m-auto w-min h-full flex flex-col items-center">
                    <Sidebar />
                </nav>
            </header>
            <section id="Landingpage" className="w-full h-full flex items-center justify-center">
                <div className="flex-row w-1/2 space-y-3 flex-row">
                    <audio
                        autoPlay
                        loop
                        className="w-full h-full object-cover"
                        src="https://rayark.com/g/cytus2/assets/audio/Mode_Selector.mp3"
                        alt="backsound"
                    ></audio>
                    <div className="flex items-center justify-center ">
                        <div className="flex items-center justify-center h-min ">
                            <img
                                src="https://rayark.com/g/cytus2/assets/image/prod_visual.png"
                                className="w-4/6 h-auto"
                                alt="Characters"
                            />
                        </div>
                        <div className="flex items-center justify-center h-min absolute pt-80">
                            <img
                                src="https://rayark.com/g/cytus2/assets/image/logo_large.png"
                                className="w-96 h-auto "
                                alt="Cytus-Icon"
                            />
                        </div>
                    </div>
                    <div className="flex-row items-center justify-center text-lg text-center">
                        <p className="text-lg text-center">
                            The interconnected internet platforms have become more substantial than any country or corporation.
                            Humans have redefined the “net” and how we interact with it.
                        </p>
                        <p>___________</p>
                        <blockquote>
                            <p>{quote}</p>
                        </blockquote>
                    </div>
                </div>
            </section>
            <section id="2" className="w-full h-full">
                <Characters />
            </section>
            <section id="3" className="w-full h-full">
                <Gameplay />
            </section>
            <section id="4" className="w-full h-full">
                <Download />
            </section>
        </div>
    );
};

export default Home;
