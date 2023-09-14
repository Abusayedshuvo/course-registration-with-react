import "./App.css";
import Cards from "./components/Cards/Cards";
import Cart from "./components/Cards/Cart/Cart";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header></Header>
      <main className="container mx-auto pt-10">
        <div className="flex gap-6">
          <div className="w-3/4">
            <Cards></Cards>
          </div>
          <div className="w-1/4">
            <Cart></Cart>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
