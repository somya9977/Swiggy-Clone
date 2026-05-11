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
          fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${long}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`)
            .then((res) => res.json())
            .then((data) => {

            setData(data.data.cards)
            dispatch(setHomeData(data))

                
            })
             .catch((err) => {

                  console.log(err)

                  setData("CORS_ERROR")

                })
    }

      
  }, [lat, long, HomeData])

  


  if (data === "CORS_ERROR") {
  return (
    <>
      <NavBar />

      <div className="flex items-center justify-center h-[80vh]">
        <div className="bg-white shadow-xl rounded-2xl p-8 text-center border">
          
          <h1 className="text-3xl font-bold text-red-500 mb-4">
            CORS Error
          </h1>

          <p className="text-gray-600">
            Unable to fetch restaurant data.
          </p>

          <p className="text-sm text-gray-400 mt-2">
            Try enabling CORS extension or backend proxy.
          </p>

        </div>
      </div>
    </>
  )
}

if (data?.[0]?.card?.card?.title === "Location Unserviceable") {
  return (
    <>
      <NavBar />

      <div className="flex items-center justify-center h-[80vh] px-4">
        <div className="bg-white shadow-xl rounded-2xl p-8 text-center max-w-md w-full border">
          
          <h1 className="text-3xl font-bold text-red-500 mb-4">
            Location Unserviceable
          </h1>

          <p className="text-gray-600 text-lg">
            Sorry, Swiggy is currently not available at your location.
          </p>

          <p className="text-gray-400 text-sm mt-3">
            Try changing your delivery location.
          </p>

        </div>
      </div>
    </>
  )
}

 
  

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