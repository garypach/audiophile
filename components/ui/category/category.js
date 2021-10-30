import Image from 'next/image'
import Link from 'next/link'
const Category = (props) => {
    return(
        <div className="category-container">
          <MenuBox/>
          <MenuBox/>
          <MenuBox/>
        </div>
    )
}

export default Category

const MenuBox = (props) =>{
    return(
        <div className="category-container__box">
        <div className="category-container__img">
            <Image src="/assets/shared/mobile/image-xx99-mark-one-headphones.png" alt="headphones" height="140px" width="100px"/>
       </div>
       <div className="category-container__text">
           <p>Headphones</p>
            <p>Shop Now</p>
       </div>
       </div>
    )
}