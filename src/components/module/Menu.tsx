import { useState } from "react";

//cions
import { AiOutlineArrowDown } from "react-icons/ai";
import { AiFillShopping } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

///interface
import { MENULIST } from "../../types/interface"
import Shopping from "../templates/Shopping";

//get data shopping in redux
import {useSelector} from "react-redux"
import { Link } from "react-router-dom";

function Menu() {


    // const [prodcuts,setProducts]=useState<any[]>([])


    // useEffect(()=>{
    //   const items=JSON.parse(localStorage.getItem("datas")||"[]")
    //   setProducts(items)
    // },[])
  
    // @ts-ignore
    const state=useSelector((state)=>state.shopping.length)
    

    const [shopping,setShopping]=useState<boolean>(false)

    const menu: MENULIST[] = [
        { id: 1, title: "صفحه اصلی", url: "" },
        { id: 2, title: "زنانه", url: "", icon: <AiOutlineArrowDown color="red" /> },
        { id: 3, title: "بجگانه", url: "", icon: <AiOutlineArrowDown color="red" /> },
        { id: 4, title: "پوشاک", url: "", icon: <AiOutlineArrowDown color="red" /> },
        { id: 5, title: "لوازم جانبی", url: "" },
        { id: 6, title: "فروش عمده", url: "" },
        { id: 7, title: "رهگیری مرسولات پستی", url: "" },
        { id: 8, title: "کسب درآمد بدون سرمایه", url: "" },
    ]

    return (
        <div className="max-w-[1500px] hidden  mx-auto shadow-md lg:flex p-3 rounded-md relative">
            <ul className="flex justify-between gap-11">
                {menu.map((item) => (
                    <Link key={item.id} to={item.url}>
                    <li className="flex text-sm gap-1 items-center">{item.title} {item.icon}</li>
                    </Link>
                ))}
                <AiFillShopping color="gray" size={30} className="absolute left-9 cursor-pointer" onClick={()=>setShopping(!shopping)}/>
                <span className="absolute bg-[#3D3D3D] left-[3.4rem] top-[1.4rem] rounded-full p-[3px] h-6 w-5 text-white text-center">{state || 0}</span>
            </ul>
            <div className={!shopping ? "absolute duration-300 flex justify-center left-[-100%] top-[2.8rem] rounded-lg" : "absolute flex justify-center duration-300 left-[-36px] top-[2.8rem] rounded-lg"}>
                
                {shopping&&<Shopping />}
                {shopping&&<AiOutlineClose size={24} className="absolute cursor-pointer left-[23rem] z-50" onClick={()=>setShopping(!shopping)}/>}
            </div>
        </div>
    )
}

export default Menu