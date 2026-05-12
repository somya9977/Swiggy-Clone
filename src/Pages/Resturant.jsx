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

  const HomeData = useSelector(
    (store) => store.dataSlice.homeData
  )

  // SAFE SELECTOR
  const { lat, long } = useSelector(
    (store) => store.location?.data || {}
  )



  useEffect(() => {

    // CACHE DATA
    if (HomeData) {
      setData(HomeData.data.cards)
      return
    }

    if (!lat || !long) return


    fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${long}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
    )
      .then((res) => res.json())

      .then((data) => {

        setData(data.data.cards)

        dispatch(setHomeData(data))

      })

      .catch((err) => {

        console.log(err)

        setData("CORS_ERROR")

      })

  }, [lat, long, HomeData, dispatch])



  // CORS ERROR
  if (data === "CORS_ERROR") {

    return (

      <div className="min-h-screen bg-gray-50">

        <NavBar />

        <div className="flex items-center justify-center min-h-[80vh] px-4">

          <div className="bg-white shadow-xl rounded-2xl p-6 md:p-8 text-center border w-full max-w-md">

            <h1 className="text-2xl md:text-3xl font-bold text-red-500 mb-4">
              CORS Error
            </h1>

            <p className="text-gray-600 text-sm md:text-base">
              Unable to fetch restaurant data.
            </p>

            <p className="text-xs md:text-sm text-gray-400 mt-2">
              Try enabling CORS extension or backend proxy.
            </p>

          </div>

        </div>

      </div>
    )
  }



  // LOCATION UNSERVICEABLE
  if (data?.[0]?.card?.card?.title === "Location Unserviceable") {

    return (

      <div className="min-h-screen bg-gray-50">

        <NavBar />

        <div className="flex items-center justify-center min-h-[80vh] px-4">

          <div className="bg-white shadow-xl rounded-2xl p-6 md:p-8 text-center border w-full max-w-md">

            <h1 className="text-2xl md:text-3xl font-bold text-red-500 mb-4">
              Location Unserviceable
            </h1>

            <p className="text-gray-600 text-base md:text-lg">
              Sorry, Swiggy is currently not available at your location.
            </p>

            <p className="text-gray-400 text-sm mt-3">
              Try changing your delivery location.
            </p>

          </div>

        </div>

      </div>
    )
  }



  return (

    <div className="min-h-screen bg-gray-50 overflow-x-hidden">

      <NavBar />

      {!data ? (

        // LOADER
        <div className="flex justify-center items-center min-h-[80vh]">
          <Loader />
        </div>

      ) : (

        // MAIN CONTENT
        <main className="
          w-full
          max-w-7xl
          mx-auto
          px-3
          sm:px-5
          md:px-8
          lg:px-10
          xl:px-14
          py-4
        ">

          {/* FOOD SUGGESTION */}
          <section className="mb-8 md:mb-10">
            <FoodSuggestion data={data} />
          </section>


          {/* TOP RESTAURANT */}
          <section className="mb-8 md:mb-10">
            <TopRestorant data={data} />
          </section>


          {/* MAIN RESTAURANT */}
          <section>
            <MainResturant data={data} />
          </section>

        </main>

      )}

    </div>
  )
}

export default Resturant