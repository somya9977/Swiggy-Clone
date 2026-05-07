const cdn = import.meta.env.VITE_SWIGGY_IMG_URL;

const TopResturantCard = ({ item, size = "md" }) => {
  const imgUrl = item.info.cloudinaryImageId;

  // size mapping
  const sizeClasses = {
    sm: "w-65",
    md: "w-72",
    lg: "w-75",
    xl: "w-96",
  };

  return (
    <div className={`${sizeClasses[size]} bg-white rounded-2xl overflow-hidden hover:scale-98 transition duration-300 cursor-pointer`}>
      
      {/* Image */}
      <div className="relative w-full h-44 overflow-hidden">
        <img
          src={cdn + imgUrl}
          alt=""
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
      </div>

      
      <div className="p-4">
        <h1 className="text-lg font-semibold text-gray-800">
          {item.info.name}
        </h1>

        <div className="flex items-center text-sm text-gray-700 mt-1">
          <span className="flex items-center gap-1 text-black px-1 py-[2px] rounded text-xs font-semibold">
            <img src="/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIiBmaWxsPSJub25lIiBhcmlhLWhpZGRlbj0idHJ1ZSIgc3Ryb2tlQ29sb3I9InJnYmEoMiwgNiwgMTIsIDAuOTIpIiB.svg" alt="" />
             {item.info.avgRatingString}
          </span>

          <span className="text-black font-bold text-lg mx-2">•</span>

          <span className="font-medium">
            {item.info.sla.slaString}
          </span>
        </div>

        <p className="text-gray-500 text-sm mt-2 truncate">
          {item?.info?.cuisines?.slice(0, 3).join(", ")}
        </p>

        <p className="text-gray-400 text-sm mt-1">
          {item.info.locality}
        </p>
      </div>
    </div>
  );
};

export default TopResturantCard;