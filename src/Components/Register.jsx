import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";




export default function Register() {
  const navigate = useNavigate()

  const { createUser } = useContext(AuthContext);
const handleRegister = (e) => {
  e.preventDefault();

  const name = e.target.name.value;
  const email = e.target.email.value;
  const password = e.target.password.value;

  // console.log(name, email, password)

  // Create User
  createUser(email, password)
  .then((result) => {
    // console.log(result.user)
    e.target.reset();
    navigate('/login')

  })
  .catch((error)=>{
    console.log("ERROR", error)
  })

}
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold">Register now!</h1>
        </div>
        <div className="card bg-base-100 w-[600px] shrink-0 shadow-2xl">
          <form onSubmit={handleRegister} className="card-body">

            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name="name" placeholder="name" className="input input-bordered" required />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="password" className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="text-center mb-4">
            Don't have an account ?
            <Link to='/login' className="underline"> Login Now</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
