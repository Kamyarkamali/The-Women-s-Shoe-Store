interface MENULIST{
    id:number,
    title:string,
    url:string,
    icon?:any
}

interface IMAGE{
    id:number,
    image:any,
    title?:string
}


interface DATA{
    id:number,
    title:string,
    size?:number,
    image1?:any,
    image2?:any,
    image3?:any,
    image4?:any,
    image5?:any,
    cod:number,
    description:any,
    category:string,
    price:number
}

export type {MENULIST,IMAGE,DATA}