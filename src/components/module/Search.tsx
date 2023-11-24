import { useState } from "react"

import { takhfif } from "../../data"
import { Link } from "react-router-dom"

function Search() {
  const [search,setSearch]=useState<string>("")

  const [produts,setProducts]=useState<any[]>([])
      // @ts-ignore
  const changeHandeler=(e)=>{
    const values=e.target.value.trim()
    setSearch(values)
    if(values){
      // @ts-ignore
      const filtered=takhfif.filter((item)=>(
        item.title.toLowerCase().includes(values)
      ))
      setProducts(filtered)
    } else{
      setProducts([])
    }
  }

  const clearSearch=()=>{
    setProducts([])
    setSearch("")
  }

  return (
    <div>
      <input value={search} onChange={changeHandeler} type="text" placeholder='جستجوی محصولات ...' className="bg-[#EBEBEB] p-2 lg:w-[500px] w-[300px] placeholder:text-black rounded-2xl outline-none" />
      <div className={produts &&" border-blue-500 rounded-lg"}>
        <ul className={!produts ? "flex flex-col items-center overflow-y-auto h-[200px]":"flex  flex-col items-center overflow-y-auto border-2 rounded-md"}>
        {produts.map((item:any)=>(
            <li className="flex border-t-2 p-3 flex-col items-center">
              <Link to={`/DetailseNewPage/${item.id}`}>                   
              <img src={item.image1} alt="/" className="w-[70px]" onClick={clearSearch}/>
              </Link>
              <p>{item.title}</p>
            </li>
          ))}
          </ul>
      </div>
    </div>
  )
}

export default Search