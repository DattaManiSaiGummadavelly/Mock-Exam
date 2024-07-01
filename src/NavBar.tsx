import { AppBar, Typography } from '@mui/material'
import React from 'react'
import {  Outlet } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <AppBar sx={{ paddingBottom: "10px", bgcolor:"black" }} position="static">
                <Typography variant='h4' sx={{ mt: "10px", ml: "70px" }} >
                    Taskade
                </Typography>
            </AppBar>
            <Outlet />
        </>
    )
}

export default NavBar
