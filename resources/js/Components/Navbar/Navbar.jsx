import { router, usePage } from "@inertiajs/react";
import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import BasicMenu from "../Menu/BasicMenu";
// import Button from '@mui/material-next/Button';
import Button from '@mui/material/Button';

export default function Navbar() {
  const { url } = usePage();
  const { auth } = usePage().props;
  const handleLogout = () => {
    router.post('/logout');
  }

  const navigations = [
    { name: 'Home', href: '/', active: url === '/', },
    { name: 'Buku', href: '/buku', active: url === '/buku', },
    // { name: 'Member', href: '/member', active: url === '/member', },
    // { name: 'Informasi', href: '/informasi', active: url === '/informasi', }
  ]

  return (
    <nav className="font-rubik flex justify-between mx-20 pt-7">
      <a href="/">
        <img src="/assets/Logo/logo.png" alt="" className="h-12 " />
      </a>
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
          <div className="flex gap-5">
            <Button
              href="/register"
              variant="outlined"
              size="large"
              sx={{
                textTransform: 'none',
                // background: 'white',
                // '&:hover': {
                //   backgroundColor: '#eeeeee',
                // },
                color: 'white'
              }}
            >
              Register
            </Button>
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
                color: '#11418B'
              }}
            >
              Log in
            </Button>
          </div>
          // <a href="/login" className="px-10 py-2 bg-white rounded-3xl font-medium text-secondary border-white">Log in</a>
        )}
      </div>
    </nav>
  )
}