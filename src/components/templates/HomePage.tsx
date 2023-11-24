
import Menu from '../module/Menu'
import Slider from "../../components/module/Slider"
import ProductSlider from '../module/ProductSlider'
import NewProduct from '../module/NewProduct'
import Discount from '../module/Discount'

function HomePage() {
  return (
    <div>
        {/* <Menu/> */}
        <Slider/>
        <ProductSlider/>
        <NewProduct/>
        <Discount/>
    </div>
  )
}

export default HomePage