import banner from "../../assets/images/banner.png";
const Banner = () => {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="hero-overlay bg-white bg-opacity-90"></div>
      <div className="hero-content text-center">
        <div className="py-40">
          <h1 className="mb-5 text-5xl font-bold">
            I Grow By Helping People In Need
          </h1>
          <form action="">
            <input
              type="text"
              placeholder="Search here...."
              className="w-1/2 border border-gray-200 outline-0 p-2 rounded-md"
            />
            <button className="bg-red-500 p-2 text-white rounded-r-md -ml-16 font-semibold">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;
