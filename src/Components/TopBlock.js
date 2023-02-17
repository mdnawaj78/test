import React from "react"; 
import pic1 from "./Images/pic1.jpg";

const TopBlock = () => {
  return (
    <div className="container">
      <div className="row py-5">
        <div className="col-lg-7 col-sm-12 my-auto">
          <h3 className="lorem-heading-top">Lorem Ipmsum</h3>
          <p className="lorem-heading-top">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, ipsum
            ab quod, dolorum architecto fugit eveniet rerum itaque, accusamus
            aliquam earum. Quae, voluptate corporis amet quis praesentium
            accusamus soluta assumenda explicabo voluptates ullam? Porro quidem
            nisi architecto rem adipisci, blanditiis, omnis laborum
            exercitationem accusantium tempora perspiciatis quaerat magnam
            assumenda nihil.
          </p>
        </div>
        <div className="col-lg-5 col-sm-12 ">
          <img src={pic1} alt="image" className="topimg" />
        </div>
      </div>
    </div>
  );
};

export default TopBlock;
