import homeimg from "../../assets/homeimg.jpg"

const Home = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat w-full h-screen overflow-x-hidden flex items-center"
      style={{
        backgroundImage: `url(${homeimg})`,
        backgroundSize: 'cover',
      }}
    >
      
    </section>
  );
};

export default Home;
