import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    const getService = async () => {
      const response = await fetch("/services.json");
      const data = await response.json();
      setServices(data);
    };
    getService();
  }, []);
  return (
    <div className="common-padding">
      <h3 className="text-lg font-bold text-orange-600 text-center">Service</h3>
      <h1 className="text-3xl md:text-5xl font-black text-center mb-5">
        Our Service Area
      </h1>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Service;
