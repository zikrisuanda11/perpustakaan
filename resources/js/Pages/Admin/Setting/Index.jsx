import React, { useEffect, useState } from "react";
import Default from "../../../Layouts/Default";
import Breadcrumbs from "../../../Components/Breadcrumbs";
import Buttons from "../../../Components/Button";
import { router, useForm } from "@inertiajs/react";
import toast, { Toaster } from 'react-hot-toast';
import Success from "../../../Components/Notification/Success";

export default function Index({ settings, flash}) {
  const [id, setId] = useState();
  const [openNotif, setOpenNotif] = useState(false);
  const { data, setData, put, processing, errors } = useForm({
    value: ''
  });

  const handleCloseNotif = () => {
    setOpenNotif(false);
    router.visit('/clear-flash', {
      method: 'post'
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    put(`/admin/pengaturan/${id}`, data)
    // router.put(`/pengaturan/${id}`, data)
  }

  // useEffect(() => {
  //   if (flash.message) {
  //     toast.success(flash.message)
  //     router.visit('/clear-flash', {
  //       method: 'post'
  //     });
  //   }
  // }, [flash.message])
  useEffect(() => {
    if (flash.message) {
      setOpenNotif(true)
    }
  }, [flash.message])

  // console.log(data);
  return (
    <Default>
      <Success
        openModal={openNotif}
        closeModal={handleCloseNotif}
        message={flash.message}
      />
      <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">Setting</h1>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-1">
          <Breadcrumbs
            attributes={[
            ]}
          />
        </div>
        <form onSubmit={handleSubmit} className="border shadow-md mx-7 my-5 flex flex-col gap-5 py-5 rounded-md">
          <div className="flex gap-5 items-center mx-7">
            <div className="w-3/12"></div>
            <header className="w-9/12 font-medium text-2xl">General Setting</header>
          </div>
          {settings.map((setting) => (
            <div className="flex gap-5 items-center mx-7" key={setting.id}>
              <div className="w-3/12 flex justify-end">Maksimal Peminjaman</div>
              <input onChange={(value) => {setData('value', value.target.value); setId(setting.id)}} value={data.value} placeholder={settings[0].value} id="max_loans" type="number" className="w-9/12 border border-gray-200 rounded-md px-4 py-2" />
            </div>
          ))}
          <div className="flex gap-5 justify-end mx-7">
            <div>
              <Buttons title={'Kembali'} variant={'outlined'} href={'/admin/buku'} />
            </div>
            <div>
              <Buttons type={'submit'} title={'Simpan'} variant={'contained'} />
            </div>
          </div>
        </form>
      </div>
    </Default >
  )
}