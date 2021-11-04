import Image from 'next/image'
import Link from 'next/dist/client/link';
import { useStateContext } from '../../CartProvider/cartprovider';
import Button from "../../ui/button/button"

export default function Summary(props){
    const {cartItems} = props;
    const newState = useStateContext();
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 20;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
    return(
        <>
        <div className="summary-header">
            Summary
        </div>
            {cartItems.map((item) => (
          <div key={item.id} className="summary-item-container">
            <div className="summary-item-container__img">
            <Image src={`/${item.image.mobile}`}alt={`${item.name}`} layout="fill"/>
            </div>
            <div className="summary-item-container__name">
              <div>
                {item.name}
              </div>
              <div>
              ${item.price.toFixed(2)}
              </div>
              </div>
            <div className="summary-item-container__qty">
              <div>
              x{item.qty}
            </div>
        
            </div>
          </div>
        ))}
          {cartItems.length !== 0 && (
          <>

            <div className="summary-price">
              <div className="summary-price__text">Items Price</div>
              <div className="summary-price__number">${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="summary-tax">
              <div className="summary-tax__text">Tax Price</div>
              <div className="summary-tax__number">${taxPrice.toFixed(2)}</div>
            </div>
            <div className="summary-shipping">
              <div className="summary-shipping__text">Shipping Price</div>
              <div className="summary-shipping__number">
                ${shippingPrice.toFixed(2)}
              </div>
            </div>

            <div className="summary-total">
              <div className="summary-total__text">
                <strong>Grand Total</strong>
              </div>
              <div className="summary-total__number">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
          </>
        )}
        </>
    )
}