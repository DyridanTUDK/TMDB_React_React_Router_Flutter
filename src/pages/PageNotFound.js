import React from "react";
import img404 from "../assets/images/pagenotfound.png";
import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">
            404, Oops!
          </p>
          <div className="max-w-lg">
            <img className="rounded" src={img404} alt="404 image" />
          </div>
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
            <button className="w-64 dark:text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded p-3 hover:font-medium">
              Back To Cinemate
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};
