import React from "react";
import { FaStar, FaUserCircle } from "react-icons/fa"; // Importing icons for stars and user profile

const Testimonials = () => {
  return (
    <div className="w-11/12 max-w-6xl mx-auto py-10">
      {/* Central Heading and Quote */}
      <h2 className="text-3xl font-bold text-center mb-5">TESTIMONIALS</h2>
      <p className="text-lg text-center mb-10">
        Don't just take our word for it, see what actual users of our service
        have to say about their experience.
      </p>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* First Testimonial Card */}
        <div className="p-6 bg-white shadow-lg rounded-lg text-center">
          <p className="text-sm mb-5">
            My UI/UX design internship at GenexCorp was highly enriching. I
            worked on the projects, honed my design skills, and learned from
            experienced professionals in the team where I worked. This
            experience deepened my understanding of design principles and
            user-centered design, preparing me for future roles in the field.
          </p>
          {/* Star Ratings */}
          <div className="flex justify-center mb-3">
            {Array(5)
              .fill()
              .map((_, i) => (
                <FaStar key={i} className="text-yellow-500 text-xl" />
              ))}
          </div>
          {/* User Profile and Name */}
          <div className="flex flex-col items-center">
            <FaUserCircle className="text-4xl mb-2" />
            <h4 className="text-lg font-semibold">John Doe</h4>
          </div>
        </div>

        {/* Second Testimonial Card */}
        <div className="p-6 bg-white shadow-lg rounded-lg text-center">
          <p className="text-sm mb-5">
            I had the opportunity to work with the software development team at
            GenexCorp, where I learned a lot about the industry. Their support
            and the exposure to real-world projects were immensely valuable for
            my growth as a developer. I am grateful for this experience!
          </p>
          <div className="flex justify-center mb-3">
            {Array(5)
              .fill()
              .map((_, i) => (
                <FaStar key={i} className="text-yellow-500 text-xl" />
              ))}
          </div>
          <div className="flex flex-col items-center">
            <FaUserCircle className="text-4xl mb-2" />
            <h4 className="text-lg font-semibold">Jane Smith</h4>
          </div>
        </div>

        {/* Third Testimonial Card */}
        <div className="p-6 bg-white shadow-lg rounded-lg text-center">
          <p className="text-sm mb-5">
            GenexCorp provided an excellent environment to apply my technical
            skills and develop them further. The mentorship and collaboration
            with senior developers boosted my confidence and helped me land my
            first full-time role in the tech industry.
          </p>
          <div className="flex justify-center mb-3">
            {Array(5)
              .fill()
              .map((_, i) => (
                <FaStar key={i} className="text-yellow-500 text-xl" />
              ))}
          </div>
          <div className="flex flex-col items-center">
            <FaUserCircle className="text-4xl mb-2" />
            <h4 className="text-lg font-semibold">Alice Johnson</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
