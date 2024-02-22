import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    //post api req to /login route
    console.log("submitted");
  };

  const handleNewUser = ()=>{
    navigate("/signup");
  }
  return (
    <div className="flex flex-row h-[100vh]">
      <div className="w-[65%]">
        <div className="text-white absolute mt-64 ml-64 w-fit">
          <h2 className="text-white font-light text-xl ml-48 w-fit">
            Nice to see you again
          </h2>
          <h1 className="z-20 text-7xl font-bold text-white tracking-wide">
            Welcome Back
          </h1>
          <div className="bg-white h-3 w-20 rounded-xl ml-64 my-8"></div>
          <p className="w-1/3 ml-36">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cum
            velit voluptas ipsa ab ea ut, sapiente labore minima eaque.
          </p>
        </div>

        <img src="/loginpage.jpg" alt="" className="h-full object-cover" />
      </div>
      <div className="w-[35%] h-[100vh] grid place-content-center">
        <form onSubmit={handleLogin} className="flex flex-col">
          <h1 className="text-blue-600 font-bold text-5xl text-center mb-24">
            Login
          </h1>
          {/* <label htmlFor="username">Username</label> */}
          <input
            type="text"
            id="username"
            placeholder="Username"
            className="my-3 border-blue-600 border-l-2 bg-slate-100 h-8 w-72 focus:border-0"
          />
          {/* <label htmlFor="password">Password</label> */}
          <input
            type="text"
            id="password"
            placeholder="Password"
            className="my-3 border-blue-600 border-l-2 bg-slate-100 h-8 w-72 focus:border-0"
            autoComplete="off"
          />
          <h2>New user? Sign up <span className="text-blue-800 underline hover:cursor-pointer" onClick={handleNewUser}>here</span></h2>

          <button type="submit" className="rounded-xl bg-blue-500 py-1 font-semibold mt-12 text-lg text-white hover:bg-blue-600">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
