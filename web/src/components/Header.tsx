import { Link } from "react-router-dom";
import { logout } from "../services/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ModalRegister } from "./ModalRegister"
import { UserList } from "phosphor-react";



export function Header(){
  const [menu, setMenu] = useState(true)
  const [userItens, setUserItens] = useState(false)

  const navigate = useNavigate()
  function getLogout(){
    logout()
    navigate(0)
  }
  
  return(
    <header className="fixed top-0 z-50 shadow-md w-full h-16 bg-[#041E42] flex items-center justify-between">
        <div className="flex items-center">
          <h1 onClick={() => {navigate('/ControlTower')}} className="text-gray-200 ml-8 font-scaniaHeadline cursor-pointer text-sm max-sm:text-[10px]">EXTERNAL AGV - CONTROL TOWER</h1>

          <div className="h-16 w-[1px] ml-4 bg-[#193458] max-sm:hidden"/>
          <div className={`flex max-sm:${menu ? 'hidden' : 'flex'} max-sm:absolute max-sm:h-[100vh] max-sm:w-[100vw] max-sm:flex-col max-sm:z-30 max-sm:justify-center max-sm:items-center  max-sm:bg-[#041E42] max-sm:top-0 max-sm:left-0`}>
            <Link className="flex items-center border-[#193458] justify-center h-16 w-20 text-gray-200 border-r-[1px] bg-[#041E42] text-[17px] font-scaniaCondensed font-medium transition-all max-sm:w-full max-sm:border-none hover:bg-blue-300/[0.1]" to={'/ControlTower'}>Map</Link>
            <Link className= " flex border-[#193458] items-center justify-center h-16 w-32 text-gray-200 border-r-[1px] bg-[#041E42] text-[17px] font-scaniaCondensed font-medium transition-all max-sm:border-none max-sm:w-full hover:bg-blue-300/[0.1]" to={'/Dashboard'}>Dashboard</Link>
          </div>
        </div>
      <div className="flex items-center justify-center">
          <div onClick={() =>{menu ? setMenu(false) : setMenu(true)}} className={`cursor-pointer flex flex-col gap-3 max-sm:z-30 mr-5 sm:hidden max-sm:${menu ? '' : 'absolute max-sm:top-[23px] max-sm:right-0 body'}`}>
            <div className="w-7 h-[2px] bg-white"></div>
            <div className="w-7 h-[2px] bg-white"></div>
          </div>
          <div className={`${userItens ? 'block' : 'hidden'} absolute h-14 z-50 flex justify-evenly shadow-sm bg-white rounded-md top-16 right-0`}>
            <ModalRegister/>
            <button className={`text-gray-900 h-full w-28 max-sm:z-30 text-[17px] font-scaniaCondensed font-medium transition-all hover:bg-gray-300 rounded-md`} onClick={getLogout}>Logout</button>
          </div>
          <div onClick={() => {setUserItens(!userItens)}} className="flex items-center transition-all justify-center cursor-pointer w-20 h-16 border-x-[1px] border-[#193458] hover:bg-blue-300/[0.1]">
            <UserList color="white" size={30} weight="thin"/>
          </div>
          <img className="w-[41px] h-10 ml-3 mr-3" src="./scania_symbol_L_rgb.ico" alt="" />
        
      </div>
      <div onClick={() => {setUserItens(!userItens)}}  className={`${userItens ? 'block' : 'hidden'} z-40 absolute top-16 left-0 w-[99vw] bg-gray-900/10 h-screen`}></div>
    </header>
  )
} 