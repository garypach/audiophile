import Image from 'next/image'
import Link from 'next/link'
import Button from '../../ui/button/button'
const HomeProduct = (props) => {
    return(
        <div className={`${props.containertype}homeproduct-container`}>
          <div className={`${props.containertype}homeproduct-container__box `}>
        <div className={`${props.containertype}homeproduct-container__img mobile-image`}>
            <Image src={`/assets/home/mobile/${props.imagesrc}`} alt="headphones" layout="fill"/>
       </div>
       <div className={`${props.containertype}homeproduct-container__img tablet-image`}>
            <Image src={`/assets/home/tablet/${props.imagesrc}`} alt="headphones" layout="fill"/>
       </div>
       <div className={`${props.containertype}homeproduct-container__img desktop-image`}>
            <Image src={`/assets/home/desktop/${props.imagesrc}`} alt="headphones" layout="fill"/>
       </div>
       <div className={`${props.containertype}homeproduct-container__text`}>
            <p className={`${props.containertype}homeproduct-header`}>{props.header}</p>
            <p className={`${props.containertype}homeproduct-body`}>{props.body}</p>
            <Button buttontext={`${props.buttontext}`} buttontype={`${props.buttontype}`}/>
       </div>
       </div>
        </div>
    )
}

export default HomeProduct