const Contact = () => {
    return (
      <section className="bg-gray-200 p-10">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea className="w-full px-3 py-2 border border-gray-300 rounded-lg"></textarea>
          </div>
          <button className="bg-black text-white py-2 px-4 rounded-lg">Submit</button>
        </form>
      </section>
    );
  };
  
  export default Contact;
  