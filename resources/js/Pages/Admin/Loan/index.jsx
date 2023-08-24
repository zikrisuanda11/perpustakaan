import React, { useEffect, useState } from "react";
import Default from "../../../Layouts/Default";
import Buttons from "../../../Components/Button";
import Breadcrumbs from "../../../Components/Breadcrumbs";
import toast, { Toaster } from 'react-hot-toast';
import { router, useForm } from "@inertiajs/react";
import AlertDialog from "../../../Components/Dialog/AlertDialog";
import Success from "../../../Components/Badges/Success";
import Warning from "../../../Components/Badges/Warning";
import Error from "../../../Components/Badges/Error";
import DateDialog from "../../../Components/Dialog/DateDialog";
import SuccessNotif from "../../../Components/Notification/Success";

export default function index({ loans, flash }) {

  const [openAlertDialogReturned, setOpenAlertDialogReturned] = useState(false);
  const [openAlertDialogAccept, setOpenAlertDialogAccept] = useState(false);
  const [openDateDialog, setOpenDateDialog] = useState(false);
  const [search, setSearch] = useState();
  const [idLoan, setIdLoan] = useState();
  const [openNotif, setOpenNotif] = useState(false);
  const { data, setData, post, processing, errors } = useForm({
    return_date: '',
  })

  const handleCloseNotif = () => {
    setOpenNotif(false);
    router.visit('/clear-flash', {
      method: 'post'
    });
  }

  const handleClickOpenAlertDialogAccept = (id) => {
    setOpenAlertDialogAccept(true);
    setIdLoan(id)
  };

  const handleOpenDateDialog = (id) => {
    setOpenDateDialog(true);
    setIdLoan(id);
  }

  const handleCloseDateDialog = () => {
    setOpenDateDialog(false);
  }

  const handleClickOpenAlertDialogReturned = (loan) => {
    setOpenAlertDialogReturned(true);
    setIdLoan(loan)
  };

  const handleCloseAlertDialog = () => {
    setOpenAlertDialogReturned(false);
    setOpenAlertDialogAccept(false);
  };

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

  const handleReturned = (loan) => {
    router.put(`/admin/peminjaman/returned/${loan.code}`, {
      code_book: loan.book.code
    });
    setOpenAlertDialogReturned(false);
    setOpenAlertDialogAccept(false);
    setOpenDateDialog(false);
  }

  const handleAccepted = (id) => {
    router.put(`/admin/peminjaman/accepted/${id}`);
    setOpenAlertDialogReturned(false);
    setOpenAlertDialogAccept(false);
    setOpenDateDialog(false);
  }

  const handleSubmitDate = () => {
    router.put(`/admin/peminjaman/${idLoan}`, data)
    setOpenAlertDialogReturned(false);
    setOpenAlertDialogAccept(false);
    setOpenDateDialog(false);
  }

  console.log(search);

  useEffect(() => {
    router.put('/admin/peminjaman', {
      search: search
    }, {
      preserveScroll: true
    })
  }, [search])

  return (
    <Default>
      <SuccessNotif
        openModal={openNotif}
        closeModal={handleCloseNotif}
        message={flash.message}
      />
      {/* <Toaster /> */}
      <DateDialog
        open={openDateDialog}
        handleCloseAlertDialog={handleCloseDateDialog}
        title={'Ubah tanggal pengembalian'}
        buttonTitle="Kembali"
        handleOnClick={handleSubmitDate}
        setData={setData}
      />
      <AlertDialog
        title={"Yakin ingin mengembalikan peminjaman?"}
        description={"Pastikan keadaan buku"}
        open={openAlertDialogReturned}
        handleCloseAlertDialog={handleCloseAlertDialog}
        buttonTitle="Kembali"
        handleOnClick={() => { handleReturned(idLoan) }}
      />
      <AlertDialog
        title={"Yakin ingin meminjamkan buku?"}
        description={"Pastikan buku tersedia"}
        open={openAlertDialogAccept}
        handleCloseAlertDialog={handleCloseAlertDialog}
        buttonTitle="Terima"
        handleOnClick={() => { handleAccepted(idLoan) }}
      />
      <div className="flex items-center justify-between">
        <div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">Peminjaman</h1>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-1">
            <Breadcrumbs
              attributes={[
                { name: 'peminjaman', href: '/admin/peminjaman' },
              ]}
            />
          </div>
        </div>
        <div className="flex items-center gap-1 text-gray-500 w-3/12 py-2 px-5 mx-7 bg-slate-100 rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <input onChange={(newValue) => setSearch(newValue.target.value)} type="text" placeholder="Search" className="focus:outline-none w-full bg-transparent  border-none appearance-none focus:border-none" />
        </div>
      </div>
      <div className=" flex flex-col">
        <div className=" overflow-x-auto ">
          <div className="inline-block min-w-full py-2 align-middle">
            <div className="mx-7 mt-5 border shadow-md rounded-xl p-5 flex flex-col gap-5 ">
              <table className="text-left table-fixed">
                <thead className="">
                  <tr className="text-gray-500 border-b border-gray-100 uppercase">
                    <th className="py-3 px-2">Kode</th>
                    <th className="py-3 px-2 text-center">Kode Buku</th>
                    <th className="py-3 px-2 text-center">Nama</th>
                    <th className="py-3 px-2 w-56">Judul Buku</th>
                    <th className="py-3 px-2 text-center">Peminjaman</th>
                    <th className="py-3 px-2 text-center">Pengembalian</th>
                    <th className="py-3 px-2 text-center">Status</th>
                    <th className="py-3 px-2 text-center">Aksi</th>
                  </tr>
                </thead>
                {loans.data == 0 && (
                  <tbody className="h-52">
                    <tr className="text-center w-full">
                      <td className="" colSpan={6}>Data kosong</td>
                    </tr>
                  </tbody>
                )}
                {loans.data.map((loan) => {
                  const dateReturnedFormatted = new Date(loan.return_date);
                  dateReturnedFormatted.setHours(0, 0, 0, 0);

                  return (
                    <tbody className=" table-auto" key={loan.code} >
                      <tr className="text-gray-500 border-b border-gray-100">
                        <td className="py-3 px-2">{loan.code}</td>
                        <td className="py-3 px-2 text-center">{loan.code_book}</td>
                        <td className="py-3 px-2 text-center">{loan.user.name}</td>
                        <td className="py-3 px-2 w-56">{loan.book.title}</td>
                        <td className="py-3 px-2 text-center">{loan.loan_date}</td>
                        <td className="py-3 px-2 text-center">{loan.return_date}</td>
                        <td className="py-3 px-2 text-center">{loan.status == 'returned' ? <Success title={'Kembali'} /> : loan.status == 'borrowed' ? <Warning title={'Dipinjam'} /> : <Error title={'Pending'} />}</td>
                        <td className="py-3 px-2 text-center">
                          {/* <BasicMenu
                        status={loan.status}
                      /> */}
                          {loan.status == 'pending' ? (
                            <Buttons title={"Terima"} variant={'outlined'} onClick={() => handleClickOpenAlertDialogAccept(loan.code)} />
                          ) : loan.status == 'borrowed' ? (
                            <Buttons title={"Kembali"} variant={'outlined'} onClick={() => handleClickOpenAlertDialogReturned(loan)} />
                          ) : null}
                          {/* <div className="m-1"></div> */}
                          {loan.status === 'returned' ? (
                            null
                          ): loan.status === 'pending' ? null : <Buttons title={"Edit"} variant={'contained'} onClick={() => handleOpenDateDialog(loan.code)} />}
                        </td>
                      </tr>
                    </tbody>
                  )
                })}
              </table>
              <div className="w-full flex justify-end gap-5 text-gray-500">
                <div>{loans.from} - {loans.to} to {loans.total}</div>
                <div className="">
                  <a href={loans.prev_page_url}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                  </a>
                </div>
                <div>
                  <a href={loans.next_page_url}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Default>
  )
}