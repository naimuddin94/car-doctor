import { useContext } from "react";
import login from "/assets/images/login/login.svg";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then(() => {
        form.reset();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200 common-padding">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center flex-1 lg:mr-10">
          <img src={login} alt="" className="" />
        </div>
        <div className="card flex-1 max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-3xl font-bold text-slate-600 text-center py-5">
            Login
          </h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-error">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
