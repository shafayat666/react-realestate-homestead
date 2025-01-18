import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Login = () => {
  const { logIn } = useContext(AuthContext)

  const handleLogin = (event) => {
    event.preventDefault();
    
    const form = new FormData(event.currentTarget);
    
    const email = form.get("email")
    const password = form.get("password")
    
    logIn(email, password)
    .then((userCredential) => {
      console.log("user logged in successfully");
      console.log(userCredential.user);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <p className="text-sm">New here? Please <NavLink className="text-blue-500 underline hover:text-blue-700" to={"/register"}>Sign Up</NavLink></p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
    </div>

  );
};

export default Login;