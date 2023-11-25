import { Link } from 'react-router-dom'

//icons
import { AiOutlineDelete } from "react-icons/ai"

//redux
import { useDispatch } from "react-redux"
import { incerement , decrements , removeItem} from "../../Redux/slicer/slicer"

function ShoppingMenu({data}:any) {

  
  const dispatch=useDispatch()
  
  

  return (
    <div className='border-2 flex flex-col gap-4'>
        <div className='flex justify-center gap-6 items-center mt-5'>
        <button onClick={()=>dispatch(incerement(data.id))} className='bg-blue-400 rounded-lg text-xl text-white w-[100px] h-[30px]'>+</button>
        <img src={data.image1} alt="/" className='w-[60px] rounded-lg object-cover' />
        <button onClick={()=>dispatch(decrements(data.id))} className='bg-red-400 rounded-lg text-xl text-white w-[100px] h-[30px]'>-</button>
        </div>
        <div className='flex justify-center'>
          <button onClick={()=>dispatch(removeItem(data.id))}>
            <AiOutlineDelete size={21} className="cursor-pointer" color="red"/>
          </button>
        </div>
        <span className='text-center text-white font-bold border-[1px] bg-red-500 rounded-md'>{data.quantity}</span>
        <div className='flex gap-6 justify-center mt-8'>
            <button className='bg-green-500 p-1 w-[130px] rounded-md text-white font-bold' onClick={()=>dispatch(removeItem(data.id))}>تسویه حساب</button>
            <Link to={"/AllShopping"}>
            <button className='border-2 p-1 rounded-md border-gray-400 hover:bg-gray-300 duration-300 hover:text-red-500'>مشاهده سبد خرید</button>
            </Link>
        </div>
    </div>
  )
}

export default ShoppingMenu