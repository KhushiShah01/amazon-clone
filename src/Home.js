import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  const images = [
    "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Samsung/SamsungM/M32/GW/Launch/27thJune/SaleTomorrow/D24426934_IN_WLME_SamsungGalaxy_M32_DesktopTallHero_1500x600_2._CB665481007_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC-Accessories/New-Launches/boAt/Ingress/Immportal_Tall_hero_1500x600._CB665206622_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/SBD21/SBD-Teaser-WebHero-1X._CB665230624_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/HeroJune21/1X_D_XCMCampaign_Music._CB666416883_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Avatar/HeroPC_1500x600_CBCC._CB667391209_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/LA/Diwali2019/Rishab/Auto_Biss/Sports_Outdoor_sale/June/GW_Heros/Sports_1500x600._CB665082962_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",
  ];
  const delay = 2500;

  function Slideshow() {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    function resetTimeout() {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }

    useEffect(() => {
      resetTimeout();
      timeoutRef.current = setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          ),
        delay
      );
      return () => {
        resetTimeout();
      };
    }, [index]);

    return (
      <div className="home__image">
        <div
          className="home__slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0,0)` }}
        >
          {images.map((image, index) => (
            <div className="home__image" key={index}>
              <img src={image} alt="Image" />
            </div>
          ))}
        </div>

        {/* <div className="home__slideshowdots">
          {images.map((_, idx) => (
            <div
              className={`home__slideshowdot${index == idx ? " active" : ""}`}
              key={idx}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div> */}
      </div>
    );
  }

  return (
    <div className="home">
      <div className="home__container">
        {/* <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          className="home__image"
          alt=""
        /> */}
        <Slideshow />
      </div>

      <div className="home__sell">
        <div className="home__row">
          <Product
            id={453201}
            title="The lean Startup: How Constant Innovation Creates Radically Successful Business Paperback"
            price={399}
            image="https://m.media-amazon.com/images/I/51WIKlio9qL.jpg"
            rating={5}
          />
          <Product
            id={5478963}
            title="2020 Apple iPad Air with A14 Bionic chip (10.9-inch/27.69 cm, Wi-Fi, 64GB) - Green (4th Generation)"
            image="https://m.media-amazon.com/images/I/71SAHzzQqkL._AC_UY218_.jpg"
            rating={4}
            price={56990}
          />
          <Product
            id={456314}
            title="Titan
Octane Analog Silver Dial Men's Watch NM1650BM03/NN1650BM03 "
            price={5999}
            image="https://images-na.ssl-images-amazon.com/images/I/41UO1GGVyKL._SY300_SX300_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id={1463643}
            title="Mi 80 cm (50 inches) HD Ready Android Smart LED TV 4A PRO|L32M5-AL (Black)"
            rating={4}
            price={59999}
            image="https://m.media-amazon.com/images/I/71Z+l05eSIS._AC_UL320_.jpg"
          />
        </div>

        <div className="home__amazonlanuagead">
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Vernac13th/1500x150_V2_Eng._CB412582591_.jpg" />
        </div>
        <div className="home__row">
          <Product
            id={85632}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            title="Kenwood kMix Stand Mixer for Baking, STylish Kitchen Mixer with K-beater, 5 Litre Glass Bowl"
            price={799}
            rating={4}
          />
          <Product
            id={54762}
            title="Amazon Echo (3rd gen) | Smart speaker with Alexa"
            price={4999}
            rating={5}
            image="https://images.unsplash.com/photo-1543512214-318c7553f230?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
