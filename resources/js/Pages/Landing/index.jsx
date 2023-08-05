import React from "react";

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
            <a href="/buku" className="bg-primary text-white w-fit font-medium px-6 py-2 rounded-sm hover:shadow-xl hover:duration-100">Selengkapnya</a>
          </div>
          <div>
            <img src="/assets/image/avatar.png" alt="" />
          </div>
        </div>
      </div>

      {/* content */}
      <div className="bg-gray-100 border border-gray-100">
        <div className="flex my-10 ml-20 gap-10 ">
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