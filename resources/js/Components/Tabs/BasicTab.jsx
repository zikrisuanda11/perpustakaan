import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Success from '../Badges/Success';
import Warning from '../Badges/Warning';
import Error from '../Badges/Error';
import Buttons from "../Button";
import { Button } from '@mui/material';
import { router } from '@inertiajs/react';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({ profile, loans, data, setData, handleSubmit }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleDelete = (code) => {
    router.delete(`/loan/${code}`);
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="History" {...a11yProps(0)} />
          <Tab label="Profile Setting" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <table className="w-full text-left text">
          <thead className="">
            <tr className="text-gray-500 border-b border-gray-100 uppercase">
              <th className="py-3 px-2">Kode</th>
              <th className="py-3 w-56">Judul Buku</th>
              <th className="py-3">Peminjaman</th>
              <th className="py-3">Pengembalian</th>
              <th className="py-3">Status</th>
              <th className="py-3 text-center">Aksi</th>
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
                  <td className="py-3 w-56">{loan.book.title}</td>
                  <td className="py-3">{loan.loan_date}</td>
                  <td className="py-3">{loan.return_date}</td>
                  <td className="py-3">{loan.status == 'returned' ? <Success title={'Kembali'} /> : loan.status == 'borrowed' ? <Warning title={'Dipinjam'} /> : <Error title={'Tertunda'} />}</td>
                  <td className="py-3 text-center">
                    {loan.status === 'pending' ? (
                      <Button onClick={() => handleDelete(loan.code)} variant="outlined" color="error">Batalkan</Button>
                    ): null}
                  </td>
                </tr>
              </tbody>
            )
          })}
        </table>
        <div className="w-full flex justify-end gap-5 text-gray-500 mt-5">
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
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
          <div className='flex gap-5'>
            <div className='flex flex-col w-1/2'>
              <label htmlFor="name">Nama <span className="text-red-500">*</span></label>
              <input onChange={e => { setData('name', e.target.value) }} value={data.name} id="name" type="text" placeholder="Nama" className="border border-gray-200 rounded-md px-4 py-2" />
            </div>
            <div className='flex flex-col w-1/2'>
              <label htmlFor="email">Email <span className="text-red-500">*</span></label>
              <input onChange={e => { setData('email', e.target.value) }} disabled value={data.email} id="email" type="text" placeholder="Email" className="border border-gray-200 rounded-md px-4 py-2 text-gray-600 bg-gray-100 hover:cursor-not-allowed" />
            </div>
          </div>
          <div className='flex gap-5'>
            <div className='flex flex-col w-1/2'>
              <label htmlFor="division">Divisi <span className="text-red-500">*</span></label>
              <input onChange={e => { setData('division', e.target.value) }} value={data.division} id="division" type="text" placeholder="Divisi" className="border border-gray-200 rounded-md px-4 py-2" />
            </div>
            <div className='flex flex-col w-1/2'>
              <label htmlFor="position">Jabatan <span className="text-red-500">*</span></label>
              <input onChange={e => { setData('position', e.target.value) }} value={data.position} id="position" type="text" placeholder="Jabatan" className="border border-gray-200 rounded-md px-4 py-2" />
            </div>
          </div>
          <div className='flex gap-5'>
            <div className='flex flex-col w-1/2'>
              <label htmlFor="address">Alamat <span className="text-red-500">*</span></label>
              <input onChange={e => { setData('address', e.target.value) }} value={data.address} id="address" type="text" placeholder="Alamat" className="border border-gray-200 rounded-md px-4 py-2" />
            </div>
            <div className='flex flex-col w-1/2'>
              <label htmlFor="phone">No HP <span className="text-red-500">*</span></label>
              <input onChange={e => { setData('phone', e.target.value) }} value={data.phone} id="phone" type="text" placeholder="No HP" className="border border-gray-200 rounded-md px-4 py-2" />
            </div>
          </div>
          <div className="flex gap-5 justify-end">
            <div>
              <Buttons title={'Kembali'} variant={'outlined'} href={'/buku'} />
            </div>
            <div>
              <Buttons type={'submit'} title={'Simpan'} variant={'contained'} />
            </div>
          </div>
        </form>
      </CustomTabPanel>
    </Box>
  );
}