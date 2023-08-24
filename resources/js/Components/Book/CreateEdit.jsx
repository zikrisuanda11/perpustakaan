import React, { useEffect, useState } from "react";
import { router, usePage } from "@inertiajs/react";
import FormDialog from "../Dialog/FormDialog";
import DatatableDialog from "../Dialog/DatatableDialog";
import ComboBox from "../Combobox";
import Buttons from "../Button";
import DatetimePicker from "../DatetimePicker";
import dayjs from "dayjs";
import toast, { Toaster } from 'react-hot-toast';
import { BookSharp } from "@mui/icons-material";

export default function CreateEdit({ handleSubmit, types, setData, book, data }) {
  const { errors } = usePage().props

  const [openFormDialog, setOpenFormDialog] = useState(false);
  const [openDatatableDialog, setOpenDatatableDialog] = useState(false);
  const [nameType, setNameType] = useState();
  const [codeType, setCodeType] = useState();
  const [preview, setPreview] = useState(null);

  let formattedTypes = types.map((type) => {
    return { label: String(type.code).padStart(3, '0') + ' ' + type.name, id: String(type.code).padStart(3, '0') }
  });

  const handleClickOpenFormDialog = () => {
    setOpenFormDialog(true);
  };

  const handleClickOpenDatatableDialog = () => {
    setOpenDatatableDialog(true);
  }

  const handleClose = () => {
    setOpenFormDialog(false);
    setOpenDatatableDialog(false);

  };

  const handleTypeSubmit = () => {
    router.post('/admin/type', {
      code: codeType,
      name: nameType
    })
    setOpenFormDialog(false);
    setOpenDatatableDialog(false);
  }

  const handleTypeDelete = (code) => {
    router.delete(`/admin/type/${code}`);
    setOpenDatatableDialog(false);
  }

  useEffect(() => {
    if (Object.keys(errors).length != 0) {
      Object.values(errors).forEach(errorMessage => {
        toast.error(errorMessage);
      });
      router.visit('/clear-flash', {
        method: 'post'
      });
    }
  }, [Object.keys(errors).length != 0])

  const handleImageChange = (e) => {

    const selectedFile = e.target.files[0];
    setData('book_image', selectedFile);

    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result);
      }

      reader.readAsDataURL(selectedFile)
    } else {
      setPreview(null)
    }
  }
  return (
    <div>
      <FormDialog
        open={openFormDialog}
        handleClose={handleClose}
        handleTypeSubmit={handleTypeSubmit}
        setNameType={setNameType}
        setCodeType={setCodeType}
        label={'Jenis Buku'}
        dialogTitle={'Tambah Jenis Buku'}
      />
      <DatatableDialog
        handleDelete={handleTypeDelete}
        data={types}
        open={openDatatableDialog}
        handleClose={handleClose}
        handleTypeSubmit={handleTypeSubmit}
        label={'Hapus Buku'}
        dialogTitle={'Hapus Jenis Buku'}
      />
      <Toaster position="top-right" />
      <form className="mx-3 p-5 flex gap-5" onSubmit={handleSubmit}>
        <div className="w-3/12 flex flex-col gap-5">
          <div className="p-5 border shadow-md rounded-xl flex flex-col gap-5">
            <h1 className="text-xl font-medium">Thumbnail</h1>
            <div className="w-full flex justify-center relative">
              <label htmlFor="book_image" className="text-gray-500 absolute right-10 -top-3 rounded-full border p-1 shadow-md bg-white hover:cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                </svg>
              </label>
              <input id="book_image" type="file" hidden onChange={handleImageChange} />
              <div className="h-36 w-36 border shadow-md rounded-md items-center justify-center flex">
                <img src={preview ? preview : book != null ? book.book_image : '/assets/image/image-thumbnail.png'} className="max-h-36" alt="" />
              </div>
            </div>
            <p className="text-gray-400 text-sm text-center">Set thumbnail buku. Format yang diterima hanya *.png, *.jpg dan *.jpeg</p>
          </div>
          <div className="p-5 border shadow-md rounded-xl flex flex-col gap-5">
            <h1 className="text-xl font-medium">Jenis Buku <span className="text-red-500">*</span></h1>
            <ComboBox types={formattedTypes} setValue={(e, newValue) => newValue ? setData('code_type', newValue.id) : null} />
            <div className="flex gap-1">
              <div className="">
                <Buttons size={'small'} title={"Hapus"} variant={'outlined'} onClick={handleClickOpenDatatableDialog} />
              </div>
              <div className="">
                <Buttons size={'small'} title={"Tambah"} variant={'contained'} onClick={handleClickOpenFormDialog} />
              </div>
            </div>
          </div>
          <div className="p-5 border shadow-md rounded-xl flex flex-col gap-5">
            <h1 className="text-xl font-medium">Tahun Rilis <span className="text-red-500">*</span></h1>
            <DatetimePicker
              value={data.release_year ? dayjs(data.release_year) : null}
              onChange={(e, newValue) => setData('release_year', dayjs(e.$d).format('YYYY-MM-DD'))}
            />
          </div>
        </div>
        <div className="py-5 px-8 w-9/12 border shadow-md rounded-xl flex flex-col gap-5 h-fit">
          <h1 className="text-xl font-medium">General</h1>
          <div className="flex gap-5">
            {book != undefined ? (
              <div className="flex flex-col gap-1 w-6/12">
                <label htmlFor="code">Kode Buku <span className="text-red-500">*</span></label>
                <input disabled value={data.code} onChange={e => { setData('code', e.target.value) }} id="code" type="text" placeholder="Kode Buku" className="border border-gray-200 rounded-md px-4 py-2" />
              </div>
            ) : (
              <div className="flex flex-col gap-1 w-6/12">
                <label htmlFor="code">Kode Buku <span className="text-red-500">*</span></label>
                <input value={data.code} onChange={e => { setData('code', e.target.value) }} id="code" type="text" placeholder="Kode Buku" className="border border-gray-200 rounded-md px-4 py-2" />
              </div>
            )}
            <div className="flex flex-col gap-1 w-6/12">
              <label htmlFor="title">Judul Buku <span className="text-red-500">*</span></label>
              <input value={data.title} onChange={e => { setData('title', e.target.value) }} id="title" type="text" placeholder="Judul Buku" className="border border-gray-200 rounded-md px-4 py-2" />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col gap-1 w-6/12">
              <label htmlFor="publisher">Penerbit <span className="text-red-500">*</span></label>
              <input value={data.publisher} onChange={e => { setData('publisher', e.target.value) }} id="publisher" type="text" placeholder="Penerbit" className="border border-gray-200 rounded-md px-4 py-2" />
            </div>
            <div className="flex flex-col gap-1 w-6/12">
              <label htmlFor="city">Kota <span className="text-red-500">*</span></label>
              <input value={data.city} onChange={e => { setData('city', e.target.value) }} id="city" type="text" placeholder="Kota" className="border border-gray-200 rounded-md px-4 py-2" />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col gap-1 w-6/12">
              <label htmlFor="author">Penulis <span className="text-red-500">*</span></label>
              <input value={data.author} onChange={e => { setData('author', e.target.value) }} id="author" type="text" placeholder="Penulis" className="border border-gray-200 rounded-md px-4 py-2" />
            </div>
            <div className="flex flex-col gap-1 w-6/12">
              <label htmlFor="location">Lokasi <span className="text-red-500">*</span></label>
              <input value={data.location} onChange={e => { setData('location', e.target.value) }} id="location" type="text" placeholder="Lokasi" className="border border-gray-200 rounded-md px-4 py-2" />
            </div>
          </div>
          <div className="flex gap-5 justify-end">
            <div>
              <Buttons title={'Kembali'} variant={'outlined'} href={'/admin/buku'} />
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