export function Footer(){
  return(
    <div className="h-[13vh] min-h-[100px] mt-10 flex justify-between items-center bg-[#041E42]">
      <div className="ml-10">
        <h3 className="font-scaniaHeadline text-sm text-gray-200 font-extrabold max-sm:text-[10px]">AUTONOMOUS LOGISTICS SOLUTIONS</h3>
        <p className="text-gray-400 text-[12px] font-scaniaCondensed mt-4 max-sm:text-[10px]">© Copyright Scania {new Date().getFullYear()} All rights reserved.</p>
      </div>
      <img className="w-40 mr-10 max-sm:w-20" src="./logoscania.png" alt="" />
    </div>
  )
}