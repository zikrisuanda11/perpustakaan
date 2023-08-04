import React from "react"
import  Button from "@mui/material/Button"

export default function Buttons({type, color, onClick, href, title, variant, size }) {
  return (
    <>
      <Button
        type={type}
        color={color}
        size={size}
        onClick={onClick}
        href={href}
        variant={variant}
        sx={{
          width: 'auto',
        }}
      >
        {title}
      </Button>
    </>
  )
}