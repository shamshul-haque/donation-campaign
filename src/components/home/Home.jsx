import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Banner from "../banner/Banner";
import Category from "../donation/Category";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("/donationData.json");
      const data = await res.json();
      setCategories(data);
    };
    loadData();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const filter = categories.filter(
        (filter) => filter.Category.toLowerCase() === searchQuery.toLowerCase()
      );
      if (filter.length === 0) {
        toast.warning("No data found! Please search the right category.", {
          theme: "colored",
          autoClose: 3000,
        });
        setTimeout(() => {
          location.reload();
        }, 3000);
      } else {
        setCategories(filter);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  return (
    <div>
      <Helmet>
        <title>Donation Campaign | Home</title>
      </Helmet>
      <Banner searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="px-5 md:px-10 lg:px-16 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((category) => (
            <Category key={category.id} category={category} />
          ))}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Home;
