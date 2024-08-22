import React, { useContext } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "./../../Hook/AxiosSecure/useAxiosSecure";
import toast from "react-hot-toast";

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const image = e.target.image.value;
    const price = parseInt(e.target.price.value);
    const email = user?.email;
    const product = { title, image, price, email };
    const res = await axiosSecure.post("/addFurniture", product, {
      withCredentials: true,
    });
    if (res.data.success === true) {
      toast.success("Product Add Success");
      navigate(from);
    }
  };

  return (
    <div className="my-[100px]">
      <div className="border-2 lg:w-[800px] mx-auto">
        <div className="p-4 lg:p-10 ">
          <form onSubmit={handleSubmit}>
            <h2 className="text-center text-2xl font-semibold">Add Product</h2>
            <div>
              <label className="font-semibold">Name</label>
              <br />
              <input
                type="text"
                placeholder="Title"
                className="input input-bordered w-full mt-2"
                name="title"
                required
              />
            </div>
            <div className="my-2">
              <label className="font-semibold">Image Link</label>
              <br />
              <input
                type="text"
                placeholder="Image Link"
                className="input input-bordered w-full mt-2"
                name="image"
                required
              />
            </div>
            <div>
              <label className="font-semibold">Price</label>
              <br />
              <input
                type="number"
                placeholder="Price"
                className="input input-bordered w-full mt-2"
                name="price"
                required
              />
            </div>

            <div className="mt-4">
              <button className="w-full bg-[#2d4d95] text-white rounded-md font-semibold py-2">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
