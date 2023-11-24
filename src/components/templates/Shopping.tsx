

//icons
import { AiOutlineShopping } from "react-icons/ai";


function Shopping() {
  return (
    <div className="bg-white p-3 z-30 w-[400px] rounded-lg h-screen">
        <div className="flex justify-center items-center gap-3">
            <h1>سبد خرید</h1>
            <AiOutlineShopping size={23}/>
        </div>
        <p className="text-center mt-9">سبد خرید خالی است :( </p>
    </div>
  )
}

export default Shopping