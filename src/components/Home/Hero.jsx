import Ofcimg from "../../assets/ofcimg2.jpg";

const Hero = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat w-full h-screen overflow-x-hidden flex items-center"
      style={{
        backgroundImage: `url(${Ofcimg})`,
        backgroundSize: 'cover',
      }}
    >
      {/* Content aligned to the left on large screens, centered on small screens */}
      <div className="bg-opacity-50 p-10 rounded-lg max-w-lg text-left ml-10 md:ml-20 lg:ml-40 sm:ml-5 sm:max-w-sm sm:text-center">
        <h1 className="text-4xl lg:text-6xl font-bold mb-4 lg:mb-8 text-white">
          WELCOME TO GENEX
        </h1>
        <p className="text-xl lg:text-3xl font-bold text-white">
          Innovative IT Services to Drive Your Success
        </p>
        <button className="mt-6 bg-white text-black font-bold py-3 px-8 lg:py-4 lg:px-12 rounded-lg">
          Explore More
        </button>
      </div>
    </section>
  );
};

export default Hero;
