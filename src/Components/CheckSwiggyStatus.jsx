const CheckSwiggyStatus = (cards) => {
  if (!cards) return "EMPTY"

  const hasUnserviceable = cards.some(
    (card) =>
      card?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.seo.widgets.v1.SwiggyNotPresent"
  )

  if (hasUnserviceable) return "UNSERVICEABLE"

  if (cards.length === 0) return "EMPTY"

  return "SUCCESS"
}

export default CheckSwiggyStatus