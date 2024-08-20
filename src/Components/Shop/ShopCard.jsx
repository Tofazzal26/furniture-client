const ShopCard = ({ product }) => {
  const { title, price, image } = product || {};

  return (
    <div className="cursor-pointer">
      <img
        src={image}
        alt=""
        className="object-cover object-center rounded-t-md lg:h-[500px]"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-[16px] text-gray-600 font-semibold">{title}</h2>
          <p className="font-semibold">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
