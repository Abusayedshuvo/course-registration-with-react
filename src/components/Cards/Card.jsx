import PropTypes from "prop-types";
import { FaDollarSign, FaBookOpen } from "react-icons/fa";

const Card = ({ card }) => {
  console.log(card);
  const { image, title, price, credit, course_details } = card;
  return (
    <div className="bg-white p-6 rounded-xl space-y-3">
      <img src={image} alt={`Image of: ${title}`} />
      <p className="text-lg font-semibold"> {title}</p>
      <p className="text-sm">{course_details}</p>
      <div className="flex justify-between">
        <span>
          <FaDollarSign className="inline-block" /> Price : {price}
        </span>
        <span>
          <FaBookOpen className="inline-block" /> Credit : {credit}hr
        </span>
      </div>
      <button className="bg-[#2F80ED] text-white w-full rounded-xl py-3  text-center">
        Select
      </button>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object,
};

export default Card;
