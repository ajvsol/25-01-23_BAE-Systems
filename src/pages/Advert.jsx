import React from 'react'
import { useStateContext } from "../context/StateContext";

export default function Advert() {
  const { selectedAdvert, setSelectedAdvert } = useStateContext()

  return (
    <div>advertPage</div>
  )
}
