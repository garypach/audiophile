import Image from 'next/image'
import Link from 'next/link'
const Category = (props) => {
    return(
        <div className="category-container">
          <MenuBox category="headphones"/>
          <MenuBox category="speakers"/>
          <MenuBox category="earphones"/>
        </div>
    )
}

export default Category

const MenuBox = (props) =>{
    return(
        <div className="category-container__box">
        <div className="category-container__img">
            <Image src="/assets/shared/mobile/image-xx99-mark-one-headphones.png" alt={`${props.category}`} layout="fill"/>
       </div>
       <Link href={`${props.category}`}>
           <a className="category-container__text">
       <div>
           <p>{props.category}</p>
            <p>Shop Now</p>
       </div>
       </a>
       </Link>
       </div>
    )
}