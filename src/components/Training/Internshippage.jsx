import React from "react";
import { FaStar } from "react-icons/fa";

const Internshippage = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        {/* Central Heading */}
        <h1 className="text-4xl font-bold text-center mt-10 mb-12">
          Explore Our Internship Opportunities
        </h1>

        {/* Row Container */}
        {[
          {
            img: "https://images.pexels.com/photos/4467735/pexels-photo-4467735.jpeg",
            title: "Splunk Development Internship",
            description:
              "Dive into the world of data analysis and machine learning with our Splunk Development Internship. You'll work on real-time data processing, create dashboards, and gain hands-on experience with Splunk's powerful analytics platform. Collaborate with our expert team and help us transform data into actionable insights.",
          },
          {
            img: "https://images.pexels.com/photos/5324986/pexels-photo-5324986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "DevOps Development Internship",
            description:
              "Join our DevOps Internship Program and be at the forefront of innovation in software development and IT operations. You’ll gain hands-on experience with automation, continuous integration, and deployment pipelines, helping to bridge the gap between development and operations.",
          },
          {
            img: "https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Web Development Internship",
            description:
              "Kickstart your career with our Web Development Internship. Gain hands-on experience in designing, coding, and maintaining websites. Work with cutting-edge technologies and collaborate with our expert team to build engaging and user-friendly web applications.",
          },
          {
            img: "https://images.pexels.com/photos/5684450/pexels-photo-5684450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "ServiceNow Development Internship",
            description:
              "Gain hands-on experience with our ServiceNow Development Internship, working on automating IT service management, and learning how to streamline operations with this platform.",
          },
          {
            img: "https://images.pexels.com/photos/5685821/pexels-photo-5685821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "ChatBot Development Internship",
            description:
              "Learn how to design and develop AI-powered chatbots to provide automated customer support and improve business processes with our ChatBot Development Internship.",
          },
          {
            img: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "AWS Development Internship",
            description:
              "Get hands-on experience with cloud technologies in our AWS Development Internship. Learn to architect, deploy, and manage scalable applications on AWS cloud infrastructure.",
          },
          {
            img: "https://images.pexels.com/photos/5711939/pexels-photo-5711939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "SAS Clinical Internship",
            description:
              "Immerse yourself in the field of clinical data analysis with our SAS Clinical internship. Gain practical experience in managing and analyzing clinical trial data using SAS software.",
          },
        ].map((internship, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-center bg-white shadow-md rounded-3xl p-2 w-11/12 lg:w-4/5 mb-8 border border-black"
          >
            {/* Left Image */}
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <img
                src={internship.img}
                alt="Internship"
                className="rounded-lg object-cover w-[80%] h-[60%]"
              />
            </div>

            {/* Right Content */}
            <div className="lg:w-1/2 w-full lg:pl-8">
              {/* Heading */}
              <h2 className="text-3xl font-semibold mb-4">
                {internship.title}
              </h2>

              {/* Paragraph Description */}
              <p className="text-gray-700 mb-4"><strong>Description:</strong> :{internship.description}</p>

              {/* Review and Stars */}
              <div className="flex items-center mb-6">
                <p className="text-lg font-bold mr-4">Review</p>
                <div className="flex text-yellow-500">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                {/* Button */}
              <button className="text-white font-bold py-3 ml-40 px-6 rounded-full bg-black transition">
               view More
              </button>
              </div>
 
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Internshippage;
