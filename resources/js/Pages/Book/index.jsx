import React from "react";
import {AiOutlineShoppingCart} from 'react-icons/ai';

export default function Landing() {
  return (
    <main>
      <div className="flex relative justify-end border-red-500">
        <img src="/assets/image/nav_bg.png" alt="" className="absolute h-[36rem] z-10" />
      </div>
      {/* top */}
      <div className="mx-28 relative mt-8 z-20">
        <nav className="font-rubik flex justify-between">
          <img src="/assets/Logo/logo.png" alt="" className="h-12 " />
          {/* <div className="text-3xl">
            Perpustakaan 
            <span className="font-bold">Damai</span>
          </div> */}
          <div className="flex gap-10 items-center">
            <div className="flex gap-10 text-white font-medium">
              <a href="/" className="border-b-2 pb-1">Home</a>
              <a href="/buku">Book</a>
              <a>Blog</a>
            </div>
            <button className="px-10 py-2 bg-white rounded-3xl font-medium text-secondary border-white">Log in</button>
          </div>
        </nav>
        <div className="flex justify-between">
          <div className="flex flex-col justify-center w-6/12 gap-5">
            <div className="text-8xl font-bold capitalize">Perpustakaan Damai</div>
            <div className="text-2xl font-discover">Temukan buku favorit anda disini dan baca dengan gratis</div>
            <div className="flex items-center gap-1 text-gray-500 w-10/12 py-3 px-5 bg-slate-100 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              <input type="text" placeholder="Cari buku" className="w-full bg-transparent  border-none focus:ring-0" />
            </div>
          </div>
          <div>
            <img src="/assets/image/avatar.png" alt="" />
          </div>
        </div>
      </div>

      {/* content */}
      <div className="bg-gray-100 border border-gray-100">
        <div className="flex my-10 ml-20 gap-40 ">
          <aside className="flex flex-col gap-10 w-2/12">
            <div className="flex flex-col gap-2">
              <h3 className="px-2 font-bold">Book By Genre</h3>
              <a href="#" className="px-2 bg-white rounded-md shadow-sm">All Genre</a>
              <a href="#" className="px-2">Business</a>
              <a href="#" className="px-2">Science</a>
              <a href="#" className="px-2">Fiction</a>
              <a href="#" className="px-2">Philosophy</a>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="px-2 font-bold">Recommendation</h3>
              <a href="#" className="px-2">Artist of the month</a>
              <a href="#" className="px-2">Book of the year</a>
              <a href="#" className="px-2">Top genre</a>
              <a href="#" className="px-2">Trending</a>
            </div>
          </aside>
          <section className="w-10/12 flex flex-wrap gap-20">
            <div className="w-3/12 h-60 ml-6 rounded-md shadow-xl flex items-center justify-center bg-white relative pl-8">
              <div className="w-6/12 absolute -left-16">
                <img src="/assets/image/bulan.jpg" className="h-48 w-fit shadow-md" />
              </div>
              <div className="w-6/12 flex flex-col gap-2">
                <h3 className="text-2xl">Bulan</h3>
                <p className="text-sm text-gray-500 ">By Tere Liye</p>
                <p className="font-rambla text-gray-500 text-xs">Novel 'Bulan' diterbitkan oleh Penerbit PT Gramedia Pustaka Utama pada tahun 2015.</p>
                <button className="text-sm border border-primary text-primary bg-[#E8ECF4] px-4 py-1  rounded-md font-rubik ">
                  Add
                </button>
              </div>
            </div>
            <div className="w-3/12 h-60 ml-6 rounded-md shadow-xl flex items-center justify-center bg-white relative pl-8">
              <div className="w-6/12 absolute -left-16">
                <img src="/assets/image/bulan.jpg" className="h-48 w-fit shadow-md" />
              </div>
              <div className="w-6/12 flex flex-col gap-2">
                <h3 className="text-2xl">Bulan</h3>
                <p className="text-sm text-gray-500 ">By Tere Liye</p>
                <p className="font-rambla text-gray-500 text-xs">Novel 'Bulan' diterbitkan oleh Penerbit PT Gramedia Pustaka Utama pada tahun 2015.</p>
                <button className="text-sm border border-primary text-primary bg-[#E8ECF4] px-4 py-1  rounded-md font-rubik ">
                  Add
                </button>
              </div>
            </div>
            <div className="w-3/12 h-60 ml-6 rounded-md shadow-xl flex items-center justify-center bg-white relative pl-8">
              <div className="w-6/12 absolute -left-16">
                <img src="/assets/image/bulan.jpg" className="h-48 w-fit shadow-md" />
              </div>
              <div className="w-6/12 flex flex-col gap-2">
                <h3 className="text-2xl">Bulan</h3>
                <p className="text-sm text-gray-500 ">By Tere Liye</p>
                <p className="font-rambla text-gray-500 text-xs">Novel 'Bulan' diterbitkan oleh Penerbit PT Gramedia Pustaka Utama pada tahun 2015.</p>
                <button className="text-sm border border-primary text-primary bg-[#E8ECF4] px-4 py-1  rounded-md font-rubik ">
                  Add
                </button>
              </div>
            </div>
            <div className="w-3/12 h-60 ml-6 rounded-md shadow-xl flex items-center justify-center bg-white relative pl-8">
              <div className="w-6/12 absolute -left-16">
                <img src="/assets/image/bulan.jpg" className="h-48 w-fit shadow-md" />
              </div>
              <div className="w-6/12 flex flex-col gap-2">
                <h3 className="text-2xl">Bulan</h3>
                <p className="text-sm text-gray-500 ">By Tere Liye</p>
                <p className="font-rambla text-gray-500 text-xs">Novel 'Bulan' diterbitkan oleh Penerbit PT Gramedia Pustaka Utama pada tahun 2015.</p>
                <button className="text-sm border border-primary text-primary bg-[#E8ECF4] px-4 py-1  rounded-md font-rubik ">
                  Add
                </button>
              </div>
            </div>
            <div className="w-3/12 h-60 ml-6 rounded-md shadow-xl flex items-center justify-center bg-white relative pl-8">
              <div className="w-6/12 absolute -left-16">
                <img src="/assets/image/bulan.jpg" className="h-48 w-fit shadow-md" />
              </div>
              <div className="w-6/12 flex flex-col gap-2">
                <h3 className="text-2xl">Bulan</h3>
                <p className="text-sm text-gray-500 ">By Tere Liye</p>
                <p className="font-rambla text-gray-500 text-xs">Novel 'Bulan' diterbitkan oleh Penerbit PT Gramedia Pustaka Utama pada tahun 2015.</p>
                <button className="text-sm border border-primary text-primary bg-[#E8ECF4] px-4 py-1  rounded-md font-rubik ">
                  Add
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>

      <footer className="h-16 bg-[#11418B] flex items-center justify-between px-20 text-white">
        <div>Copyright 2023 ©️ Perpustakaan Damai</div>
        <div></div>
        <div className="font-thin">
          <a href="#">Privacy policy</a>
          <a href="#">Terms & condition</a>
        </div>
      </footer>
    </main>
  )
}