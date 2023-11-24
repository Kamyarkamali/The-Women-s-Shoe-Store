import {useState,useEffect} from "react"

import { getCookie } from "../helpers/cookie"

//spinare loader

import Loader from "../module/Loader"

//image
import login from "../../../public/assets/login.png"

function Regester() {

  const [username,setUserName]=useState<string>("mor_2314")

  const [password,setPassword]=useState<string>("83r5^_")

  const [messege,setMessege]=useState<boolean>(false)

  const [loader,setLoader]=useState<boolean>(false)

  const cookie=getCookie()
  // @ts-ignore
  const submitHandeler=(e)=>{
    e.preventDefault()
  }

  const sendHandeler=async()=>{
    setLoader(true)
    const res=await fetch("https://fakestoreapi.com/auth/login",{
      method:"POST",
      body:JSON.stringify({username,password}),
      headers:{"Content-Type": "application/json"},
    })
    const json=await res.json()
    setLoader(false)
    location.reload()
    document.cookie=`token=${json.token}`
  }


  useEffect(()=>{
    const messege=setTimeout(()=>{
      setMessege(true)
    },1000)

    return()=>clearTimeout(messege)

  },[])


  useEffect(()=>{
    if(cookie){
       location.assign("/")
    }
  },[])
  
  return (
    <div className="flex flex-col border-[2px] p-5 lg:flex-row lg:justify-center items-center mt-20">
       <div>
      
      {messege ? <div className="bg-red-600 text-white p-4 z-20 h-[200px] flex flex-col justify-center lg:text-xl text-center rounded-lg">
        <p>با سلام,مقدار نام کاربری و پسورد از fakestore api گرفته شده , لطفا فقط با همین مقادیر وارد شوید , سپاس</p> 
        <div className="flex justify-center">
        <button onClick={()=>setMessege(false)} className="bg-blue-400 p-1 w-[140px] rounded-md mt-7">بستن</button>
        </div>
       </div> : null}
      

       {!messege&&<form onSubmit={submitHandeler} className="flex flex-col lg:flex-col justify-evenly h-[340px] rounded-lg border-blue-500 w-[300px] border-[2px]">
        <h1 className="text-center text-xl text-blue-500 font-bold">صفحه ورود</h1>
        <div className="flex gap-7 flex-col items-center">
            <input onChange={(e)=>setUserName(e.target.value)} value={username} type="text" placeholder="ایمیل..." className="bg-slate-200 p-2 w-[200px] border-blue-400 border-[1px] rounded-lg placeholder:text-black outline-none"/>
            <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" placeholder="رمز عبور.." className="bg-slate-200 p-2 w-[200px] border-blue-400 border-[1px] rounded-lg placeholder:text-black outline-none"/>
        </div>
        <div className="flex justify-center">
            {!loader ? (
              <button onClick={sendHandeler} className="bg-blue-600 p-1 rounded-lg text-white w-[130px]">ثبت نام</button>
            ) : (
              <Loader/>
            )}
        </div>
        <div className="flex flex-col items-center">
            <p className="text-blue-500">اکانت نساخته اید؟</p>
            <a href="#" className="text-blue-700">ساخت اکانت</a>
        </div>
        </form>}
       </div>
       {!messege&&<div className="border-blue-500 border-[2px] rounded-md hidden lg:block">
        <img src={login} alt="login" className="lg:w-[500px] h-[333px] rounded-lg"/>
       </div>}
    </div>
  )
}

export default Regester