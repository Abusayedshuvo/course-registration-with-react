import PropTypes from "prop-types";

const Cart = ({ courses }) => {
  return (
    <div className="bg-white rounded-xl p-5">
      <h2 className="text-lg font-bold text-[#2F80ED]">
        Credit Hour Remaining 7 hr
      </h2>
      <hr className="my-4" />
      <p className="text-lg font-bold ">Course Name</p>
      {courses.map((course, idx) => (
        <p key={idx} className="py-1">
          {" "}
          {idx + 1} {course.title}
        </p>
      ))}
      <hr className="my-4" />
    </div>
  );
};

Cart.propTypes = {
  courses: PropTypes.array,
};

export default Cart;
