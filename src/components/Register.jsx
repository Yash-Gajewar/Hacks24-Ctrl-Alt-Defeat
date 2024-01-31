import Lottie from 'lottie-react'
import register from '../assets/register.json'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {


    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = async () => {

        if (firstName === '' ||
            lastName === '' ||
            email === '' ||
            password === '' ||
            confirmPassword === '') {
            toast.error("Please fill all fields");
        }

        else if (password !== confirmPassword) {
            toast.error("Password does not match !")
        }

        else {
            console.log(firstName)
            console.log(lastName)
            console.log(email)
            console.log(password)
            console.log(confirmPassword)
            setFirstName('');
            setLastName('');
            setEmail('')
            setPassword('')
            setConfirmPassword('')

            toast.success("Success")
        }

        const apiUrl = 'http://localhost:8000/api/register/';

        // Create a payload with the login details
        const payload = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
        };

        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
            .then((response) => {
                if (response.ok) {
                    // Successful login, you can redirect the user or perform other actions here

                    console.log('Login success');
                } else {

                    // Handle login errors here
                    console.error('Login failed');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }

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
                                        Already have an account? <a href="http://localhost:3000/login" className="text-blue-600">Login</a>
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
                                                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
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
                                                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
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
                                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                                                type="text"
                                                id="email"
                                                placeholder="Email"
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                        
                                        <div className="grid w-full  items-center gap-1.5">
                                            <label
                                                className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                htmlFor="password"
                                            >
                                                Password
                                            </label>
                                            <input
                                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
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
                                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                                                id="confirmPassword"
                                                type="password"
                                                placeholder="Confirm Password"
                                                cols="3"
                                                onChange={(e) => { setConfirmPassword(e.target.value) }}
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



    )
}
export default Register;