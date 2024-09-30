import React from "react";

const Whatweprovide = () => {
  return (
    <div className="flex flex-col items-center py-10 px-5">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-10 text-center">WHAT WE PROVIDE</h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-6xl">
        {/* First Section */}
        <div className="flex flex-col items-center text-center p-5 bg-white shadow-lg rounded-lg">
          <img
            src="https://img.freepik.com/free-photo/business-colleagues-discussing-work-during-coffee-break_1262-17227.jpg?t=st=1727092618~exp=1727093218~hmac=22924d6d9f08f84407eb88b78343fe8386c446b2d57d04144171c09a6d166142"
            alt="Service 1"
            className="mb-5 rounded-2xl w-full h-52 object-cover"
          />
          <h2 className="text-xl font-semibold mb-3">TRAININGS / INTERNSHIPS</h2>
          <p className="mb-5">
            Experience Our Unique Training Approach. If you're ready to advance your career in BI and Analytics, this is the perfect place to build a solid foundation and get ahead.
          </p>
          <div>
            <button className="bg-black text-white px-4 py-2 rounded-lg mr-3">
              Learn More
            </button>
            <button className="bg-slate-300 text-gray-700 px-4 py-2 rounded-lg">
              Get Started
            </button>
          </div>
        </div>

        {/* Second Section */}
        <div className="flex flex-col items-center text-center p-5 bg-white shadow-lg rounded-lg">
          <img
            src="https://img.freepik.com/free-photo/indian-woman-working-laptop-street-cafe-wearing-stylish-smart-clothes-jacket-glasses_1157-48457.jpg"
            alt="Service 2"
            className="mb-5 rounded-2xl w-full h-52 object-cover"
          />
          <h2 className="text-xl font-semibold mb-3">CONSULTING</h2>
          <p className="mb-5">
            We transform how organizations view their business. In a world where comprehensive Business Intelligence is crucial, having cost-effective talent is key.
          </p>
          <div>
            <button className="bg-black text-white px-4 py-2 rounded-lg mr-3">
              Learn More
            </button>
            <button className="bg-slate-300 text-gray-700 px-4 py-2 rounded-lg">
              Get Started
            </button>
          </div>
        </div>

        {/* Third Section */}
        <div className="flex flex-col items-center text-center p-5 bg-white shadow-lg rounded-lg">
          <img
            src="https://img.freepik.com/premium-photo/two-business-professionals-discuss-project-modern-green-office-setting_1238717-1890.jpg?w=826"
            alt="Service 3"
            className="mb-5 rounded-2xl w-full h-52 object-cover"
          />
          <h2 className="text-xl font-semibold mb-3">PRODUCT DEVELOPMENT</h2>
          <p className="mb-5">
            Stay flexible with progressive business intelligence utilities. Rapidly evolve in the transforming digital age and make informed decisions with ease.
          </p>
          <div>
            <button className="bg-black text-white px-4 py-2 rounded-lg mr-3">
              Learn More
            </button>
            <button className="bg-slate-300 text-gray-700 px-4 py-2 rounded-lg">
              Get Started
            </button>
          </div>
        </div>

        {/* Fourth Section */}
        <div className="flex flex-col items-center text-center p-5 bg-white shadow-lg rounded-lg">
          <img
            src="https://img.freepik.com/free-photo/group-people-running-podcast-together_23-2149434310.jpg"
            alt="Service 4"
            className="mb-5 rounded-2xl w-full h-52 object-cover"
          />
          <h2 className="text-xl font-semibold mb-3">SERVICES</h2>
          <p className="mb-5">
            Our curriculum prepares participants to take on challenges in Analytics within a few days after training, regardless of experience level.
          </p>
          <div>
            <button className="bg-black text-white px-4 py-2 rounded-lg mr-3">
              Learn More
            </button>
            <button className="bg-slate-300 text-gray-700 px-4 py-2 rounded-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whatweprovide;
