import React, { useEffect } from "react";
import Footer from "../../Components/Footer/Footer";
import { router, useForm, usePage } from "@inertiajs/react";
import { Avatar } from "@mui/material";
import BasicMenu from "../../Components/Menu/BasicMenu";
import Button from '@mui/material-next/Button';
import BasicTabs from '../../Components/Tabs/BasicTab';
import toast, { Toaster } from 'react-hot-toast';

export default function Index({ loans, profile, flash }) {
  const { url } = usePage();
  const { auth } = usePage().props;
  const handleLogout = () => {
    router.post('/logout');
  }

  const { data, setData, put, processing, errors } = useForm({
    name: profile.name,
    email: profile.email,
    address: profile.address,
    no_ktp: profile.no_ktp,
    phone: profile.phone,
  })

  const handleSubmit = () => {
    put(`/profile/${profile.id}`, data)
  }

  const navigations = [
    { name: 'Home', href: '/', active: url === '/', },
    { name: 'Buku', href: '/buku', active: url === '/buku', },
    { name: 'Member', href: '/member', active: url === '/member', },
    { name: 'Informasi', href: '/informasi', active: url === '/informasi', }
  ]

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

  return (
    <>
      <Toaster position="top-right" />
      <div className="px-20 py-5 bg-[url('/public/assets/image/nav_bg.png')] bg-no-repeat bg-right-top shadow-md">
        <nav className="font-rubik flex justify-between">
          <img src="/assets/Logo/logo.png" alt="" className="h-12 " />
          <div className="flex gap-10 items-center">
            <div className="flex gap-10 text-white font-medium">
              {navigations.map((navigation, idx) => (
                <a
                  key={idx}
                  href={navigation.href}
                  className={navigation.active ? 'border-b-2 pb-1' : ''}
                >
                  {navigation.name}
                </a>
              ))}
              {/* <a href="/" className="border-b-2 pb-1">Home</a>
            <a href="/buku">Buku</a>
            <a href="#">Member</a>
            <a href="#">Informasi</a> */}
            </div>
            {Object.keys(auth).length != 0 ? (
              <BasicMenu
                handleLogout={handleLogout}
              />
            ) : (
              <Button
                href="/login"
                variant="outlined"
                size="large"
                sx={{
                  textTransform: 'none',
                  background: 'white',
                  '&:hover': {
                    backgroundColor: '#eeeeee',
                  },
                  color: 'blue'
                }}
              >
                Log in
              </Button>
              // <a href="/login" className="px-10 py-2 bg-white rounded-3xl font-medium text-secondary border-white">Log in</a>
            )}
          </div>
        </nav>
      </div >
      <div className="h-fit flex justify-center mt-24 mb-36">
        <div className="border shadow-md w-8/12">
          <BasicTabs
            handleSubmit={handleSubmit}
            data={data}
            setData={setData}
            loans={loans}
            profile={profile}
          />
        </div>
      </div>
      <Footer />
    </>
  )
}