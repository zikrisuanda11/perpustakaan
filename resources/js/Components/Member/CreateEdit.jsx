import React, { useState } from "react";
import { router } from "@inertiajs/react";
import FormDialog from "../Dialog/FormDialog";
import DatatableDialog from "../Dialog/DatatableDialog";
import ComboBox from "../Combobox";
import Buttons from "../Button";
import DatetimePicker from "../DatetimePicker";
import dayjs from "dayjs";
import TooltipBasic from "../Tooltip";

export default function CreateEdit({ handleSubmit, setData, member, data }) {
  // console.log(data);

  return (
    <div>
      <form className="mx-3 p-5 flex gap-5" onSubmit={handleSubmit}>
        <div className="py-5 px-8 w-full border shadow-md rounded-xl flex flex-col gap-5 h-fit">
          <h1 className="text-xl font-medium">General</h1>
          <div className="flex gap-5">
            <div className="flex flex-col gap-1 w-6/12">
              <label htmlFor="id">ID <span className="text-red-500">*</span></label>
              <input value={data.id} onChange={e => { setData('id', e.target.value) }} id="id" type="text" placeholder="ID" className="border border-gray-200 rounded-md px-4 py-2" />
            </div>
            <div className="flex flex-col gap-1 w-6/12">
              <label htmlFor="name">Nama <span className="text-red-500">*</span></label>
              <input value={data.name} onChange={e => { setData('name', e.target.value) }} id="name" type="text" placeholder="Nama" className="border border-gray-200 rounded-md px-4 py-2" />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col gap-1 w-6/12">
              <label htmlFor="email">Email <span className="text-red-500">*</span></label>
              <input value={data.email} onChange={e => { setData('email', e.target.value) }} id="email" type="email" placeholder="Email" className="border border-gray-200 rounded-md px-4 py-2" />
            </div>
            <div className="flex flex-col gap-1 w-6/12">
              <label htmlFor="password" className="flex gap-1">
                <p>Password</p>
                <span className="text-red-500">*</span>
                {member && (
                  <span className="hover:cursor-pointer">
                    <TooltipBasic
                      message={'Kosongkan jika tidak ingin mengganti password'}
                    />
                  </span>
                )}
              </label>
              <input value={data.password} onChange={e => { setData('password', e.target.value) }} id="password" type="password" placeholder="Password" className="border border-gray-200 rounded-md px-4 py-2" />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col gap-1 w-6/12">
              <label htmlFor="division">Divisi</label>
              {/* {console.log(data.division)} */}
              <input value={data.division} onChange={e => { setData('division', e.target.value) }} id="division" type="text" placeholder="Divisi" className="border border-gray-200 rounded-md px-4 py-2" />
            </div>
            <div className="flex flex-col gap-1 w-6/12">
              <label htmlFor="position">Jabatan </label>
              <input value={data.position} onChange={e => { setData('position', e.target.value) }} id="position" type="text" placeholder="Jabatan" className="border border-gray-200 rounded-md px-4 py-2" />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col gap-1 w-6/12">
              <label htmlFor="phone">No HP </label>
              <input value={data.phone} onChange={e => { setData('phone', e.target.value) }} id="phone" type="number" placeholder="No HP" className="border border-gray-200 rounded-md px-4 py-2" />
            </div>
            <div className="flex flex-col gap-1 w-6/12">
              <label htmlFor="address">Alamat </label>
              <input value={data.address} onChange={e => { setData('address', e.target.value) }} id="address" type="text" placeholder="Alamat" className="border border-gray-200 rounded-md px-4 py-2" />
            </div>
          </div>
          <div className="flex gap-5 justify-end">
            <div>
              <Buttons title={'Kembali'} variant={'outlined'} href={'/admin/anggota'} />
            </div>
            <div>
              <Buttons type={'submit'} title={'Simpan'} variant={'contained'} />
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}