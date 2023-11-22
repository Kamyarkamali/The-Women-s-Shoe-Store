//interface
import image1 from "../public/newProducts/1.jpg";
import image2 from "../public/newProducts/2.jpg";
import image3 from "../public/newProducts/3.jpg";
import image4 from "../public/newProducts/4.jpg";
import image5 from "../public/newProducts/5.jpg";

import image6 from "../public/newProducts/6.jpg"
import image7 from "../public/newProducts/7.jpg"
import image8 from "../public/newProducts/8.jpg"
import image9 from "../public/newProducts/9.jpg"

import image11 from "../public/newProducts/11.jpg"
import image12 from "../public/newProducts/12.jpg"
import image13 from "../public/newProducts/13.jpg"
import image14 from "../public/newProducts/14.jpg"

import image15 from "../public/newProducts/15.jpg"
import image16 from "../public/newProducts/16.jpg"
import image17 from "../public/newProducts/17.jpg"

import { DATA } from "./types/interface";


const des:string="چکمه ها کفش های چرمی بلد هستند.چکمه های محافظت از پاها,مچ پا کمک میکنند و تعدادی از آن ها کل ساق را میپوشانند"

const des2:string="کیف یکی از لوازم های جانبی کاربردی یا از مهم ترین ملزومات شیک پوشی خانم ها است ."





const data:DATA[]=[
    {id:1,title:"چکمه بلند",cod:1362,image1:image1,image2:image2,image3:image3,image4:image4,image5:image5,description:des,size:37,category:"کفش و چکمه",price:1340000},
    {id:2,title:"کیف فشن استایل کد",cod:1363,image1:image6,image2:image7,image3:image8,image4:image9,description:des2,category:"وسایل",price:145000},
    {id:3,title:"چکمه پشت بند سنگی",cod:1364,image1:image11,image2:image12,image3:image13,image4:image14,description:des,category:"کفش و چکمه",price:595000},
    {id:4,title:"چکمه پشت بند ساده",cod:1365,image1:image15,image2:image16,image3:image17,description:des,category:"کفش و چکمه",price:595000},
]


export {data}