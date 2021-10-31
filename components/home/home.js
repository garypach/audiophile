import Image from 'next/image'
import AudioText from '../ui/audiotext/audiotext';
import Button from '../ui/button/button';
import Category from '../ui/category/category';
import HomeProduct from './homeproducts/homeproduct';

const Home = (props) => {
  return (
    <>
       <div className="home-cont">
           <Image src="/assets/home/mobile/image-header.jpg" width="375" height="600px" alt="header"/>
        <div className="home-cont__text">
            <h1>NEW PRODUCT</h1>
            <h2>XX99 MARK II HEADPHONES</h2>
            <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
            <Button buttontype="buttonorange" buttontext="See Product"/>
        </div>
       </div>
       <Category/>
       <HomeProduct header="ZX9 SPEAKER" body="Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound." imagesrc="image-speaker-zx9.png" containertype="" buttontext="See Product" buttontype="buttonblack"/>
       <HomeProduct header="ZX7 SPEAKER" imagesrc="image-speaker-zx7.jpg" containertype="two" buttontext="See Product" buttontype="buttonclear"/>
       <HomeProduct header="YX1 EARPHONES"  imagesrc="image-earphones-yx1.jpg" containertype="three" buttontext="See Product" buttontype="buttonclear"/>
       <AudioText/>
    </>
  );
};

export default Home