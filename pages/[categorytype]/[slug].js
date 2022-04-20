import { productData } from "../../public/data";
import MainLayout from '../../components/layout/mainlayout/mainlayout'
import Image from "next/image";
import Button from "../../components/ui/button/button"
import Category from "../../components/ui/category/category";
import AudioText from "../../components/ui/audiotext/audiotext"
import Link from "next/link";
import { useStateContext } from '../../components/CartProvider/cartprovider';
export default function SingleProductPage(props){  
    const newState = useStateContext();

    const queryCheck = (slug) =>{
        if(slug.includes('headphones')){
            return "headphones"
        }
        if(slug.includes('speaker')){
            return "speakers"
        }
        if(slug.includes('earphones')){
            return "earphones"
        }
    }
    const showProduct = () => {
        return productData
        .filter(function (item) {
          return (item.slug === `${props.query.slug}`);
        })
        .map(function (item) {
          return (
            <div key={item.id} className="singleproduct-container">
                <div className="single-product-row">
                <div className="singleproduct-container__img mobile-image">
                    <Image src={`/${item.image.mobile}`}alt={`${item.name}`} layout="fill"/>
                </div>
                <div className="singleproduct-container__img tablet-image">
                    <Image src={`/${item.image.tablet}`}alt={`${item.name}`} layout="fill"/>
                </div>
                <div className="singleproduct-container__img desktop-image">
                    <Image src={`/${item.image.desktop}`}alt={`${item.name}`} layout="fill"/>
                </div>
             <div className="singleproduct-container__text">
             {
                 item.new ? ( 
                 <div  className={`newproduct-text`}>
                     new product
                </div>
                 ) : ''
             }
            <p className={`singleproduct-header`}>{item.name}</p>
            <p className={`singleproduct-body`}>{item.description}</p>
            <p className={`singleproduct-price`}>{`$${item.price}`}</p>
            <button className="add-btn" onClick={()=>newState.onAdd(item)}>add to cart</button>
             </div>
                </div>
             
             <div className="features-includes">
             <div className="singleproduct-features">
             <p className={`features-heading`}>Features</p>
             <p className={`features-body`}>{`${item.features}`}</p>
             </div>
             <div className="singleproduct-includes">
                <div className="inthebox">
                in the box
                </div>
                <div>
                {item.includes.map(function(includes,idx){
                    return(
                        <div key={idx} className="includes" >
                        <div className="quantity">
                          {includes.quantity}x
                      </div>
                       <div className="quantity-name">
                       {includes.item}
                        </div>
                        </div>
                    )
                })}  
                </div>
                  
            </div>
             </div>
           
            <div className="gallery-flex">
                <div>
                <div className="galleryfirst">
                <Image src={`/${item.gallery.first.mobile}`} alt={`${item.name}`} layout="fill"/>
             </div>
             <div className="gallerysecond">
             <Image src={`/${item.gallery.second.mobile}`} alt={`${item.name}`} layout="fill"/>

            </div>
                </div>
          
            <div>
            <div className="gallerythird">
            <Image src={`/${item.gallery.third.mobile}`} alt={`${item.name}`} layout="fill"/>
            </div>
            </div>
            </div>
             
             
           
            <div className="otherproduct-row">
                {item.others.map(function(other,idx){
                    return(
                        <>
                        <div className="otherproduct-column">
                        <div className="otherproduct-image mobile-image">
                        <Image src={`/${other.image.mobile}`} alt={`${other.name}`} layout="fill"/>
                        </div>
                        <div className="otherproduct-image tablet-image">
                        <Image src={`/${other.image.tablet}`} alt={`${other.name}`} layout="fill"/>
                        </div>
                        <div className="otherproduct-image desktop-image">
                        <Image src={`/${other.image.desktop}`} alt={`${other.name}`} layout="fill"/>
                        </div>
                        <div className={`otherproduct-header`}>
                            <p className={``}>{`${other.name}`}</p>
                        </div>
                        <Link key={idx} href={`/${queryCheck(other.slug)}/${other.slug}`}>
                        <a>
                        <Button buttontext="See Product" buttontype="buttonorange"/>
                        </a>
                        </Link>
                        </div>
                        
                        </>
                    )
                })}
            </div>
           </div>
        )})
    }
  return (
        <MainLayout>
        {showProduct()}
        <div className="category-category">
        <Category/>
        </div>
        <AudioText/>
        </MainLayout>
  )
}


export async function getServerSideProps(context) {
    // Pass data to the page via props
    return { props: {query: context.query} }
  }