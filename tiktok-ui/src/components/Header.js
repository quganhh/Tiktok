import React from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { Box, Grid, Typography } from '@mui/material';

function Header() {
    return (
        <Box fixed sx={{ bgcolor: 'white', height: '12vh' }}>
            <Grid container spacing={5} sx={{ mt: 1 }}>
                <Grid item md={4} lg={4}>
                    <MenuIcon />
                </Grid>
                <Grid item md={4} lg={4}>
                    <Typography variant="h5" component="h5" color="text.primary">
                        Lazada
                    </Typography>
                </Grid>
                <Grid item md={4} lg={4}>
                    <Link to="/cart">
                        <ShoppingCartOutlinedIcon />
                    </Link>
                </Grid>
            </Grid>
        </Box>
    );
}
export default Header;
