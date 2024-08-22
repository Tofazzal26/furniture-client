const TableData = ({ item, handleDelete }) => {
  const { image, title, price, _id } = item || {};

  return (
    <>
      <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img src={image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td className="font-semibold">{title}</td>
        <td className="font-semibold">${price}</td>
        <th>
          <button
            onClick={() => handleDelete(_id)}
            className="bg-red-500 px-4 py-2 text-[13px] text-white rounded-md"
          >
            Delete
          </button>
        </th>
      </tr>
    </>
  );
};

export default TableData;
