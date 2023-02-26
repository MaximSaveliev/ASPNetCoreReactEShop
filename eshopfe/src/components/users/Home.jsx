import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


export default function Home() {
  return (
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <p className="text-3xl text-gray-700 font-bold mb-5">
        Welcome! <FontAwesomeIcon icon={faHeart} size="2xl" color="red" />
      </p>
      <p className="text-gray-500 text-lg">
        React and Tailwind CSS in action
      </p>
    </div>
  )
}
