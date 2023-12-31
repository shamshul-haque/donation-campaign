import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredData } from "../utility/LocalStorage";

const Donation = () => {
  const donationData = useLoaderData();
  const [donated, setDonated] = useState([]);
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    const storedDonationIds = getStoredData();
    if (storedDonationIds) {
      const donatedItem = donationData.filter((item) =>
        storedDonationIds.includes(item.id)
      );
      setDonated(donatedItem);
    }
  }, [donationData]);

  return (
    <div>
      <Helmet>
        <title>Donation Campaign | Donation</title>
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-5 md:px-10 lg:px-16 py-5 pt-16">
        {donated.slice(0, dataLength).map((item) => (
          <div
            key={item.id}
            className="card flex flex-col lg:card-side shadow-xl"
            style={{ backgroundColor: item.Card_bg }}
          >
            <figure>
              <img
                src={item.Picture}
                alt="Movie"
                className="h-full w-full lg:w-60 "
              />
            </figure>
            <div className="card-body">
              <div className="card-actions justify-start">
                <button
                  className="font-semibold px-2 py-1 rounded-md"
                  style={{
                    backgroundColor: item.Category_bg,
                    color: item.Text_button_bg,
                  }}
                >
                  {item.Category}
                </button>
              </div>
              <h2 className="card-title">{item.Title}</h2>
              <p style={{ color: item.Text_button_bg }}>${item.Price}</p>
              <div className="card-actions justify-start">
                <button
                  className="font-semibold px-2 text-white py-1 rounded-md"
                  style={{ backgroundColor: item.Text_button_bg }}
                >
                  <Link to={`/donationDetails/${item.id}`}>View Details</Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className={`text-center my-5 ${donated.length <= 4 ? "hidden" : ""}`}
      >
        <button
          className={`bg-green-600 px-5 py-2 rounded-md text-white font-semibold ${
            dataLength === donated.length ? "hidden" : ""
          }`}
          onClick={() => setDataLength(donated.length)}
        >
          See All
        </button>
      </div>
    </div>
  );
};

export default Donation;
