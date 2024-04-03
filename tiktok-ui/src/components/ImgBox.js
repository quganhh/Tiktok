import React from 'react';
import { Box, CardMedia } from '@mui/material';

function Img() {
    return (
        <>
            <Box sx={{ mt: 2, bgcolor: '#FAFAFA' }}>
                <CardMedia component="img" height="auto" src="/images/product_Ip15pm.png" alt="Iphone 15 Pro Max" />
            </Box>
        </>
    );
}

export default Img;
