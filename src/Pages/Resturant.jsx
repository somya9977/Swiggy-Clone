import { useDispatch, useSelector } from "react-redux"
import NavBar from "../Components/NavBar"
import { useEffect, useState } from "react"
import FoodSuggestion from "../Components/FoodSuggestion"
import Loader from "../Components/Loader"
import TopRestorant from "../Components/TopRestorant"
import MainResturant from "../Components/MainResturant"
import { setHomeData } from "../Utils/CacheDataSlice"



const Resturant = () => {

  const [data, setData] = useState(null)
  const dispatch = useDispatch()
  const HomeData = useSelector((store) => store.dataSlice.homeData)
 
  const { lat, long } = useSelector((store) => store.location.data)

  useEffect(() => {

    if(HomeData && !data)
    {
        setData(HomeData.data.cards)
          return
    }
    
    if (!lat || !long) return

       if (!HomeData) {
          fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.1815&lng=79.9864&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`)
            .then((res) => res.json())
            .then((data) => {

            setData(data.data.cards)
            dispatch(setHomeData(data))

                
            })
    }

      
  }, [lat, long, HomeData])

 
  

  return (
    <div>
      <NavBar />
      {!data ? (
        <Loader />   // sirf content load ho raha
      ) : (
        <>
        <FoodSuggestion data={data} />
        <TopRestorant data = {data} />
        <MainResturant data = {data} />
        </>
      )}
    </div>
  )
}

export default Resturant