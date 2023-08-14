import React from "react";

export default function Footer() {
  return (
    <footer className="h-16 bg-[#11418B] flex items-center justify-between px-20 text-white">
      <div>Copyright 2023 ©️ Perpustakaan Damai</div>
      <div></div>
      <div className="font-thin flex gap-2">
        <a href="#">Privacy policy</a>
        <a href="#">Terms & condition</a>
      </div>
    </footer>
  )
}