import Image from 'next/image'
import Button from '../ui/button/button';

const Home = (props) => {
  return (
    <>
       <div className="home-cont">
           <Image src="/assets/home/mobile/image-header.jpg" width="375" height="600px" alt="header"/>
        <div className="home-cont__text">
            <h1>NEW PRODUCT</h1>
            <h2>XX99 MARK II HEADPHONES</h2>
            <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
            <Button/>
        </div>
       </div>
    </>
  );
};

export default Home