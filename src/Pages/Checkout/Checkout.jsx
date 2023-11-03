import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Checkout = () => {
  const { user } = useContext(AuthContext);
  const { _id, title, img, price } = useLoaderData();

  const handleBook = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const price = form.price.value;
    const date = form.date.value;

    const bookingService = {
      img,
      title,
      name,
      email,
      price,
      date,
      time: new Date().toLocaleString(),
    };

    fetch(
      "https://car-doctor-server-20pjap43z-naimuddin94.vercel.app/bookings",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(bookingService),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Booking successfully");
        }
      });
  };

  return (
    <div className="card flex-shrink-0 w-full max-w-3xl mx-auto my-10 shadow-2xl bg-base-100">
      <h2 className="text-2xl font-mono font-semibold text-center pt-5">
        {title}
      </h2>
      <form onSubmit={handleBook} className="card-body">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              defaultValue={user?.displayName}
              name="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              defaultValue={user?.email}
              readOnly
              name="email"
              placeholder="email address"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              placeholder="price"
              defaultValue={price}
              name="price"
              readOnly
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              name="date"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-error">Book</button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
