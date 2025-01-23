import React from "react";
import Slider from "react-slick";
import styles from "./page2.module.css";

const Page2 = () => {
  const data = [
    {
      icon: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/icon8.svg",
      img: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/service4.png",
      heading: "Web & Mobile App Development",
    },
    {
      icon: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/icon4.svg",
      img: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/service2.png",
      heading: "UI/UX & Branding Identity",
    },
    {
      icon: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/icon5.svg",
      img: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/service3.png",
      heading: "IT Management Service",
    },
    {
      icon: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/icon6.svg",
      img: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/service2.png",
      heading: "Data Tracking Security",
    },
    {
      icon: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/icon8.svg",
      img: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/p4.png",
      heading: "UI/UX & Branding Identity",
    },
    {
      icon: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/icon8.svg",
      img: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/p4.png",
      heading: "IT Management Service",
    },
    {
      icon: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/icon8.svg",
      img: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/p4.png",
      heading: "Data Tracking Security",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.headContainer}>
        <h2 className={styles.heading}>
          Our awesome services to <br /> give you success
        </h2>
      </div>
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} className={styles.cardWrapper}>
            <div className={styles.card}>
              <img src={item.img} alt="Service" className={styles.image} />
              <div className={styles.iconContainer}>
                <img src={item.icon} alt="Icon" className={styles.icon} />
              </div>
              <h5 className={styles.title}>{item.heading}</h5>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Page2;
