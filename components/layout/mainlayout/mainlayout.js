import Header from "../header/header"
import Footer from "../footer/footer"
import Cart from "../../ui/cart/cart"
const MainLayout = (props) =>
{
   return(
   <>
   <Header/>
    <section>
        {props.children}
    </section>
    <Footer/>
   </>
   )
}

export default MainLayout;