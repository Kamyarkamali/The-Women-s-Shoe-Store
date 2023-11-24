import { AiOutlineClose } from "react-icons/ai";

import {useParams} from "react-router-dom"

//react-hot-toast
import toast, { Toaster } from 'react-hot-toast';

import { data } from "../../data"
import { useState } from "react";
import { sp } from "../../utils/replaceNumber";

//redux
import { useSelector,useDispatch } from "react-redux";
import { addToCart } from "../../Redux/slicer/slicer";


function DetailseNewPage() {

  
  const state=useSelector((state)=>state)

  const dispatch=useDispatch()

  const [modal,setModal]=useState<null>(null)

    const {id}=useParams()

    const products:any=data[id-1]

    const showModal=(id:number)=>{
      setModal(id)
    }
  

    const addToShopping=(produt:any)=>{
      dispatch(addToCart(produt))
      toast.success("محصول به سبد خرید اضافه شد")
    }


  return (
    <div className="max-w-[1500px] shadow-md mt-4 mx-auto flex flex-col items-center bg-[#F4F5F9]">
            <h1 className="text-red-400 text-xl">نمونمه محصول</h1>

        
        <div className="flex flex-col lg:flex-row justify-between w-full">

        <div className="flex flex-col items-center border-[1px] p-2 shadow-md">
          <p className=" border-b-[1px] border-red-600">نوع محصول : {products.category}</p>
          <p className=" border-b-[1px] border-red-600">کد محصول : {products.cod}</p>
          <p className="w-[300px] border-[1px] mt-3 rounded-md text-gray-600 text-sm border-red-600 text-center leading-10">{products.description}</p>
          <p className="bg-blue-400 mt-3 p-1 rounded-md text-red-500 font-bold">تومان {sp(products.price)}</p>
          <button onClick={()=>addToShopping(products)} className="bg-green-500 p-1 mt-3 rounded-lg text-white">اضافه کردن به سبد خرید</button>
        </div>
        <div className="grid lg:grid-cols-4 relative md:grid-cols-4 grid-cols-2 p-3 gap-4 border-[2px] rounded-md border-red-600">
        <img src={products.image1} alt="/" className={modal === products.image1 ?"lg:w-[530px] w-[400px] rounded-lg" : "w-[130px] h-[200px] rounded-lg duration-300 delay-75"} onClick={()=>showModal(products.image1)}/>
        <img src={products.image2} alt="/" className={modal === products.image2 ?"lg:w-[530px] w-[400px] rounded-lg" : "w-[130px] h-[200px] rounded-lg duration-300 delay-75"} onClick={()=>showModal(products.image2)}/>
        <img src={products.image3} alt="/" className={modal === products.image3 ?"lg:w-[530px] w-[400px] rounded-lg" : "w-[130px] h-[200px] rounded-lg duration-300 delay-75"} onClick={()=>showModal(products.image3)} />
        <img src={products.image4} alt="/" className={modal === products.image4 ?"lg:w-[530px] w-[400px] rounded-lg" : "w-[130px] h-[200px] rounded-lg duration-300 delay-75"} onClick={()=>showModal(products.image4)} />
        </div>

        <div className="flex justify-center absolute lg:left-[4rem] top-[22rem] cursor-pointer left-[1rem] lg:top-[7rem]">
          {modal&&<AiOutlineClose size={30} className="bg-red-300 text-white rounded-lg" onClick={()=>setModal(null)}/>}
          </div>

        </div>
        <Toaster/>
    </div>
  )
}

export default DetailseNewPage