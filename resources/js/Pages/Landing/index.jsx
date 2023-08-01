import React from "react";

export default function Landing() {
  return (
    <div className="p-5 flex flex-col gap-5">
      {/* <header className="bg-blue-500 h-56 blur-sm" style={{ backgroundImage: 'url(/assets/image/Perpustakaan.jpg)' }}>
      </header> */}
      <header className="relative flex flex-col justify-center items-center h-56 rounded-md">
        <img src="/assets/image/Perpustakaan.jpg" alt="" className="h-full w-full bg-cover absolute z-10 blur-sm" />
        <div className="z-20 flex flex-col items-center gap-5">
          <img src="/assets/image/logo.jpg" alt="" className="bg-cover h-24" />
          <h1 className="text-white text-2xl">Perpustakaan Universitas BSI</h1>
        </div>
      </header>
      <div>Selamat datang</div>
      <div className="flex gap-5">
        <div className="border shadow-md h-screen flex justify-center w-3/12">Menu</div>
        <div className="border shadow-md h-screen flex justify-center w-9/12">content</div>
      </div>
    </div>
  )
}