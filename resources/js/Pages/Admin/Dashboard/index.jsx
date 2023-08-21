import React, { useEffect, useState } from "react";
import Default from "../../../Layouts/Default";
import Breadcrumbs from "../../../Components/Breadcrumbs";
import { RadioGroup } from '@headlessui/react';
import Success from "../../../Components/Badges/Success";
import Warning from "../../../Components/Badges/Warning";
import Error from "../../../Components/Badges/Error";
import { BiBookBookmark } from 'react-icons/bi';
import { MdBookmarkAdded, MdBookmarkRemove } from 'react-icons/md';
import {FaUserFriends} from 'react-icons/fa';
import { router } from "@inertiajs/react";
import {BiPrinter} from 'react-icons/bi';
import { Button } from "@mui/material";
import MonthDailog from "../../../Components/Dialog/MonthDialog";
import toast, { Toaster } from 'react-hot-toast';

export default function index({ loans, total_books, returned, borrowed, member }) {
  const [selected, setSelected] = useState('all')
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState();

  const handleCloseDialog = () => {
    setOpen(false);
  }

  const handleSubmit = () => {
    if(date == undefined){
      toast.error('Silahkan pilih bulan')
      setOpen(false)
    }else{
      window.open(`/admin/cetak-peminjaman/${date}`, '_blank')
      setOpen(false)
    }
  }

  useEffect(() => {
    router.put('/admin/dashboard', {
      status: selected
    }, { preserveScroll: true })
  }, [selected])

  return (
    <Default>
      <Toaster />
      <MonthDailog
        onChange={setDate}
        buttonTitle="Cetak"
        open={open}
        handleCloseAlertDialog={handleCloseDialog}
        handleOnClick={handleSubmit}
        title={"Pilih Bulan"}
      />
      <div className="flex items-center justify-between">
        <div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-1">
            <Breadcrumbs
              attributes={[
                // { name: 'Buku', href: '/admin/buku' },
              ]}
            />
          </div>
        </div>
      </div>
      <div className="mx-7 my-5 flex flex-col gap-5">
        <div className="flex gap-5">
          <div className='px-4 py-3 shadow-md border rounded-md w-4/12 gap-3 flex flex-col text-sm'>
            <div><BiBookBookmark size={28} /></div>
            <div className='font-bold text-xl'>{total_books}</div>
            <div>Total Buku</div>
          </div>
          <div className='px-4 py-3 shadow-md border rounded-md w-4/12 gap-3 flex flex-col text-sm'>
            <div><MdBookmarkAdded size={28} /></div>
            <div className='font-bold text-xl'>{returned}</div>
            <div>Total Pengembalian</div>
          </div>
          <div className='px-4 py-2 shadow-md border rounded-md w-4/12 gap-3 flex flex-col text-sm'>
            <div><MdBookmarkRemove size={28} /></div>
            <div className='font-bold text-xl'>{borrowed}</div>
            <div>Total Peminjaman</div>
          </div>
          <div className='px-4 py-2 shadow-md border rounded-md w-4/12 gap-3 flex flex-col text-sm'>
            <div><FaUserFriends size={28} /></div>
            <div className='font-bold text-xl'>{member}</div>
            <div>Total Anggota</div>
          </div>
        </div>
        <div className="">
          <div className='mt-5 flex gap-5 items-center'>
            <div className='font-bold'>Status</div>
            <div className='flex gap-5 items-center'>
              <RadioGroup value={selected} onChange={setSelected}>
                <div className='flex gap-5'>
                  <div>
                    <RadioGroup.Option value="all">
                      {({ checked }) => (
                        <span className={`${checked ? 'bg-[#E8ECF4] border-blue-500' : ''} hover:cursor-pointer px-4 py-2 border-2 rounded-md `}>Semua</span>
                      )}
                    </RadioGroup.Option>
                  </div>
                  <div>
                    <RadioGroup.Option value="pending">
                      {({ checked }) => (
                        <span className={`${checked ? 'bg-[#E8ECF4] border-blue-500' : ''} hover:cursor-pointer px-4 py-2 border-2 rounded-md `}>Tertunda</span>
                      )}
                    </RadioGroup.Option>
                  </div>
                  <div>
                    <RadioGroup.Option value="borrowed">
                      {({ checked }) => (
                        <span className={`${checked ? 'bg-[#E8ECF4] border-blue-500' : ''} hover:cursor-pointer px-4 py-2 border-2 rounded-md `}>Dipinjamkan</span>
                      )}
                    </RadioGroup.Option>
                  </div>
                  <div>
                    <RadioGroup.Option value="returned">
                      {({ checked }) => (
                        <span className={`${checked ? 'bg-[#E8ECF4] border-blue-500' : ''} hover:cursor-pointer px-4 py-2 border-2 rounded-md `}>Kembali</span>
                      )}
                    </RadioGroup.Option>
                  </div>
                </div>
              </RadioGroup>
              <Button
                variant="contained"
                onClick={() => setOpen(true)}
              >
                <BiPrinter size={24}/>
              </Button>
            </div>
          </div>
          <div className="mt-5 border shadow-md rounded-xl p-5 flex flex-col gap-5">
            <table className="w-full text-left text">
              <thead className="">
                <tr className="text-gray-500 border-b border-gray-100 uppercase">
                  <th className="py-3 px-2">Kode</th>
                  <th className="py-3 px-2">Kode Buku</th>
                  <th className="py-3">Nama</th>
                  <th className="py-3">Judul Buku</th>
                  <th className="py-3">Peminjaman</th>
                  <th className="py-3">Pengembalian</th>
                  <th className="py-3">Status</th>
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
                return (
                  <tbody className="table-auto" key={loan.code} >
                    <tr className="text-gray-500 border-b border-gray-100">
                      <td className="py-3 px-2">{loan.code}</td>
                      <td className="py-3">{loan.code_book}</td>
                      <td className="py-3">{loan.user.name}</td>
                      <td className="py-3">{loan.book.title}</td>
                      <td className="py-3">{loan.loan_date}</td>
                      <td className="py-3">{loan.return_date}</td>
                      <td className="py-3">{loan.status == 'returned' ? <Success title={'Kembali'} /> : loan.status == 'borrowed' ? <Warning title={'Dipinjam'} /> : <Error title={'Tertunda'} />}</td>
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
    </Default>
  )
}