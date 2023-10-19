const CoffeeCard = ({ coffee }) => {
  const { name, quantity, supplier, taste, category, details, photo } = coffee;
  return (
    <div className="card card-side bg-base-100 shadow-2xl ">
      <figure>
        <img className="w-52 h-60 rounded-lg" src={photo} alt="Movie" />
      </figure>
      <div className=" flex justify-evenly w-full">
        <div>
        <h2 className="card-title">Name:{name}</h2>
        <p>Quantity:{quantity}</p>
        <p>Category:{category}</p>
        <p>{details}</p>
        </div>

        <div className="card-actions justify-end">
          <div className="btn-group btn-group-vertical space-y-4">
            <button className="btn ">View</button>
            <button className="btn">Edit</button>
            <button className="btn">X</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
