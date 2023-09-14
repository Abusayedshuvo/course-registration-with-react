import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const fixedCredit = 20;
  const [courses, setCourses] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);
  const [remainingCredit, setRemainingCredit] = useState(fixedCredit);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleCourses = (course) => {
    const isExit = courses.find((i) => i.id === course.id);
    if (isExit) {
      return toast("This course already selected");
    }
    let courseCredit = course.credit;
    if (remainingCredit < courseCredit) {
      return toast("Your Credit is over");
    }
    setCourses([...courses, course]);

    let totalPrice = course.price;
    let totalCredit = courseCredit;
    courses.forEach((i) => {
      totalPrice += i.price;
      totalCredit += i.credit;
    });
    setTotalPrice(parseFloat(totalPrice.toFixed(2)));
    setRemainingCredit(fixedCredit - totalCredit);
    setTotalCredit(totalCredit);
  };

  return (
    <>
      <Header></Header>
      <main className="container mx-auto pt-10">
        <div className="md:flex gap-6">
          <div className="w-4/4 md:w-3/4 lg:w-3/4">
            <Cards handleCourses={handleCourses}></Cards>
          </div>
          <div className="w-4/4 lg:w-1/4 mt-10 md:mt-0">
            <Cart
              courses={courses}
              totalCredit={totalCredit}
              remainingCredit={remainingCredit}
              totalPrice={totalPrice}
            ></Cart>
            <ToastContainer />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
