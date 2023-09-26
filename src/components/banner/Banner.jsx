import PropTypes from "prop-types";
import { useState } from "react";
import banner from "../../assets/images/banner.png";

const Banner = ({ setSearchQuery }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(inputValue);
    setInputValue("");
  };

  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="hero-overlay bg-white bg-opacity-90"></div>
      <div className="hero-content text-center">
        <div className="pt-52 pb-36">
          <h1 className="mb-5 text-5xl font-bold">
            I Grow By Helping People In Need
          </h1>
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search here...."
              name="search"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-1/2 border border-gray-200 outline-0 p-2 rounded-md"
            />
            <button
              className="bg-red-500 p-2 text-white rounded-r-md -ml-16 font-semibold"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  setSearchQuery: PropTypes.func.isRequired,
};

export default Banner;
