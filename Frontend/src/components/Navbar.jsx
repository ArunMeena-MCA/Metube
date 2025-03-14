import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { openLogin } from "../redux/slices/modalSlice";

export default function Navbar() {
//   const navigate = useNavigate();
const dispatch = useDispatch()
  const [search, setSearch] = useState("");
  const {user} = useSelector((state) => state.auth)
  // const {isLoginOpen} = useSelector((state) => state.modal)

  return (
    <div className="relative bg-zinc-950 text-white shadow-lg shadow-[0px_0px_20px_rgba(251,113,133,0.5)]">
      {/* Navbar content */}
      <div className="flex items-center justify-between px-6 py-4 relative z-10">
        {/* Logo */}
        <img
          src=""
          alt="Logo"
          className="w-12 h-12 cursor-pointer rounded-full"
        />

        {/* Search Bar */}
        <div className="ml-20 relative flex items-center w-1/2 md:w-1/3 bg-zinc-900 rounded-full shadow-[0px_0px_20px_rgba(251,113,133,0.5)]">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 text-white bg-transparent border-none outline-none placeholder-gray-400"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Search className="absolute right-4 text-gray-400 cursor-pointer" />
        </div>

        {user &&           
          ( 
            <div className="w-32 flex justify-end">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRseRj5MjxLYtgPrmGHS01YBytPjIkGKk8Zaw&s"
                alt="Profile"
                className="w-12 h-12 rounded-full cursor-pointer"
              />
            </div>
          )
        }
        {!user && 
          (<div className="flex gap-2 md:gap-5">
            <h2 onClick={() => dispatch(openLogin())} className="font-semibold hover:font-bold text-sm md:text-lg cursor-pointer">Login</h2>
            <h2 className="font-semibold hover:font-bold text-sm md:text-lg cursor-pointer">Signup</h2>
          </div>)
        }
      </div>
    </div>
  );
}