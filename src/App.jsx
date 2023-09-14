import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [courses, setCourses] = useState([]);
  const handleCourses = (course) => {
    const isExit = courses.find((i) => i.id === course.id);
    if (isExit) {
      return toast("This course already selected");
    } else {
      setCourses([...courses, course]);
    }
  };
  return (
    <>
      <Header></Header>
      <main className="container mx-auto pt-10">
        <div className="flex gap-6">
          <div className="w-3/4">
            <Cards handleCourses={handleCourses}></Cards>
          </div>
          <div className="w-1/4">
            <Cart courses={courses}></Cart>
            <ToastContainer />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
