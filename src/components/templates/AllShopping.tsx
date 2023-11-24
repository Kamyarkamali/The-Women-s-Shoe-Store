
//redux
import { useSelector } from "react-redux"
import CardAllShopp from "../module/CardAllShopp"

function AllShopping() {
    const state=useSelector((state)=>state.shopping)

      console.log(state)
  return (
    <div>
        {state.map((i)=>(
            <CardAllShopp key={i.id} data={i}/>
        ))}
    </div>
  )
}

export default AllShopping