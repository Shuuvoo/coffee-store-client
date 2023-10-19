import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";

function App() {
  const coffees = useLoaderData();

  return (
    <>
      <h1 className="text-5xl text-center mt-20 font-bold">
        Coffee Items :{coffees.length}{" "}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 my-6">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee}>
           
          </CoffeeCard>
        ))}
      </div>
    </>
  );
}

export default App;
