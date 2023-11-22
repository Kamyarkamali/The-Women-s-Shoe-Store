import {useState} from "react"
//image-logo
import logo from "../../../public/assets/logo.jpg"
import Search from "../module/Search"

//reatc-icons
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineUserAdd } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

//interface
import { MENULIST } from "../../types/interface";

function Header() {

  const [show,setShow]=useState<boolean>(false)

  const menu:MENULIST[]=[
    {id:1,title:"صفحه اصلی",url:""},
    {id:2,title:"زنانه",url:"",icon:<AiOutlinePlus color="red"/>},
    {id:3,title:"بجگانه",url:"",icon:<AiOutlinePlus color="red"/>},
    {id:4,title:"پوشاک",url:"",icon:<AiOutlinePlus color="red"/>},
    {id:5,title:"لوازم جانبی",url:""},
    {id:6,title:"فروش عمده",url:""},
    {id:7,title:"رهگیری مرسولات پستی",url:""},
    {id:8,title:"کسب درآمد بدون سرمایه",url:""},
  ]

  return (
    <div className="flex bg-white items-center justify-between rounded-lg p-3 max-w-[1500px] mx-auto">
      <div>
        <Link to={"/"}>
        <img src={logo} alt="logo" className="w-[60px]"/>
        </Link>
      </div>
        
      <div>
        <Search/>
      </div>

      <div>
        <button className="lg:flex items-center bg-[#218838] hidden text-white p-1 rounded-2xl">
          <AiOutlineUser/> وارد شوید
          /
          ساخت اکانت
          <AiOutlineUserAdd/>
        </button>
        <div className="lg:hidden md:block relative hover:border-2 hover:bg-[#d6caca] duration-300 hover:rounded-full hover:p-1">
           {/* menu */}
           <AiOutlineMenu size={30} className="cursor-pointer" onClick={()=>setShow(!show)}/>
          {/* menu */}
        </div>
        
       {/* meni list */}
       <div className={show ? "absolute z-20 right-0 lg:hidden bg-white duration-300 p-3 w-[300px] rounded-md top-[5rem] h-screen" :"absolute z-20 lg:hidden duration-300 right-[-100%] bg-white p-3 w-[300px] rounded-md top-[5rem] h-screen"}>
            <ul>
              <AiOutlineClose size={24} onClick={()=>setShow(!show)} className="cursor-pointer"/>
              {menu.map((item)=>(
                <li key={item.id} className="flex border-b-2 text-sm bg-[#F7F7F7] p-1 rounded-md items-center mt-9 justify-between">{item.title} {item.icon}</li>
                ))}
            </ul>
                </div>
          {/* meni list */}

      </div>
    </div>
  )
}

export default Header