//images
import instagram from "../../../public/sochials/insta1-1-1.png"
import watsapp from "../../../public/sochials/014.png";
import logo from "../../../public/sochials/logo.png";


function Footer() {
  return (
    <div className="flex flex-col gap-6 lg:flex-row justify-around items-center max-w-[1500px] mx-auto bg-[#ECEFF1] shadow-md h-fit p-6 mt-4">
      <div className="flex flex-col gap-4">
        <h1>شبکه اجتماعی ست سیتی</h1>
        <img src={instagram} alt="/" />
        <img src={watsapp} alt="/" />
      </div>

      <div className="flex gap-9">
        <ul className="list-disc text-sm">
          <li>همکاری در فروش</li>
          <li>سوالات متداول</li>
          <li>درباره ما</li>
          <li>تماس با ما</li>
          <li>رهگیری محصولات پستی</li>
          <li>مجله ست سیتی</li>
        </ul>
        
        <div>
          <h1 className="font-bold text-center">دسته های محبوب مجله</h1>
          <ul className="text-center">
            <li className="border-[1px] border-b-black border-dashed">آخرین اخبار از صنعت مد و پوشاک</li>
            <li className="border-[1px] border-b-black border-dashed">اخبار</li>
            <li className="border-[1px] border-b-black border-dashed">لایف استایل</li>
            <li className="border-[1px] border-b-black border-dashed">مد و فشن</li>
          </ul>
        </div>

      </div>

      <div className="flex flex-col items-center">
        <h1 className="font-bold">اعتماد شما افتخار ماست</h1>
        <img src={logo} alt="/" />
      </div>

    </div>
  )
}

export default Footer