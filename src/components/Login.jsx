import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  

  const handleOnChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value })
  }

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(`http://localhost:4000/api/auth/userlogin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem('auth-token', json.authtoken);
      toast.success("Login Succesful....Redirecting to Home page", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
      setTimeout(function () {
        navigate("/");
      }, 3000);
    } else {
      toast.error("Internal Server Error", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }

  }
  const handleNewUser = ()=>{
    navigate("/signup");
  }

  return (
    <div className="flex flex-row h-[100vh]">
      <div className="w-[65%] hidden lg:block">
        <div className="text-white absolute mt-64 ml-10 md:ml-24 xl:ml-64 w-1/2 lg:w-fit">
          <h2 className="text-white font-light text-xl ml-36 sm:ml-42 md:ml-48 w-fit">
            Nice to see you again
          </h2>
          <h1 className="z-20 text-7xl font-bold text-white tracking-wide text-center lg:text-left">
            Welcome Back
          </h1>
          <div className="bg-white h-3 w-20 rounded-xl ml-64 my-8"></div>
          <p className="w-[50%] ml-36 lg:ml-24">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cum
            velit voluptas ipsa ab ea ut, sapiente labore minima eaque.
          </p>
        </div>

        <img src="/loginpage.jpg" alt="login page background" className="h-full object-cover" />
      </div>
      <div className="w-[35%] h-[100vh] grid place-content-center mx-auto">
        <form onSubmit={handleOnSubmit} className="flex flex-col">
          <h1 className="text-blue-600 font-bold text-5xl text-center mb-24">
            Login
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
          {/* <label htmlFor="password">Password</label> */}
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className="my-3 border-blue-600 border-l-2 bg-slate-100 h-8 w-72 focus:border-0"
            autoComplete="off"
            onChange={handleOnChange}
          />
          <h2>New user? Sign up <span className="text-blue-800 underline hover:cursor-pointer" onClick={handleNewUser}>here</span></h2>

          <button type="submit" className="rounded-xl bg-blue-500 py-1 font-semibold mt-12 text-lg text-white hover:bg-blue-600">Login</button>
        <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default Login;
