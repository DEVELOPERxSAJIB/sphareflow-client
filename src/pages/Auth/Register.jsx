import "./Stylesheet.css";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/common/logosphere.png";
import LoginAnimation from "../../components/Elements/LoginAnimation";
import { useEffect, useState } from "react";
import { processRegister } from "../../features/auth/authApiSlice";
import { useDispatch, useSelector } from "react-redux"
import AlertMessage from "../../utils/AlertMessage";
import { setMessageEmpty } from "../../features/auth/authSlice";

const Register = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated, message, error, loader } = useSelector(state => state.auth)

  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    termsAndConditions: false,
  });

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;

    setInput((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(processRegister(input))
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }

    if (message) {
      AlertMessage({ type: "success", msg: message });
      dispatch(setMessageEmpty());
    }

    if (error) {
      AlertMessage({ type: "error", msg: error });
      dispatch(setMessageEmpty());
      navigate("/register");
    }
  }, [dispatch, error, isAuthenticated, message, navigate]);

  return (
    <>
    {loader && "Loading..."}
      <div className="lg:flex lg:flex-row md-flex-col h-screen">
        <div className="hidden lg:block w-[50%] h-screen px-3">
          <LoginAnimation />
        </div>
        <div className="lg:w-[50%] md:w-[100%] sm:w-[100%] bg-primary h-screen flex flex-col items-center">
          <div className="self-start ml-5 mt-5">
            <img src={Logo} alt="Logo" width={120} />
          </div>
          <div className="lg:mt-[60px] xs:mt-[30px] bg-white px-8 py-4 rounded-lg w-full max-w-md">
            <h2 className="text-2xl font-bold text-left mb-6">Register</h2>

            <form onSubmit={handleSubmit}>
              <div className="flex space-x-2 mb-4">
                <div className="flex-1">
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor="firstName"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={input.firstName}
                    onChange={handleChange}
                    id="firstName"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex-1">
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor="lastName"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={input.lastName}
                    onChange={handleChange}
                    id="lastName"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="email"
                >
                  E-mail
                </label>
                <input
                  name="email"
                  value={input.email}
                  onChange={handleChange}
                  id="email"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={input.password}
                  onChange={handleChange}
                  id="password"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="confirmPassword"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={input.confirmPassword}
                  onChange={handleChange}
                  id="confirmPassword"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex items-center mb-4">
                <input
                  id="link-checkbox"
                  type="checkbox"
                  name="termsAndConditions"
                  value={input.termsAndConditions}
                  onChange={handleChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="link-checkbox"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  I agree with the{" "}
                  <a
                    href="#"
                    className="text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    terms and conditions
                  </a>
                  .
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-button text-white py-2 hover:bg-blue-600 transition duration-200 mb-4 rounded-[32px] flex items-center justify-center"
              >
                Let's Go!
              </button>

              {/* <button
            type="button"
            className="w-full bg-gray-200 text-gray-700 py-2 rounded-[32px] hover:bg-gray-300 transition duration-200"
          >
            Register with Google
          </button> */}

              <p className="text-center text-sm text-gray-600">
                Already registered?{" "}
                <Link to="/login" className="text-blue-500 hover:underline">
                  Log in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
