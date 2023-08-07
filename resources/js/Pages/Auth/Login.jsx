import { router, useForm } from "@inertiajs/react";
import React, { useEffect } from "react";
import toast, { Toaster } from 'react-hot-toast';

export default function Login() {

  const { data, setData, post, processing, errors } = useForm({
    email: '',
    password: '',
  });
  console.log(data);

  const handleSubmit = (e) => {
    e.preventDefault()
    post('/login', data);
  }

  useEffect(() => {
    if(Object.keys(errors).length != 0){
      Object.values(errors).forEach(errorMessage => {
        toast.error(errorMessage);
      });
      router.visit('/clear-flash', {
        method: 'post'
      });
    }
  }, [Object.keys(errors).length != 0])

  return (
    <div className="h-screen flex bg-[url('/assets/image/background_login.jpeg')]">
      <Toaster position="top-right"/>
      <div className="flex flex-col items-center justify-center px-24 w-8/12">
        <div className="w-auto">
          <img src="/assets/image/Library_Freepik.jpg" alt="" className="h-[32rem]" />
        </div>
        <div className="flex flex-col items-center font-inter gap-5">
          <h1 className="text-2xl font-medium ">Perpustakaan Damai</h1>
          <p className="text-sm text-gray-600 w-7/12 text-center">Akses mudah dan cepat terhadap berbagai jenis buku, majalah, jurnal, dan materi pustaka lainnya</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="w-4/12 flex flex-col justify-center items-center gap-10">
        <h1 className="font-medium text-2xl">Login</h1>
        <div className="w-8/12 flex flex-col items-center gap-5">
          <input onChange={e => setData('email', e.target.value)} type="text" placeholder="Email" className="px-4 py-2 border rounded-md w-full" />
          <input onChange={e => setData('password', e.target.value)} type="password" placeholder="Password" className="px-4 py-2 border rounded-md w-full" />
        </div>
        <button type="submit" className="w-8/12 rounded-md bg-[#3E97FF] text-white px-4 py-2 hover:bg-secondary hover:duration-300">Submit</button>
        <p className="text-gray-500">
          Not member yet?
          <a className="text-[#3E97FF]" href="/register"> Register</a>
        </p>
      </form>
    </div>
  )
}