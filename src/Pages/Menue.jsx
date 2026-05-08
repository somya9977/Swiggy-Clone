import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import MenueCard from "../Components/Card/MenueCard"
import NavBar from "../Components/NavBar"
import Loader from "../Components/Loader"


const Menue = () => {
    const location = useLocation()
    const item = location.state
    const [data, setData] = useState(null)

    console.log(item)
   const id =item?.info?.id || item?.card?.card?.info?.id
    console.log(id)

    useEffect(() => {
         if (!id) return
        async function getData()
        {
            const res = await fetch(`https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.1815&lng=79.9864&restaurantId=${id}&submitAction=ENTER`)
            const data = await res.json()
            setData(data?.data?.cards)
        }
        getData()
        
    }, [id])

    console.log(data)

     if (!data) {
      return (
        <div>
          <NavBar />
          <Loader />
        </div>
      )
   }

  return (
    <div>
        
        <MenueCard data = {data} />
    </div>
  )
}

export default Menue