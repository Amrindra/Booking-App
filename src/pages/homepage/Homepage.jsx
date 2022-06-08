import "./Homepage.scss";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertyList/PropertyList";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Header />

      <section className="home_container">
        <Featured />
        <h1 className="homepage_title">Brower by property type</h1>
        <PropertyList />
      </section>
    </>
  );
};

export default Homepage;
