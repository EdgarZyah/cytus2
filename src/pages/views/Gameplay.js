import React from 'react';

const Gameplay = () => {
    return (
        <div className="w-full h-screen py-48 text-left flex flex-col items-center bg-black space-y-5">
            <h1 className='text-2xl'>Gameplay</h1>
            <div className='flex w-3/4 h-screen space-x-5'>
                <iframe className='w-1/2' src="https://www.youtube.com/embed/QauF1meRKEY?si=uDJpbpNLd5GS8xad"
                    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <iframe className='w-1/2' src="https://www.youtube.com/embed/nvLr70HkmLQ?si=CY2UcFykAsHY-ewd"
                    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

        </div>

    );
};

export default Gameplay;
