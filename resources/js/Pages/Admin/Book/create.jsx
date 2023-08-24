import React, { useEffect, useState } from "react";
import Default from "../../../Layouts/Default";
import toast, { Toaster } from 'react-hot-toast';
import { router, useForm } from "@inertiajs/react";
import Breadcrumbs from "../../../Components/Breadcrumbs";
import CreateEdit from "../../../Components/Book/CreateEdit";
import Success from "../../../Components/Notification/Success";

export default function create({ flash, types }) {
  const [openNotif, setOpenNotif] = useState(false);
  
  const { data, setData, post, processing, errors } = useForm({
    code: '',
    code_type: '',
    title: '',
    publisher: '',
    author: '',
    release_year: '',
    stock: '',
    location: '',
    book_image: '',
    city: ''
  })

  const handleCloseNotif = () => {
    setOpenNotif(false);
    router.visit('/clear-flash', {
      method: 'post'
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    post('/admin/buku', data)
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