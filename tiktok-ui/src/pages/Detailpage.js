import React, { useState } from 'react';
import Description from '../components/Description';
import Img from '../components/ImgBox';
import Privacy from '../components/Privacy';
import Product from '../components/AboutProduct';
import Header from '../components/Header';
// import { useDispatch } from 'react-redux';
// import { addToCart } from '../store/cartSlice';
import { Grid, Container, CssBaseline } from '@mui/material';
function Detail(props) {
    const { name } = props;

    return (
        <Container>
            <CssBaseline />
            <Header name={name} />
            <Grid container justifyContent="center">
                <Grid item xs={12} sm={12} md={6} lg={3} sx={{ bgcolor: 'white' }}>
                    <Img />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={5} sx={{ bgcolor: 'white' }}>
                    <Description />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={4} sx={{ bgcolor: 'white' }}>
                    <Privacy name={name} />
                </Grid>
            </Grid>
            <Grid container sx={{ mt: 2, bgcolor: 'white' }} align="left">
                <Grid item xs={12} sm={12} md={12}>
                    <Product />
                </Grid>
            </Grid>
        </Container>
    );
}

export default Detail;
