import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hook/AxiosSecure/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import TableData from "./TableData";
import Swal from "sweetalert2";

const UserProduct = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const { refetch, data: userProduct = [] } = useQuery({
    queryKey: ["userProduct", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/userProduct/${user?.email}`, {
        withCredentials: true,
      });
      return res.data;
    },
  });

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to Delete It",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/productDelete/${id}`, {
          withCredentials: true,
        });
        console.log(res.data);
        if (res.data.success === true) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your Product has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };

  return (
    <div className="container mx-auto">
      <div className="mt-[100px]">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-[14px] text-black">
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {userProduct.map((item) => (
                <TableData
                  item={item}
                  key={item._id}
                  handleDelete={handleDelete}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserProduct;
