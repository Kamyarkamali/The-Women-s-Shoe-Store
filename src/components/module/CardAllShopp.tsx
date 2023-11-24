import { sp } from "../../utils/replaceNumber"

//icon
import { AiOutlineDelete } from "react-icons/ai";

//redux
import {useDispatch} from "react-redux"
import { incerement , decrements , removeItem} from "../../Redux/slicer/slicer"

function CardAllShopp({data}) {

    const dispatch=useDispatch()

  return (
    <div className='flex justify-between max-w-[1500px] mx-auto mt-9'>
        <div className='border-[2px] flex items-center justify-around w-[900px] h-fit p-4 border-gray-300 rounded-lg'>
            <img src={data.image1} alt='/' className='w-[100px] rounded-lg'/>
            <p className='text-sm text-gray-500'>{data.title}</p>
            <div className='flex gap-4 items-center'>
            <button onClick={()=>dispatch(incerement(data.id))} className='text-xl cursor-pointer'>+</button>
            <span className='border-[1px] p-3 border-gray-400 rounded-lg'>{data.quantity}</span>
            <button onClick={()=>dispatch(decrements(data.id))} className='text-xl cursor-pointer'>-</button>
            <span className="bg-red-300 p-1 rounded-md text-black font-bold">قیمت کل : {sp(data.titalprice)} تومان</span>
            <button onClick={()=>dispatch(removeItem(data.id))}>
                <AiOutlineDelete size={24} color="red"/>
            </button>
            </div>
        </div>

        <div>rcenter</div>

        <div>left</div>

    </div>
  )
}

export default CardAllShopp