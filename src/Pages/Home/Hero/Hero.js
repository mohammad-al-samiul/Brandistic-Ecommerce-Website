import React from 'react';
import image1 from '../../../Assets/images/Blazer.png';
import bgImage from '../../../Assets/images/Copy-of-Unnamed-Design-1.png';

const Hero = () => {
  const heroStyle = {
    backgroundImage: `url(${bgImage})`
  };
  return (
    <div>
      <div className="hero w-full h-max bg-top bg-cover bg-no-repeat" style={heroStyle}>
        <div className="hero-content flex-col-reverse  lg:flex-row-reverse p-0">
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <img src={image1} className="w-1/2     rounded-lg " />
          </div>
          <div className="lg:w-1/2 p-5">
            <h3 className="text-blue-600">Top Sale on This Week</h3>
            <h1 className="mt-2 text-2xl lg:text-5xl font-bold">
              {' '}
              Explore Amazing Fashionable Mens Casual Premium T-Shirt{' '}
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
              exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <div className="flex">
              <button className="btn bg-blue-500 hover:bg-blue-500 text-white">Shop Now</button>
              <button className="ms-5 btn bg-red-500 hover:bg-red-500 text-white">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
