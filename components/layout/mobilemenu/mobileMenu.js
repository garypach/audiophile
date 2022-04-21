import { useState } from "react";
import Image from "next/image";
import Category from "../../ui/category/category";
const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const hide = () => setIsOpen(false);
  
    return (
      <nav className="mobile-nav">
        <div className="menu" onClick={toggle}>
        <Image src='/assets/icon-menu.svg' height={15} width={20} alt="menu"/>
        </div>
        <ul onClick ={hide} className={`mobile-menu ${isOpen ? 'mobile-active' : ''}`}>
        <li onClick ={hide}>
          <Category/>
        </li>
         
        </ul>
      </nav>
    );
  };
  export default MobileMenu;