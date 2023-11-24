import { useState } from "react"

import { data } from "../../data"

import { Link } from "react-router-dom"
import { sp } from "../../utils/replaceNumber";

function NewProduct() {

  const [shoImage, setShowImage] = useState<boolean>(false);


  const mouseEneter = (itemId: number) => {
    setShowImage((prev) => ({ ...prev, [itemId]: true }))
  }

  const mouseLeave = (itemId: number) => {
    setShowImage((prev) => ({ ...prev, [itemId]: false }))
  }



  return (
    <div className="max-w-[1300px] mx-auto mt-5">
      <h1 className="text-xl border-b-[1px] mb-4 inline-block border-red-500">جدیدترین محصولات</h1>
      <div className="md:flex grid grid-cols-2 md:grid-cols-3 justify-center gap-4">
        {data.map((item) => (

          <div key={item.id} className="border-[2px] bg-white">
            <Link to={`/NewDetailse/${item.id}`}>
              <div onMouseLeave={() => mouseLeave(item.id)}>
                {
                  !shoImage[item.id] ? (
                    <img src={item.image1} alt="/" className="w-[290px] rounded-md h-[250px] object-cover bg-white p-3 shadow-lg " onMouseEnter={() => mouseEneter(item.id)} />

                  ) : (
                    <>
                      <img src={item.image2} alt="/" className="w-[290px] relative rounded-md h-[250px] object-cover bg-white p-3 shadow-lg " />
                    </>
                  )
                }
              </div>
            </Link>
            <p className="text-center mt-3 font-bold">{item.title}</p>
            <p className="text-center mt-6 text-red-600 font-bold">{sp(item.price)} تومان</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="bg-[#AC0707] text-white p-2 w-[150px] rounded-lg mt-4">دیدن همه</button>
      </div>
    </div>
  )
}

export default NewProduct