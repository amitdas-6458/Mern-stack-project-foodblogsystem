import { Link, useLocation, useNavigate } from "react-router-dom"
import {BsSearch} from 'react-icons/bs'
import {FaBars} from 'react-icons/fa'
import { useContext, useState } from "react"
import Menu from "./Menu"
import { UserContext } from "../context/UserContext"
import Logo from '../assets/logo.png'
import {
    
    MDBIcon
} from "mdb-react-ui-kit";

const Navbar = () => {
  
  const [prompt,setPrompt]=useState("")
  const [menu,setMenu]=useState(false)
  const navigate=useNavigate()
  const path=useLocation().pathname
  
  // console.log(prompt)
  

  const showMenu=()=>{
    setMenu(!menu)
  }
  
   
    const {user}=useContext(UserContext)
    
  return (
      <div className="flex items-center justify-between h-4 px-6 md:px-[200px]  py-4 mt-4 mb-4">
          <h1 className="text-lg font-extrabold md:text-xl">
              <Link to="/">
                  <img src={Logo} alt="My Logo" height={10} width={250} />
              </Link>
          </h1>
          {path === "/" && (
              <div className="flex items-center justify-center space-x-3">
                  <input
                      onChange={(e) => setPrompt(e.target.value)}
                      className="h-8 px-3 rounded outline-none "
                      placeholder="Search a post"
                      type="text"
                  />
                  <p
                      onClick={() =>
                          navigate(prompt ? "?search=" + prompt : navigate("/"))
                      }
                      className="cursor-pointer">
                      <BsSearch />
                  </p>
              </div>
          )}
          <div className="items-center justify-center hidden space-x-2 md:flex md:space-x-4">
             
              {user ? (
                  <Link to="/write">
                      <button class="btn btn-warning text-white " data-mdb-ripple-init >
                          Upload
                      </button>
                  </Link>
              ) : (
                  <h3>
                      <Link to="/login">Login</Link>
                  </h3>
              )}
              {user ? (
                  <div onClick={showMenu}>
                      <p className="relative cursor-pointer">
                          <FaBars />
                      </p>
                      {menu && <Menu />}
                  </div>
              ) : (
                  <h3>
                      <Link to="/register">Register</Link>
                  </h3>
              )}
          </div>
          <div onClick={showMenu} className="text-lg md:hidden">
              <p className="relative cursor-pointer">
                  <FaBars />
              </p>
              {menu && <Menu />}
          </div>
      </div>
  );
}

export default Navbar 