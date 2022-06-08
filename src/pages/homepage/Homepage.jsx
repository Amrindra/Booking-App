import "./Homepage.scss";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Header />

      <section className="home_container">
        <Featured />
      </section>
    </>
  );
};

export default Homepage;
