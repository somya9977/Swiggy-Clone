import { useState } from "react"
import MenueAccordianCard from "./MenueAccordianCard"

const MenueAccordian = ({ item }) => {
  const [open, setOpen] = useState(false)

  const data = item.card.card

  return (
    <div>
      {/* Accordion Header */}
      <div
        className="flex justify-between cursor-pointer mt-7"
        onClick={() => setOpen(!open)}
      >
        <h1 className="font-bold">
          {data.title}
        </h1>

        <span>{open ? "▲" : "▼"}</span>
      </div>

      {/* Accordion Body */}
      {open && (
        <div className="mt-3">

          {/* Direct itemCards */}
          {data.itemCards &&
            data.itemCards.map((items, index) => (
              <MenueAccordianCard
                key={index}
                items={items}
              />
            ))}

          {/* Nested categories */}
          {data.categories &&
            data.categories.map((category, index) => (
              <div key={index} className="mt-5">

                <h2 className="font-bold text-lg">
                  {category.title}
                </h2>

                {category.itemCards.map((items, i) => (
                  <MenueAccordianCard
                    key={i}
                    items={items}
                  />
                ))}

              </div>
            ))}

        </div>
      )}
    </div>
  )
}

export default MenueAccordian