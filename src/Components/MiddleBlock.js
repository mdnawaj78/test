import React from "react";
import Slider from "react-slick"; 
import pic1 from "./Images/pic1.jpg";
import pic2 from "./Images/pic2.jpg";
import pic3 from "./Images/pic3.jpg";
import pic4 from "./Images/pic4.jpg";

const MiddleBlock = () => { 
//slick slider

  const settings = {
    dots: false,
    infinite: true,
    margin: 20,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          // dots: true
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          // dots: true
        },
      },
    ],
  };
  

  return (
    <section className="attempt-2">
      <div className="yekkk">
        <div className="container" style={{ marginTop: "-5%" }}>
          <div className="row">
            <div className="col-lg-5 col-sm-12">
              <h3 className="lorem-heading">Lorem Ipsum</h3>
              <p className="lorem-heading">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                commodi suscipit omnis esse minus voluptatum quis, facilis quo
                dolor dolores.
              </p>
              <a href="/">
              <button className="btn btn-danger">Learn More</button>
              </a>
            </div>
            <div className="col-lg-7 col-sm-12 set-slider_carouserl">
              <Slider {...settings}>
                <div class="effect-image-1">
                  <img src={pic2} alt="image-1" />
                  <div class="overlay-text overlay-text-1 d-flex align-items-center  justify-content-center ">
                    <div className="d-flex justify-content-center align-items-center flex-column">
                      <h3 className="mb-0 lorem-heading">Lorem Ipsum</h3>
                      <p className="mb-0">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Voluptates facilis quos sunt. Necessitatibus quod
                        accusamus sit non et nisi similique?
                      </p>
                      <button className="btn btn-danger">Learn More</button>
                    </div>
                  </div>
                </div>
                <div class="effect-image-1">
                  <img src={pic3} alt="image-1" />
                  <div class="overlay-text overlay-text-1 d-flex align-items-center  justify-content-center ">
                    <div className="d-flex justify-content-center align-items-center flex-column">
                      <h3 className="mb-0 lorem-heading">Lorem Ipsum</h3>
                      <p className="mb-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quod impedit voluptas nulla. Sequi ipsum optio doloribus
                        soluta eaque explicabo dolorem.
                      </p>
                      <button className="btn btn-danger">Learn More</button>
                    </div>
                  </div>
                </div>
                <div class="effect-image-1">
                  <img src={pic1} alt="image-1" />
                  <div class="overlay-text overlay-text-1 d-flex align-items-center  justify-content-center ">
                    <div className="d-flex justify-content-center align-items-center flex-column">
                      <h3 className="mb-0 lorem-heading">Lorem Ipsum</h3>
                      <p className="mb-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quod impedit voluptas nulla. Sequi ipsum optio doloribus
                        soluta eaque explicabo dolorem.
                      </p>
                      <button className="btn btn-danger">Learn More</button>
                    </div>
                  </div>
                </div>
                <div class="effect-image-1">
                  <img src={pic4} alt="image-1" />
                  <div class="overlay-text overlay-text-1 d-flex align-items-center  justify-content-center ">
                    <div className="d-flex justify-content-center align-items-center flex-column">
                      <h3 className="mb-0 lorem-heading">Lorem Ipsum</h3>
                      <p className="mb-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sunt velit blanditiis, dolorem magnam eaque voluptas
                        obcaecati mollitia culpa ad nulla!
                      </p>
                      <button className="btn btn-danger">Learn More</button>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
      <div className="container">        
      <div className="row" id="element1">
        <span className=" Box-1">
          <p className="Box-text">Box 1</p>
        </span>
      </div>
      <div className="row my-5">
        <span className="Box-2" id="element2">
          <p className="Box-text">Box 2</p>
        </span>
      </div>
      <div className="row">
        <div className="col-12">
        <p className="text-center thank-you" id="element3">Thank You</p>
        </div>
      </div>
      </div>
    </section>
  );
};

export default MiddleBlock;
