import Image from 'next/image'
import MobileMenu from '../mobilemenu/mobileMenu';
import Link from 'next/dist/client/link';
import Cart from '../../ui/cart/cart';
import { useStateContext } from '../../CartProvider/cartprovider';
const Header = () =>{
    const newState = useStateContext();

        return(
        <div className='header'>
            

        <div className="top-header">
        <MobileMenu/>
           <div className="logo">
               <Link href="/">
                   <a>
               audiophile
               </a>
               </Link>
           </div>
           <div className="nav-links">
               <ul>
               <Link href="/headphones">
                   <a>
               <li>HEADPHONES</li>
               </a>
               </Link>
               <Link href="/speakers">
                   <a>
               <li>SPEAKERS</li>
               </a>
               </Link>
               <Link href="/earphones">
                   <a>
               <li>EARPHONES</li>
               </a>
               </Link>
               </ul>
           </div>
            <Cart countCart={newState.cartItems.length} cartItems={newState.cartItems}/>

        </div>

        </div>
       
    )
  
}

export default Header;