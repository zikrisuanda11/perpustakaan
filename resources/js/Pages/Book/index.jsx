import React, { useEffect, useState } from "react";
import Member from "../../Layouts/Member";
import Button from "@mui/material/Button";
import { router, useForm } from "@inertiajs/react";
import DateDialog from "../../Components/Dialog/DateDialog";
import toast, { Toaster } from 'react-hot-toast';


// TODO buat paginationnya
export default function Book({ books, types, flash }) {
  const [selected, setSelected] = useState();
  const [open, setOpen] = useState(false);
  const { data, setData, post, processing, errors } = useForm({
    code_book: '',
    return_date: '',
  })
  console.log(data);

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
    router.put('/buku', {
      id_type: selected
    }, { preserveScroll: true })
  }, [selected])

  const handleCloseDialog = () => {
    setOpen(false)
  }

  // console.log(errors);

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
    if(Object.keys(errors).length != 0){
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
              <button onClick={() => handleSelected(null)} className={`text-left px-2 py-1 hover:bg-white hover:rounded-md hover:shadow-sm hover:duration-500 ${selected == null ? 'bg-white rounded-md shadow-sm' : ''}`}>Semua</button>
              {types.map((type) => (
                <button key={type.id} value={type.id} onClick={(value) => handleSelected(value.target.value)} className={`text-left px-2 py-1 hover:bg-white hover:rounded-md hover:shadow-sm hover:duration-500 ${selected == type.id ? 'bg-white rounded-md shadow-sm' : ''}`}>{type.name}</button>
              ))}
            </div>
          </aside>
          <section className="w-10/12 flex flex-wrap gap-20">
            {books.data.map((book) => (
              <div key={book.code} className="w-3/12 h-60 ml-6 rounded-md shadow-xl flex items-center justify-center bg-white relative pl-8">
                <div className="w-6/12 absolute -left-16">
                  <img src={book.book_image ? book.book_image : '/assets/image/background_login.jpeg' } className="h-48 w-fit shadow-md" />
                </div>
                <div className="w-6/12 flex flex-col gap-2" >
                  <h3 className="text-2xl">{book.title}</h3>
                  <p className="text-sm text-gray-500 ">By {book.author}</p>
                  <p className="text-sm text-gray-500">{book.location}</p>
                  <p className="text-sm text-gray-500 ">Tersisa {book.stock}</p>
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
          </section>
        </div>
      </div>
    </Member>
  )
}