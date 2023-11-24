import { useEffect,useState } from "react"

//icons
import { AiOutlineShopping } from "react-icons/ai";

//get data shopping in redux
import {useSelector} from "react-redux"
import ShoppingMenu from "../module/ShoppingMenu";

function Shopping() {
      // @ts-ignore
  const state=useSelector((state)=>state.shopping)
  // @ts-ignore
  const [prodcuts,setProducts]=useState<[]>([])


  useEffect(()=>{
    const items=JSON.parse(localStorage.getItem("datas")||"[]")
    setProducts(items)
  },[])

  


  return (
    <div className="bg-white p-3 z-30 w-[400px] rounded-lg h-screen">
        <div className="flex justify-center items-center gap-3">
            <h1>سبد خرید</h1>
            <AiOutlineShopping size={23}/>
        </div>
        <div>
          {!state.length ? (
            <p className="text-center mt-16 bg-gray-400 p-1 text-black font-bold rounded-md">سبد خرید خالی است :(</p>
          ) :(
            <div>
              {state.map((item:any)=>(
                <ShoppingMenu key={item.id} data={item}/>
              ))}
            </div>
          )}
        </div>
    </div>
  )
}

export default Shopping