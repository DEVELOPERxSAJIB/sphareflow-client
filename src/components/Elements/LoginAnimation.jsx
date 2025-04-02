import React from "react";
import "./Stylesheet.css";
import Person1 from "../../assets/common/sph1.jpg";
import Person2 from "../../assets/common/sph2.jpg";
import Person3 from "../../assets/common/sph3.jpg";
import Person4 from "../../assets/common/sph4.jpeg";
import Person5 from "../../assets/common/sph5.png";
import Person6 from "../../assets/common/sph6.jpeg";
import Person7 from "../../assets/common/sph7.jpg";

function LoginAnimation() {

    const dummyImages1 = [
    Person1,
    Person2,
    Person3,
    Person4,
    Person5,
    Person1,
    Person2,
    Person3,
    Person4,
    Person1,
    Person2,
  ];

  const dummyImages2 = [
    Person1,
    Person2,
    Person3,
    Person4,
    Person1,
    Person2,
    Person3,
    Person4,
    Person5,
    Person1,
    Person2,
  ];

  const dummyImages3 = [
    Person1,
    Person2,
    Person3,
    Person4,
    Person2,
    Person5,
    Person6,
    Person1,
    Person2,
    Person3,
    Person4,
    Person7,
    Person1,
    Person5,
  ];

  return (
    <div className="gallery-faqs-container w-[100px]" id="skills">
      {/* <div className={`${styles["section"]} mb-double-vh`}> */}
      <div
        className="gallery-faqs w-[100%]"
        // className={`${styles["padded-container"]} ${styles["grid"]}`}
        style={
          {
            // paddingTop: ,
            // paddingBottom: 20,
          }
        }
      >
        <span className="border mt-2 mb-hide y-animations-container w-[100%]">
          <div className="move-y-animation-container w-full">
            <div className="move-y-sub-animation-container">
              {dummyImages1.map((img, index) => (
                <img
                  src={img}
                  key={index}
                  className="mt-2 image-for-animation"
                  alt="carousel-images"
                  style={{
                    display: "inline-block",
                    background: "url(" + img + ")",
                    backgroundSize: "cover",
                    marginRight: 5,
                    // marginTop: 5,
                    // width: "500px"
                  }}
                />
              ))}
            </div>
          </div>
          <div className="move-y-animation-container w-full">
            <div className="move-y-sub-animation-container-r">
              {dummyImages2.map((img, index) => (
                <img
                  src={img}
                  key={index}
                  className="mt-2 image-for-animation"
                  alt="carousel-images"
                  style={{
                    display: "inline-block",
                    background: "url(" + img + ")",
                    backgroundSize: "cover",
                    marginRight: 5,
                    // marginTop: 5,
                    // width: "500px"
                  }}
                />
              ))}
            </div>
          </div>
          <div className="move-y-animation-container w-full">
            <div className="move-y-sub-animation-container">
              {dummyImages3.map((img, index) => (
                <img
                  src={img}
                  key={index}
                  className="mt-2 image-for-animation"
                  alt="carousel-images"
                  style={{
                    display: "inline-block",
                    background: "url(" + img + ")",
                    backgroundSize: "cover",
                    marginRight: 5,
                    // marginTop: 5,
                    // width: "500px"
                  }}
                />
              ))}
            </div>
          </div>
          <div className="move-y-animation-container w-full">
            <div className="move-y-sub-animation-container-r">
              {dummyImages3.map((img, index) => (
                <img
                  src={img}
                  key={index}
                  className="mt-2 image-for-animation"
                  alt="carousel-images"
                  style={{
                    display: "inline-block",
                    background: "url(" + img + ")",
                    backgroundSize: "cover",
                    marginRight: 5,
                    // marginTop: 5,
                    // width: "500px"
                  }}
                />
              ))}
            </div>
          </div>
        </span>
      </div>
    </div>
  );
}

export default LoginAnimation;
