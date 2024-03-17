import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
  return (
    <div className="complete">
    <div className='home'>
        <div className="home__container">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
        

        {/* Rows he bohot saare after the blue image which have products */}

        <div className="home__row">
        <Product className='bright'  id="1" brandname='Apple' title='iPhone 15 Pro Max (256 GB) - Blue Titanium' image='https://m.media-amazon.com/images/I/81+GIkwqLIL._AC_UY218_.jpg' price={156900} rating={4.5}/>
        <Product className='bright'  id="2" brandname='Apple' title='AirPods Pro (2nd Generation) ​​​​​​​' image='https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_UY218_.jpg' price={19999} rating={4.2}/>
        </div>


        <div className="home__row">
        <Product id="3" className='bright'  brandname='ASUS' title='Gaming Laptops starting INR 45,990' image='https://m.media-amazon.com/images/I/41MwyjFFd5L._AC_UF226,226_FMjpg_.jpg' price={50999} rating={4.5} />
        <Product id="4" className='bright'  brandname='Apple' title='2023 MacBook Air laptop with M2 chip: 38.91cm (15.3 inch) Liquid Retina display, 8GB RAM ' image='https://m.media-amazon.com/images/I/81UFHe-hH5L._AC_UY218_.jpg' price={39998} rating={4.5}/>
        <Product id="5" className='bright'  brandname='OnePlus' title='11R 5G (Sonic Black, 8GB RAM, 128GB Storage)' image='https://m.media-amazon.com/images/I/61u9zN1HYCL._AC_UY218_.jpg' price={156900} rating={4.5}/>

        </div>


        <div className="home__row">
        <Product id="6" className='bright'  brandname='LG' title='139 cm  (55 inches)  4K  240fps Ultra Smooth HD Smart LED TV 55UR7500PSC (Dark Iron Gray)' image='https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/6/AmazonStores/A21TJRUUN4KGV/da857e6b6462f8e15a08605e65c85e44.w3000.h600._CR0%2C0%2C3000%2C600_SX1500_.jpg' price={199900} rating={4.5}/>
        </div>
      </div>


     


    </div>


    <div className="footer">
  
        <div className="footer__first">
          

        
          <div className="get">
            <div className='footer_head'>Get to Know Us</div>
            <div>About Us</div>
            <div>Careers</div>
            <div>Press Releases</div>
            <div>Amazon Science</div>
          
          </div>

          <div className="connect">
          <div className='footer_head'>Connect with Us</div>
            <div>Facebook</div>
            <div>Twitter</div>
            <div>Instagram</div>
            
          
          </div>

          <div className="make">
          <div className='footer_head'>Make Money with Us</div>
            <div>Sell on Amazon</div>
            <div>Sell under Amazon Acelerator</div>
            <div>Protect and Build your Brand</div>
            <div>Amazon Global Selling</div>
            <div>Become an Affiliate</div>
          
          </div>

          <div className="let"> 
          <div className='footer_head'>Let Us Help You</div>
          <div>COVID-19 and Amazon</div>
<div>Your Account</div>
<div>Returns Centre</div>
<div>100% Purchase Protection</div>
<div>Amazon App Download</div>
<div>Help</div>
           </div> 




        </div>
        <div className="second">
        <img className="footer__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
        </div>
        
      </div>





    </div>
  )
}

export default Home
