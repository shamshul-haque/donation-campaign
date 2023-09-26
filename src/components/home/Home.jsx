import { useEffect, useState } from "react";
import Banner from "../banner/Banner";
import Category from "../donation/Category";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("../donationData.json");
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
      setCategories(filter);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  return (
    <div>
      <Banner searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="px-5 md:px-10 lg:px-16 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((category) => (
            <Category key={category.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
