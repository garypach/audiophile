import Image from 'next/image'
import MobileMenu from '../mobilemenu/mobileMenu';
const Header = () =>{
        return(
        <div className="top-header">
           <MobileMenu/>
           <div className="logo">
               <h1>audiophile</h1>
           </div>
           <div className="cart">
            <Image src='/assets/shared/mobile/icon-cart.svg' height={20} width={20} alt="cart"/>
            </div>
        </div>
    )
  
}

export default Header;