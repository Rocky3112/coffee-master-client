import { useLoaderData } from "react-router-dom";


const UpdateCoffee = () => {
    const coffee = useLoaderData()
    const {_id, name, quantity, supplier, taste, category, details, photo } = coffee;
    const handleUpdateCoffee =event =>{
        event.preventDefault()

        const form =event.target;
        const name =form.name.value;
        const quantity =form.quantity.value;
        const supplier =form.supplier.value;
        const taste =form.taste.value;
        const category =form.category.value;
        const details =form.details.value;
        const photo =form.photo.value;

        const updateCoffee ={name,quantity,supplier,taste,category,details,photo}
        console.log(updateCoffee);

    fetch(`http://localhost:5000/coffee/${_id}`, {
        method:"PUT",
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(updateCoffee)
    })
        .then(res => res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount){
                alert('successfully updated')
            }
        })
    }
    return (
        <div className=" bg-pink-100 p-6">
        <h2 className=" text-3xl font-extrabold">Update coffee</h2>
      <form onSubmit={handleUpdateCoffee}>
        {/* form & quantity row */}
        <div className=" md:flex gap-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">coffee name</span>
            </label>
            <label className="input-group">
              
              <input
                type="text" defaultValue={name}
                placeholder="coffee name" name="name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group">
              
              <input
                type="text"
                placeholder="Available Quantity" defaultValue={quantity} name="quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form & Supplier row */}
        <div className=" md:flex gap-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <label className="input-group">
              
              <input
                type="text"
                placeholder="Supplier" defaultValue={supplier} name="supplier"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label className="input-group">
              
              <input
                type="text"
                placeholder="Taste"  defaultValue={taste} name="taste"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form & quantity row */}
        <div className=" md:flex gap-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              
              <input
                type="text"
                placeholder="Category" name="category"  defaultValue={category}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              
              <input
                type="text"
                placeholder="Details" defaultValue={details} name="details"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className=" ">
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              
              <input
                type="text"
                placeholder="Photo URL" defaultValue={photo}  name="photo"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input type="submit" value="update coffee" className="btn btn-block my-6" />
      </form>
    </div>
    );
};

export default UpdateCoffee;