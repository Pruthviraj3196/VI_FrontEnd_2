import React from "react";

const Aboutus = () => {
  return (
    <div className="w-11/12 max-w-6xl mx-auto py-10">
      {/* First Row - About Us */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        {/* Left side - Paragraph and Button */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-5">About Us</h2>
          <p className="text-base md:text-lg mb-5">
            At Genex, we are dedicated to pushing the boundaries of innovation
            through our deep expertise in Artificial Intelligence (AI) and
            advanced technology solutions. Our mission is to empower businesses
            with smarter, more efficient tools that drive success and foster
            growth. With a commitment to excellence and a passion for
            technology, we continuously strive to deliver exceptional service
            and groundbreaking solutions tailored to our clients' unique needs.
          </p>
          <button className="bg-black text-white px-4 py-2 rounded-lg w-32 md:w-40">
            Learn More
          </button>
        </div>

        {/* Right side - Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="https://img.freepik.com/free-photo/group-young-businesspeople-looking-document-office_23-2147839935.jpg"
            alt="About Us"
            className="rounded-lg shadow-md w-full h-auto"
          />
        </div>
      </div>

      {/* Second Row - Featured Articles */}
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-7">
          FEATURED ARTICLES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First Column */}
          <div className="flex flex-col items-center text-center p-5 bg-white shadow-lg rounded-lg">
            <img
              src="https://img.freepik.com/premium-photo/woman-sits-table-with-cup-coffee_1287624-24408.jpg?w=740"
              alt="Article 1"
              className="mb-4 rounded-lg w-full h-auto"
            />
            <h3 className="text-lg font-semibold mb-2">
              Ref Gartner article dated December 16, 2013
            </h3>
            <p className="text-sm">
              Be a pioneer by 2017. Over the past several years, the BI platform
              market has grown largely through companies investing in IT-led
              consolidation projects to standardize IT-centric BI platforms for
              large-scale systems of record. These have tended to be highly
              governed and centralized, where IT production reports.
            </p>
          </div>

          {/* Second Column */}
          <div className="flex flex-col items-center text-center p-5 bg-white shadow-lg rounded-lg">
            <img
              src="https://img.freepik.com/premium-photo/man-reading-book-library-with-lamp-top_198067-1077929.jpg"
              alt="Article 2"
              className="mb-4 rounded-lg w-full h-auto"
            />
            <h3 className="text-lg font-semibold mb-2">
              Ref Gartner article dated January 27, 2015
            </h3>
            <p className="text-sm">
              Data discovery is the new normal, but where do we go from here?
              Smart data discovery has the potential to expand access to
              sophisticated interactive analysis and insights to business
              consumers and nontraditional BI users—the approximately 70 percent
              of users in organizations that currently do not use BI tools.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
