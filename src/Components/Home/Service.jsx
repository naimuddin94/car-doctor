import { useQuery } from "react-query";
import ServiceCard from "./ServiceCard";
import axios from "axios";

const Service = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await axios.get(
        "https://car-doctor-server-20pjap43z-naimuddin94.vercel.app/services"
      );
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="w-full h-[450px] flex items-center justify-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  return (
    <div className="common-padding">
      <h3 className="text-lg font-bold text-orange-600 text-center">Service</h3>
      <h1 className="text-3xl md:text-5xl font-black text-center mb-5">
        Our Service Area
      </h1>
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {data?.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Service;
