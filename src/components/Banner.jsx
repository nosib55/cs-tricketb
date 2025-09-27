import React from "react";
import Container from "./container";
import vector1 from "../assets/image/vector1.png";

const Banner = ({ openCard, resolved }) => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-5 my-20">
        <div className="relative bg-gradient-to-r from-[#6d36e6] to-[#9360e6] max-w-[708px] h-[250px] flex flex-col  justify-center items-center text-white font-bold text-2xl rounded-md gap-4 overflow-hidden">
          <div className="absolute top-0 left-0">
            <img src={vector1} alt="Image" />
          </div>
          <div className="absolute bottom-0 right-0 rotate-180">
            <img src={vector1} alt="Image" />
          </div>
          <h1>In-Progress</h1>
          <h1>{openCard.length}</h1>
        </div>
        <div className="relative bg-gradient-to-r from-[#50cc69] to-[#119277] max-w-[708px] h-[250px] flex flex-col  justify-center items-center text-white font-bold text-2xl rounded-md gap-4 overflow-hidden">
          <div className="absolute top-0 right-0 rotate-180">
            <img src={vector1} alt="Image" />
          </div>
          <div className="absolute top-0 left-0 ">
            <img src={vector1} alt="Image" />
          </div>
          <h1 className="">Resolved</h1>
          <h1>{resolved}</h1>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
 