import Image from 'next/image'
import AudioText from '../ui/audiotext/audiotext';
import Button from '../ui/button/button';
import Category from '../ui/category/category';
import HomeProduct from './homeproducts/homeproduct';
import Link from 'next/dist/client/link';

const Home = (props) => {
  return (
    <>
       <div className="home-cont">
         <div className="mobile-image">
         <Image src="/assets/home/mobile/image-header.jpg" width="375px" height="600px" alt="header"/>
         </div>
         <div className="tablet-image">
         <Image src="/assets/home/tablet/image-header.jpg" width="768px" height="729px" alt="header"/>
         </div>
         <div className="desktop-image">
         <Image src="/assets/home/desktop/image-hero.jpg" width="1920px" height="1080px" alt="header"/>
         </div>
        <div className="home-cont__text">
            <h1>NEW PRODUCT</h1>
            <h2>XX99 MARK II HEADPHONES</h2>
            <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
            <Link href="/headphones/xx99-mark-two-headphones">
              <a>
            <Button buttontype="buttonorange" buttontext="See Product"/>
            </a>
            </Link>
        </div>
       </div>
       <Category/>
       <Link href="/speakers/zx9-speaker">
         <a>
         <HomeProduct header="ZX9 SPEAKER" body="Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound." imagesrc="image-speaker-zx9.png" containertype="" buttontext="See Product" buttontype="buttonblack"/>
         </a>
         </Link>
         <Link href="/speakers/zx7-speaker">
      <a>
      <HomeProduct header="ZX7 SPEAKER" imagesrc="image-speaker-zx7.jpg" containertype="two" buttontext="See Product" buttontype="buttonclear"/>

      </a>
      </Link>
      <Link href="/earphones/yx1-earphones">
      <a>
      <HomeProduct header="YX1 EARPHONES"  imagesrc="image-earphones-yx1.jpg" containertype="three" buttontext="See Product" buttontype="buttonclear"/>

      </a>
      </Link>
       <AudioText/>
    </>
  );
};

export default Home