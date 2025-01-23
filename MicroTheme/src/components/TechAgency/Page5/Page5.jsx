import React from "react";
import Slider from "react-slick";
import styles from "./page5.module.css";

const Page5 = () => {
  const data = [
    {
      image: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/p5-1536x754.png",
      title: "Project for Marketing",
      description: "Business, Marketing",
    },
    {
      image: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/p4.png",
      title: "Marketing Agency Website",
      description: "Development, Marketing",
    },
    {
      image: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/p3.png",
      title: "Health App Development",
      description: "Development, Software",
    },
    {
      image: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/p2.png",
      title: "Cyber Security Analysis",
      description: "Security, Technology",
    },
    {
      image: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/p1.png",
      title: "Digital Product Design",
      description: "Design, Graphics",
    },
  ];

  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
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
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>Explore our recent projects</h1>
      </div>
      <Slider {...settings} className={styles.slider}>
        {data.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imageContainer}>
              <img src={item.image} alt={item.title} className={styles.image} />
              <div className={styles.textOverlay}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.description}>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Page5;
