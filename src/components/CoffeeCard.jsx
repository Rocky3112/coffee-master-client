/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const CoffeeCard = ({ coffee }) => {
  const { name, quantity, supplier, taste, category, details, photo } = coffee;
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img className=" rounded-lg w-64" src={photo} alt="Movie" />
      </figure>
      <div className="flex justify-between w-full p-2">
        <div>
        <h2 className="card-title">Name {name}</h2>
        <p>{quantity}</p>
        <p>{supplier}</p>
        <p>{taste}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="btn-group btn-group-vertical">
            <button className="btn ">View</button>
            <button className="btn">Edit</button>
            <button className="btn">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
