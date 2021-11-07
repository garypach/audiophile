import Image from 'next/image'
import Link from 'next/link'
const Footer = (props) => {
    return(
        <div className="footer-container">
        <div className="footer-container__box">
       <div className="footer-container__text">
       <p className="footer-header">audiophile</p>
       <div className="footer-links">
           <p>
               home
           </p>
           <p>
               headphones
           </p>
           <p>
               speakers
           </p>
           <p>
               earphones
           </p>
       </div>
            <p className="footer-body">Audiophile is an all in one stop to fulfill your audio needs. We are a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
            <p className="footer-copy">Copyright 2021. All Rights Reserved</p>
            <div className="footer-socials">
            <Image src="/assets/shared/facebook.svg" height={24} width={24}alt="facebook"/>
            <Image src="/assets/shared/twitter.svg" height={24} width={24}alt="facebook"/>
            <Image src="/assets/shared/instagram.svg" height={24} width={24}alt="facebook"/>
            </div>
       </div>
       </div>
        </div>
    )
}

export default Footer