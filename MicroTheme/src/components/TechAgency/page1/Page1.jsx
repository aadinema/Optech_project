import React from "react";
import styles from "./page1.module.css";
import Slider from "react-slick";

const Page1 = () => {
    
        const settings = {
          dots: false,
          infinite: true,
          slidesToShow: 5,
          slidesToScroll: 1,
          autoplay: true,
          speed: 4000,
          autoplaySpeed: 500,
          cssEase: "linear"
        };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.section}>
          <div className={styles.left}>
            <h1 className={styles.heading}>
              Delivering tech solutions for your startups
            </h1>
          </div>
          <div className={styles.right}>
            <p className={styles.paragraph}>
              We transform businesses of most major sectors with powerful and
              adaptable digital solutions that satisfy the needs of today.
            </p>
            <div>
              <button className={styles.primaryButton}>Work With Us</button>
              <button className={styles.secondaryButton}>View Services</button>
            </div>
          </div>
        </div>

       {/* image section */}
      <div className={styles.imageContainer}>
        <img
          src="https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/hero-02-thumb-1536x759.png"
          alt="img" className={styles.image} 
        />
      </div>

      <div className={styles.paraContainer}>
        <p className={styles.paragraph}>Empowered professionals to connect with top-tier opportunities</p>
      </div>
      
      <div>
      <div className={styles.sliderContainer}>
      <Slider {...settings}>
        <div>
          <img src="https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/brand2.svg" alt="slideImage" className={styles.imageicon}/>
        </div>
        <div>
        <img src="https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/brand4.svg" alt="slideImage" />
        </div>
        <div>
        <img src="https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/brand3.svg" alt="slideImage" />
        </div>
        <div>
        <img src="https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/brand5.svg" alt="slideImage" />
        </div>
        <div>
        <img src="https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/brand1.svg" alt="slideImage" />
        </div>
      </Slider>
      <br />
      <br />
      <br />
      <br />
    </div>
      </div>
      </div>

      
    </>
  );
};

export default Page1;
