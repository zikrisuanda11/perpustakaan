import React from "react";
import NavPublic from "../../Components/Navbar/NavPublic";

export default function Book() {
  return (
    <main>
      <div className="flex relative justify-end border-red-500">
        <img src="/assets/image/nav_bg.png" alt="" className="absolute h-[36rem] z-10" />
      </div>
      {/* top */}
      <NavPublic/>

      {/* content */}
      <div className="bg-gray-100 border border-gray-100">
        <div className="flex my-10 ml-20 gap-40 ">
          <aside className="flex flex-col gap-10 w-2/12">
            <div className="flex flex-col gap-2">
              <h3 className="px-2 font-bold">Book By Genre</h3>
              <a href="#" className="px-2 py-1 bg-white rounded-md shadow-sm">All Genre</a>
              <a href="#" className="px-2 py-1 hover:bg-white hover:rounded-md hover:shadow-sm hover:duration-500">Business</a>
              <a href="#" className="px-2 py-1 hover:bg-white hover:rounded-md hover:shadow-sm hover:duration-500">Science</a>
              <a href="#" className="px-2 py-1 hover:bg-white hover:rounded-md hover:shadow-sm hover:duration-500">Fiction</a>
              <a href="#" className="px-2 py-1 hover:bg-white hover:rounded-md hover:shadow-sm hover:duration-500">Philosophy</a>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="px-2 font-bold">Recommendation</h3>
              <a href="#" className="px-2 py-1 hover:bg-white hover:rounded-md hover:shadow-sm hover:duration-500">Artist of the month</a>
              <a href="#" className="px-2 py-1 hover:bg-white hover:rounded-md hover:shadow-sm hover:duration-500">Book of the year</a>
              <a href="#" className="px-2 py-1 hover:bg-white hover:rounded-md hover:shadow-sm hover:duration-500">Top genre</a>
              <a href="#" className="px-2 py-1 hover:bg-white hover:rounded-md hover:shadow-sm hover:duration-500">Trending</a>
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