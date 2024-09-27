import React from 'react';

const InternshipCard = () => {
  return (
    <div className="flex flex-col items-center py-10">
      {/* Internship Card */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">UI/UX Internship</h2>
        <div className="border rounded-lg p-4">
          <h3 className="font-semibold">UI/UX Designer</h3>
          <p className="text-gray-600">GENEX CORPORATE SERVICE PVT.LTD</p>
          <div className="flex justify-between text-gray-700 mt-4">
            <span className="flex items-center">
              <i className="fas fa-map-marker-alt mr-2"></i>Mumbai
            </span>
            <span className="flex items-center">
              <i className="fas fa-rupee-sign mr-2"></i>₹10,000/month
            </span>
            <span className="flex items-center">
              <i className="fas fa-calendar-alt mr-2"></i>3 Months
            </span>
          </div>
          <p className="text-gray-500 mt-4">Posted - 2 days ago</p>
          <p className="text-green-600 font-medium">Actively hiring</p>
        </div>
      </div>

      {/* Internship Details */}
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-3xl w-full">
        <h3 className="text-xl font-bold mb-4">Overview</h3>
        <p className="text-gray-600 mb-4">
          Our UI/UX Design Internship program offers a unique opportunity to gain hands-on experience in creating and improving digital products...
        </p>
        
        <h4 className="font-semibold mb-2">Objectives</h4>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Skill Development: Enhance your design skills with practical experience.</li>
          <li>Industry Exposure: Gain insights into the UI/UX design industry.</li>
          <li>Portfolio Building: Work on projects that you can showcase in your portfolio.</li>
          <li>Professional Growth: Learn from experienced professionals and receive mentorship.</li>
        </ul>
        
        <h4 className="font-semibold mb-2">Responsibilities</h4>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Design Work: Create wireframes, prototypes, and high-fidelity mockups.</li>
          <li>User Research: Conduct user research and usability testing.</li>
          <li>Feedback Integration: Incorporate feedback from users and stakeholders into design iterations.</li>
          <li>Collaboration: Work closely with developers, product managers, and other team members.</li>
        </ul>
        
        <h4 className="font-semibold mb-2">What You'll Learn</h4>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Design Principles: Understand and apply fundamental UI/UX design principles.</li>
          <li>Tools & Technologies: Get familiar with industry-standard tools like Figma, Sketch, and Adobe XD.</li>
          <li>User Research: Learn techniques for conducting user research and usability testing.</li>
          <li>Wire-framing & Prototyping: Develop wireframes and prototypes to bring design concepts to life.</li>
        </ul>
        
        <h4 className="font-semibold mb-2">Requirements</h4>
        <p className="text-gray-600 mb-4">
          Educational Background: Currently pursuing or recently graduated in Design, Computer Science, or related field. Basic understanding of design principles and tools...
        </p>

        <div className="text-center">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default InternshipCard;