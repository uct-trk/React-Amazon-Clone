import React from "react";
import Product from "../Product/Product";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          alt="image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
        />
        <div className="home__row">
          <Product
            title="Amazon Watc"
            price={429.99}
            image="https://m.media-amazon.com/images/I/61AFh5sIoZS._AC_UL320_.jpg"
            rating={5}
            id="1"
          />
          <Product
            id="2"
            title="Shop by Jewelery"
            price={500}
            rating={4}
            image="https://m.media-amazon.com/images/I/6138X6rwZrL._AC_UL320_.jpg"
          />
          <Product
            id="3"
            title="Beauty Music"
            price={1900}
            rating={4}
            image="https://m.media-amazon.com/images/I/41yavwjp-8L._AC_SY200_.jpg"
          />
        </div>
        <div className="home__row">
        <Product
            id="4"
            title="Xbox Series S"
            price={400}
            rating={5}
            image="https://m.media-amazon.com/images/I/61Q2hRo4BCL._AC_UY218_.jpg"
          />
         <Product
            id="5"
            title="Play Station 5"
            price={400}
            rating={5}
            image="https://m.media-amazon.com/images/I/61OL2zIliML._AC_UY218_.jpg"
          />
          <Product
            id="6"
            title="Samsung Galaxy A32"
            price={300}
            rating={5}
            image="https://m.media-amazon.com/images/I/71JiTToCosL._AC_UL320_.jpg"
          />
        </div>
        <div className="home__row">
        <Product
            id="7"
            title="Samsung Galaxy Television"
            price={300}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71RiQZ0J2SL.__AC_SY300_SX300_QL70_FMwebp_.jpg"
          />
          <Product
            id="8"
            title="Samsung Galaxy Television"
            price={300}
            rating={5}
            image="https://m.media-amazon.com/images/I/810teLObcES._AC_UY218_.jpg"
          />
          <Product
            id="9"
            title="SkyTech Shadow 3.0 Gaming Computer"
            price={1200}
            rating={5}
            image="https://m.media-amazon.com/images/I/91Uj6p+yXQL._AC_UY218_.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
