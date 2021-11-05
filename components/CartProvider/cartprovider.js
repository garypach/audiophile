import { useContext,useState,createContext } from "react";

export const StateContext = createContext();

export function useStateContext(){
    return useContext(StateContext)
}
export function CartProvider({children}){
    const [name,SetName] = useState('')
    const handleNameInput = (e)=>{
        SetName(e.target.value)
    }
    const[nameError,SetNameError] = useState(false)
    const checkForName =(e)=>{
        console.log('check name')
        function nameValid(text){
            return /^[a-z ,.'-]+$/i.test(text)
        }
        if(nameValid(name)){
        }else{
            SetNameError(true)
        }
    }
    const removeNameError =(e)=>{
        SetNameError(false)    
    }
    const [email,SetEmail] = useState('')
    const handleEmailInput = (e)=>{
        SetEmail(e.target.value)
    }
    const[emailError,SetEmailError] = useState(false)
    const checkForEmail = (e)=>{
        console.log('check email')
        function EmailValid(etext){
            return /\S+@\S+\.\S+/.test(etext)
        }
        if(EmailValid(email)){
        }else{
            SetEmailError(true)
        }
    }
    const removeEmailError =(e)=>{
        SetEmailError(false)    
    }

    const [phone,SetPhone] = useState('')
    const handlePhoneInput = (e)=>{
        SetPhone(e.target.value)
    }
    const[phoneError,SetPhoneError] = useState(false)
    const checkForPhone = (e)=>{
        console.log('check phone')
        function PhoneValid(etext){
            return /^[0-9]+$/.test(etext)
        }
        if(PhoneValid(phone)){
        }else{
            SetPhoneError(true)
        }
    }
    const removePhoneError =(e)=>{
        SetPhoneError(false)    
    }


    const [address,Setaddress] = useState('')
    const handleaddressInput = (e)=>{
        Setaddress(e.target.value)
    }
    const[addressError,SetaddressError] = useState(false)
    const checkForaddress= (e)=>{
        function addressValid(etext){
            return /^[0-9]+[a-z ,.'-]+$/i.test(etext)
        }
        if(addressValid(address)){
        }else{
            SetaddressError(true)
            console.log('check address')

        }
    }
    const removeaddressError =(e)=>{
        SetaddressError(false)    
    }

    const [zip,SetZip] = useState('')
    const handleZipInput = (e)=>{
        SetZip(e.target.value)
    }
    const[zipError,SetZipError] = useState(false)
    const checkForZip= (e)=>{
        function ZipValid(etext){
            return /^[0-9]+$/.test(etext)
        }
        if(ZipValid(zip)){
        }else{
            SetZipError(true)
            console.log('checkzip')

        }
    }
    const removeZipError =(e)=>{
        SetZipError(false)    
    }

    const [city,SetCity] = useState('')
    const handleCityInput = (e)=>{
        SetCity(e.target.value)
    }
    const[cityError,SetCityError] = useState(false)
    const checkForCity= (e)=>{
        function cityValid(etext){
            return /^[a-z ,.'-]+$/i.test(etext)
        }
        if(cityValid(city)){
        }else{
            SetCityError(true)
            console.log('check city')

        }
    }
    const removeCityError =(e)=>{
        SetCityError(false)    
    }

    const [country,SetCountry] = useState('')
    const handleCountryInput = (e)=>{
        SetCountry(e.target.value)
    }
    const[countryError,SetCountryError] = useState(false)
    const checkForCountry= (e)=>{
        function countryValid(etext){
            return /^[a-z ,.'-]+$/i.test(etext)
        }
        if(countryValid(country)){
        }else{
            SetCountryError(true)
            console.log('check country')

        }
    }
    const removeCountryError =(e)=>{
        SetCityError(false)    
    }

    const [card,SetCard] = useState('')
    const handleCardInput = (e)=>{
        SetCard(e.target.value)
    }
    const[cardError,SetCardError] = useState(false)
    const checkForCard= (e)=>{
        function cardValid(etext){
            return /^[0-9]+$/.test(etext)
        }
        if(cardValid(card)){
        }else{
            SetCardError(true)
            console.log('check card')

        }
    }
    const removeCardError =(e)=>{
        SetCardError(false)    
    }
    
    const [cvv,SetCvv] = useState('')
    const handleCvvInput = (e)=>{
        SetCvv(e.target.value)
    }
    const[cvvError,SetCvvError] = useState(false)
    const checkForCvv= (e)=>{
        function cvvValid(etext){
            return /^[0-9]+$/.test(etext)
        }
        if(cvvValid(cvv)){
        }else{
            SetCvvError(true)
            console.log('check cvv')

        }
    }
    const removeCvvError =(e)=>{
        SetCvvError(false)    
    }

   
const[formSubmit,SetSubmitForm] = useState(false)

const submittedForm = (e) =>{
    e.preventDefault()
    if(
        emailError === false 
        && email.length > 5 
        && nameError === false
        && phone.length === 10  
        && phoneError === false 
        && address.length > 6
        && addressError === false 
        && zipError === false 
        && zip.length >= 4
        && city.length > 3
        && cityError === false 
        && country.length > 5
        && countryError === false 
        && card.length >= 8
        && cardError === false 
        && cvvError === false 
        && cvv.length > 2

        ){
        scrollToTop()
        toggle()
        SetSubmitForm(true)
        console.log("submit")
    }
}
const [isOpen, setIsOpen] = useState(false);
const toggle = () => setIsOpen(!isOpen);
const hide = () => setIsOpen(false);
const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };
const [cartItems,setCartItems] = useState([]);
const onAdd = (product) => {
  const exist = cartItems.find(x => x.id === product.id);
  if(exist){
    setCartItems(cartItems.map(x => x.id === product.id ? {...exist,qty:exist.qty +1 } : x));
  }
  else{
    setCartItems([...cartItems, {...product, qty: 1}]);
  }
  console.log(cartItems)
};
const onRemove = (product) => {
    const exist = cartItems.find(x => x.id === product.id);
    if(exist.qty === 1){
      setCartItems(cartItems.filter(x => x.id !== product.id));
    }
    else{
        setCartItems(cartItems.map(x => x.id === product.id ? {...exist,qty:exist.qty - 1 } : x));

    }
    console.log(cartItems)
  };

    return(
        <StateContext.Provider value={{
            name,
            handleNameInput,
            email,
            handleEmailInput,
            checkForName,
            removeNameError,
            nameError,
            checkForEmail,
            removeEmailError,
            emailError,
            phone,handlePhoneInput,phoneError,checkForPhone,removePhoneError,
            address,handleaddressInput,addressError,checkForaddress,removeaddressError,
            zip,handleZipInput,zipError,checkForZip,removeZipError,
            city,handleCityInput,cityError,checkForCity,removeCityError,
            country,handleCountryInput,countryError,checkForCountry,removeCountryError,
            card,handleCardInput,cardError,checkForCard,removeCardError,
            cvv,handleCvvInput,cvvError,checkForCvv,removeCvvError,

            formSubmit,
            submittedForm,
           
            cartItems,
            setCartItems,
            onAdd,
            onRemove,
            isOpen,
            }}>
            {children}
        </StateContext.Provider>
    )
}