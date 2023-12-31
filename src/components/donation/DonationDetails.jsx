import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getStoredData, saveData } from "../utility/LocalStorage";

const DonationDetails = () => {
  const donationData = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const item = donationData.find((item) => item.id === idInt);

  const handleDonation = () => {
    const storedData = getStoredData();
    const isExist = storedData.find((item) => item === idInt);
    if (isExist) {
      toast.warning(
        "You have donated in this category before. Please Donate on our another category!",
        {
          theme: "colored",
        }
      );
    } else {
      saveData(idInt);
      toast.success("Your donation has been received!", {
        theme: "colored",
      });
    }
  };

  return (
    <div className="px-5 md:px-10 lg:px-16 py-5 pt-16">
      <Helmet>
        <title>Donation Campaign | Donation Details</title>
      </Helmet>
      <div className="relative">
        <img src={item.Picture} alt="" className="w-full rounded-md" />
        <div className="absolute bottom-0 left-0 h-20 w-full bg-black opacity-50 rounded-b-md"></div>
        <button
          className="px-4 py-2 rounded-md text-white font-bold absolute bottom-5 left-5"
          style={{ backgroundColor: item.Text_button_bg }}
          onClick={handleDonation}
        >
          Donate: ${item.Price}
        </button>
      </div>
      <div className="space-y-2 mt-5">
        <h1 className="font-bold text-2xl">{item.Title}</h1>
        <p className="text-justify">{item.Description}</p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default DonationDetails;
