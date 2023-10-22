import person from "/assets/images/about_us/person.jpg";
import parts from "/assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200 common-padding">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={person} className="max-w-[80%] rounded-lg shadow-2xl" />
          <img
            src={parts}
            className="max-w-[45%] absolute right-5 -bottom-10 rounded-lg shadow-2xl border-8 border-white"
          />
        </div>
        <div className="w-1/2 space-y-5">
          <h3 className="text-lg font-semibold text-orange-600">About Us</h3>
          <h1 className="text-5xl font-bold">
            We are qualified <br /> & of experience <br /> in this field
          </h1>
          <p className="">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don&rsquo;t look even slightly
            believable.{" "}
          </p>
          <p className="">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don&rsquo;t look even slightly
            believable
          </p>
          <button className="btn btn-error">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
