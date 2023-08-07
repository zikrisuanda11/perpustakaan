import { router, usePage } from "@inertiajs/react";
import { Avatar } from "@mui/material";
import React from "react";
import BasicMenu from "../Menu/BasicMenu";
import BasicMenu2 from "../Menu/BasicMenu2";

export default function NavPublic() {
  const { url } = usePage();
  const { auth } = usePage().props;
  const handleLogout = () => {
    router.post('/logout');
  }
  console.log(auth);

  return (
    <div className="mx-28 relative mt-8 z-20">
      <nav className="font-rubik flex justify-between">
        <img src="/assets/Logo/logo.png" alt="" className="h-12 " />
        <div className="flex gap-10 items-center">
          <div className="flex gap-10 text-white font-medium">
            <a href="/" className="border-b-2 pb-1">Home</a>
            <a href="/buku">Book</a>
            <a>Blog</a>
          </div>
          {Object.keys(auth).length != 0 ? (
            <BasicMenu2
              handleLogout={handleLogout}
            />
          ): (
            <a href="/login" className="px-10 py-2 bg-white rounded-3xl font-medium text-secondary border-white">Log in</a>
          )}
        </div>
      </nav>
      <div className="flex justify-between">
        <div className="flex flex-col justify-center w-6/12 gap-5">
          <div className="text-8xl font-bold capitalize">Perpustakaan Damai</div>
          <div className="text-2xl font-discover">Temukan buku favorit anda disini dan baca dengan gratis</div>
          {url === '/buku' ? (
            <div className="flex items-center gap-1 text-gray-500 w-10/12 py-3 px-5 bg-slate-100 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              <input type="text" placeholder="Cari buku" className="focus:outline-none w-full bg-transparent  border-none appearance-none focus:border-none" />
            </div>
          ) : url === '/' && (
            <a href="/buku" className="bg-secondary text-white w-fit font-medium px-6 py-2 rounded-md hover:duration-200 hover:bg-primary">Selengkapnya</a>
          )}
        </div>
        <div>
          <img src="/assets/image/avatar.png" alt="" />
        </div>
      </div>
    </div>
  )
}