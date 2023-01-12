import { BsFillShieldLockFill } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
// import { auth } from '../utils/firebase';
// import firebase from 'firebase/firebase-app';
import { useNavigate, useLocation} from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectUser } from "../redux/slices/authSlice"
import { useState } from 'react';
import axios from 'axios'

const Login = () => {
    const navigate = useNavigate()
    const user = useSelector(selectUser)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const logout = () => {
        // auth.signOut()
        //     .catch(err => alert(err.message));
    }
    const location = useLocation()
    const emailSignup = (e) => {
        e.preventDefault()
        console.log("Clicked")
        const data = {
            email : email,
            password : password
        }
        axios.post('/mysalon/api/user/login', data).then(res=>{
            localStorage.setItem('auth_token', res.data.token)
            localStorage.setItem('auth_email', res.data.user.email)
            localStorage.setItem('user_id', res.data.user._id)
            console.log(res.data)
            console.log("no error")
            navigate("/add-product")
        }).catch(function(error){
                console.log(error)
                localStorage.removeItem('auth_token')
                localStorage.removeItem('auth_email')
                localStorage.removeItem('user_id')
        })
    }

    const emailLogin = (e) => {
        
        // auth.signInWithEmailAndPassword(email, password)
        //     .catch(err => alert(err.message));
    }
    return (
        <div className="container mx-auto md:w-5/6 pt-5 pb-7 px-2 md:px-0">
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                {user ? (
                    <div className="max-w-md text-center w-full space-y-8">
                        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">{user?.displayName}</h2>
                        <p className="text-sm text-gray-600">
                            {user?.email}
                        </p>
                        <button
                            type="button"
                            className="flex items-center justify-center w-full p-3 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 bg-opacity-10 hover:bg-opacity-20"
                            onClick={logout}
                        >
                            <span className="ml-3 text-indigo-700 font-semibold">Logout</span>
                        </button>
                    </div>
                ) : (
                    <div className="max-w-md w-full space-y-8">
                        <div>
                            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                        </div>
                        <form onSubmit={emailSignup} className="mt-8 space-y-6" action="#" method="POST">
                            <input type="hidden" name="remember" defaultValue="true" />
                            <div className="rounded-md shadow-sm -space-y-px">
                                <div>
                                    <label htmlFor="email-address" className="sr-only">
                                        Email address
                                    </label>
                                    <input
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        id="email-address"
                                        name="email"
                                        type="email"
                                        autoComplete="off"
                                        required
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Email address"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="sr-only">
                                        Password
                                    </label>
                                    <input
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="off"
                                        required
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Password"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                    />
                                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                        Remember me
                                    </label>
                                </div>

                                <div className="text-sm">
                                    <a href="#!" className="font-medium text-indigo-600 hover:text-indigo-500">
                                        Forgot your password?
                                    </a>
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                        <BsFillShieldLockFill className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                                    </span>
                                    Sign in
                                </button>
                            </div>
                        </form>
                    </div>
                )}

            </div>
        </div>
    )
}

export default Login