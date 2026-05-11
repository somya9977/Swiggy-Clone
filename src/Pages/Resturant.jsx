import { useDispatch, useSelector } from "react-redux"
import NavBar from "../Components/NavBar"
import { useEffect, useState } from "react"
import FoodSuggestion from "../Components/FoodSuggestion"
import Loader from "../Components/Loader"
import TopRestorant from "../Components/TopRestorant"
import MainResturant from "../Components/MainResturant"
import { setHomeData } from "../Utils/CacheDataSlice"
import CheckSwiggyStatus from "../Components/checkSwiggyStatus"

const Resturant = () => {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const dispatch = useDispatch()
  const HomeData = useSelector((store) => store.dataSlice.homeData)
  const { lat, long } = useSelector((store) => store.location.data)

  const handleCards = (cards) => {

    const status = CheckSwiggyStatus?.(cards || [])

    if (status === "UNSERVICEABLE") {
      setError("UNSERVICEABLE")
      setData(null)
      return false
    }

    if (status === "EMPTY") {
      setError("EMPTY")
      setData(null)
      return false
    }

    setError(null)
    setData(cards)
    return true
  }

  useEffect(() => {

    const fetchData = async () => {
      setLoading(true)

      try {

        
        if (HomeData?.data?.cards) {
          handleCards(HomeData.data.cards)
          setLoading(false)
          return
        }

        if (!lat || !long) {
          setLoading(false)
          return
        }

        const res = await fetch(
          `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${long}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
        )

        const json = await res.json()

        const cards = json?.data?.cards

        const isValid = handleCards(cards)

        if (isValid) {
          dispatch(setHomeData(json))
        }

      } catch (err) {
        setError("ERROR")
        setData(null)
      } finally {
        setLoading(false)
      }
    }

    fetchData()

  }, [lat, long, HomeData])

  return (
    <div>
      <NavBar />

      {loading ? (
        <Loader />
      ) : error === "UNSERVICEABLE" ? (
        <div className="text-center mt-10">
          <h2>Location not serviceable 😕</h2>
        </div>
      ) : error === "EMPTY" ? (
        <div className="text-center mt-10">
          No restaurants found 🍽️
        </div>
      ) : error === "ERROR" ? (
        <div className="text-center mt-10 text-red-500">
          Something went wrong ⚠️
        </div>
      ) : data ? (
        <>
          <FoodSuggestion data={data} />
          <TopRestorant data={data} />
          <MainResturant data={data} />
        </>
      ) : (
        <div className="text-center mt-10">
          <Loader />
        </div>
      )}
    </div>
  )
}

export default Resturant