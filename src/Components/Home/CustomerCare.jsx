import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

const CustomerCare = () => {
  return (
    <div className="common-padding">
      <div className="grid grid-cols-1 gap-10 md:gap-0 md:grid-cols-3 bg-black/80 rounded-xl px-16 py-20 text-slate-300 font-semibold">
        <div className="flex items-center gap-3">
          <FaCalendarAlt className="text-4xl" />
          <div>
            <h4>We are open monday-friday</h4>
            <h2 className="text-3xl">7:00 am - 9:00 pm</h2>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <FiPhoneCall className="text-4xl" />
          <div>
            <h4>Have a question?</h4>
            <h2 className="text-3xl">+2546 251 2658</h2>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <FaMapMarkerAlt className="text-4xl" />
          <div>
            <h4>Need a repair? our address</h4>
            <h2 className="text-3xl">Liza Street, New York</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerCare;
