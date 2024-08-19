import React, { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  // const from = location.state?.from || "/";
  const from = location.state?.from || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUser(email, password)
      .then((res) => {
        updateUser(name)
          .then((result) => {
            toast.success("Register Success");
            navigate(from);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        toast.error("Please Enter A Valid Email And Password");
      });
  };

  return (
    <div className="my-[100px]">
      <div className="border-2 lg:w-[800px] mx-auto">
        <div className="p-4 lg:p-10 ">
          <form onSubmit={handleSubmit}>
            <h2 className="text-center text-2xl font-semibold">Register</h2>
            <div>
              <label className="font-semibold">Name</label>
              <br />
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered w-full mt-2"
                name="name"
                required
              />
            </div>
            <div className="my-2">
              <label className="font-semibold">Email</label>
              <br />
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full mt-2"
                name="email"
                required
              />
            </div>
            <div>
              <label className="font-semibold">Password</label>
              <br />
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full mt-2"
                name="password"
                required
              />
            </div>

            <div className="mt-4">
              <button className="w-full bg-[#2d4d95] text-white rounded-md font-semibold py-2">
                Register
              </button>
            </div>
            <h2 className="text-center my-4 font-semibold">
              Already have an account ?{" "}
              <NavLink to="/login" className="text-[#2d4d95]">
                Login
              </NavLink>
            </h2>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
