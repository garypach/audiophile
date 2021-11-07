import { productData } from "../../data";
import MainLayout from '../../components/layout/mainlayout/mainlayout'
import Image from "next/image";
import Button from "../../components/ui/button/button"
import Category from "../../components/ui/category/category";
import AudioText from "../../components/ui/audiotext/audiotext"
import Link from "next/dist/client/link";
export default function Index(props){  
    const showProducts = () => {
        return productData
        .sort(item => {
            return item.new ? -1 : 1 // `true` values first
          })
        .filter(function (item) {
          return (item.category === `${props.query.categorytype}`);
        })
        .map(function (item) {
          return (
            <div key={item.id} className="categoryproduct-container">
            <div className="categoryproduct-container__box">
             <div className="categoryproduct-container__img mobile-image">
             <Image src={`/${item.categoryImage.mobile}`}alt={`${item.name}`} layout="fill"/>
             </div>
             <div className="categoryproduct-container__img tablet-image">
             <Image src={`/${item.categoryImage.tablet}`}alt={`${item.name}`} layout="fill"/>
             </div>
             <div className="categoryproduct-container__img desktop-image">
             <Image src={`/${item.categoryImage.desktop}`}alt={`${item.name}`} layout="fill"/>
             </div>
             <div className="categoryproduct-container__text">
             {
                 item.new ? ( 
                 <div  className={`newproduct-text`}>
                     new product
                </div>
                 ) : ''
             }
            <p className={`categoryproduct-header`}>{item.name}</p>
            <p className={`categoryproduct-body`}>{item.description}</p>
            <Link href={`/${props.query.categorytype}/${item.slug}`}>
            <a>
            <Button buttontext="See Product" buttontype="buttonorange"/>
            </a>
            </Link> 
                        
            </div>
           </div>
            </div>
        )})
    }
  return (
    <MainLayout>
        <div className="category-header">
        {props.query.categorytype}   
        </div>
        {showProducts()}
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