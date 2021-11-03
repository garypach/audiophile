import Image from 'next/image'
import MobileMenu from '../mobilemenu/mobileMenu';
import Link from 'next/dist/client/link';
import Cart from '../../ui/cart/cart';
import { useStateContext } from '../../CartProvider/cartprovider';
const Header = () =>{
    const newState = useStateContext();

        return(
        <div className="top-header">
           <MobileMenu/>
           <div className="logo">
               <Link href="/">
                   <a>
               <h1>audiophile</h1>
               </a>
               </Link>
           </div>
            <Cart countCart={newState.cartItems.length} cartItems={newState.cartItems}/>
        </div>
    )
  
}

export default Header;