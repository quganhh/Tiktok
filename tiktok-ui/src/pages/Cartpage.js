import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { useSelector } from 'react-redux';

import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import {
    Container,
    FormControlLabel,
    Typography,
    Checkbox,
    TextField,
    Box,
    Grid,
    CssBaseline,
    Divider,
    Button,
} from '@mui/material';

function Cart(props) {
    const { name } = props;
    const [price, setPrice] = useState(0);
    const [productnumber, setProductnumber] = useState(0);
    const [shippingFee, setShippingFee] = useState('30.000');

    const [sum, setSum] = useState(0);

    const convertPriceToNumber = (shippingFee) => {
        const numericString = shippingFee.replace(/[^\d]/g, '');

        const number = parseInt(numericString);
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    };
    useEffect(() => {
        const shipping = convertPriceToNumber(shippingFee);
        setSum(price + shipping);
    }, [price, shippingFee]);

    return (
        <Box>
            <Container>
                <CssBaseline />
                <Grid container spacing={4}>
                    <Grid item lg={8}>
                        <Box sx={{ bgcolor: 'white' }} align="left">
                            <Grid container spacing={8}>
                                <Grid item lg={10}>
                                    <FormControlLabel
                                        sx={{ ml: 2 }}
                                        control={<Checkbox />}
                                        color="text.secondary"
                                        label="Chọn sản phẩm"
                                        size="small"
                                    />
                                </Grid>
                                <Grid item lg={2}>
                                    <Button color="inherit" sx={{ fontSize: '13px', mt: '5px' }}>
                                        <DeleteOutlineOutlinedIcon />
                                        Xoá
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box sx={{ bgcolor: 'white', mt: 2 }} align="left">
                            <Grid container>
                                <Grid item lg={2}>
                                    <Checkbox sx={{ ml: 2 }} />
                                </Grid>
                                <Grid item lg={10}>
                                    <Typography variant="body1">{name}</Typography>
                                    <Divider sx={{ my: 1 }} />
                                    <Typography variant="body2">
                                        Giảm 11.000 ₫ phí vận chuyển với giao hàng Tiêu chuẩn cho đơn hàng từ 450.000 ₫
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item lg={4}>
                        <Box sx={{ bgcolor: 'white' }} align="left">
                            <Container>
                                <Typography variant="h6" color="text.secondary">
                                    Địa điểm
                                </Typography>
                                <Grid container>
                                    <Grid item sx={{ mt: 3 }}>
                                        <LocationOnOutlinedIcon />
                                    </Grid>
                                    <Grid item>
                                        <TextField
                                            id="standard-basic"
                                            label="Add Shipping address "
                                            variant="standard"
                                            sx={{ ml: 3, mb: 2 }}
                                        />
                                    </Grid>
                                </Grid>
                                <Divider />
                                <Typography variant="h6" color="text.primary">
                                    Thông tin đơn hàng
                                </Typography>
                                <Grid container spacing={10}>
                                    <Grid item lg={8}>
                                        <Typography variant="body2" color="text.secondary">
                                            Tạm tính ({productnumber}):
                                        </Typography>
                                    </Grid>
                                    <Grid item lg={4}>
                                        <Box>{price}đ</Box>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={10}>
                                    <Grid item lg={8}>
                                        <Typography variant="body2" color="text.secondary">
                                            Phí vận chuyển:
                                        </Typography>
                                    </Grid>
                                    <Grid item lg={4}>
                                        <Box>{shippingFee}đ</Box>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={1} sx={{ ml: 2, my: '50px' }}>
                                    <Grid item lg={7}>
                                        <TextField
                                            id="outlined-basic"
                                            placeholder="Mã giảm giá (Mã chỉ áp dụng 1 lần)"
                                            variant="outlined"
                                            size="small"
                                        />
                                    </Grid>
                                    <Grid item lg={5}>
                                        <Button sx={{ bgcolor: '#1A9CB7', color: 'white' }}>Áp dụng</Button>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={8}>
                                    <Grid item lg={8}>
                                        <Typography variant="body1" color="text.primary">
                                            Tổng cộng:
                                        </Typography>
                                    </Grid>
                                    <Grid item lg={4} sx={{ color: '#F57224', fontWeight: 'bold' }}>
                                        <Box>{sum}đ</Box>
                                    </Grid>
                                </Grid>
                                <Box align="right" sx={{ mt: '10px' }}>
                                    <Typography variant="body2">Đã bao gồm VAT (nếu có)</Typography>
                                </Box>
                                <Button sx={{ bgcolor: '#F57224', color: 'white', width: '100%', mt: '20px' }}>
                                    Xác nhận Giỏ hàng ({productnumber})
                                </Button>
                            </Container>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
export default Cart;
