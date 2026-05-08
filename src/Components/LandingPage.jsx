import { useSelector } from "react-redux"
import {  useNavigate } from "react-router-dom"


const LandingPage = () => {
    const navigate = useNavigate()
    const location = useSelector((store) => store.location?.data?.location)
    const truncateText = (text, maxLength) => {
            if (!text) return "Detecting location...";

            return text.length > maxLength ? text.slice(0, maxLength) + "..." : text
            }

  return (
    <div className="h-screen bg-[#FF5200]">

        <div className=" h-30 ">

            <div className="flex justify-between  ">

            
            <div className=" h-12 w-42 ml-37 my-7">
                <img className="w-full h-full object-cover" src="/swiggy_logo_white.avif" alt="" />
            </div>

            

            <div className="flex mr-30 mt-2 gap-10 items-center w-180">

            <div>
                <h1  className="text-white font-bold text-1xl">Swiggy Corporate</h1>
            </div>

            <div>
                <h1 className="text-white font-bold">Partner with us</h1>
            </div>
            <div className=" h-15 w-40">
                <button className="text-white font-bold border h-15 w-40 border-white rounded-2xl">Get The App</button>
            </div>
            <div className=" h-15 w-40">
                <button className="bg-black text-white font-bold border h-15 w-40 border-black rounded-2xl">SigIn</button>
            </div>
            </div>

            </div>
        </div>

        <div className="flex h-75">

        <img className="h-120 mt-0" src="/Veggies_new.avif" alt="" />

       
            <div className=" h-35 ml-[160px] mt-[64px] w-220">
            <h1 className="text-white font-bold text-5xl">Order food & groceries. Discover </h1>
            <h1 className="text-white font-bold text-5xl px-17 py-2">best restaurants. Swiggy it!</h1>

            <div className="flex gap-5 mt-10 justify-center">

  {/* Location Input */}
  <div className="bg-white h-18 w-90 rounded-2xl flex items-center px-6">
    <input
      type="text"
      placeholder={truncateText(location, 30)}
      className="w-full outline-none text-lg font-medium"
    />
  </div>

  {/* Search Input */}
  <div onClick={() => {
    navigate("/search")
  }} className="bg-white h-18 w-130 rounded-2xl flex items-center px-6">
    <input
      type="text"
      placeholder="Search for restaurant, item or more"
      className="w-full outline-none text-lg font-medium"
    />
  </div>

</div>
           
        </div>

        

        

        <img className="h-120" src="/Sushi_replace.avif" alt="" />
        </div>
        


        <div className="flex gap-5">
            <div onClick={() => { navigate("/resturant")}} className="ml-40 mt-0"><img className="h-90" src="/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.avif" alt="" /></div>
            <div className="mt-0"><img className="h-90" src="/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.avif" alt="" /></div>
            <div className=" mt-0"><img className="h-90" src="/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.avif" alt="" /></div>
        </div>





        
    </div>
  )
}

export default LandingPage