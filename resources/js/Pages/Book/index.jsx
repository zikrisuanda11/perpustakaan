import React, { useEffect, useState } from "react";
import Member from "../../Layouts/Member";
import Button from "@mui/material/Button";
import { router, useForm } from "@inertiajs/react";
import DateDialog from "../../Components/Dialog/DateDialog";
import toast, { Toaster } from 'react-hot-toast';

export default function Book({ books, types, flash }) {
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);
  const { data, setData, post, processing, errors } = useForm({
    code_book: '',
    return_date: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    post('/loan', data)
    setOpen(false)
  }

  const handleSelected = (value) => {
    setSelected(value)
  }

  const handleOpen = (code) => {
    setOpen(true)
    setData('code_book', code)
  }

  useEffect(() => {
    router.get('/buku', {
      type: selected
    }, {
      preserveState: true
    })
  }, [selected])

  // const handleType = (value) => {
  //   router.get('/buku', {
  //     type: value
  //   }, {
  //     // preserveScroll: true
  //   })
  //   // console.log('object');
  // }

  const handleCloseDialog = () => {
    setOpen(false)
  }

  console.log(selected);

  useEffect(() => {
    if (flash.message) {
      toast.success(flash.message)
      router.visit('/clear-flash', {
        method: 'post'
      });
    }
    if (flash.error) {
      toast.error(flash.error)
      router.visit('/clear-flash', {
        method: 'post'
      });
    }
    if (Object.keys(errors).length != 0) {
      Object.values(errors).forEach(errorMessage => {
        toast.error(errorMessage);
      });
      router.visit('/clear-flash', {
        method: 'post'
      });
    }
  }, [flash.message, flash.error, Object.keys(errors).length != 0])

  return (
    <Member>
      <Toaster />
      <DateDialog
        open={open}
        handleCloseAlertDialog={handleCloseDialog}
        title={'Pilih tanggal pengembalian'}
        buttonTitle="Pinjam"
        handleOnClick={handleSubmit}
        setData={setData}
      />
      <div className="bg-gray-100 border border-gray-100">
        <div className="flex my-10 ml-20 gap-40 ">
          <aside className="flex flex-col gap-10 w-2/12">
            <div className="flex flex-col gap-2">
              <h3 className="px-2 font-bold">Jenis Buku</h3>
              <button onClick={() => router.get('/buku')} className={`text-gray-600 text-left px-2 py-1 hover:bg-white hover:rounded-md hover:shadow-sm hover:duration-500 ${selected == null ? 'bg-white rounded-md shadow-sm' : ''}`}>Semua</button>
              {types.map((type) => {
                // console.log(type);
                return (
                  <button key={type.code} onClick={() => setSelected(type.code)} className={`text-gray-600 text-sm flex justify-between items-center text-left px-2 py-1 hover:bg-white hover:rounded-md hover:shadow-sm hover:duration-500 ${selected == type.code ? 'bg-white rounded-md shadow-sm' : ''}`}>
                    <p>{type.name.charAt(0).toUpperCase() + type.name.slice(1).toLowerCase()}</p>
                    <p>{type.books_count}</p>
                  </button>
                )
              })}
            </div>
          </aside>
          <section className="w-10/12 flex flex-wrap gap-20">
            {books.data.map((book) => (
              <div key={book.code} className="w-3/12 h-fit mx-3 px-14 py-6 rounded-md shadow-xl flex items-center justify-center bg-white relative ">
                <div className="w-6/12 absolute -left-16">
                  <img src={book.book_image ? book.book_image : '/assets/image/background_login.jpeg'} className="h-48 w-fit shadow-md" />
                </div>
                <div className="w-6/12 flex flex-col gap-2" >
                  <h3 className="text-md w-36">{book.title}</h3>
                  <p className="text-sm text-gray-500 ">By {book.author}</p>
                  <p className="text-sm text-gray-500">{book.location}</p>
                  <p className="text-sm text-gray-500 ">Tahun {book.release_year}</p>
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{
                      textTransform: 'none'
                    }}
                    onClick={() => handleOpen(book.code)}
                  >
                    Pinjam
                  </Button>
                </div>
              </div>
            ))}
            <div className="w-full flex justify-end gap-5 text-gray-500 px-16">
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
          </section>
        </div>
      </div>
    </Member>
  )
}