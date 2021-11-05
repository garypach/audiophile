import Image from 'next/image'
import MainLayout from '../components/layout/mainlayout/mainlayout'
import { useStateContext } from '../components/CartProvider/cartprovider';
import Summary from '../components/ui/summarybasket/summary';
import { useState } from 'react';
import Cart from '../components/ui/cart/cart';
import Link from 'next/dist/client/link';
export default function Checkout(props) {
    const newState = useStateContext();
    const itemsPrice = newState.cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 20;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
  
  
  return (
    <MainLayout>
      <div className={`thank ${newState.isOpen ? 'thank-active' : ''}`}>
       <div className="thank-heading">
         thank you for your order
         </div>
         <div className="thank-body">
         You will receive an email confirmation shortly.
         </div>
         {newState.cartItems.slice(0, 1).map((item) => (
      <div key={item.id} className="order-item-container">
        <div className="order-item-container__img">
        <Image src={`/${item.image.mobile}`}alt={`${item.name}`} layout="fill"/>
        </div>
        <div className="order-item-container__name">
          <div>
            {item.name}
          </div>
          <div>
          ${item.price.toFixed(2)}
          </div>
          </div>
        <div className="order-item-container__qty">
          <div>
          x{item.qty}
        </div>
    
        </div>
      </div>
    ))}
     <div className="order-extra">
       <div className="order-line"></div>
          and {newState.cartItems.length > 1 && newState.cartItems.length - 1} other item(s)
      </div>
      <div className="order-total">
              <div className="order-total__text">
                <strong>Grand Total</strong>
              </div>
              <div className="order-total__number">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <Link href="/">
            <a>
            <button type="submit" className="email-modal__button">
           BACK TO HOME
         </button>
         </a>
         </Link>
       </div>
      
        
   <section className={`email-modal ${newState.isOpen ? 'modal-active' : ''}`}>
       <form onSubmit={newState.submittedForm}>
           <div className="checkout-header">
               checkout
           </div>
           <div className="span-header">
               billing details
           </div>         <div className="email-modal__form-group">
         <p> Name</p>

           <div>
           <input
             onChange={newState.handleNameInput}
             value={newState.name}
             type="name"
             className={`email-modal__input ${
              newState.nameError ? "email-modal__input--active" : ""
            } `}             
            placeholder="Name"
             onBlur={newState.checkForName}
             onFocus={newState.removeNameError}
           />
           <div
         className={`email-modal__error-message ${
           newState.nameError ? "email-modal__error-message--active" : ""
         } `}
       >
         This field is required
         </div>
       </div>
         </div>
         <div className="email-modal__form-group">
         <p> Email</p>

           <div>
           <input
             type="email"
             className={`email-modal__input ${
              newState.emailError ? "email-modal__input--active" : ""
            } `}  
              placeholder="Email"
             onChange={newState.handleEmailInput}
             value={newState.email}
             onBlur={newState.checkForEmail}
             onFocus={newState.removeEmailError}
           />
            <div
         className={`email-modal__error-message ${
           newState.emailError ? "email-modal__error-message--active" : ""
         } `}
       >
         This field is required
         </div>
       </div>
         </div>
         <div className="email-modal__form-group">
         <p> Phone Number</p>
           <div>
           <input
              type="tel" id="phone" name="phone"
             className={`email-modal__input ${
              newState.phoneError ? "email-modal__input--active" : ""
            } `}  
              placeholder="Phone number"
             onChange={newState.handlePhoneInput}
             value={newState.phone}
             onBlur={newState.checkForPhone}
             onFocus={newState.removePhoneError}
           />
            <div
         className={`email-modal__error-message ${
           newState.phoneError ? "email-modal__error-message--active" : ""
         } `}
       >
         This field is required
         </div>
       </div>
         </div>
         <div className="span-header">
               shipping info
           </div>
         <div className="email-modal__form-group">
         <p> Your Address</p>
           <div>
           <input
              type="address" id="address" name="address"
             className={`email-modal__input ${
              newState.addressError ? "email-modal__input--active" : ""
            } `}  
              placeholder="Address"
             onChange={newState.handleaddressInput}
             value={newState.address}
             onBlur={newState.checkForaddress}
             onFocus={newState.removeaddressError}
           />
            <div
         className={`email-modal__error-message ${
           newState.addressError ? "email-modal__error-message--active" : ""
         } `}
       >
         This field is required
         </div>
       </div>
         </div>

         <div className="email-modal__form-group">
         <p> Zip Code</p>
           <div>
           <input
              type="number" id="number" name="zip"
             className={`email-modal__input ${
              newState.zipError ? "email-modal__input--active" : ""
            } `}  
              placeholder="Zip"
             onChange={newState.handleZipInput}
             value={newState.zip}
             onBlur={newState.checkForZip}
             onFocus={newState.removeZipError}
           />
            <div
         className={`email-modal__error-message ${
           newState.zipError ? "email-modal__error-message--active" : ""
         } `}
       >
         This field is required
         </div>
       </div>
         </div>

         <div className="email-modal__form-group">
         <p> City</p>
           <div>
           <input
              type="text" id="city" name="city"
             className={`email-modal__input ${
              newState.cityError ? "email-modal__input--active" : ""
            } `}  
              placeholder="City"
             onChange={newState.handleCityInput}
             value={newState.city}
             onBlur={newState.checkForCity}
             onFocus={newState.removeCityError}
           />
            <div
         className={`email-modal__error-message ${
           newState.cityError ? "email-modal__error-message--active" : ""
         } `}
       >
         This field is required
         </div>
       </div>
         </div>

         <div className="email-modal__form-group">
         <p> Country</p>
           <div>
           <input
              type="text" id="country" name="country"
             className={`email-modal__input ${
              newState.countryError ? "email-modal__input--active" : ""
            } `}  
              placeholder="Country"
             onChange={newState.handleCountryInput}
             value={newState.country}
             onBlur={newState.checkForCountry}
             onFocus={newState.removeCountryError}
           />
            <div
         className={`email-modal__error-message ${
           newState.countryError ? "email-modal__error-message--active" : ""
         } `}
       >
         This field is required
         </div>
       </div>
         </div>
         <div className="span-header">
               payment details
           </div>
         <div className="email-modal__form-group">
         <p> Card Number</p>
           <div>
           <input
              type="number" id="card" name="card"
             className={`email-modal__input ${
              newState.cardError ? "email-modal__input--active" : ""
            } `}  
              placeholder="Card Number"
             onChange={newState.handleCardInput}
             value={newState.card}
             onBlur={newState.checkForCard}
             onFocus={newState.removeCardError}
           />
            <div
         className={`email-modal__error-message ${
           newState.cardError ? "email-modal__error-message--active" : ""
         } `}
       >
         This field is required
         </div>
       </div>
         </div>

         <div className="email-modal__form-group">
         <p> CVV</p>
           <div>
           <input
              type="number" id="cvv" name="cvv"
             className={`email-modal__input ${
              newState.cvvError ? "email-modal__input--active" : ""
            } `}  
              placeholder="CVV Number"
             onChange={newState.handleCvvInput}
             value={newState.cvv}
             onBlur={newState.checkForCvv}
             onFocus={newState.removeCvvError}
           />
            <div
         className={`email-modal__error-message ${
           newState.cvvError ? "email-modal__error-message--active" : ""
         } `}
       >
         This field is required
         </div>
       </div>
         </div>
         <div className="summary-cont">
         <Summary countCart={newState.cartItems.length} cartItems={newState.cartItems}/>
         </div>
        
         <button type="submit" className="email-modal__button">
           continue and pay
         </button>
      
       </form>
     </section>
    </MainLayout>
    )
}
