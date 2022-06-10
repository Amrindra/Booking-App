import "./HotelList.scss";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";

const HotelList = () => {
  //This location will contain the informations from the Header component where we search, select date and option
  const location = useLocation();
  const [destination, setDestination] = useState(location.state?.destination);
  const [date, setDate] = useState(location.state?.date);
  const [options, setOptions] = useState(location.state?.options);
  // console.log(location);

  return (
    <>
      <Navbar />
      <Header type="list" />

      <section className="hotel_list_container">
        <div className="hotel_list_warpper">
          <div className="hotel_list_search">
            <h1 className="hotel_list_title">Search</h1>
            <div className="hotel_list_items">
              <label>Destination</label>
              <input type="text" />
            </div>

            <div className="hotel_list_items">
              <label>Cehck-in Date</label>
              {/* <span>{`${format(date[0]?.startDate, "MM/dd/yyyy")} to ${format(
                date[0]?.endDate,
                "MM/dd/yyyy"
              )}`}</span> */}
            </div>
          </div>
          <div className="hotel_list_result"></div>
        </div>
      </section>
    </>
  );
};

export default HotelList;
