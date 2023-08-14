import React, { useEffect, useState } from "react";
import Default from "../../../Layouts/Default";
import toast, { Toaster } from 'react-hot-toast';
import { router, useForm } from "@inertiajs/react";
import Breadcrumbs from "../../../Components/Breadcrumbs";
import CreateEdit from "../../../Components/Book/CreateEdit";

export default function create({ flash, types, book }) {
  // console.log(book);
  
  const { data, setData, post, processing, errors } = useForm({
    code: book.code,
    id_type: book.id_type,
    title: book.title,
    publisher: book.publisher,
    author: book.author,
    release_year: book.release_year,
    stock: book.stock,
    location: book.location,
    book_image: book.book_image,
  })

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
  }, [flash.message, flash.error])

  const handleSubmit = (e) => {
    e.preventDefault()
    post(`/admin/buku/${book.code}`, data)
  }

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