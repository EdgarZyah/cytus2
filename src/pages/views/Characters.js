import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import ReactAudioPlayer from 'react-audio-player';
// Function to generate random positions
const getRandomPosition = () => ({
    top: `${Math.random() * 10}vh`,
    left: `${Math.random() * 100}vw`,
});

// Apply random position to the image
const imageStyle = getRandomPosition();
const charactersData = [
    {
        id: 'character-paff',
        name: 'paff',
        image: 'https://centralus1-mediap.svc.ms/transform/thumbnail?provider=spo&farmid=193391&inputFormat=png&cs=fFNQTw&docid=https%3A%2F%2Fmy.microsoftpersonalcontent.com%2F_api%2Fv2.0%2Fdrives%2Fb!d90-ZD0dO0SAnyUDzdh1tXx7VyWk8wtLtmvKo5UI9UOnUF6-69WZTpO1F_kd5dCr%2Fitems%2F01XHEVEJEL6JWZVXFF3BEJIROHUDB3QR6V%3Ftempauth%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbXkubWljcm9zb2Z0cGVyc29uYWxjb250ZW50LmNvbUA5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQiLCJpc3MiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiLCJuYmYiOiIxNzA1NjAwODAwIiwiZXhwIjoiMTcwNTYyMjQwMCIsImVuZHBvaW50dXJsIjoiYmJ5dURFdXR5dDVmVzZCVUJUeDRsK1pGdDNYeWVCUEREUWc0WDEwbzdiaz0iLCJlbmRwb2ludHVybExlbmd0aCI6IjE2NCIsImlzbG9vcGJhY2siOiJUcnVlIiwidmVyIjoiaGFzaGVkcHJvb2Z0b2tlbiIsInNpdGVpZCI6Ik5qUXpaV1JrTnpjdE1XUXpaQzAwTkROaUxUZ3dPV1l0TWpVd00yTmtaRGczTldJMSIsImdpdmVuX25hbWUiOiIxNCIsImZhbWlseV9uYW1lIjoiU2FuZCBEb2xsYXIiLCJuYW1laWQiOiIwIy5mfG1lbWJlcnNoaXB8dXJuJTNhc3BvJTNhdGVuYW50YW5vbiM5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQiLCJuaWkiOiJtaWNyb3NvZnQuc2hhcmVwb2ludCIsImlzdXNlciI6InRydWUiLCJjYWNoZWtleSI6IjBoLmZ8bWVtYmVyc2hpcHx1cm4lM2FzcG8lM2F0ZW5hbnRhbm9uIzkxODgwNDBkLTZjNjctNGM1Yi1iMTEyLTM2YTMwNGI2NmRhZCIsInNoYXJpbmdpZCI6Ijg5ODFhOTNjZGRkNDQ1YTk5ZDg2YzdiMDdjNDY5ZTk3IiwidHQiOiIwIiwiaXBhZGRyIjoiNTIuMTA1LjM2LjE2MSJ9.di63-_yklZuxIch4fZW8DjjOHfe-LHROhjSu2glw1tc%26version%3DPublished&width=1024&height=999999&cb=63841208283',
        bg: 'https://rayark.com/g/cytus2/assets/image/charBG_Paff.gif',
        banner: 'https://rayark.com/g/cytus2/assets/image/charLogo_paff.png',
        motion: 'https://rayark.com/g/cytus2/assets/image/motion/PAFF/Blue_glow.svg',
        motionfix: 'https://rayark.com/g/cytus2/assets/image/motion/PAFF/Audience.png',
        audio: 'https://rayark.com/g/cytus2/assets/audio/MP3/PAFF.mp3',
        description: [
            "A singer and commercial star who enjoys immense popularity; a 24 year old girl who seems born to be in the spotlight, whether it's the virtual world or the real world.",
            "The number of fans she has is astonishing. She can hold virtual concerts non-stop for a whole week and every single session will still be packed to the brim. ",
            "Her image and every single statement she makes is monitored closely by her agency. When the cameras and lights are not on, just what kind of person is she?",
        ],
    },
    {
        id: 'character-neko',
        name: 'neko',
        image: 'https://centralus1-mediap.svc.ms/transform/thumbnail?provider=spo&farmid=193391&inputFormat=png&cs=fFNQTw&docid=https%3A%2F%2Fmy.microsoftpersonalcontent.com%2F_api%2Fv2.0%2Fdrives%2Fb!d90-ZD0dO0SAnyUDzdh1tXx7VyWk8wtLtmvKo5UI9UOnUF6-69WZTpO1F_kd5dCr%2Fitems%2F01XHEVEJGUZ3BIVZXG7ZCLAX74FOQTSIBJ%3Ftempauth%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbXkubWljcm9zb2Z0cGVyc29uYWxjb250ZW50LmNvbUA5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQiLCJpc3MiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiLCJuYmYiOiIxNzA1NjExNjAwIiwiZXhwIjoiMTcwNTYzMzIwMCIsImVuZHBvaW50dXJsIjoiTVZSdnNBOUFKN1JiZEh6NkNjRGI0Y0hmQndUeXJTYzhuYk9UOXRVVlRzND0iLCJlbmRwb2ludHVybExlbmd0aCI6IjE2NCIsImlzbG9vcGJhY2siOiJUcnVlIiwidmVyIjoiaGFzaGVkcHJvb2Z0b2tlbiIsInNpdGVpZCI6Ik5qUXpaV1JrTnpjdE1XUXpaQzAwTkROaUxUZ3dPV1l0TWpVd00yTmtaRGczTldJMSIsImdpdmVuX25hbWUiOiIxNCIsImZhbWlseV9uYW1lIjoiU2FuZCBEb2xsYXIiLCJuYW1laWQiOiIwIy5mfG1lbWJlcnNoaXB8dXJuJTNhc3BvJTNhdGVuYW50YW5vbiM5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQiLCJuaWkiOiJtaWNyb3NvZnQuc2hhcmVwb2ludCIsImlzdXNlciI6InRydWUiLCJjYWNoZWtleSI6IjBoLmZ8bWVtYmVyc2hpcHx1cm4lM2FzcG8lM2F0ZW5hbnRhbm9uIzkxODgwNDBkLTZjNjctNGM1Yi1iMTEyLTM2YTMwNGI2NmRhZCIsInNoYXJpbmdpZCI6Ijg5ODFhOTNjZGRkNDQ1YTk5ZDg2YzdiMDdjNDY5ZTk3IiwidHQiOiIwIiwiaXBhZGRyIjoiNTIuMTA1LjMyLjE0NyJ9.6c4Cht6sizqdMYVyvRe6g6qPlRsPqiIArouCiWic_zI%26version%3DPublished&width=1024&height=999999&cb=63841208283',
        bg: 'https://rayark.com/g/cytus2/assets/image/charBG_Neko.gif',
        banner: 'https://rayark.com/g/cytus2/assets/image/charLogo_neko.png',
        motion: 'https://rayark.com/g/cytus2/assets/image/close_popup.png',
        motionfix: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/HD_transparent_picture.png/1200px-HD_transparent_picture.png',
        audio: 'https://rayark.com/g/cytus2/assets/audio/MP3/NEKO.mp3',
        description: [
            "A popular streamer who has a group of diehard fans.",
            "Enjoys streaming herself playing video games and chatting with her audience about all kinds of gossip.",
            "Represents chaos and disorder in the internet world, yet at the same time symbolizes creativity and possibility.",
        ],
    },
    {
        id: 'character-robo',
        name: 'robo',
        image: 'https://centralus1-mediap.svc.ms/transform/thumbnail?provider=spo&farmid=193391&inputFormat=png&cs=fFNQTw&docid=https%3A%2F%2Fmy.microsoftpersonalcontent.com%2F_api%2Fv2.0%2Fdrives%2Fb!d90-ZD0dO0SAnyUDzdh1tXx7VyWk8wtLtmvKo5UI9UOnUF6-69WZTpO1F_kd5dCr%2Fitems%2F01XHEVEJEVFWKPJKWLGFF2MDSAH2HITMOP%3Ftempauth%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbXkubWljcm9zb2Z0cGVyc29uYWxjb250ZW50LmNvbUA5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQiLCJpc3MiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiLCJuYmYiOiIxNzA1NjExNjAwIiwiZXhwIjoiMTcwNTYzMzIwMCIsImVuZHBvaW50dXJsIjoiZHNzZ01EYlAyNnFDdEZEem8wRHpxN2FYN1lQSVAxTGdBa0M4UklUWElZQT0iLCJlbmRwb2ludHVybExlbmd0aCI6IjE2NCIsImlzbG9vcGJhY2siOiJUcnVlIiwidmVyIjoiaGFzaGVkcHJvb2Z0b2tlbiIsInNpdGVpZCI6Ik5qUXpaV1JrTnpjdE1XUXpaQzAwTkROaUxUZ3dPV1l0TWpVd00yTmtaRGczTldJMSIsImdpdmVuX25hbWUiOiIxNCIsImZhbWlseV9uYW1lIjoiU2FuZCBEb2xsYXIiLCJuYW1laWQiOiIwIy5mfG1lbWJlcnNoaXB8dXJuJTNhc3BvJTNhdGVuYW50YW5vbiM5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQiLCJuaWkiOiJtaWNyb3NvZnQuc2hhcmVwb2ludCIsImlzdXNlciI6InRydWUiLCJjYWNoZWtleSI6IjBoLmZ8bWVtYmVyc2hpcHx1cm4lM2FzcG8lM2F0ZW5hbnRhbm9uIzkxODgwNDBkLTZjNjctNGM1Yi1iMTEyLTM2YTMwNGI2NmRhZCIsInNoYXJpbmdpZCI6Ijg5ODFhOTNjZGRkNDQ1YTk5ZDg2YzdiMDdjNDY5ZTk3IiwidHQiOiIwIiwiaXBhZGRyIjoiNTIuMTA1LjQ3LjE1MiJ9.9ppSStK04eGtO6E77BnX1gUZmOjMDNxd-HxrioNn00k%26version%3DPublished&width=1024&height=999999&cb=63841208284',
        bg: 'https://rayark.com/g/cytus2/assets/image/charBG_ROBO.gif',
        banner: 'https://rayark.com/g/cytus2/assets/image/charLogo_robo.png',
        motion: 'https://rayark.com/g/cytus2/assets/image/motion/ROBO/Electrocardiogram_BLUE2.gif',
        motionfix: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/HD_transparent_picture.png/1200px-HD_transparent_picture.png',
        audio: 'https://rayark.com/g/cytus2/assets/audio/MP3/ROBO_Head.mp3',
        description: [
            "A weird character sporting mechanical speech and judges everything based solely on data.",
            "An analytics nerd; dabbles with all kinds of information on the net. Reposts articles that caught his eye to his own SNS page.His occasional radio show has garnered a minor following.",
        ],
    },
    {
        id: 'character-xenon',
        name: 'Xenon',
        image: 'https://1drv.ms/i/c/d6206c5aea9e126c/IQMWlWtt3GKLSLJveOxl4ahaAdgjD0e8iPjCKtcHh23Onco?width=1024',
        bg: 'https://rayark.com/g/cytus2/assets/image/charBG_Xenon.gif',
        banner: 'https://rayark.com/g/cytus2/assets/image/charLogo_xenon.png',
        motion: 'https://rayark.com/g/cytus2/assets/image/motion/Xenon/Skull_glow.svg',
        motionfix: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/HD_transparent_picture.png/1200px-HD_transparent_picture.png',
        audio: 'https://rayark.com/g/cytus2/assets/audio/MP3/Xenon.mp3',
        description: [
            "A system security administrator who works at A.R.C; has access to lower levels of the system.",
            "A highly skilled programmer and leader/guitarist of the personal band Xenon.",
            "Has a strong sense of justice and feels the need to protect others. Desires to rid the world of crime through his own methods.",
        ],
    },
    {
        id: 'character-conner',
        name: 'conner',
        image: 'https://centralus1-mediap.svc.ms/transform/thumbnail?provider=spo&farmid=193391&inputFormat=png&cs=fFNQTw&docid=https%3A%2F%2Fmy.microsoftpersonalcontent.com%2F_api%2Fv2.0%2Fdrives%2Fb!d90-ZD0dO0SAnyUDzdh1tXx7VyWk8wtLtmvKo5UI9UOnUF6-69WZTpO1F_kd5dCr%2Fitems%2F01XHEVEJH6USVFCD6F7RHYKBWOW2N7X66V%3Ftempauth%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbXkubWljcm9zb2Z0cGVyc29uYWxjb250ZW50LmNvbUA5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQiLCJpc3MiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiLCJuYmYiOiIxNzA1NjExNjAwIiwiZXhwIjoiMTcwNTYzMzIwMCIsImVuZHBvaW50dXJsIjoiRzE3cmRLa3VGUHllWG9mUEZaNUgvNlRWditvcjczRFpDbzFOVjFya3dMcz0iLCJlbmRwb2ludHVybExlbmd0aCI6IjE2NCIsImlzbG9vcGJhY2siOiJUcnVlIiwidmVyIjoiaGFzaGVkcHJvb2Z0b2tlbiIsInNpdGVpZCI6Ik5qUXpaV1JrTnpjdE1XUXpaQzAwTkROaUxUZ3dPV1l0TWpVd00yTmtaRGczTldJMSIsImdpdmVuX25hbWUiOiIxNCIsImZhbWlseV9uYW1lIjoiU2FuZCBEb2xsYXIiLCJuYW1laWQiOiIwIy5mfG1lbWJlcnNoaXB8dXJuJTNhc3BvJTNhdGVuYW50YW5vbiM5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQiLCJuaWkiOiJtaWNyb3NvZnQuc2hhcmVwb2ludCIsImlzdXNlciI6InRydWUiLCJjYWNoZWtleSI6IjBoLmZ8bWVtYmVyc2hpcHx1cm4lM2FzcG8lM2F0ZW5hbnRhbm9uIzkxODgwNDBkLTZjNjctNGM1Yi1iMTEyLTM2YTMwNGI2NmRhZCIsInNoYXJpbmdpZCI6Ijg5ODFhOTNjZGRkNDQ1YTk5ZDg2YzdiMDdjNDY5ZTk3IiwidHQiOiIwIiwiaXBhZGRyIjoiNTIuMTA1LjM2LjE2MyJ9.KIl_XbRtF5RQ8n9nFfzOo80CewrwhO5bzsHk84iuhA8%26version%3DPublished&width=1024&height=999999&cb=63841208280',
        bg: 'https://rayark.com/g/cytus2/assets/image/charBG_ConneR.gif',
        banner: 'https://rayark.com/g/cytus2/assets/image/charLogo_conner.png',
        motion: 'https://rayark.com/g/cytus2/assets/image/motion/ConneR/ConneR_Note_bg.svg',
        motionfix: 'https://rayark.com/g/cytus2/assets/image/motion/ConneR/ConneR_Note_bg.svg',
        audio: 'https://rayark.com/g/cytus2/assets/audio/MP3/ConneR.mp3',
        description: [
            "A collector, performer and archaeologist who specializes in ancient instruments and fuses them into his music. ",
            "A middle-aged gentleman who acts in a graceful and elegant manner.",
            "Often exploits loopholes in the law in order to maintain the costs of his research. Has a family history deeply connected with the reform of civilization and past technology.",
        ],
    },
    {
        id: 'character-cherry',
        name: 'cherry',
        image: 'https://centralus1-mediap.svc.ms/transform/thumbnail?provider=spo&farmid=193391&inputFormat=png&cs=fFNQTw&docid=https%3A%2F%2Fmy.microsoftpersonalcontent.com%2F_api%2Fv2.0%2Fdrives%2Fb!d90-ZD0dO0SAnyUDzdh1tXx7VyWk8wtLtmvKo5UI9UOnUF6-69WZTpO1F_kd5dCr%2Fitems%2F01XHEVEJAQ3ZQB4APN5BEZPDB4AN5MTL2W%3Ftempauth%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbXkubWljcm9zb2Z0cGVyc29uYWxjb250ZW50LmNvbUA5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQiLCJpc3MiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiLCJuYmYiOiIxNzA1NjExNjAwIiwiZXhwIjoiMTcwNTYzMzIwMCIsImVuZHBvaW50dXJsIjoiTm9YeWFXdWIyV3ZuNktvb2d5WDBZNzR5a1M0MFk2cGFiREF3TEFNc29Zcz0iLCJlbmRwb2ludHVybExlbmd0aCI6IjE2NCIsImlzbG9vcGJhY2siOiJUcnVlIiwidmVyIjoiaGFzaGVkcHJvb2Z0b2tlbiIsInNpdGVpZCI6Ik5qUXpaV1JrTnpjdE1XUXpaQzAwTkROaUxUZ3dPV1l0TWpVd00yTmtaRGczTldJMSIsImdpdmVuX25hbWUiOiIxNCIsImZhbWlseV9uYW1lIjoiU2FuZCBEb2xsYXIiLCJuYW1laWQiOiIwIy5mfG1lbWJlcnNoaXB8dXJuJTNhc3BvJTNhdGVuYW50YW5vbiM5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQiLCJuaWkiOiJtaWNyb3NvZnQuc2hhcmVwb2ludCIsImlzdXNlciI6InRydWUiLCJjYWNoZWtleSI6IjBoLmZ8bWVtYmVyc2hpcHx1cm4lM2FzcG8lM2F0ZW5hbnRhbm9uIzkxODgwNDBkLTZjNjctNGM1Yi1iMTEyLTM2YTMwNGI2NmRhZCIsInNoYXJpbmdpZCI6Ijg5ODFhOTNjZGRkNDQ1YTk5ZDg2YzdiMDdjNDY5ZTk3IiwidHQiOiIwIiwiaXBhZGRyIjoiNTIuMTA1LjE1OC4xNDYifQ.a7IC4CBeR5WyNSpkB1QwIdX7njLAc4lL5Ou9PKz0ghU%26version%3DPublished&width=1024&height=999999&cb=63841208280',
        bg: 'https://rayark.com/g/cytus2/assets/image/charBG_Cherry.gif',
        banner: 'https://rayark.com/g/cytus2/assets/image/charLogo_cherry.png',
        motion: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/HD_transparent_picture.png/1200px-HD_transparent_picture.png',
        motionfix: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/HD_transparent_picture.png/1200px-HD_transparent_picture.png',
        audio: 'https://rayark.com/g/cytus2/assets/audio/MP3/Cherry.mp3',
        description: [
            "The leader and guitarist for the band Cherry PuNK",
            "Had a complicated and eventful relationship with Xenon in the past",
            "The two were brought together again by the Æsir events",
            "What is waiting ahead for them? Is it the truth, or another nightmare?",
        ],
    },
    // Add data for other characters similarly
];

const Character = ({ name, image, bg, banner, motionfix, motion, description, audio }) => (
    <div className="character-container w-full h-screen py-48 text-left flex flex-col items-center bg-black">
        <div className='w-full md:w-1/2 h-min flex flex-wrap md:flex-row mx-auto'>
            <img src={image} alt={`${name} image`} className="character-image w-full md:w-1/2 md:h-min md:absolute md:right-80 top-32 z-10" />
            <img src={banner} alt={`${name} banner`} className="character-banner pt-8 pl-8 w-40 md:pt-0 h-min absolute" />
            <img src={bg} alt={`${name} background`} className="character-bg w-full h-60 md:h-80 opacity-50" />
            

            <div className="character-description absolute md:w-2/6 pt-72 md:pt-36 p-2 z-20 text-gray-400">
                {description.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>
            <img style={imageStyle} src={motion} className="character-image w-10 rotate-45 h-min absolute right-60 pt-10 " />
        </div>
        <img src={motionfix} className="character-image w-full h-min absolute bottom-0 " />
    </div>
);


const Characters = () => (
    <Swiper
        pagination={Pagination}
        modules={[Pagination]}
        noSwiping={true}
        slidesPerView={1}
    >
        {charactersData.map((character) => (
            <SwiperSlide key={character.id}>
                <Character {...character} />
            </SwiperSlide>
        ))}
    </Swiper>
);

export default Characters;
