import Image from 'next/image'
import Link from 'next/dist/client/link';
import { useStateContext } from '../../CartProvider/cartprovider';
import { useState } from 'react';
import Button from "../../ui/button/button"
export default function Cart(props){
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const hide = () => setIsOpen(false);
        return(
            <nav>
            <div className="cart" onClick={toggle}>
            <Image src='/assets/shared/mobile/icon-cart.svg' height={20} width={20} alt="cart"/>
            {
              props.countCart ? <div className="countcart">{props.countCart}</div> :''
            }
            </div>
            <ul className={`cart-menu ${isOpen ? 'cart-active' : ''}`}>
            <li>
                <Basket cartItems={props.cartItems}/>
            </li>
            </ul>
          </nav>
      
    )
  
}

const Basket = (props) =>{
    const {cartItems} = props;
    const newState = useStateContext();
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 20;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
    return(
        <>
          {cartItems.length === 0 && <div className="empty-cart">Cart is empty</div>} 
          
          {
              props.countCart ? <div className="countcart">Cart ({props.countCart})</div> :''
          }
            {cartItems.map((item) => (
          <div key={item.id} className="cart-item-container">
            <div className="cart-item-container__img">
            <Image src={`/${item.image.mobile}`}alt={`${item.name}`} layout="fill"/>
            </div>
            <div className="cart-item-container__name">
              <div>
                {item.name}
              </div>
              <div>
              ${item.price.toFixed(2)}
              </div>
              </div>
            <div className="cart-item-container__qty">
              <button onClick={() => newState.onRemove(item)} className="remove">
                -
              </button>{' '}
              <div>
              {item.qty}
            </div>
              <button onClick={() => newState.onAdd(item)} className="add">
                +
              </button>
            </div>
          </div>
        ))}
          {cartItems.length !== 0 && (
          <>

            <div className="cart-item-price">
              <div className="cart-item-price__total">
                Total Price(w/Tax)
              </div>
              <div className="cart-item-price__price">
                ${totalPrice.toFixed(2)}
              </div>
            </div>
            <div className="row">
            <Button buttontype="buttonorange" buttontext="CHECKOUT"/>
            </div>
          </>
        )}
        </>
    )
}