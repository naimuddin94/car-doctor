import { AiOutlineArrowRight } from "react-icons/ai";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, img, price, descriptio } = service;
  return (
    <Link to={`checkout/${_id}`}>
      <div className="card bg-base-100 shadow-xl h-80">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl w-full h-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="text-red-500 font-semibold w-full flex items-center justify-between">
            <p>Price: {price}</p>
            <AiOutlineArrowRight />
          </div>
        </div>
      </div>
    </Link>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object.isRequired,
};

export default ServiceCard;
