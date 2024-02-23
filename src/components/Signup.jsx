import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleOnChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };
  const handleOnSubmit = async (event) => {
    event.preventDefault();
    // api req to "/api/auth/createuser" route, METHOD:POST
    const response = await fetch(`http://localhost:4000/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: credentials.username,
        email: credentials.email,
        password: credentials.password,
      }),
    });

    const json = await response.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem("token", json.authtoken);
      toast.success("Signup Succesful....Redirecting to Login page", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
      setTimeout(function () {
        navigate("/login");
      }, 3000);
    } else {
      console.log(credentials);
      toast.error("Internal Server Error...Try again", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleLoginPage = () => {
    navigate("/login");
  };

  return (
    <div className="flex flex-row h-[100vh]">
      <div className="w-fit hidden lg:block">
        <div className="text-white absolute mt-64 ml-12 lg:ml-48 w-fit">
          <h1 className="text-2xl lg:text-7xl font-bold text-white tracking-wide w-1/3 lg:w-1/2 text-center">
            Create A New Account
          </h1>
          <div className="bg-white h-3 w-32 rounded-xl lg:ml-56 my-8"></div>
          <p className="w-1/3 hidden lg:block lg:ml-36">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cum
            velit voluptas ipsa ab ea ut, sapiente labore minima eaque.
          </p>
        </div>

        <img src="/loginpage.jpg" alt="" className="h-full object-cover" />
      </div>
      <div className="w-[45%] mx-auto  lg:ml-0 lg:w-[35%] h-[100vh] grid place-content-center">
        <form onSubmit={handleOnSubmit} className="flex flex-col">
          <h1 className="text-blue-600 font-bold text-7xl text-center mb-24 block lg:hidden">
            EduHub
          </h1>

          <h1 className="text-blue-600 font-bold text-5xl text-center mb-24">
            Signup
          </h1>
          {/* <label htmlFor="username">Username</label> */}

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email ID"
            className="my-3 border-blue-600 border-l-2 bg-slate-100 h-8 w-72 focus:border-0"
            onChange={handleOnChange}
          />
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            className="my-3 border-blue-600 border-l-2 bg-slate-100 h-8 w-72 focus:border-0"
            onChange={handleOnChange}
          />
          {/* <label htmlFor="password">Password</label> */}
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className="my-3 border-blue-600 border-l-2 bg-slate-100 h-8 w-72 focus:border-0"
            onChange={handleOnChange}
            autoComplete="off"
          />
          <h2>
            Already a User?{" "}
            <span
              className="text-blue-800 underline hover:cursor-pointer"
              onClick={handleLoginPage}
            >
              Login
            </span>
          </h2>
          <button
            type="submit"
            className="rounded-xl bg-blue-500 py-1 font-semibold mt-12 text-lg text-white hover:bg-blue-600"
          >
            Signup
          </button>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default Signup;
