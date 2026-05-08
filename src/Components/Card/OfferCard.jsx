const cdn = import.meta.env.VITE_SWIGGY_IMG_URL;


const OfferCard = ({ item }) => {

    
  return (
    <div className="border border-gray-400 rounded-2xl mt-2 w-[300px] h-[80px] flex-shrink-0 flex items-center px-4 gap-4">

      {/* Image only if available */}
      {item.info.logoBottom && (
        <div className="w-12 h-12 flex-shrink-0">
          <img
            className="w-full h-full object-contain"
            src={cdn + item.info.logoBottom}
            alt=""
          />
        </div>
      )}

      <div>
        <h1 className="font-bold text-[16px]">
          {item.info.header}
        </h1>

        <p className="text-[13px] font-bold text-gray-400">
          {item.info.description}
        </p>
      </div>

    </div>
  )
}

export default OfferCard