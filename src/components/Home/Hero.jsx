const Hero = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat text-center p-10 w-[100%] h-screen overflow-x-hidden"
      style={{
        backgroundImage: `url('https://t4.ftcdn.net/jpg/04/34/00/97/360_F_434009755_rWZTn0C690yRQ193al21BiOjmhrNZJLH.webp')`,
      }}
    >
      <div className=" bg-opacity-50 mt-40 p-10 rounded-lg">
        <h1 className="text-4xl font-bold mb-4 text-white">WELCOME TO GENEX</h1>
        <p className="text-lg text-white">Innovative IT Services to Drive Your Success</p>
        <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg">
          Explore More
        </button>
      </div>
    </section>
  );
};

export default Hero;
