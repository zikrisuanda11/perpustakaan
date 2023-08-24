import React, { useEffect, useState } from "react";
import Default from "../../../Layouts/Default";
import toast, { Toaster } from 'react-hot-toast';
import { router, useForm } from "@inertiajs/react";
import Breadcrumbs from "../../../Components/Breadcrumbs";
import CreateEdit from "../../../Components/Book/CreateEdit";
import Success from "../../../Components/Notification/Success";

export default function create({ flash, types, book }) {
  const [openNotif, setOpenNotif] = useState(false);
  
  const { data, setData, post, processing, errors } = useForm({
    code: book.code,
    code_type: book.code_type,
    title: book.title,
    publisher: book.publisher,
    author: book.author,
    release_year: book.release_year,
    stock: book.stock,
    location: book.location,
    book_image: book.book_image,
    city: book.city
  })

  const handleCloseNotif = () => {
    setOpenNotif(false);
    router.visit('/clear-flash', {
      method: 'post'
    });
  }

  useEffect(() => {
    if (flash.message) {
      setOpenNotif(true)
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

  const handleSubmit = (e) => {
    e.preventDefault()
    post(`/admin/buku/${book.code}`, data)
  }

  return (
    <Default>
      <Success
        openModal={openNotif}
        closeModal={handleCloseNotif}
        message={flash.message}
      />
      <Toaster position="top-right"/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Buku</h1>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-1">
        <Breadcrumbs
          attributes={[
            { name: 'Buku', href: '/admin/buku' },
            { name: 'Edit', href: `/admin/buku/${book.id}/edit` },
          ]}
        />
      </div>
      <CreateEdit
        types={types}
        setData={setData}
        handleSubmit={handleSubmit}
        book={book}
        data={data}
      />
    </Default>
  )
}