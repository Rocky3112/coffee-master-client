const AddCoffee = () => {
    const handleCoffeeForm =event =>{
        event.preventDefault()

        const form =event.target;
        const name =form.name.value;
        const quantity =form.quantity.value;
        const supplier =form.supplier.value;
        const taste =form.taste.value;
        const category =form.category.value;
        const details =form.details.value;
        const photo =form.photo.value;

        const newCoffee ={name,quantity,supplier,taste,category,details,photo}
        console.log(newCoffee);

    fetch('http://localhost:5000/coffee', {
        method:"POST",
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(newCoffee)
    })
        .then(res => res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                alert('successfully added')
            }
        })
    }
  return (
    <div className=" bg-pink-100 p-6">
        <h2 className=" text-3xl font-extrabold">Add coffee</h2>
      <form onSubmit={handleCoffeeForm}>
        {/* form & quantity row */}
        <div className=" md:flex gap-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">coffee name</span>
            </label>
            <label className="input-group">
              
              <input
                type="text"
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
                placeholder="Available Quantity" name="quantity"
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
                placeholder="Supplier" name="supplier"
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
                placeholder="Taste" name="taste"
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
                placeholder="Category" name="category"
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
                placeholder="Details" name="details"
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
                placeholder="Photo URL" name="photo"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input type="submit" value="Add coffee" className="btn btn-block my-6" />
      </form>
    </div>
  );
};

export default AddCoffee;
