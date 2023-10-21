import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees)

  return (
    <>
      <h1 className="text-5xl text-center text-amber-500 mt-20 font-bold">
        Coffee Items :{coffees.length}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 space-y-4 my-6 mx-5 gap-5">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee._id}
           coffee={coffee}
           coffeese ={coffees}
           setCoffees={setCoffees}
           >
           
          </CoffeeCard>
        ))}
      </div>
    </>
  );
}

export default App;
