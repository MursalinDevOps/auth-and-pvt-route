import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

export default function Login() {
  const navigate = useNavigate()

  const {signInUser, signInWithGoogle} = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password)

    // Sign In User
    signInUser(email, password)
    .then((result) => {
      // console.log(result.user)
      e.target.reset();
      navigate('/')
    })
    .catch((error)=>{
      console.log("ERROR",error.message)
    })
  }

  const handleGoogleSignIn = () =>{
signInWithGoogle()
.then((result)=>{
  console.log(result.user)
  navigate('/')
})
.catch((error)=>{
  console.log(error)
})
  }

  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex">
    <div className="text-center lg:text-left">
      <h1 className="text-3xl font-bold">Login now!</h1>
    </div>
    <div className="card bg-base-100 w-[600px] shrink-0 shadow-2xl">
      <form onSubmit={handleLogin} className="card-body">
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
      <p className="divider">Or</p>
      <p onClick={handleGoogleSignIn} className="w-full bg-gray-600 text-white text-center py-2 rounded-lg cursor-pointer">Sign in with GOOGLE</p>
      <p className="text-center mb-4">
      Don't have an account ?
      <Link to='/register' className="underline"> Register Now</Link>
      </p>
    </div>
  </div>
</div>
  )
}
