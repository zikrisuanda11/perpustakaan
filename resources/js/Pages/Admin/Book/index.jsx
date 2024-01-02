import React, { useEffect, useState } from "react";
import Default from "../../../Layouts/Default";
import Buttons from "../../../Components/Button";
import Breadcrumbs from "../../../Components/Breadcrumbs";
import dayjs from "dayjs";
import toast, { Toaster } from 'react-hot-toast';
import { router } from "@inertiajs/react";
import AlertDialog from "../../../Components/Dialog/AlertDialog";
import { Button } from "@mui/material";
import { BiPrinter } from 'react-icons/bi';
import MonthDialog from "../../../Components/Dialog/MonthDialog";
import Success from "../../../Components/Notification/Success";

export default function index({ books, flash, types }) {
  const [openAlerDialog, setOpenAlertDialog] = useState(false);
  const [idBook, setIdBook] = useState();
  const [search, setSearch] = useState();
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(dayjs(Date().now).format('YYYY-MM'));
  const [selectedType, setSelectedType] = useState(null);
  const [openNotif, setOpenNotif] = useState(false);
  console.log(books);

  let formattedTypes = types.map((type) => {
    return { label: String(type.code).padStart(3, '0') + ' ' + type.name, id: String(type.code).padStart(3, '0') }
  });

  const handleCloseNotif = () => {
    setOpenNotif(false);
    router.visit('/clear-flash', {
      method: 'post'
    });
  }

  const handleCloseDialog = () => {
    setOpen(false);
  }

  const handleSubmit = () => {
    if(date == undefined){
      toast.error('Silahkan pilih bulan')
      setOpen(false)
    }else{
      window.open(`/admin/cetak-buku/${date}/${selectedType}`, '_blank')
      setOpen(false)
      setSelectedType(null)
    }
  }

  const handleClickOpenAlertDialog = (id) => {
    setOpenAlertDialog(true);
    setIdBook(id);
  };

  const handleCloseAlertDialog = () => {
    setOpenAlertDialog(false);
  };

  // console.log(flash);
  useEffect(() => {
    router.put('/admin/buku', {
      search: search
    });
  }, [search]);

  useEffect(() => {
    if (flash.message) {
      setOpenNotif(true)
    }
  }, [flash.message])

  const handleDelete = (id) => {
    router.delete(`/admin/buku/${id}`);
    setOpenAlertDialog(false);
  }

  const handleEdit = (id) => {
    router.get(`/admin/buku/${id}/edit`)
  }

  return (
    <Default>
      <Success
        openModal={openNotif}
        closeModal={handleCloseNotif}
        message={flash.message}
      />
      <MonthDialog
        setSelectedType={setSelectedType}
        formattedTypes={formattedTypes}
        onChange={setDate}
        buttonTitle="Cetak"
        open={open}
        handleCloseAlertDialog={handleCloseDialog}
        handleOnClick={handleSubmit}
        title={"Pilih Bulan"}
      />
      {/* <Toaster /> */}
      <AlertDialog
        title={"Yakin ingin menghapus buku?"}
        description={"Dengan menghapus data buku data tidak dapat dikembalikan!"}
        open={openAlerDialog}
        handleCloseAlertDialog={handleCloseAlertDialog}
        handleOnClick={() => handleDelete(idBook)}
      />
      <div className="flex items-center justify-between">
        <div>
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
        </div>
        <div className="flex items-center gap-5 mx-7">
          <div className="w-8/12 flex items-center gap-1 text-gray-500 py-2 px-5 bg-slate-100 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input onChange={(newValue) => setSearch(newValue.target.value)} type="text" placeholder="Search" className="focus:outline-none w-full bg-transparent  border-none appearance-none focus:border-none" />
          </div>
          <div className="w-fit">
            <Buttons title={"Tambah"} variant={'contained'} href={'/admin/buku/create'} />
          </div>
          <Button
            variant="contained"
            onClick={() => setOpen(true)}
          >
            <BiPrinter size={24} />
          </Button>
        </div>
      </div>
      <div className=" flex flex-col">
        <div className=" overflow-x-auto ">
          <div className="inline-block min-w-full py-2 align-middle">
            <div className="mx-7 mt-5 border shadow-md rounded-xl p-5 flex flex-col gap-5 ">
              <table className="text-left min-w-full divide-y divide-gray-200">
                <thead>
                  <tr className="text-gray-500 border-gray-100 uppercase">
                    <th className="py-3 px-2">Kode</th>
                    <th className="py-3 px-2 text-center">Kode Jenis</th>
                    <th className="py-3 px-2 text-center">Judul & sampul</th>
                    <th className="py-3 px-2">Penerbit</th>
                    <th className="py-3 px-2">Pengarang</th>
                    <th className="py-3 px-2 text-center">Lokasi</th>
                    <th className="py-3 px-2 text-center">Kota</th>
                    <th className="py-3 px-2 text-center">Tahun Rilis</th>
                    <th className="py-3 px-2 text-center">Aksi</th>
                  </tr>
                </thead>
                {books.data == 0 && (
                  <tbody className="h-52">
                    <tr className="text-center w-full">
                      <td colSpan={6}>Data kosong</td>
                    </tr>
                  </tbody>
                )}
                {books.data.map((book) => {
                  if (book != null) {
                    return (
                      <tbody key={book.code} >
                        <tr className="text-gray-500 border-gray-100">
                          <td className="py-3 px-2">{book.code}</td>
                          <td className="py-3 px-2 text-center">{book.code_type} {book.type.name}</td>
                          <td className="py-3 px-2 flex flex-col text-center items-center gap-5 w-56 overflow-auto">
                            {book.book_image ? (
                              <img src={book.book_image} alt="" className="h-16 w-auto p-1 border shadow-md" />
                            ) : (
                              <img src='/assets/image/image-thumbnail.png' alt="" className="h-16 w-auto p-1 border shadow-md" />
                            )}
                            {book.title}
                          </td>
                          <td className="py-3 px-2 w-40">{book.publisher}</td>
                          <td className="py-3 px-2 w-40">{book.author}</td>
                          <td className="py-3 px-2 text-center">{book.location}</td>
                          <td className="py-3 px-2 text-center">{book.city}</td>
                          <td className="py-3 px-2 text-center">{dayjs(book.release_year).format('YYYY')}</td>
                          <td className="py-3 px-2 text-center">
                            <Buttons title={"Hapus"} variant={'outlined'} onClick={() => handleClickOpenAlertDialog(book.code)} />
                            <div className="m-2"></div>

                            <Buttons title={"Edit"} variant={'contained'} onClick={() => handleEdit(book.code)} />
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
          </div>
        </div>
      </div>

    </Default>
  )
}