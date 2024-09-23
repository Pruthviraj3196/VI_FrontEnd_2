const Hero = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat w-full h-screen overflow-x-hidden flex items-center"
      style={{
        backgroundImage:
          "url('https://t4.ftcdn.net/jpg/04/34/00/97/360_F_434009755_rWZTn0C690yRQ193al21BiOjmhrNZJLH.webp')",
        backgroundSize: 'cover',
      }}
    >
      {/* Content aligned to the left */}
      <div className="bg-opacity-50 p-10 rounded-lg max-w-lg text-left ml-10">
        <h1 className="text-6xl font-bold mb-8 text-white">WELCOME TO GENEX</h1>
        <p className="text-3xl font-bold text-white">
          Innovative IT Services to Drive Your Success
        </p>
        <button className="mt-6 bg-white text-black font-bold py-4 px-12 rounded-lg">
          Explore More
        </button>
      </div>
    </section>
  );
};

export default Hero;
