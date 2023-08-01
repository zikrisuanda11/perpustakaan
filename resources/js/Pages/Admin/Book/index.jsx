import React from "react";
import Default from "../../../Layouts/Default";
import { MdAdd } from 'react-icons/md';
import Buttons from "../../../Components/Button";

export default function index({ books }) {
  console.log(books);
  return (
    <Default>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Buku</h1>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-1">
        <ol className="flex items-center gap-1 text-sm text-gray-600">
          <li>
            <a href="#" className="block transition hover:text-gray-700">
              <span className="sr-only"> Home </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </a>
          </li>

          <li className="rtl:rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </li>

          <li>
            <a href="#" className="block transition hover:text-gray-700"> Shirts </a>
          </li>

          <li className="rtl:rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </li>

          <li>
            <a href="#" className="block transition hover:text-gray-700"> Plain Tee </a>
          </li>
        </ol>
      </div>
      <div className="mx-7 mt-5 border shadow-md rounded-xl p-5 flex flex-col gap-5">
        <div className="w-fit">
          <Buttons title={"Tambah"} />
        </div>
        <button className="border w-fit px-4 py-2 rounded-md bg-[#1da1f2] font-medium text-white">Tambah</button>
        <table className="">
          <thead className=" py-4">
            <tr className="text-gray-500 border-b">
              <th className="py-4">Judul</th>
              <th className="py-4">Penerbit</th>
              <th className="py-4">Pengarang</th>
              <th className="py-4">Stok</th>
              <th className="py-4">Tahun Rilis</th>
              <th className="py-4">Aksi</th>
            </tr>
          </thead>
          <tbody className="py-4">
            <tr className="text-center text-gray-600 border-b">
              <td className="py-4">Filosofi Teras</td>
              <td className="py-4">Manimpiring</td>
              <td className="py-4">Gramedia</td>
              <td className="py-4">100</td>
              <td className="py-4">2023</td>
              <td className="py-4 flex gap-5  items-center justify-center">
                <button className="">Edit</button>
                <button className="">Hapus</button>
              </td>
            </tr>
            <tr className="text-center text-gray-600 border-b">
              <td className="py-4">Filosofi Teras</td>
              <td className="py-4">Manimpiring</td>
              <td className="py-4">Gramedia</td>
              <td className="py-4">100</td>
              <td className="py-4">2023</td>
              <td className="py-4 flex gap-5  items-center justify-center">
                <button className="">Edit</button>
                <button className="">Hapus</button>
              </td>
            </tr>
            <tr className="text-center text-gray-600 border-b">
              <td className="py-4">Filosofi Teras</td>
              <td className="py-4">Manimpiring</td>
              <td className="py-4">Gramedia</td>
              <td className="py-4">100</td>
              <td className="py-4">2023</td>
              <td className="py-4 flex gap-5  items-center justify-center">
                <button className="">Edit</button>
                <button className="">Hapus</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Default>
  )
}