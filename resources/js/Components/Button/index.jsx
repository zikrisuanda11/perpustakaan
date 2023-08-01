import React from "react"
import { Button } from "@mui/material"

export default function Buttons({ title }) {
  return (
    <>
      <Button
        variant="contained"
        sx={{
          width: 'auto'
        }}
      >{title}</Button>
    </>
  )
}