import { useLocation, useNavigate } from "react-router-dom"
import NavBar from "../Components/NavBar"
import { useEffect, useState } from "react"
import Loader from "../Components/Loader"
import TopResturantCard from "../Components/Card/TopResturantCard"
import { useDispatch, useSelector } from "react-redux"
import { FilterCaheData } from "../Utils/CacheDataSlice" 

const FilterResturant = () => {
    const [data, setData] = useState(null)
    const dispatch = useDispatch()
    const FilterData = useSelector((store) => store.dataSlice.filterData)

     const location = useLocation()
     const item = location.state
     const entity = item.entityId

     const navigate = useNavigate()
     

    let collectionId = null
    if(entity.includes("swiggy://"))
    {
        const fixedUrl = entity.replace("swiggy://", "https://dummy.com/")
        collectionId = fixedUrl ? new URL(fixedUrl).searchParams.get("collection_id"): null
    }
    else
    {
        collectionId = entity
    }

     const { lat, long } = useSelector((store) => store.location.data)
     const FilterName = item.action.text.replaceAll(" ", "")

     const cachedData = FilterData[collectionId]
    


   

    const api = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2255976&lng=79.8940806&collection=${collectionId}&tags=layout_CCS_${FilterName}&sortBy=&filters=&type=rcv2&offset=0&page_type=null`

    useEffect(() => {
         if (!lat || !long) return

         if(cachedData)
         {
            setData(cachedData)
            return
         }

        fetch(api)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            setData(data.data.cards)

            dispatch(FilterCaheData({
                id : collectionId,
                card : data.data.cards
            }))
        })
    }, [item, lat,long])

    


    if (!data) {
      return (
        <div>
          <NavBar />
          <Loader />
        </div>
      )
   }

    const title = data[0].card.card.title
    const discription = data[0].card.card.description
    const resturants = data?.slice(3)
    



  return (
    <div>
        <NavBar />

        <div className=" mt-12 ml-53 py">
            <h3 className="text-4xl font-bold">
                {title}
            </h3>
            <p className="py-2">
                {discription}
            </p>
        </div>
        <div className=" mt-5 ml-53 py">
            <h1 className="text-2xl font-bold">{data[0].card.card.count} to Explore</h1>
        </div>

       <div className=" grid grid-cols-4 gap-6 mt-8 w-270 ml-53">
        {resturants &&
            resturants.map((item, index) => (
                <div onClick={() => navigate("/menue", {state : item})} > 
            <TopResturantCard key={index} item={item.card.card} size="sm"/>
            </div>
            ))}
        </div>

    </div>
  )
}

export default FilterResturant