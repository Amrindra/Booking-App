import "./Homepage.scss";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import HeroBanner from "../../components/heroBanner/HeroBanner";
import PropertyList from "../../components/propertyList/PropertyList";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Header />

      <section className="home_container">
        <HeroBanner />
        <h1 className="homepage_title">Brower by property type</h1>
        <PropertyList />
        <h1 className="homepage_title">Homes gests love</h1>
      </section>
    </>
  );
};

export default Homepage;
