import React from "react";

const Section = () => {
  return (
    <div>
      {/* Section 1 */}
      <div className="flex flex-col items-center gap-10 mt-20 px-4 lg:px-10">
        <h1 className="font-extrabold text-3xl md:text-5xl text-center text-gray-800 leading-tight">
          AI-DRIVEN INNOVATION AT GENEX
        </h1>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 mt-16 items-center justify-center">
          <img
            className="w-full sm:w-[400px] md:w-[500px] h-[250px] md:h-[350px] object-cover rounded-xl shadow-lg"
            src="https://as1.ftcdn.net/v2/jpg/05/68/95/90/1000_F_568959074_2GvHwpXcfl3bQpuM0tt2bLGcJl5w0Vi7.jpg"
            alt="AI Innovation"
          />
          <div className="w-full lg:w-[400px] text-center lg:text-left">
            <h2 className="font-semibold text-xl mb-2 text-gray-900">
              Leading with AI for Smarter Solutions
            </h2>
            <p className="text-gray-700 mb-4">
              At Genex, we are at the forefront of leveraging Artificial Intelligence (AI) to drive innovation and enhance our service offerings. Our commitment to integrating cutting-edge AI technologies enables us to deliver smarter, more efficient solutions that propel our clients towards success.
            </p>
            <button className="bg-slate-500 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 mt-20 items-center justify-center px-4 lg:px-10">
        <div className="w-full lg:w-[400px] text-center lg:text-left">
          <h2 className="font-semibold text-xl mb-2 text-gray-900">
            Adapting to the AI Revolution
          </h2>
          <p className="text-gray-700 mb-4">
            Genex is committed to continuous learning and adaptation in the ever-evolving field of AI. We invest in research and development to stay ahead of the curve, ensuring our clients benefit from the latest advancements in AI technology.
          </p>
          <button className="bg-black text-white py-2 px-6 rounded-lg mr-4 hover:bg-gray-800 transition duration-300">
            Get Started
          </button>
        </div>
        <img
          className="w-full sm:w-[400px] md:w-[500px] h-[250px] md:h-[350px] object-cover rounded-xl shadow-lg"
          src="https://img.freepik.com/premium-photo/woman-is-seen-touching-screen-with-her-finger-this-image-can-be-used-illustrate-technology-interaction-communication_153912-244673.jpg"
          alt="AI Technology"
        />
      </div>

      {/* Section 3 */}
      <div className="mt-24 px-4 lg:px-10">
        <h1 className="font-extrabold text-3xl md:text-4xl text-center text-gray-800 leading-tight">
          TRANSFORM YOUR BUSINESS WITH AI-POWERED ANALYTICS
        </h1>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mt-10 items-center justify-center">
          <div className="w-full lg:w-[400px] text-center lg:text-left">
            <p className="text-gray-700 mb-6">
              Empower your business with AI-driven insights and seamless data integration. Explore new associations, access comprehensive analytics, and enhance collaboration. Optimize data management with advanced AI-powered ETL tools and robust security. Streamline reporting and enhance visualization with AI-powered tools.
            </p>
            <div className="mt-4">
              <button className="bg-black text-white py-2 px-6 rounded-lg mr-4 hover:bg-gray-800 transition duration-300">
                Get Started
              </button>
              <button className="bg-gray-400 text-white py-2 px-6 rounded-lg hover:bg-gray-500 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
          <img
            className="w-full sm:w-[450px] md:w-[550px] h-[250px] md:h-[400px] object-cover rounded-xl shadow-lg"
            src="https://www.realmenrealstyle.com/wp-content/uploads/2024/02/Tips-To-Improve-Public-Speaking-Skills-How-To-Prepare-And-Run-a-Good-Presentation.jpg"
            alt="AI Analytics"
          />
        </div>
      </div>
    </div>
  );
};

export default Section;
