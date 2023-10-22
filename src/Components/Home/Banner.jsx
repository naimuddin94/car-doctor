import img1 from "/assets/images/banner/5.jpg";
import img2 from "/assets/images/banner/2.jpg";
import img3 from "/assets/images/banner/3.jpg";
import img4 from "/assets/images/banner/4.jpg";

const Banner = () => {
  return (
    <div className="common-padding">
      <div className="carousel w-full max-h-[600px]">
        <div
          id="slide1"
          className="carousel-item relative w-full rounded-xl overflow-hidden"
        >
          <img src={img1} className="w-full object-cover object-top" />
          <div className="absolute lg:w-5/12 flex flex-col justify-center pl-12 space-y-5 bg-gradient-to-r from-black top-0 bottom-0">
            <h1 className="text-3xl md:text-6xl font-black text-slate-200">
              Affordable <br /> Price For Car <br /> Servicing
            </h1>
            <p className="text-slate-300">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-error normal-case mr-5">
                Discover More
              </button>
              <button className="btn btn-error btn-outline">
                Latest Project
              </button>
            </div>
          </div>
          <div className="absolute flex ga right-10 bottom-10">
            <a href="#slide4" className="btn btn-circle mr-8">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide2"
          className="carousel-item relative w-full rounded-xl overflow-hidden"
        >
          <img src={img2} className="w-full object-cover object-top" />
          <div className="absolute lg:w-5/12 flex flex-col justify-center pl-12 space-y-5 bg-gradient-to-r from-black top-0 bottom-0">
            <h1 className="text-3xl md:text-6xl font-black text-slate-200">
              Affordable <br /> Price For Car <br /> Servicing
            </h1>
            <p className="text-slate-300">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-error normal-case mr-5">
                Discover More
              </button>
              <button className="btn btn-error btn-outline">
                Latest Project
              </button>
            </div>
          </div>
          <div className="absolute flex ga right-10 bottom-10">
            <a href="#slide1" className="btn btn-circle mr-8">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide3"
          className="carousel-item relative w-full rounded-xl overflow-hidden"
        >
          <img src={img3} className="w-full object-cover object-top" />
          <div className="absolute lg:w-5/12 flex flex-col justify-center pl-12 space-y-5 bg-gradient-to-r from-black top-0 bottom-0">
            <h1 className="text-3xl md:text-6xl font-black text-slate-200">
              Affordable <br /> Price For Car <br /> Servicing
            </h1>
            <p className="text-slate-300">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-error normal-case mr-5">
                Discover More
              </button>
              <button className="btn btn-error btn-outline">
                Latest Project
              </button>
            </div>
          </div>
          <div className="absolute flex ga right-10 bottom-10">
            <a href="#slide2" className="btn btn-circle mr-8">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide4"
          className="carousel-item relative w-full rounded-xl overflow-hidden"
        >
          <img src={img4} className="w-full object-cover object-top" />
          <div className="absolute lg:w-5/12 flex flex-col justify-center pl-12 space-y-5 bg-gradient-to-r from-black top-0 bottom-0">
            <h1 className="text-3xl md:text-6xl font-black text-slate-200">
              Affordable <br /> Price For Car <br /> Servicing
            </h1>
            <p className="text-slate-300">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-error normal-case mr-5">
                Discover More
              </button>
              <button className="btn btn-error btn-outline">
                Latest Project
              </button>
            </div>
          </div>
          <div className="absolute flex ga right-10 bottom-10">
            <a href="#slide3" className="btn btn-circle mr-8">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
