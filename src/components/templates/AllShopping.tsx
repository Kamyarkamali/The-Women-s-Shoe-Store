
//redux
import { useSelector } from "react-redux"
import CardAllShopp from "../module/CardAllShopp"

function AllShopping() {
  // @ts-ignore
    const state=useSelector((state)=>state.shopping)

  return (
    <div>
        {state.map((i:any)=>(
            <CardAllShopp key={i.id} data={i}/>
        ))}
    </div>
  )
}

export default AllShopping