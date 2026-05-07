import { Route, Routes } from "react-router-dom"
import LandingPage from "./Components/LandingPage"
import Search from "./Pages/Search"
import Resturant from "./Pages/Resturant"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getLocation } from "./Utils/LocationSlice"
import FilterResturant from "./Pages/FilterResturant"
import Menue from "./Pages/Menue"


const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getLocation())
  })
  return (
    <div>
      

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/resturant" element = {<Resturant />} />
        <Route path="/filter" element = {<FilterResturant />} />
        <Route path="/menue" element = {<Menue />} />
      </Routes>
    </div>
  )
}

export default App