import { Box, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <>
        <Box sx={{
                backgroundImage: 'url(https://previews.123rf.com/images/manopjk/manopjk1711/manopjk171100023/90019226-illustrator-of-oops-404-error-page-not-found-vector-background.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '90vh',
                width: '100%',
            }}>
                <Link to={"/"}><Button variant='contained' color="inherit" sx={{ml:"340px",mt:"230px", fontSize:"20px",'&:hover': { backgroundColor: "mediumseagreen" } }}>Go to Home Page</Button></Link>

            </Box>
      
    </>
  )
}

export default PageNotFound
