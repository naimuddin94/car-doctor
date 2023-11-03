import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingTR from "../../Components/Bookings/BookingTR";
import { useQuery } from "react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const {
    data: bookings,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/bookings?email=${user?.email}`);
      return res.data;
    },
  });

  const handleDelete = (id, title) => {
    const permeations = confirm(`Are you sure you want to delete - ${title}`);
    if (permeations) {
      fetch(
        `https://car-doctor-server-20pjap43z-naimuddin94.vercel.app/bookings/${id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            const remaining = bookings.filter((service) => service._id !== id);
            setBookings(remaining);
            alert("Deleted successfully");
          }
        });
    }
  };

  const handleConfirm = (id) => {
    fetch(
      `https://car-doctor-server-20pjap43z-naimuddin94.vercel.app/bookings/${id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ status: "confirmed" }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          alert("Thanks for confirming!");
          const remainBookings = bookings.filter(
            (booking) => booking._id !== id
          );
          const updatedBookings = bookings.find(
            (booking) => booking._id === id
          );
          updatedBookings.status = "Confirmed";
          setBookings([...remainBookings, updatedBookings]);
        }
      });
  };

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
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Service</th>
            <th>Price</th>
            <th>Booking Time</th>
            <th>Working Day</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <BookingTR
              key={booking._id}
              booking={booking}
              handleDelete={handleDelete}
              handleConfirm={handleConfirm}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Bookings;
