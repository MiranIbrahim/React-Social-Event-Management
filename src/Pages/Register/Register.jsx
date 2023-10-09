import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {
  const [regFailed, setRegFailed] = useState("");
  const [success, setSuccess] = useState("");
  const [url, setUrl] = useState(null);
  const navigate = useNavigate();
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoURL = e.target.photoURL.value;
    setRegFailed("");
    setSuccess("");

    if (password.length < 6) {
      setRegFailed("password should be 6 character");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegFailed("Atleast one uppercase needed");
      return;
    }

    createUser(email, password, photoURL)
      .then((result) => {
        console.log(result.user);
        result.user.photoURL = url;
        setUrl(photoURL);
        
        setSuccess("Successfully Registered");
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setRegFailed(error.message);
      });
  };
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
     
      {regFailed && <p className="text-red-700 font-extrabold text-xl text-center 
      mt-10">{regFailed}</p>}
      {success && <p className="text-green-700 font-extrabold text-xl text-center 
      mt-10">{success}</p>}
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase">
          Sign UP
        </h1>
        <form onSubmit={handleRegister} className="mt-6">
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Profile Url
            </label>
            <input
              type="url"
              name="photoURL"
              placeholder="Paste image URL"
              required
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              required
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              placeholder="Type password here"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
              Register
            </button>
          </div>
        </form>
        <div className="relative flex items-center justify-center w-full mt-6 border border-t">
          <div className="absolute px-5 bg-white">Or</div>
        </div>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          Already have an account? Please
          <Link
            className="font-medium text-purple-600 hover:underline"
            to="/login"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
