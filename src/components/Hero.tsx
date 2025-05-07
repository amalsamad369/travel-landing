import React from 'react'

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <header className="pt-20 flex-grow h-screen bg-[url('https://cdn.pixabay.com/photo/2018/03/12/20/07/maldives-3220702_640.jpg')] bg-cover bg-center flex flex-col justify-center items-center text-white text-center px-4">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 drop-shadow-lg">
          Discover Your Next Adventure
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl drop-shadow">
          Handpicked tours, unforgettable experiences, and memories to last a
          lifetime.
        </p>
        <a
          href="#destinations"
          className="bg-orange-500 hover:bg-orange-600 transition-colors font-semibold py-5 px-8 rounded-full shadow-lg text-white"
        >
          Explore Destinations
        </a>
      </header>
    </>
  );
}

export default Hero