 
//cions
import { AiOutlineArrowDown } from "react-icons/ai";
import { AiFillShopping } from "react-icons/ai";
///interface
import { MENULIST } from "../../types/interface"

function Menu() {


    const menu:MENULIST[]=[
        {id:1,title:"صفحه اصلی",url:""},
        {id:2,title:"زنانه",url:"",icon:<AiOutlineArrowDown color="red"/>},
        {id:3,title:"بجگانه",url:"",icon:<AiOutlineArrowDown color="red"/>},
        {id:4,title:"پوشاک",url:"",icon:<AiOutlineArrowDown color="red"/>},
        {id:5,title:"لوازم جانبی",url:""},
        {id:6,title:"فروش عمده",url:""},
        {id:7,title:"رهگیری مرسولات پستی",url:""},
        {id:8,title:"کسب درآمد بدون سرمایه",url:""},
      ]

  return (
    <div className="max-w-[1500px] hidden  mx-auto shadow-md lg:flex p-3 rounded-md relative">
        <ul className="flex justify-between gap-11">
            {menu.map((item)=>(
                <li className="flex text-sm gap-1 items-center">{item.title} {item.icon}</li>
            ))}
                <AiFillShopping color="gray" size={30} className="absolute left-9"/>
                <span className="absolute bg-[#3D3D3D] left-[3.4rem] top-[1.4rem] rounded-full p-[3px] h-6 w-5 text-white text-center">0</span>
        </ul>
    </div>
  )
}

export default Menu