import React from "react";
import Slider from "react-slick"; // Import Slider from react-slick
import "slick-carousel/slick/slick.css"; // Import the slick-carousel styles
import "slick-carousel/slick/slick-theme.css"; // Import the slick-carousel theme styles
import styles from "./page5.module.css";

const Page5 = () => {
  const data = [
    {
      image:
        "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/p5-1536x754.png",
      title: "Project for Marketing",
      description: "Business, Marketing",
    },
    {
      image:
        "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/p4.png",
      title: "Marketing Agency Website",
      description: "Development, Marketing",
    },
    {
      image:
        "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/p3.png",
      title: "Health App Development",
      description: "Development, Software",
    },
    {
      image:
        "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/p2.png",
      title: "Cyber Security Analysis",
      description: "Security, Technology",
    },
    {
      image:
        "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/p1.png",
      title: "Digital Product Design",
      description: "Design, Graphics",
    },
    {
      image:
        "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/p1.png",
      title: "Digital Product Design",
      description: "Design, Graphics",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // For tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600, // For mobile devices
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
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} className={styles.slide}>
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
