import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import axios from "axios"
import { URL } from "../url"
import { Link, useNavigate } from "react-router-dom"


const Menu = () => {
const {user}=useContext(UserContext)
const {setUser}=useContext(UserContext)
const navigate=useNavigate()

const handleLogout=async()=>{
  try{
    const res=await axios.get(URL+"/api/auth/logout",{withCredentials:true})
    // console.log(res)
    setUser(null)
    navigate("/login")

  }
  catch(err){
    console.log(err)
  }
}
  return (
      <div className="bg-black w-[200px] z-10 flex flex-col items-start absolute top-12 right-6 md:right-32 rounded-md p-4 space-y-6 mt-4">
          {!user && (
              <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer">
                  <Link to="/login">Login</Link>
              </h3>
          )}
          {!user && (
              <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer">
                  <Link to="/register">Register</Link>
              </h3>
          )}
          {user && (
              <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer">
                  <Link to={"/profile/" + user._id}>
                      {" "}
                      <i class="fas fa-user mx-1"></i>
                      {user.username}
                  </Link>
              </h3>
          )}
          {user && (
              <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer">
                  <Link to="/write">
                      <i class="fas fa-edit"></i> Create
                  </Link>
              </h3>
          )}
          {user && (
              <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer">
                  <Link to={"/myblogs/" + user._id}>
                      <i class="fas fa-box-archive"></i> My blogs
                  </Link>
              </h3>
          )}
          {user && (
              <h3
                  onClick={handleLogout}
                  className="text-white text-sm hover:text-gray-500 cursor-pointer">
                  <i class="fas fa-arrow-right-to-bracket"></i> Logout
              </h3>
          )}
      </div>
  );
}

export default Menu