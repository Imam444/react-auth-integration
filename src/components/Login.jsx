import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../Providers/UserProviders";

const Login = () => {
    const { signInUser, signInWithGoogle } = useContext(UserContext);

    const navigate = useNavigate()
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        signInUser(email, password)
            .then((result) => {
                console.log(result.user);
                e.target.reset();
                navigate('/')
            })
            .catch((error) => {
                console.error(error);
            });
    };
    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
                console.log(result.user)

            })
            .catch(error => {
                console.error(error)
            })
        
    }
    return (
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
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
                  name="email"
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
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p>
              New Here? Please
              <Link to="/register">
                <button className="btn btn-sm">Register</button>
              </Link>
            </p>
            <p>
              <button onClick={handleGoogleSignIn} className="btn btn-ghost">Google</button>
            </p>
          </div>
        </div>
      </div>
    );
};
export default Login;
