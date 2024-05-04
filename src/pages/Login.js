import { AiFillGooglePlusCircle } from "react-icons/ai"; 
import React from 'react';
import { useState } from 'react';
import {auth,provider,providerFb} from '../firebase';
import {onAuthStateChanged,signInWithEmailAndPassword,signInWithPopup,FacebookAuthProvider} from 'firebase/auth'
import {useNavigate,Link} from 'react-router-dom'

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const login = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth,email, password).then(() => {
            onAuthStateChanged(auth, (currentUser) => {
                console.log(currentUser)
                if(currentUser.email==='admin@gmail.com') {   
                    setEmail('');
                    setPassword('');
                    setError('');
                    console.log('Đăng nhập tài khoản Ađmin thành công!!')
                    navigate('/admin')
                }else {
                    setEmail('');
                    setPassword('');
                    setError('');
                    console.log('Đăng nhập tài khoản thành công!!')
                    navigate('/shop');
                }
              });
        }).catch(err => setError(err.message));
    } 
    const loginWithGG = () => {
        signInWithPopup(auth,provider).then(()=>{
            navigate('/shop')
        })
    }
    const loginWithFacebook = ()=> {
        signInWithPopup(auth,providerFb).then(()=>{
            navigate('/shop')
        })
    }

  return (
    <div className='login-wrapper'>
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">   
                </a>
                <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form class="space-y-4 md:space-y-6" onSubmit={login} >
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-semibold">Your email</label>
                                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" required=""/>
                            </div>
                            <div>
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-semibold">Password</label>
                                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                            </div>
                            <button type="submit" onClick={login} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign in</button>
                            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet? <Link to='/register'><a class="font-medium text-primary-600 hover:underline dark:text-primary-500 font-semibold"> Sign up</a></Link>
                            </p>
                            <div class='flex'>
                                <button type="button" onClick={loginWithGG} class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                                    <svg class="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                                        <path fill-rule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clip-rule="evenodd"/>
                                    </svg>
                                    Sign in with Google
                                </button>
                                <button type="button" onClick={loginWithFacebook} class="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
                                    <svg class="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                                    </svg>
                                    Sign in with Facebook
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        
    </div>
    
  )
}

export default Login