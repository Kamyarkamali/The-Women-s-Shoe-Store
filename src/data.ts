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


import image18 from "../public/takhfif/1.jpg"
import image19 from "../public/takhfif/2.jpg"
import image20 from "../public/takhfif/3.jpg"
import image21 from "../public/takhfif/4.jpg"

import image22 from "../public/takhfif/5.jpg"
import image23 from "../public/takhfif/6.jpg"
import image24 from "../public/takhfif/7.jpg"
import image25 from "../public/takhfif/8.jpg"
import image26 from "../public/takhfif/9.jpg"

import image27 from "../public/takhfif/10.jpg"
import image28 from "../public/takhfif/11.jpg"
import image29 from "../public/takhfif/12.jpg"
import image30 from "../public/takhfif/13.jpg"

import image31 from "../public/takhfif/14.jpg"
import image32 from "../public/takhfif/15.jpg"
import image33 from "../public/takhfif/16.jpg"
import image34 from "../public/takhfif/17.jpg"



import { DATA } from "./types/interface";


const des:string="چکمه ها کفش های چرمی بلد هستند.چکمه های محافظت از پاها,مچ پا کمک میکنند و تعدادی از آن ها کل ساق را میپوشانند"

const des2:string="کیف یکی از لوازم های جانبی کاربردی یا از مهم ترین ملزومات شیک پوشی خانم ها است ."

const des3:string="انتخاب یک کفش مناسب از بین تمام کفش هایی که پیش رو دارید، کار دشواری است.برای کسانی که مدت زمان طولانی ای پیاده روی میکنند داشتن کفش راحت اهمیت زیادی دارد."

const des4:string="یک صندل زنانه مناسب باید از در هنگام راه رفتن راحت باشد و پا در داخل آن احساس راحتی و آزادی داشته باشد."

const des5:string="این کار در عین زیبایی بسیار راحت و خوش پا بوده و میتوان آن را در موقعیت های روزانه استفاده"

const data:DATA[]=[
    {id:1,title:"چکمه بلند",cod:1362,image1:image1,image2:image2,image3:image3,image4:image4,image5:image5,description:des,size:37,category:"کفش و چکمه",price:1340000},
    {id:2,title:"کیف فشن استایل کد",cod:1363,image1:image6,image2:image7,image3:image8,image4:image9,description:des2,category:"وسایل",price:145000},
    {id:3,title:"چکمه پشت بند سنگی",cod:1364,image1:image11,image2:image12,image3:image13,image4:image14,description:des,category:"کفش و چکمه",price:595000},
    {id:4,title:"صندل لژدارکشی کد 1111",cod:1111,image1:image15,image2:image16,image3:image17,description:des,category:"کفش و چکمه",price:595000},
]

// @ts-ignore
const takhfif=[
    {id:1,image1:image18,image2:image19,image3:image20,image4:image20,image5:image21,title:"کتونی برشکا لژ دار کد 1284",description:des3,cod:1284,price:330000,category:"کفش و چکمه",discount:27},
    {id:2,image1:image25,image2:image26,image3:image22,image4:image23,image5:image24,title:"صندل لژدارکشی کد 1111",description:des4,cod:1111,price:330000,category:"کفش و چکمه",discount:25},
    {id:3,image1:image27,image2:image28,image3:image29,image4:image30,title:"کتونی مکویین لویی ویتون کد 1250",description:des5,cod:1250,price:580000,category:"کفش و چکمه",discount:8},
    {id:4,image1:image31,image2:image32,image3:image33,image4:image34,title:"نیم بوت لاریسا کد 1312",description:des5,cod:1312,price:299000,category:"کفش و چکمه"},
]


export {data,takhfif}