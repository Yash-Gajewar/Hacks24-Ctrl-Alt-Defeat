import Lottie from "lottie-react";
import register from "../assets/register.json";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Cookie from "js-cookie";
import { useNavigate } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";

const BACKEND_URL = "https://tsec-backend.onrender.com";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("CLIENT");

  const [cookie] = useState(Cookie.get("token"));
  const navigate = useNavigate();

  useEffect(() => {
    if (cookie) {
      return navigate("/home");
    }
  });

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    const response = await fetch(`${BACKEND_URL}/api/v1/users/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        phoneNumber: phoneNumber,
        role: role,
        address: address,
      }),
    });
    const data = await response.json();
    Cookie.set("token", data.token, { expires: 7 });
    if (response.status === 201) {
      toast.success("Registration successful");
    } else {
      toast.error(data.message);
    }
  };

  return (
    <>
      <div>
        {/* <a>
                <Header/>
            // </a> */}
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-7xl py-12 md:py-24">
            <div className="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
              <div className="flex items-center justify-center">
                <div className="px-2 md:px-12">
                  <p className="text-2xl font-bold text-gray-900 md:text-4xl">
                    Be a part of our community
                  </p>
                  <p className="mt-4 text-lg text-gray-600">
                    Already have an account?{" "}
                    <a
                      href="http://localhost:3000/login"
                      className="text-blue-600"
                    >
                      Login
                    </a>
                  </p>

                  <form action="" className="mt-8 space-y-4">
                    <div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
                      <div className="grid w-full  items-center gap-1.5">
                        <label
                          className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          htmlFor="first_name"
                        >
                          First Name
                        </label>
                        <input
                          className="flex h-10 w-full rounded-md border border-gray-300"
                          type="text"
                          id="first_name"
                          placeholder="First Name"
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                      </div>
                      <div className="grid w-full  items-center gap-1.5">
                        <label
                          className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          htmlFor="last_name"
                        >
                          Last Name
                        </label>
                        <input
                          className="flex h-10 w-full rounded-md border border-gray-300"
                          type="text"
                          id="last_name"
                          placeholder="Last Name"
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid w-full  items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300"
                        type="text"
                        id="email"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    <div className="grid w-full  items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="email"
                      >
                        Phone Number
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300"
                        type="number"
                        id="email"
                        placeholder="Phone number"
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        value={phoneNumber}
                      />
                    </div>

                    <div className="grid w-full  items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="email"
                      >
                        Select your role
                      </label>
                      <select
                        className="flex h-10 w-full rounded-md border border-gray-300"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                      >
                        <option className="color-black" value="CLIENT">
                          Client
                        </option>
                        <option value="CONTRACTOR">Contractor</option>
                      </select>
                    </div>

                    <div className="grid w-full  items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="email"
                      >
                        Addess
                      </label>
                      <textarea
                        className="flex h-10 w-full rounded-md border border-gray-300"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      ></textarea>
                    </div>

                    <div className="grid w-full  items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="password"
                      >
                        Password
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300"
                        id="password"
                        type="password"
                        placeholder="Enter Password"
                        cols="3"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>

                    <div className="grid w-full  items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="confirmPassword"
                      >
                        Confirm Password
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300"
                        id="confirmPassword"
                        type="password"
                        placeholder="Confirm Password"
                        cols="3"
                        onChange={(e) => {
                          setConfirmPassword(e.target.value);
                        }}
                      ></input>
                    </div>
                    <button
                      type="button"
                      className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      onClick={handleRegister}
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
              <Lottie animationData={register} />
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </>
  );
};
export default Register;
