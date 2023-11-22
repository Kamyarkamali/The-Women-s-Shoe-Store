import Footer from "./Footer"
import Header from "./Header"

function Layout({children}:any) {
  return (
    <div>
      
    <Header/>

    <div className="h-fit">
      {children}
    </div>

    <Footer/>

    </div>
  )
}

export default Layout