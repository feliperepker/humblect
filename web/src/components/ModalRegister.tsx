import React from "react";
import * as Dialog from '@radix-ui/react-dialog';

export function ModalRegister(){
  return(
    // z-50 para que o modal fique acima do mapa, pode ser otimizado
    <div className="z-50">
      <Dialog.Root>
      {/* Criando o botão que chama o modal */}
      <Dialog.Trigger asChild>
        <button className="text-gray-900 h-full w-28 max-sm:z-30 text-[17px] font-scaniaCondensed font-medium transition-all border-r-[1px] border-gray-200 hover:bg-gray-300 rounded-md ">
          Register
        </button>
      </Dialog.Trigger>

      {/* Criação do modal */}
      <Dialog.Portal>
        {/* Criação do background do modal */}
        <Dialog.Overlay className="fixed bg-black/20 inset-0 z-50 animate-overlayShow"/>

        {/* Criação do conteúdo do modal */}
        <Dialog.Content className="z-50 bg-white rounded-[8px] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[90vh] max-w-[450px] max-h-[85vh] p-6 outline-none flex flex-col justify-center animate-contentShow">
          <Dialog.Title className="m-0 font-scaniaHeadline font-bold text-[#041E42] text-[20px] flex justify-center">Register New User</Dialog.Title>
          <Dialog.Description className="mt-[10px] mb-[20px]">Register new users for the External AGV - Control Tower.</Dialog.Description>

          {/* Formulário para o input dos dados de cadastro */}
          <form action=""> 
            {/* Username Field */}
            <fieldset className="flex items-center justify-center gap-5 align-center mb-[15px] font-scaniaCondensed">
              <label className="font-[15px] cursor-pointer w-[90px] text-left" htmlFor="username">
                Username
              </label>
              <input className="w-[100%] flex-1 inline-flex items-center justify-center rounded-[4px] font-[15px] leading-[1] h-9 border-gray-200 border-[1px] font-scaniaCondensed pl-3" id="username" required/>
            </fieldset>
            {/* Password Field */}
            <fieldset className="flex items-center justify-center gap-5 align-center mb-[15px] font-scaniaCondensed">
              <label className="font-[15px] cursor-pointer w-[90px] text-left font-scaniaCondensed" htmlFor="password">
                Password
              </label>
              <input className="w-[100%]  flex-1 inline-flex items-center justify-center rounded-[4px] font-[15px] leading-[1] h-9 border-[1px] border-gray-200 font-scaniaCondensed pl-3" type="password" id="password" required/>
            </fieldset>
            {/* Role Field */}
            <fieldset className="flex items-center justify-center gap-5 align-center mb-[15px] font-scaniaCondensed">
              <label className="font-[15px] w-[90px] text-left font-scaniaCondensed">
                Role
              </label>
              <div className="flex w-[100%] gap-2 justify-evenly font-scaniaCondensed">
                <div className="cursor-pointer">
                  <input type="radio" className="cursor-pointer" value="ADMIN" id="admin" name="role" required/>
                  <label htmlFor="admin" className="ml-2 cursor-pointer">Admin</label>
                </div>
                <div className="cursor-pointer">
                  <input type="radio" className="cursor-pointer" value="VIEWER" id="viewer" name="role" required/>
                  <label htmlFor="viewer" className="ml-2 cursor-pointer">Viewer</label>
                </div>
              </div>
            </fieldset>
            {/* Submit button */}
            <div className="flex mt-7 items-center justify-center">
              <input type="submit" value="Register User" className="bg-green-700 p-2 rounded-[6px] transition-all cursor-pointer text-white font-scaniaCondensed hover:bg-green-600" />
              {/* <button className="bg-green-700 p-2 rounded-[6px] text-white font-scaniaCondensed">Register User</button> */}
            </div>
          </form>
          
          {/* Botão para fechar modal */}
          <Dialog.Close asChild>
            <button className="rounded-[100%] h-6 w-6 inline-flex items-center text-xl justify-center text-[#041E42] font-bold absolute top-2 right-2" type="submit">x</button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  </div>
  )
}