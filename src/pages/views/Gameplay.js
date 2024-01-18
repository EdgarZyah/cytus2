import React from 'react';

const Gameplay = () => {
    return (
        <div className="w-full min-h-full py-12 sm:py-24 text-left flex flex-col items-center bg-black space-y-5">
            <h1 className='text-2xl'>Gameplay</h1>
            <div className='flex flex-col px-8 md:px-0 sm:flex-row w-full md:w-3/4 h-full space-y-5 md:space-y-0 md:space-x-5'>
                <iframe className='w-full md:w-1/2 h-48 sm:h-80'
                    src="https://www.youtube.com/embed/QauF1meRKEY?si=uDJpbpNLd5GS8xad"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                    gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <iframe className='w-full md:w-1/2 h-48 sm:h-80'
                    src="https://www.youtube.com/embed/nvLr70HkmLQ?si=CY2UcFykAsHY-ewd"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                    gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
        </div>
    );
};

export default Gameplay;
