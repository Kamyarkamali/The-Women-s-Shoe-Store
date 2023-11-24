import { useState } from "react"
import image1 from "../../../public/product/1.jpg"
import image2 from "../../../public/product/2.jpg"
import image3 from "../../../public/product/3.jpg"
import image4 from "../../../public/product/4.jpg"

//slider
import { IMAGE } from "../../types/interface"



function ProductSlider() {

    const [show, setShow] = useState<{ [key: number]: boolean }>({});

    const menu: IMAGE[] = [
        { id: 1, image: image1, title: "کفش بچکانه" },
        { id: 2, image: image2, title: "شال و روسری" },
        { id: 3, image: image3, title: "کفش زنانه" },
        { id: 4, image: image4, title: "کیف زنانه" },
    ]

    const handelMouseEnter = (itemId: number) => {
        // @ts-ignore
        setShow((prev) => ({ ...prev, [itemId]: true }))
    }

    const handelMouseLeave = (itemId: number) => {
        // @ts-ignore
        setShow((prev) => ({ ...prev, [itemId]: false }))
    }

    return (
        <div className="lg:flex grid grid-cols-2 gap-4 max-w-[1200px] mt-9 lg:gap-24 items-center mx-auto">
            {menu.map((item) => (
                <div key={item.id} className="relative duration-300 flex justify-center" onMouseLeave={() => handelMouseLeave(item.id)}>
                    <img src={item.image} alt="/" className="rounded-lg relative duration-300" onMouseEnter={() => handelMouseEnter(item.id)} />
                    {show[item.id] ? <div className="bg-black/40 absolute flex flex-col items-center justify-center text-white text-xl top-0 w-[220px] h-[219px]">
                        <p className="border-[2px] p-8 rounded-md">{item.title}</p>
                    </div> : null}
                </div>
            ))}
        </div>
    )
}

export default ProductSlider