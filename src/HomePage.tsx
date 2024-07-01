import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <>
            <Box sx={{
                backgroundImage: 'url(https://png.pngtree.com/thumb_back/fh260/background/20220216/pngtree-do-tasks-to-earn-phone-bills-image_935734.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '90vh',
                width: '100%',
            }}>
                <Box  sx={{ display: "flex",flexDirection:'column', justifyContent: "center", alignItems: "center" }}>
                    <Typography variant='h3' fontFamily={'fantasy'} sx={{mt:'200px'}}>
                        Change the way you manage your
                    </Typography >
                    <Typography variant='h3' fontFamily={'fantasy'}> Task with TASKADE</Typography>
                    <Link to={"addtask"}><Button variant='contained' color="success" sx={{mt:"5px", fontSize:"20px",'&:hover': { backgroundColor: "mediumseagreen" },padding:"15px 55px " }}>Add Task</Button></Link>

                </Box>
            </Box>
        </>
    )
}

export default HomePage
