import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
          srcset=""
        />
        <div className="home__row">
          <Product
            title="The lean startup"
            price={29.29}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            title="Rock Paper Scissors: A Novel"
            price={29.29}
            image="https://images-na.ssl-images-amazon.com/images/I/51Ytr9yV0pL._AC_SX184_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            title="The Nature of Middle-earth"
            price={29.29}
            image="https://images-na.ssl-images-amazon.com/images/I/51RN-ydxniS._AC_SX184_.jpg"
            rating={5}
          />
          <Product
            title="Fuzz: When Nature Breaks the Law"
            price={29.29}
            image="https://images-na.ssl-images-amazon.com/images/I/51lUsJuUIqS._AC_SX184_.jpg"
            rating={5}
          />
          <Product
            title="The Lord of the Rings Illustrated Edition"
            price={29.29}
            image="https://images-na.ssl-images-amazon.com/images/I/41vN31PD7SL._AC_SX184_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            title="Google Pixel 5 - 5G Android Phone - Water Resistant - Unlocked Smartphone with Night Sight and Ultrawide Lens - Sorta Sage"
            price={29.29}
            image="https://m.media-amazon.com/images/I/81AqwYyZjzL._AC_UY327_FMwebp_QL65_.jpg"
            rating={3}
          />
          <Product
            title="Google Pixel 4a with 5G - Android Phone - New Unlocked Smartphone with Night Sight and Ultrawide Lens - Just Black"
            price={29.29}
            image="https://m.media-amazon.com/images/I/71C0OH4WfpL._AC_UY327_FMwebp_QL65_.jpg"
            rating={3}
          />
          <Product
            title="Google Pixel 4 (128GB, 6GB) 5.7', IP68 Water Resistant, Snapdragon 855, GSM/CDMA Factory "
            price={29.29}
            image="https://m.media-amazon.com/images/I/51l02S9fYmS._AC_UY327_FMwebp_QL65_.jpg "
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
