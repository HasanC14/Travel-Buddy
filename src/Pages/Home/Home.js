import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";

const Home = () => {
  const places = useLoaderData();
  return (
    <div className="mt-20">
      <div className="grid md:grid-cols-3 grid-cols-1 gap -4">
        {places.map((place) => (
          <div className="flex justify-center" key={place.id}>
            <Card place={place}></Card>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button className="inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span className="px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            See More Places
          </span>
        </button>
      </div>
    </div>
  );
};

export default Home;
