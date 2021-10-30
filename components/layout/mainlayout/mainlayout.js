import Header from "../header/header"
import Footer from "../footer/footer"

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