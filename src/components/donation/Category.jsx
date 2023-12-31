import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Category = ({ category }) => {
  const { id, Picture, Category, Title, Card_bg, Category_bg, Text_button_bg } =
    category;
  return (
    <Link to={`/donationDetails/${id}`}>
      <div
        className="card card-compact shadow-xl cursor-pointer"
        style={{ backgroundColor: Card_bg }}
      >
        <figure>
          <img src={Picture} alt={Category} className="w-full" />
        </figure>
        <div className="m-3 space-y-1">
          <button
            className="font-semibold px-2 py-1 rounded-md"
            style={{ backgroundColor: Category_bg, color: Text_button_bg }}
          >
            {Category}
          </button>
          <h1
            className="font-bold line-clamp-1"
            style={{ color: Text_button_bg }}
          >
            {Title}
          </h1>
        </div>
      </div>
    </Link>
  );
};

Category.propTypes = {
  category: PropTypes.object,
};

export default Category;
