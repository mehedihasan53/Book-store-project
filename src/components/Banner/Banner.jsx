import React from "react";
import bannerImg from "../../assets/bannerbooks.png";

const Banner = () => {
  return (
    <section className="bg-base-200 text-[#131313] rounded-2xl">
      <div className="container mx-auto px-6 py-[70px] flex flex-col md:flex-row items-center justify-center gap-[70px]">
        {/* Left side: Text + Button */}
        <div className="max-w-xl px-6 md:px-0 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
            Books to freshen up your bookshelf
          </h1>
          <button className="bg-green-500 hover:bg-green-600 transition text-white font-semibold px-10 py-4 rounded-lg text-lg">
            View The List
          </button>
        </div>

        {/* Right side: Image */}
        <div className="flex-shrink-0 px-6 md:px-0">
          <img
            src={bannerImg}
            alt="Books Banner"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
