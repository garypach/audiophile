import Image from 'next/image'
import Link from 'next/link'
const AudioText = (props) => {
    return(
        <div className="audiotext-container">
          <div className="audiotext-container__box">
        <div className="audiotext-container__img mobile-image">
            <Image src="/assets/shared/mobile/image-best-gear.jpg" alt="headphones" height="300px" width="327px"/>
       </div>
       <div className="audiotext-container__img tablet-image">
            <Image src="/assets/shared/tablet/image-best-gear.jpg" alt="headphones" height="300px" width="689px"/>
       </div>
       <div className="audiotext-container__img desktop-image">
            <Image src="/assets/shared/desktop/image-best-gear.jpg" alt="headphones" layout="fill"/>
       </div>
       <div className="audiotext-container__text">
       <p className="audiotext-header">Bringing you the <span>best</span> audio gear</p>
            <p className="audiotext-body">Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
       </div>
       </div>
        </div>
    )
}

export default AudioText