import { useState } from "react"

import { Link } from "react-router-dom"

//utilsNumberPrice
import { sp } from "../../utils/replaceNumber"

//component
import { takhfif } from "../../data"




function Discount() {

    const [show,setShow]=useState<Record<number,boolean>>({})


    const mouseEneter = (itemId: number) => {
        // @ts-ignore
        setShow((prev) => ({ ...prev, [itemId]: true }))
      }
    
      const mouseLeave = (itemId: number) => {
        // @ts-ignore
        setShow((prev) => ({ ...prev, [itemId]: false }))
      }

  return (
    <>
    
    <div className=" max-w-[1500px] lg:bg-[#F11932] h-[600px] gap-2 mx-auto lg:flex grid grid-cols-2 md:grid-cols-4 items-center rounded-lg justify-center mt-8">
        {takhfif.map((item:any)=>(
            <div key={item.id}>
            <div className="bg-white border-[2px] flex flex-col h-[380px] p-3 rounded-md" onMouseLeave={()=>mouseLeave(item.id)}> 
            <Link to={`/DetailseNewPage/${item.id}`}>
                
                {!show[item.id] ? (
                <img src={item.image1} alt="/" className="w-[290px] relative h-[250px] rounded-lg" onMouseEnter={()=>mouseEneter(item.id)}/>

                ) : (
                    <img src={item.image2} alt="/" className="w-[290px] relative h-[250px] rounded-lg" />
                )}
            </Link>
                <div className="flex flex-col gap-4 mt-3 font-bold items-center">
                <p>{item.title}</p>
                <p>{sp(item.price)} تومان</p>
                    <p className="hidden lg:block">کد: {item.cod}</p>
                </div>
                <div className="absolute top-[84rem]">
                    <p className="bg-[#d22323c4] p-1 rounded-lg text-white mr-[-14px] hidden lg:block">{item.discount} %</p>
                </div>
            </div>
            </div>
        ))}
    </div>
            <div className="lg:flex lg:justify-center hidden"><button className="border-2 bg-black/40 p-1 rounded-md to-white w-[140px]">دیدن همه</button></div>
        </>
  )
}

export default Discount