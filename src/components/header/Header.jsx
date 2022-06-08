import "./Header.scss";
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";

const Header = () => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection"
    }
  ]);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 1,
    room: 1
  });

  return (
    <div className="header">
      <div className="header_container">
        <div className="header_lists">
          <div className="header_list_item active">
            <FontAwesomeIcon icon={faBed} />
          </div>

          <div className="header_list_item">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>

          <div className="header_list_item">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>

          <div className="header_list_item">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>

          <div className="header_list_item">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>

        <h1 className="header_title">A lifetime of discouts? It's great</h1>
        <p className="header_desc">
          Get rewarded for your travels & unlock instan savings of 10%
        </p>
        <button className="header_button">Sign in or Register</button>

        <div className="header_search">
          <div className="header_search_item">
            <FontAwesomeIcon icon={faBed} className="header_icon" />
            <input
              type="text"
              placeholder="Search..."
              className="header_search_input"
            />
          </div>

          <div className="header_search_item">
            <FontAwesomeIcon icon={faCalendarDays} className="header_icon" />
            <span
              onClick={() => setShowDatePicker(!showDatePicker)}
              className="header_search_text"
            >{`${format(date[0].startDate, "MM/dd/yyy")} to ${format(
              date[0].endDate,
              "MM/dd/yyy"
            )}`}</span>

            {/* This DateRange is from react-date-range library */}
            {showDatePicker && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date_picker"
              />
            )}
          </div>

          <div className="header_search_item">
            <FontAwesomeIcon icon={faPerson} className="header_icon" />
            <span className="header_search_text">
              {`${options.adult} adult - ${options.children} children - ${options.room} room`}
            </span>

            <div className="options">
              <div className="option_items">
                <span className="option_text">Adult</span>
                <div className="option_counter_wrapper">
                  <button className="option_counter_button">-</button>
                  <span className="option_counter_number">1</span>
                  <button className="option_counter_button">+</button>
                </div>
              </div>

              <div className="option_items">
                <span className="option_text">Children</span>
                <div className="option_counter_wrapper">
                  <button className="option_counter_button">-</button>
                  <span className="option_counter_number">0</span>
                  <button className="option_counter_button">+</button>
                </div>
              </div>

              <div className="option_items">
                <span className="option_text">Room</span>
                <div className="option_counter_wrapper">
                  <button className="option_counter_button">-</button>
                  <span className="option_counter_number">1</span>
                  <button className="option_counter_button">+</button>
                </div>
              </div>
            </div>
          </div>

          <div className="header_search_item">
            <button className="header_button">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
