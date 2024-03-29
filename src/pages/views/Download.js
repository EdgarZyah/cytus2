import React from 'react';

    const handleDownload = (url) => {
        window.location.href = url;
    };

    const Download = () => {
        return (
            <div className="w-full h-full md:h-full py-0 text-left flex flex-col items-center bg-black space-y-5">
                <div className='text-center w-1/2 pb-20'>
                    <h1 className='text-4xl text-bold'>Download</h1>
                </div>
                <div className='flex-wrap space-y-12 w-full px-8 md:w-1/2'>
                    <div className='w-full space-y-5 my-auto flex-row'>
                        <img className='w-96 my-auto h-full' src='https://rayark.com/g/cytus2/assets/image/prod_cytus.png'></img>
                        <p className='text-justify'>Cytus II is a music rhythm game created by Rayark. Based on the instinctively simple gameplay
                            of its predecessor " Cytus", this sequel added more types of notes to enhance the gameplay.
                            The graphics and story of the game were rendered to give a richer presentation. We included
                            a large variety of music in the game. In fact, it's the largest in Rayark's history. The songs
                            are composed by creators from all across the world: Japan, Korea, the US, Europe, Taiwan and more.
                            These songs are rich in both quality and quantity. We are confident that this game will live up to
                            the hype and expectations of millions.</p>
                    </div>
                    <div className='space-x-5 m-auto flex'>
                        <img
                            className='w-40 h-min cursor-pointer'
                            src='https://rayark.com/g/cytus2/assets/image/download_apple.svg'
                            onClick={() => handleDownload('https://apps.apple.com/us/app/cytus-ii/id1290687550')}
                            alt="Download from Apple Store"
                        />
                        <img
                            className='w-40 h-min cursor-pointer'
                            src='https://rayark.com/g/cytus2/assets/image/download_google.svg'
                            onClick={() => handleDownload('https://play.google.com/store/apps/details?id=com.rayark.cytus2&hl=en_US&pli=1')}
                            alt="Download from Google Play"
                        />
                    </div>
                </div>
            </div>

        );
    };

    export default Download;
