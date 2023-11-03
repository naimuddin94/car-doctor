import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const axiosSecure = axios.create({
  baseURL: "https://car-doctor-server-20pjap43z-naimuddin94.vercel.app",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        console.log("error tracked in the interceptor", error.response);
        if (error.response.status === 401 || error.response.status === 403) {
          console.log("logout the user");
          logoutUser()
            .then(() => {
              navigate("/login");
            })
            .catch((error) => console.log(error));
        }
      }
    );
  }, [logoutUser]);

  return axiosSecure;
};

export default useAxiosSecure;
