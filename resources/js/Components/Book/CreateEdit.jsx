import React, {useState} from "react";
import { router } from "@inertiajs/react";
import FormDialog from "../Dialog/FormDialog";
import DatatableDialog from "../Dialog/DatatableDialog";
import ComboBox from "../Combobox";
import Buttons from "../Button";
import DatetimePicker from "../DatetimePicker";
import dayjs from "dayjs";

export default function CreateEdit({ handleSubmit, types, setData, book, data }) {
  const [openFormDialog, setOpenFormDialog] = useState(false);
  const [openDatatableDialog, setOpenDatatableDialog] = useState(false);
  const [typeValue, setTypeValue] = useState();
  const [preview, setPreview] = useState(null);
  console.log(preview);

  let formattedTypes = types.map((type) => {
    return { label: type.name, id: type.id }
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
      name: typeValue
    })
  }

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
        setTypeValue={setTypeValue}
        label={'Jenis Buku'}
        dialogTitle={'Tambah Jenis Buku'}
      />
      <DatatableDialog
        data={types}
        open={openDatatableDialog}
        handleClose={handleClose}
        handleTypeSubmit={handleTypeSubmit}
        label={'Hapus Buku'}
        dialogTitle={'Hapus Jenis Buku'}
      />
      <form className="mx-3 p-5 flex gap-5" onSubmit={handleSubmit}>
        <div className="w-3/12 flex flex-col gap-5">
          <div className="p-5 border shadow-md rounded-xl flex flex-col gap-5">
            <h1 className="text-xl font-medium">Thumbnail <span className="text-red-500">*</span></h1>
            <div className="w-full flex justify-center relative">
              <label htmlFor="book_image" className="text-gray-500 absolute right-10 -top-3 rounded-full border p-1 shadow-md bg-white hover:cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                </svg>
              </label>
              <input id="book_image" type="file" hidden onChange={handleImageChange} />
              <div className="h-36 w-36 border shadow-md rounded-md items-center justify-center flex">               
                <img src={preview ? preview : book != null ? book.book_image: '/assets/image/image-thumbnail.png'} className="max-h-36" alt="" />
              </div>
            </div>
            <p className="text-gray-400 text-sm text-center">Set thumbnail buku. Format yang diterima hanya *.png, *.jpg dan *.jpeg</p>
          </div>
          <div className="p-5 border shadow-md rounded-xl flex flex-col gap-5">
            <h1 className="text-xl font-medium">Jenis Buku <span className="text-red-500">*</span></h1>
            <ComboBox types={formattedTypes} setValue={(e, newValue) => newValue ? setData('id_type', newValue.id) : null} />
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
            <div className="flex flex-col gap-1 w-6/12">
              <label htmlFor="title">Judul Buku <span className="text-red-500">*</span></label>
              <input value={data.title} onChange={e => { setData('title', e.target.value) }} id="title" type="text" placeholder="Judul Buku" className="border border-gray-200 rounded-md px-4 py-2" />
            </div>
            <div className="flex flex-col gap-1 w-6/12">
              <label htmlFor="author">Penulis <span className="text-red-500">*</span></label>
              <input value={data.author} onChange={e => { setData('author', e.target.value) }} id="author" type="text" placeholder="Penulis" className="border border-gray-200 rounded-md px-4 py-2" />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col gap-1 w-6/12">
              <label htmlFor="publisher">Penerbit <span className="text-red-500">*</span></label>
              <input value={data.publisher} onChange={e => { setData('publisher', e.target.value) }} id="publisher" type="text" placeholder="Penerbit" className="border border-gray-200 rounded-md px-4 py-2" />
            </div>
            <div className="flex flex-col gap-1 w-6/12">
              <label htmlFor="stock">Stok <span className="text-red-500">*</span></label>
              <input value={data.stock} onChange={e => { setData('stock', e.target.value) }} id="stock" type="number" placeholder="Stock" className="border border-gray-200 rounded-md px-4 py-2" />
            </div>
          </div>
          <div className="flex gap-5">
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