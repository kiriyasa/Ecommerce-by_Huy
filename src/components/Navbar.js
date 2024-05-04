import {React,useContext} from "react";
import { Link ,Route,Routes} from "react-router-dom";
import {useNavigate} from 'react-router-dom'
import { Icon } from 'react-icons-kit'
import { cart } from 'react-icons-kit/entypo/cart'
import { auth } from "../firebase";
import { UserAuth } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";

export const Navbar = () => {
    const { user,logout} = UserAuth();


    const navigate = useNavigate();

    const { totalQty } = useContext(CartContext);

    const handleLogout = async () => {
      try {
        await logout();
        navigate('/login');
        console.log('You are logged out')
      } catch (e) {
        console.log(e.message);
      }
    };
    return (
          <div class='sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-02'>
            <h1 className="nav-h1-title text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-red-600 to-purple-600" >
                PhoneHub
            </h1>
            <nav class="nav font-semibold text-lg ml-32">
              <ul class="flex items-center ">
                  <li class="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active">
                    <a href="">Accueil</a>
                  </li>
                  <li class="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                    <a href="">Produits</a>
                  </li>
                  <li class="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                    <a href="">Collections</a>
                  </li>
                  <li class="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                    <a href="">Contact</a>
                  </li>
              </ul>
            </nav>
            <div class="w-3/12 flex justify-end">
              {!user && <div className='rightside'>
                <span><Link to="/signup" className='navlink'>SIGN UP</Link></span>
                <span><Link to="/login" className='navlink'>LOGIN</Link></span>
              </div>}
              {user && <div className='rightside'>
                  <span><Link to="/" class='mr-2'>{user.email}</Link></span>
                  <span><Link to="/shop/cart" class='mr-1'><Icon icon={cart}/></Link></span>
                  <span className='no-of-products' class='pt-1 mt-4'>{totalQty}</span>
                  <Link to='/login'>
                    <button class="relative ml-1 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-red-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                      <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                          Logout
                      </span>
                    </button>
                  </Link>
              </div>} 
            </div>
          </div>    
    )    
};
export default Navbar