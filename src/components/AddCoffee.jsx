import Swal from 'sweetalert2'
const AddCoffee = () => {
  const handleAddCoffee = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(newCoffee);

    // send data to the server
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.insertedId){
            Swal.fire({
                title: 'Success!',
                text: 'Coffee Added Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
      });
  };
  return (
    <div className="bg-[#f4f3f0] p-24">
      <h1 className="text-center text-4xl mt-10 mb-8">Add a Coffee</h1>
      <form onSubmit={handleAddCoffee}>
        <div className="flex">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="input-group">
              {/* <span>Name</span> */}
              <input
                type="text"
                name="name"
                placeholder="Coffee Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-5">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group">
              {/* <span>Name</span> */}
              <input
                type="text"
                name="quantity"
                placeholder="Available Quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="flex">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <label className="input-group">
              {/* <span>Name</span> */}
              <input
                type="text"
                name="supplier"
                placeholder="Supplier  Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-5">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label className="input-group">
              {/* <span>Name</span> */}
              <input
                type="text"
                name="taste"
                placeholder="Taste"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="flex">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              {/* <span>Name</span> */}
              <input
                type="text"
                name="category"
                placeholder="Category"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-5">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              {/* <span>Name</span> */}
              <input
                type="text"
                name="details"
                placeholder="Details"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="">
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              {/* <span>Name</span> */}
              <input
                type="text"
                name="photo"
                placeholder="Photo Url"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <input
            className="btn btn-block mt-3 bg-orange-300"
            type="submit"
            value="Add Coffeee"
          />
          {/* <button className="btn btn-block">block</button> */}
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
