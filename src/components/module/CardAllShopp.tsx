import {useState, useEffect} from "react";

import { sp } from "../../utils/replaceNumber"

//icon
import { AiOutlineDelete } from "react-icons/ai";

//react-hot-toast
import toast, { Toaster } from 'react-hot-toast';

//redux
import {useDispatch, useSelector} from "react-redux"
import {incerement , decrements , removeItem} from "../../Redux/slicer/slicer"

function CardAllShopp({data}) {

  const [products,setProducts]=useState<[]>([])

  const state=useSelector((state)=>state.shopping)
  console.log(state)

  useEffect(()=>{
    const storeData=JSON.parse(localStorage.getItem("datas") || '[]')
    setProducts(storeData)
  },[])

  const remove=(id)=>{
    dispatch(removeItem(id))
    toast.success("پرداخت انجام شد")
    window.location.replace("/")
    
  }


    const dispatch=useDispatch()

  return (
    <div className='flex flex-col gap-8 lg:flex-row items-center justify-between max-w-[1500px] mx-auto mt-9'>
      
        <div className='border-[2px] flex items-center lg:justify-around justify-between lg:w-[900px] h-fit p-4 border-gray-300 rounded-lg'>
            <img src={data.image1} alt='/' className='lg:w-[100px] w-[40px] rounded-lg'/>
            <p className='text-sm text-gray-500 w-[100px]'>{data.title}</p>
            <div className='flex gap-4 items-center'>
            <button onClick={()=>dispatch(incerement(data.id))} className='text-xl cursor-pointer'>+</button>
            <span className='border-[1px] p-3 border-gray-400 rounded-lg'>{data.quantity}</span>
            <button onClick={()=>dispatch(decrements(data.id))} className='text-xl cursor-pointer'>-</button>
            <span className="bg-red-300 p-1 rounded-md text-black font-bold lg:w-[200px] text-sm w-[100px]">قیمت کل : {sp(data.titalprice)} تومان</span>
            <button onClick={()=>dispatch(removeItem(data.id))}>
                <AiOutlineDelete size={24} color="red"/>
            </button>
            </div>
        </div>


        <div className="border-[1px] p-3 lg:h-[300px] lg:w-[450px] flex flex-col justify-center border-gray-500 rounded-md">
          <h1 className="text-center text-xl">مجموعه کل سبد خرید</h1>
            <div className="flex justify-between">
              <p>محصول:</p>
              <p>{data.title}</p>
            </div>
            <div className="flex justify-between">
                <p>قیمت : </p>
                <p>{sp(data.price)}</p>
            </div>
            <div className="flex justify-between">
                <p>قیمت کل : </p>
                <p>{sp(data.titalprice)}</p>
            </div>
            <div className="flex justify-between">
              <p>دسته بندی :</p>
              <p>{data.category}</p>
            </div>
            <div className="flex justify-center">
            <button onClick={()=>remove(data.id)} className="bg-green-500 w-[330px] p-3 rounded-md mt-4">پرداخت</button>
            </div>
        </div>
      <Toaster/>
    </div>
  )
}

export default CardAllShopp