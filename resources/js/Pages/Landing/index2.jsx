import React from "react";

export default function Landing() {
  return (
    <div className="p-5 flex flex-col gap-24">
      <nav className="flex justify-between border-b-2 pb-5 items-center">
        <div>
          <h1 className="font-bronson text-2xl">Books</h1>
        </div>
        <div className="flex gap-5 font-sofia">
          <a href="#">Home</a>
          <a href="#">Book</a>
        </div>
        <div>
          <div className="h-8 w-8 rounded-full bg-blue-200"></div>
        </div>
      </nav>

      <div className="flex">
        <div className="w-6/12 flex flex-col justify-center border border-red-500 gap-5">
          <h1 className="text-5xl  w-5/12 ml-10 relative ">
            <img src="/assets/image/jelly-three-red-lines-2.png" alt="" className="h-8 -rotate-90 right-72 -left-5 -top-5 absolute"/>
            Discover The Book Treasure
          </h1>
          <button className="border border-red-500 w-fit ml-10 px-4 py-2">
            Explore Now
          </button>
        </div>
        <div className="w-6/12 h-96 border border-red-500 flex items-center justify-center">
          <img src="/assets/image/34.png" alt="" className="h-full" />
        </div>
      </div>
    </div>
  )
}