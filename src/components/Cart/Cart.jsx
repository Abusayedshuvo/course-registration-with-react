import PropTypes from "prop-types";

const Cart = ({ courses, totalCredit, remainingCredit, totalPrice }) => {
  return (
    <div className="bg-white rounded-xl p-5">
      <h2 className="text-lg font-bold text-[#2F80ED]">
        Credit Hour Remaining {remainingCredit} hr
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
      <p className="font-medium">Total Credit Hour : {totalCredit}</p>
      <hr className="my-4" />
      <p className="font-medium">Total Price : {totalPrice} USD</p>
    </div>
  );
};

Cart.propTypes = {
  courses: PropTypes.array,
  totalCredit: PropTypes.number,
  remainingCredit: PropTypes.number,
  totalPrice: PropTypes.number,
};

export default Cart;
