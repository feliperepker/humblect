import { Link } from "react-router-dom";
import { logout } from "../services/auth";
import { useNavigate } from "react-router-dom";




export function Header(){
  const navigate = useNavigate()
  function getLogout(){
    logout()
    navigate(0)
  }
  
  return(
    <header className="w-full h-20 bg-[#041E42] flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-gray-200 ml-8 font-scaniaHeadline">EXTERNAL AGV - CONTROL TOWER</h1>
          <div className="h-20 w-[1px] ml-4 bg-[#193458] "/>
          <Link className="flex items-center border-[#193458] justify-center h-20 w-20 text-gray-200 border-r-[1px] bg-[#041E42] text-[18px] font-scaniaCondensed font-medium transition-all hover:bg-blue-300/[0.1]" to={'/ControlTower'}>Map</Link>
          <Link className= " flex border-[#193458] items-center justify-center h-20 w-32 text-gray-200 border-r-[1px] bg-[#041E42] text-[18px] font-scaniaCondensed font-medium transition-all hover:bg-blue-300/[0.1]" to={'/Dashboard'}>Dashboard</Link>
          
        </div>
      <div className="flex items-center justify-center">
        <button className=" flex border-[#193458] items-center justify-center h-20 w-20 text-gray-200 border-r-[1px] bg-[#041E42] text-[18px] font-scaniaCondensed font-medium transition-all hover:bg-blue-300/[0.1]" onClick={getLogout}>Logout</button>
        <img className="w-10 h-10 ml-3 mr-3" src="/scania_symbol_L_rgb.ico" alt="" />
      </div>
    </header>
  )
} 