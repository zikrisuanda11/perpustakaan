import React, { useEffect } from "react";
import Default from "../../../Layouts/Default";
import toast, { Toaster } from 'react-hot-toast';
import Breadcrumbs from "../../../Components/Breadcrumbs";
import CreateEdit from "../../../Components/Member/CreateEdit";
import { router, useForm } from "@inertiajs/react";

export default function create({flash}){
  const { data, setData, post, processing, errors } = useForm({
    name: '',
    email: '',
    address: '',
    division: '',
    position: '',
    phone: '',
    password: '',
  })
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

  const handleSubmit = (e) => {
    e.preventDefault()
    post('/admin/anggota', data)
  }

  return (
    <Default>
      <Toaster position="top-right"/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Anggota</h1>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-1">
        <Breadcrumbs
          attributes={[
            { name: 'Anggota', href: '/admin/anggota' },
            { name: 'Tambah', href: '/admin/anggota/create' },
          ]}
        />
      </div>
      <CreateEdit
        setData={setData}
        handleSubmit={handleSubmit}
        data={data}
      />
    </Default>
  )
}