import React from "react";
import NavPublic from "../../Components/Navbar/NavPublic";

export default function Landing() {
  return (
    <main>
      <div className="flex relative justify-end border-red-500">
        <img src="/assets/image/nav_bg.png" alt="" className="absolute h-[36rem] z-10" />
      </div>
      {/* top */}
      <NavPublic/>

      {/* content */}
      <div className="bg-gray-100 border border-gray-100">
        <div className="flex my-10 ml-20 gap-10 ">
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
          <div className="w-10/12 flex flex-col gap-20">
            <section className="px-14 py-10 bg-white shadow-2xl rounded-md flex flex-col gap-10 ">
              <div className="flex flex-col">
                <h1 className="text-3xl font-bold">Recommended</h1>
                <div className="flex flex-wrap">
                  <div className="flex gap-3 mt-10 font-rubik w-4/12 ">
                    <div className="border shadow-xl p-2 ">
                      <img src="/assets/image/bulan.jpg" className="h-48" />
                    </div>
                    <div className="flex flex-col w-1/2 justify-center h-full gap-3">
                      <h3 className="text-2xl">Bulan</h3>
                      <p className="text-xs text-gray-500 ">By Tere Liye</p>
                      <p className="font-rambla text-gray-500 text-sm">Novel 'Bulan' diterbitkan oleh Penerbit PT Gramedia Pustaka Utama pada tahun 2015.</p>
                    </div>
                  </div>
                  <div className="flex gap-3 mt-10 font-rubik w-4/12 ">
                    <div className="border shadow-xl p-2 ">
                      <img src="/assets/image/bulan.jpg" className="h-48" />
                    </div>
                    <div className="flex flex-col w-1/2 justify-center h-full gap-3">
                      <h3 className="text-2xl">Bulan</h3>
                      <p className="text-xs text-gray-500 ">By Tere Liye</p>
                      <p className="font-rambla text-gray-500 text-sm">Novel 'Bulan' diterbitkan oleh Penerbit PT Gramedia Pustaka Utama pada tahun 2015.</p>
                    </div>
                  </div>
                  <div className="flex gap-3 mt-10 font-rubik w-4/12 ">
                    <div className="border shadow-xl p-2 ">
                      <img src="/assets/image/bulan.jpg" className="h-48" />
                    </div>
                    <div className="flex flex-col w-1/2 justify-center h-full gap-3">
                      <h3 className="text-2xl">Bulan</h3>
                      <p className="text-xs text-gray-500 ">By Tere Liye</p>
                      <p className="font-rambla text-gray-500 text-sm">Novel 'Bulan' diterbitkan oleh Penerbit PT Gramedia Pustaka Utama pada tahun 2015.</p>
                    </div>
                  </div>
                  <div className="flex gap-3 mt-10 font-rubik w-4/12 ">
                    <div className="border shadow-xl p-2 ">
                      <img src="/assets/image/bulan.jpg" className="h-48" />
                    </div>
                    <div className="flex flex-col w-1/2 justify-center h-full gap-3">
                      <h3 className="text-2xl">Bulan</h3>
                      <p className="text-xs text-gray-500 ">By Tere Liye</p>
                      <p className="font-rambla text-gray-500 text-sm">Novel 'Bulan' diterbitkan oleh Penerbit PT Gramedia Pustaka Utama pada tahun 2015.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Populer */}
              <div className="flex flex-col gap-10">
                <h1 className="text-3xl font-bold">Populer</h1>
                <div className="flex gap-10">
                  <div className="flex gap-10 w-fit">
                    <div className="flex flex-col gap-2 items-center">
                      <div className="border shadow-md p-2 ">
                        <img src="/assets/image/bulan.jpg" className="h-56" />
                      </div>
                      <h3 className="text-xl">Bulan</h3>
                      <p className="font-medium text-xs text-gray-500 ">Tere Liye</p>
                    </div>
                  </div>
                  <div className="flex gap-10 w-fit">
                    <div className="flex flex-col gap-2 items-center">
                      <div className="border shadow-md p-2 ">
                        <img src="/assets/image/bulan.jpg" className="h-56" />
                      </div>
                      <h3 className="text-xl">Bulan</h3>
                      <p className="font-medium text-xs text-gray-500 ">Tere Liye</p>
                    </div>
                  </div>
                  <div className="flex gap-10 w-fit">
                    <div className="flex flex-col gap-2 items-center">
                      <div className="border shadow-md p-2 ">
                        <img src="/assets/image/bulan.jpg" className="h-56" />
                      </div>
                      <h3 className="text-xl">Bulan</h3>
                      <p className="font-medium text-xs text-gray-500 ">Tere Liye</p>
                    </div>
                  </div>
                  <div className="flex gap-10 w-fit">
                    <div className="flex flex-col gap-2 items-center">
                      <div className="border shadow-md p-2 ">
                        <img src="/assets/image/bulan.jpg" className="h-56" />
                      </div>
                      <h3 className="text-xl">Bulan</h3>
                      <p className="font-medium text-xs text-gray-500 ">Tere Liye</p>
                    </div>
                  </div>
                  <div className="flex gap-10 w-fit">
                    <div className="flex flex-col gap-2 items-center">
                      <div className="border shadow-md p-2 ">
                        <img src="/assets/image/bulan.jpg" className="h-56" />
                      </div>
                      <h3 className="text-xl">Bulan</h3>
                      <p className="font-medium text-xs text-gray-500 ">Tere Liye</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <footer className="h-16 bg-[#11418B] flex items-center justify-between px-20 text-white">
        <div>Copyright 2023 ©️ Perpustakaan Damai</div>
        <div></div>
        <div className="font-thin flex gap-2">
          <a href="#">Privacy policy</a>
          <a href="#">Terms & condition</a>
        </div>
      </footer>
    </main>
  )
}