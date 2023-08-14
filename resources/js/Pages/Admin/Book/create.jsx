import React, { useEffect, useState } from "react";
import Default from "../../../Layouts/Default";
import toast, { Toaster } from 'react-hot-toast';
import { router, useForm } from "@inertiajs/react";
import Breadcrumbs from "../../../Components/Breadcrumbs";
import CreateEdit from "../../../Components/Book/CreateEdit";

export default function create({ flash, types }) {
  
  const { data, setData, post, processing, errors } = useForm({
    code: '',
    id_type: '',
    title: '',
    publisher: '',
    author: '',
    release_year: '',
    stock: '',
    location: '',
    book_image: '',
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
    post('/admin/buku', data)
  }

  return (
    <Default>
      <Toaster position="top-right"/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Buku</h1>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-1">
        <Breadcrumbs
          attributes={[
            { name: 'Buku', href: '/admin/buku' },
            { name: 'Tambah', href: '/admin/buku/create' },
          ]}
        />
      </div>
      <CreateEdit
        types={types}
        setData={setData}
        handleSubmit={handleSubmit}
        data={data}
      />
    </Default>
  )
}