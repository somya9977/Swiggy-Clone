import { useNavigate } from "react-router-dom"
import TopResturantCard from "./Card/TopResturantCard"

const MainResturant = ({data}) => {
    const navigate = useNavigate()

    const title = data[2].card.card.title

    const resturant = data[4].card.card.gridElements.infoWithStyle.restaurants

    // console.log(resturant)


  return (
      <div className="ml-35 mt-11">
        
          <h1 className="text-2xl font-bold">{title}</h1>

          <div className="grid grid-cols-4 gap-6 mt-6 w-7xl ">
              {resturant.map((item) => (
                <div onClick={() => navigate("/menue", {state : item, key : item.info?.id})}> 
                <TopResturantCard key={item.info.id} item={item} size="sm" />
                </div>
              ))}
          </div>

      </div>
)
}

export default MainResturant