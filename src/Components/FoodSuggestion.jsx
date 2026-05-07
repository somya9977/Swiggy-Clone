import { useNavigate } from "react-router-dom";

const cdn = import.meta.env.VITE_SWIGGY_IMG_URL;

const FoodSuggestion = ({ data }) => {

  console.log(data)
  const navigate = useNavigate()

  const foodCard = data.find(
    (c) => c?.card?.card?.header?.title === "What's on your mind?"
  );

  const title = foodCard?.card?.card?.header?.title;
  const items = foodCard?.card?.card?.imageGridCards?.info;
  console.log(items)

  return (
    <div className="px-10 py-3 w-349  h-60  border-b border-gray-300 ">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-6  ml-30">
        <h1 className="text-2xl font-bold">{title}</h1>

       
        {/* <div className="flex gap-2">
          <button className="w-8 h-8 bg-gray-200 rounded-full">←</button>
          <button className="w-8 h-8 bg-gray-200 rounded-full">→</button>
        </div> */}
      </div>

   
      <div className="flex gap-1 overflow-x-scroll no-scrollbar ml-32">

        {items && items.map((item) => (
          <div key={item.id} className="min-w-47.25 text-center   h-50 " 
           onClick={() => {
                navigate("/filter", {state : item})
              }}>
            
            <img
              src={cdn + item.imageId}
              alt=""
              className="w-40 h-41  mx-auto"
              
            />


          </div>
        ))}

      </div>
    </div>
  );
};

export default FoodSuggestion;