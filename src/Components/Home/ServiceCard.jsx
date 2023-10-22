import { AiOutlineArrowRight } from "react-icons/ai";
import PropTypes from "prop-types";

const ServiceCard = ({ service }) => {
  const { _id, title, img, price, descriptio } = service;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="text-red-500 font-semibold w-full flex items-center justify-between">
          <p>Price: {price}</p>
          <AiOutlineArrowRight />
        </div>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object.isRequired,
};

export default ServiceCard;
