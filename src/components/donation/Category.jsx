import PropTypes from "prop-types";

const Category = ({ category }) => {
  const { Picture, Category, Title, Card_bg, Category_bg, Text_button_bg } =
    category;
  return (
    <div
      className={`card card-compact shadow-xl`}
      style={{ backgroundColor: Card_bg }}
    >
      <figure>
        <img src={Picture} alt={Category} />
      </figure>
      <div className="m-3 space-y-1">
        <button
          className="font-semibold px-2 py-1 rounded-md"
          style={{ backgroundColor: Category_bg, color: Text_button_bg }}
        >
          {Category}
        </button>
        <h1 className="font-bold" style={{ color: Text_button_bg }}>
          {Title}
        </h1>
      </div>
    </div>
  );
};

Category.propTypes = {
  category: PropTypes.object,
};

export default Category;
