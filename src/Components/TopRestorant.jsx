import { useNavigate } from "react-router-dom"
import TopResturantCard from "./Card/TopResturantCard"


const TopRestorant = ({data}) => {
    const navigate = useNavigate()
 
    const title = data[1].card.card.header.title
    const resturant = data[1].card.card.gridElements.infoWithStyle.restaurants
  
    
  return (
    <div className="ml-35 mt-11 border-b border-gray-300" >
        <div>
            <h1 className="text-2xl font-bold">{title}</h1>
        </div>

        <div className="flex gap-6 mt-6 overflow-x-auto no-scrollbar  h-100 w-7xl">

            {resturant.map((item) => {
                
                return (
                    
                    <div onClick={() => navigate("/menue", {state : item})} key={item.info.id} className="shrink-0  w-75 h-89">
                            <TopResturantCard item={item} size="lg" />
                    </div>
                    
                )
            })}
        </div>
    </div>
  )
}

export default TopRestorant


//item.info.name