import React, { useEffect, useState } from "react";
import Default from "../../../Layouts/Default";
import Buttons from "../../../Components/Button";
import Breadcrumbs from "../../../Components/Breadcrumbs";
import toast, { Toaster } from 'react-hot-toast';
import { router } from "@inertiajs/react";
import AlertDialog from "../../../Components/Dialog/AlertDialog";
import Success from "../../../Components/Badges/Success";
import Warning from "../../../Components/Badges/Warning";
import Error from "../../../Components/Badges/Error";

export default function index({ loans, flash }) {
  
  const [openAlerDialog, setOpenAlertDialog] = useState(false);
  const [idBook, setIdBook] = useState();

  const handleClickOpenAlertDialog = (id) => {
    setOpenAlertDialog(true);
    setIdBook(id);
  };

  const handleCloseAlertDialog = () => {
    setOpenAlertDialog(false);
  };

  useEffect(() => {
    if (flash.message) {
      toast.success(flash.message)
      router.visit('/clear-flash', {
        method: 'post'
      });

    }
  }, [flash.message])

  const handleDelete = (id) => {
    router.delete(`/admin/peminjaman/${id}`);
  }

  const handleEdit = (id) => {
    router.get(`/admin/peminjaman/${id}/edit`)
  }

  return (
    <Default>
      <Toaster />
      <AlertDialog
        title={"Yakin ingin menghapus peminjaman?"}
        description={"Dengan menghapus data peminjaman data tidak dapat dikembalikan!"}
        open={openAlerDialog}
        handleCloseAlertDialog={handleCloseAlertDialog}
        handleDelete={() => handleDelete(idBook)}
      />
      <div className="flex items-center justify-between">
        <div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">Peminjaman</h1>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-1">
            <Breadcrumbs
              attributes={[
                { name: 'peminjaman', href: '/admin/peminjaman' },
              ]}
            />
          </div>
        </div>
        {/* <div className="w-fit mx-7">
          <Buttons title={"Tambah"} variant={'contained'} href={'/admin/peminjaman/create'} />
        </div> */}
      </div>
      <div className="mx-7 mt-5 border shadow-md rounded-xl p-5 flex flex-col gap-5 ">
        <table className="text-left text">
          <thead className="">
          {/* $table->foreignId('id_borrower')->constrained('users');
            $table->foreignId('id_book')->constrained('books');
            $table->integer('stock');
            $table->date('loan_date');
            $table->date('return_date');
            $table->enum('status', ['borrowed', 'returned']); */}
            <tr className="text-gray-500 border-b border-gray-100 uppercase">
              <th className="py-3">Nama</th>
              <th className="py-3">Judul Buku</th>
              <th className="py-3">Tanggal Peminjaman</th>
              <th className="py-3">Tanggal Pengembalian</th>
              <th className="py-3">Status</th>
              <th className="py-3 text-center">Aksi</th>
            </tr>
          </thead>
          {loans.data == 0 && (
            <tbody className="h-52">
              <tr className="text-center w-full">
                <td className="" colSpan={6}>Data kosong</td>
              </tr>
            </tbody>
          )}
          {loans.data.map((loan) => {
            if (loan != null) {
              return (
                <tbody className=" table-auto" key={loan.id} >
                  <tr className="text-gray-500 border-b border-gray-100">
                    <td className="py-3">{loan.user.name}</td>
                    <td className="py-3">{loan.book.title}</td>
                    <td className="py-3">{loan.loan_date}</td>
                    <td className="py-3">{loan.return_date}</td>
                    <td className="py-3">{loan.status == 'returned' ? <Success title={'Kembali'}/> : loan.status == 'borrowed' ? <Warning title={'Dipinjam'}/> : <Error title={'Pending'}/>}</td>
                    <td className="py-3 text-center">
                      <Buttons title={"Kembali"} variant={'outlined'} onClick={() => handleClickOpenAlertDialog(loan.id)} />
                      <span className="mx-2"></span>
                      <Buttons title={"Detail"} variant={'contained'} onClick={() => handleEdit(loan.id)} />
                    </td>
                  </tr>
                </tbody>
              )
            } else {
              return (
                <div>Data kosong</div>
              )
            }
          })}
        </table>
        <div className="w-full flex justify-end gap-5 text-gray-500">
          <div>{loans.from} - {loans.to} to {loans.total}</div>
          <div className="">
            <a href={loans.prev_page_url}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </a>
          </div>
          <div>
            <a href={loans.next_page_url}>
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