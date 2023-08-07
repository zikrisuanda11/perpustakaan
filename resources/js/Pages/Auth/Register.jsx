import React from "react";

export default function Login() {
  return (
    <div className="h-screen flex bg-[url('/assets/image/background_login.jpeg')]">
      <div className="flex flex-col items-center justify-center px-24 w-8/12">
        <div className="w-auto">
          <img src="/assets/image/Library_Freepik.jpg" alt="" className="h-[32rem]" />
        </div>
        <div className="flex flex-col items-center font-inter gap-5">
          <h1 className="text-2xl font-medium ">Perpustakaan Damai</h1>
          <p className="text-sm text-gray-600 w-7/12 text-center">Akses mudah dan cepat terhadap berbagai jenis buku, majalah, jurnal, dan materi pustaka lainnya</p>
        </div>
      </div>
      <div className="w-4/12 flex flex-col justify-center items-center gap-10">
        <h1 className="font-medium text-2xl">Register</h1>
        <div className="w-8/12 flex flex-col items-center gap-5">
          <input type="text" placeholder="Nama" className="px-4 py-2 border rounded-md w-full" />
          <input type="text" placeholder="Email" className="px-4 py-2 border rounded-md w-full" />
          <input type="password" placeholder="Password" className="px-4 py-2 border rounded-md w-full" />
          <input type="password" placeholder="Confirm Password" className="px-4 py-2 border rounded-md w-full" />
        </div>
        <button className="w-8/12 rounded-md bg-[#3E97FF] text-white px-4 py-2 hover:bg-secondary hover:duration-300">Submit</button>
        <p className="text-gray-500">
          Already have an account?
          <a className="text-[#3E97FF]" href="/login"> login</a>
        </p>
      </div>
    </div>
  )
}