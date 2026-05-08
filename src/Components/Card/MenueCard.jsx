import NavBar from "../NavBar"
import MenueAccordian from "./MenueAccordian"
import OfferCard from "./OfferCard"



const MenueCard = ({data}) => {

    const title = data && data[0].card.card.text
    let offerArr = data[3].card.card.gridElements.infoWithStyle.offers

    const menue = data[5].groupedCard.cardGroupMap.REGULAR.cards.slice(2,15)
    console.log(menue)



  return (
    <div>
        <NavBar />
         <div className=" w-200 ml-103 mt-11">
                <div>
                    <h1 className="font-extrabold text-2xl">{title}</h1>
                </div>

                    <div className="mt-7 ml-2 font-bold text-1xl flex gap-5">
                        <h1>{data[1].card.card.tabs[0].title}</h1>
                        <h1>Dineout</h1>
                    </div>

                <div className=" h-40 mt-5 flex">
                    <div className="w-175 h-35 border border-gray-200 ml-2 rounded-[25px] bg-white shadow-[0_10px_0px_#e5e7eb]">
                            <div className="ml-5 mt-3 flex gap-1 font-bold text-[14px]">
                                <img src="/public/star.svg" alt="" />
                                <span className="mt-0.5">{data[2].card.card.info.avgRating} {`(${data[2].card.card.info.totalRatingsString})`}</span>
                                <span className="text-black font-bold text-lg mx-2 relative bottom-1 text-3xl">.</span>
                                <span className="mt-0.5">{data[2].card.card.info.costForTwoMessage}</span>
                            </div>

                          <div className="ml-7 text-[#FF5200] font-bold">
                            <h1 className="text-[15px]">{data[2].card.card.info.cuisines.slice(0, 3).join(", ")}</h1>
                          </div>

                        <div className="flex gap-4 mt-4">

                    
                            <div className="flex flex-col items-center 1 ml-9">
                                <div className="w-2.5 h-2.5 rounded-full bg-gray-400"></div>

                                <div className="w-[2px] h-7 bg-gray-300"></div>

                                <div className="w-2.5 h-2.5 rounded-full bg-gray-400"></div>
                            </div>

                            
                            <div className="flex flex-col gap-3 text-[13.5px]">

                                <div className="flex gap-2 items-center">
                                <span className="font-bold  mt-[-5px]">Outlet</span>

                                <span className="text-gray-600 mt-[-5px]">
                                    {data[2].card.card.info.areaName}
                                </span>
                                </div>

                                <div>
                                <span className="font-bold mt-[-5px]">
                                    {data[2].card.card.info.sla.slaString}
                                </span>
                                </div>

                            </div>

                        
                    </div>

                    
                </div>

                
            </div>

            <div>
                <div className="mt-4 font-bold text-[20px]">
                    <h1>Deals For You</h1>
                </div>

                   <div className="flex overflow-x-auto no-scrollbar gap-4 whitespace-nowrap">
                        {offerArr && offerArr.map((item, index) => {
                            return <OfferCard key={index} item={item} />
                        })}
                    </div>
            </div>

            <div className="ml-100 mt-5">
                <h1 className="font-bold">
                    Menue
                </h1>
            </div>
            <div className=" mt-5">
                <input className=" w-full text-center bg-gray-200 h-10 rounded-[7px] " type="text" placeholder="search" />
            </div>
                
            <div>
                {menue && menue.map((item, index) => {
                    return <MenueAccordian key = {index}  item = {item} />
                })}
            </div>


        



        </div>
    </div>
  )
}

export default MenueCard