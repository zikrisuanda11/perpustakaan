import React, { useEffect } from "react";
import Default from "../../../Layouts/Default";
import Buttons from "../../../Components/Button";
import Breadcrumbs from "../../../Components/Breadcrumbs";
import dayjs from "dayjs";
import toast, { Toaster } from 'react-hot-toast';
import { router } from "@inertiajs/react";

export default function index({ books, flash }) {
  useEffect(() => {
    if(flash.message){
      toast.success(flash.message)
      router.visit('/clear-flash', {
        method: 'post'
      });
      
    }
  }, [flash.message])

  const handleDelete = (id) => {
    router.delete(`/admin/buku/${id}`);
  }
  // console.log(books);
  return (
    <Default>
      <Toaster />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Buku</h1>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-1">
        <Breadcrumbs
          attributes={[
            { name: 'Buku', href: '/admin/buku' },
          ]}
        />
      </div>
      <div className="mx-7 mt-5 border shadow-md rounded-xl p-5 flex flex-col gap-5 ">
        <div className="w-fit">
          <Buttons title={"Tambah"} variant={'contained'} href={'/admin/buku/create'}/>
        </div>
        <table className="text-left text">
          <thead className="">
            <tr className="text-gray-500 border-b border-gray-100 uppercase">
              <th className="">Judul & sampul</th>
              <th className="">Penerbit</th>
              <th className="">Pengarang</th>
              <th className="">Stok</th>
              <th className="">Tahun Rilis</th>
              <th className=" text-center">Aksi</th>
            </tr>
          </thead>
          {books.data == 0 && (
            <tbody className="h-52">
              <tr className="text-center w-full">
                <td className="" colSpan={6}>Data kosong</td>
              </tr>
            </tbody>
          )}
          {books.data.map((book) => {
            if(book != null){
              return (
                <tbody className=" table-auto" key={book.id} >
                  <tr className="text-gray-500 border-b border-gray-100">
                    <td className=" flex items-center gap-5">
                      <img src={book.book_image} alt="" className="h-16 w-auto p-1 border shadow-md"/>
                      {book.title}
                    </td>
                    <td className="">{book.author}</td>
                    <td className="">{book.publisher}</td>
                    <td className="">{book.stock}</td>
                    <td className="">{dayjs(book.release_year).format('YYYY')}</td>
                    <td className="text-center">
                      <Buttons title={"Edit"} variant={'contained'} />
                      <span className="mx-2"></span>
                      <Buttons title={"Hapus"} variant={'outlined'} onClick={() => handleDelete(book.id)}/>
                    </td>
                  </tr>
                </tbody>
              )
            }else{
              return (
                <div>Data kosong</div>
              )
            }
          })}
        </table>
        <div className="w-full flex justify-end gap-5 text-gray-500">
          <div>{books.from} - {books.to} to {books.total}</div>
          <div className="">
            <a href={books.prev_page_url}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </a>
          </div>
          <div>
            <a href={books.next_page_url}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </Default>
  )
}