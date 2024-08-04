import React from "react";
import { FaStar } from "react-icons/fa";

export default function About() {
  return (
    <div>
      <div className="min-h-screen bg-teal-600 flex justify-center items-center text-center">
        <div>
          <h1 className=" size text-white font-extrabold mb-4 ">
            ABOUT COMPONENT
          </h1>
          <div className="relative flex justify-center items-center mb-2">
        <div className="star text-xl relative">
          <span className=" text-white text-2xl star-icon">{<FaStar />}</span>
        </div>
      </div>
          <div className="flex justify-center items-center gap-x-10">
            <p className=" text-white">
              Freelancer is a free bootstrap theme created by Route. The
              download<br /> includes the complete  source  files including HTML, CSS,
              and JavaScript as well <br /> as optional SASS stylesheets for easy
              customization.
            </p>
            <p className="text-white">
              Freelancer is a free bootstrap theme created by Route. The
              download <br /> includes the complete source  files including HTML, CSS,
              and JavaScript as well <br /> as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
