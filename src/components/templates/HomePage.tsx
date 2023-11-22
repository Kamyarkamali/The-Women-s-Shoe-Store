
import Menu from '../module/Menu'
import Slider from "../../components/module/Slider"
import ProductSlider from '../module/ProductSlider'
import NewProduct from '../module/NewProduct'

function HomePage() {
  return (
    <div>
        <Menu/>
        <Slider/>
        <ProductSlider/>
        <NewProduct/>
    </div>
  )
}

export default HomePage