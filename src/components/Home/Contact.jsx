const Contact = () => {
  return (
    <section className="bg-gray-200 p-6 md:p-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Contact Us</h2>
      <form className="max-w-lg mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm md:text-base">Name</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm md:text-base"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm md:text-base">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm md:text-base"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm md:text-base">Message</label>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm md:text-base"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button className="bg-black text-white py-2 px-4 rounded-lg w-full md:w-auto">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
