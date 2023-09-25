import { useEffect, useState } from "react";
import Category from "./Category";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("../donationData.json");
      const data = await res.json();
      setCategories(data);
    };
    loadData();
  }, []);

  return (
    <div className="px-5 md:px-10 lg:px-16 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
