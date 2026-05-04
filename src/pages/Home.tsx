import React from 'react';
import { Link } from 'react-router-dom';
import LazyImage from '../components/LazyImage';
import Button from '../components/Button';

// import image correctly
import profileImg from "../assets/profile.png";
const Home: React.FC = () => {
  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      <main
        id="main-content"
        className="pt-16 min-h-screen flex items-center justify-center px-6 lg:px-12"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-7xl font-black text-[#0F172A] mb-8 leading-tight">
                <span className="text-[#3B82F6]">
                  Purva Ahirrao
                </span>
              </h1>

              <h2 className="text-2xl lg:text-3xl font-bold text-[#3B82F6] mb-6">
                Full Stack Developer
              </h2>

              <p className="text-[#4A5568] mb-8 text-lg">
                I build scalable web applications using modern technologies like Node.js, Express, and MongoDB.
              </p>

              <Link to="/projects">
               <Button onClick={() => {}} variant="primary" size="large">

  View Projects

</Button>
              </Link>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-64 h-64 lg:w-80 lg:h-80">
                <LazyImage
                  src={profileImg}
                  alt="Purva Ahirrao"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

          </div>
        </div>
      </main>
    </>
  );
};

export default Home;