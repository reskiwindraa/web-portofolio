import React from "react";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMediumSquare,
  AiFillTikTok,
} from "react-icons/ai";
import { FaSquareDribbble } from "react-icons/fa6";



const Social = () => {
  return (
    
    <div className="mt-32 mb-32 rounded-4xl border-6 border-primary-light p-10 bg-primary">
      <h1 className="text-4xl font-bold text-center text-text-inverse">
        Found me in
      </h1>
      <p className="font-medium text-center text-text-inverse">
        Follow me on social media
      </p>

      <div className="flex flex-wrap justify-center gap-4 pt-10">
        <a
          href="https://www.instagram.com/resstudio_/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-col items-center justify-center
                  w-24 h-24
                  bg-primary-medium rounded-xl
                  hover:scale-110 transition-transform
                  hover:shadow-xl
                  hover:bg-primary-hover
                  will-change-transform
                  hover:origin-center
                  hover:rotate-10"
        >
          {/* <div className="inline-flex flexc items-center justify-center"> */}
          <AiFillInstagram className="w-10 h-10 text-text-inverse" />
          <p className="mt-2 text-text-inverse font-bold text-md">Instagram</p>
          {/* </div> */}
        </a>

        <a
          href="https://www.linkedin.com/in/reskiwindradiaksa/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-col items-center justify-center
                  w-24 h-24
                  bg-primary-medium rounded-xl
                  hover:scale-110 transition-transform
                  hover:shadow-xl
                  hover:bg-primary-hover
                  will-change-transform
                  hover:origin-center
                  hover:rotate-10"
        >
          <AiFillLinkedin className="w-10 h-10 text-text-inverse" />
          <p className="mt-2 text-text-inverse font-bold text-md">Linkedin</p>
        </a>

        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-col items-center justify-center
                  w-24 h-24
                  bg-primary-medium rounded-xl
                  hover:scale-110 transition-transform
                  hover:shadow-xl
                  hover:bg-primary-hover
                  will-change-transform
                  hover:origin-center
                  hover:rotate-10"
        >
          <AiFillTikTok className="w-10 h-10 text-text-inverse" />
          <p className="mt-2 text-text-inverse font-bold text-md">Tiktok</p>
        </a>

        <a
          href="https://medium.com/@reskiwindra"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-col items-center justify-center
                  w-24 h-24
                  bg-primary-medium rounded-xl
                  hover:scale-110 transition-transform
                  hover:shadow-xl
                  hover:bg-primary-hover
                  will-change-transform
                  hover:origin-center
                  hover:rotate-10"
        >
          <AiFillMediumSquare className="w-10 h-10 text-text-inverse" />
          <p className="mt-2 text-text-inverse font-bold text-md">Medium</p>
        </a>

        <a
          href="https://dribbble.com/Kkiiii"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-col items-center justify-center
                  w-24 h-24
                  bg-primary-medium rounded-xl
                  hover:scale-110 transition-transform
                  hover:shadow-xl
                  hover:bg-primary-hover
                  will-change-transform
                  hover:origin-center
                  hover:rotate-10"
        >
          <FaSquareDribbble className="w-10 h-10 text-text-inverse" />
          <p className="mt-2 text-text-inverse font-bold text-md">Dribble</p>
        </a>
      </div>
    </div>
  );
  return;
};
export default Social;
