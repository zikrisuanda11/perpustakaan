import React, { useEffect, useState } from "react";
import { router, usePage } from "@inertiajs/react";

export default function Hero() {
  const { url } = usePage();

  const [search, setSearch] = useState();
  // console.log(search);

  useEffect(() => {
    router.get('/buku', {
      search: search
    }, {
      preserveState: true
    })
  }, [search])

  return (
    <div className="flex justify-between mx-20 ">
      <div className="flex flex-col justify-center w-6/12 gap-5">
        <div className="text-8xl font-bold capitalize">Perpustakaan Damai</div>
        <div className="text-2xl font-discover">Temukan buku favorit anda disini dan baca dengan gratis</div>
        {url != '/' ? (
          <div className="flex items-center gap-1 text-gray-500 w-10/12 py-3 px-5 bg-slate-100 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input onChange={(newValue) => setSearch(newValue.target.value)} type="text" placeholder="Cari Judul Buku" className="focus:outline-none w-full bg-transparent  border-none appearance-none focus:border-none" />
          </div>
        ) : url === '/' && (
          <a href="/buku" className="bg-secondary text-white w-fit font-medium px-6 py-2 rounded-md hover:duration-200 hover:bg-primary">Selengkapnya</a>
        )}
      </div>
      <div>
        <img src="/assets/image/avatar.png" alt="" />
      </div>
    </div>
  )
}