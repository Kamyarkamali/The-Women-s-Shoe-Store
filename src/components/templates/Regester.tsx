
//image
import login from "../../../public/assets/login.png"

function Regester() {
  return (
    <div className="flex flex-col border-[2px] p-5 lg:flex-row lg:justify-center items-center mt-20">
       <div>
       <form className="flex flex-col lg:flex-col justify-evenly h-[340px] rounded-lg border-blue-500 w-[300px] border-[2px]">
        <h1 className="text-center text-xl text-blue-500 font-bold">صفحه ورود</h1>
        <div className="flex gap-7 flex-col items-center">
            <input type="email" placeholder="ایمیل..." className="bg-slate-200 p-2 w-[200px] border-blue-400 border-[1px] rounded-lg placeholder:text-black outline-none"/>
            <input type="password" placeholder="رمز عبور.." className="bg-slate-200 p-2 w-[200px] border-blue-400 border-[1px] rounded-lg placeholder:text-black outline-none"/>
        </div>
        <div className="flex justify-center">
            <button className="bg-blue-600 p-1 rounded-lg text-white w-[130px]">ثبت نام</button>
        </div>
        <div className="flex flex-col items-center">
            <p className="text-blue-500">اکانت نساخته اید؟</p>
            <a href="#" className="text-blue-700">ساخت اکانت</a>
        </div>
        </form>
       </div>
       <div className="border-blue-500 border-[2px] rounded-md hidden lg:block">
        <img src={login} alt="login" className="lg:w-[500px] h-[333px] rounded-lg"/>
       </div>
    </div>
  )
}

export default Regester