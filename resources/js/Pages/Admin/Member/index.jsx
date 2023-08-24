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

export default function index({ members, flash }) {

  const [openAlerDialog, setOpenAlertDialog] = useState(false);
  const [idMember, setIdMember] = useState();
  const [search, setSearch] = useState();
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(dayjs('2023-08').format('YYYY-MM'));
  const [openNotif, setOpenNotif] = useState(false);
  console.log(flash);

  const handleCloseDialog = () => {
    setOpen(false);
  }

  const handleCloseNotif = () => {
    setOpenNotif(false);
    router.visit('/clear-flash', {
      method: 'post'
    });
  }
  
  const handleSubmit = () => {
    if(date == undefined){
      toast.error('Silahkan pilih bulan')
      setOpen(false)
    }else{
      window.open(`/admin/cetak-anggota/${date}`, '_blank')
      setOpen(false)
    }
  }

  useEffect(() => {
    router.get('/admin/anggota', {
      search: search
    }, {
      preserveState: true,
    })
  }, [search])

  const handleCloseAlertDialog = () => {
    setOpenAlertDialog(false);
  };

  // useEffect(() => {
  //   if (flash.message) {
  //     toast.success(flash.message)
  //     router.visit('/clear-flash', {
  //       method: 'post'
  //     });

  //   }
  // }, [flash.message])

  const handleDelete = (id) => {
    router.delete(`/admin/anggota/${id}`);
  }

  const handleEdit = (id) => {
    router.get(`/admin/anggota/${id}/edit`)
  }

  useEffect(() => {
    if (flash.message) {
      setOpenNotif(true)
    }
  }, [flash.message])

  return (
    <Default>
      <Success
        openModal={openNotif}
        closeModal={handleCloseNotif}
        message={flash.message}
      />
      <MonthDialog
        onChange={setDate}
        buttonTitle="Cetak"
        open={open}
        handleCloseAlertDialog={handleCloseDialog}
        handleOnClick={handleSubmit}
        title={"Pilih Bulan"}
      />
      <AlertDialog
        title={"Yakin ingin menghapus anggota?"}
        description={"Dengan menghapus data anggota data tidak dapat dikembalikan!"}
        open={openAlerDialog}
        handleCloseAlertDialog={handleCloseAlertDialog}
        handleOnClick={() => handleDelete(idMember)}
      />
      <div className="flex items-center justify-between">
        <div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">Anggota</h1>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-1">
            <Breadcrumbs
              attributes={[
                { name: 'Anggota', href: '/admin/anggota' },
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
            <Buttons title={"Tambah"} variant={'contained'} href={'/admin/anggota/create'} />
          </div>
          <Button
            variant="contained"
            onClick={() => setOpen(true)}
          >
            <BiPrinter size={24} />
          </Button>
        </div>
      </div>
      <div className="mx-7 mt-5 border shadow-md rounded-xl p-5 flex flex-col gap-5 ">
        <table className="text-left text">
          <thead className="">
            <tr className="text-gray-500 border-b border-gray-100 uppercase">
              <th className="py-3 px-3">Id</th>
              <th className="py-3 px-3 text-center">Nama</th>
              <th className="py-3 px-3">Email</th>
              <th className="py-3 px-3 truncate ...">Alamat</th>
              <th className="py-3 px-3">Divisi</th>
              <th className="py-3 px-3">Jabatan</th>
              <th className="py-3 px-3">No HP</th>
              <th className="py-3 px-3 text-center">Aksi</th>
            </tr>
          </thead>
          {members.data == 0 && (
            <tbody className="h-52">
              <tr className="text-center w-full">
                <td className="" colSpan={6}>Data kosong</td>
              </tr>
            </tbody>
          )}
          {members.data.map((member) => {
            if (member != null) {
              return (
                <tbody className=" table-auto" key={member.id} >
                  <tr className="text-gray-500 border-b border-gray-100">
                    <td className="py-3 px-3">{member.id}</td>
                    <td className="py-3 px-3 w-32 text-center ">{member.name}</td>
                    <td className="py-3 px-3 w-56">{member.email}</td>
                    <td className="py-3 px-3 w-56">{member.address}</td>
                    <td className="py-3 px-3 w-56">{member.division}</td>
                    <td className="py-3 px-3">{member.position}</td>
                    <td className="py-3 px-3">{member.phone}</td>
                    <td className="py-3 px-3 text-center">
                      {/* <Buttons title={"Hapus"} variant={'outlined'} onClick={() => handleClickOpenAlertDialog(member.id)} /> */}
                      <span className="mx-2"></span>
                      <Buttons title={"Edit"} variant={'contained'} onClick={() => handleEdit(member.id)} />
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
          <div>{members.from} - {members.to} to {members.total}</div>
          <div className="">
            <a href={members.prev_page_url}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </a>
          </div>
          <div>
            <a href={members.next_page_url}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </Default>
  )
}