import React, { useState } from 'react';
import Cart from '../pages/Cartpage';
import styles from './styles/Privacy.module.css';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import FontDownloadOutlinedIcon from '@mui/icons-material/FontDownloadOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import CheckIcon from '@mui/icons-material/Check';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

import {
    Typography,
    Container,
    CssBaseline,
    Box,
    Grid,
    Autocomplete,
    TextField,
    Divider,
    CardMedia,
    Link,
} from '@mui/material';

function Privacy(props) {
    const { name } = props;

    const options = [
        { label: 'Hồ Chí Minh' },
        { label: 'Hà Giang' },
        { label: 'An Giang' },
        { label: 'Bạc Liêu' },
        { label: 'Bà Rịa Vũng Tàu' },
        { label: 'Bắc Giang' },
        { label: 'Bắc Kạn' },
        { label: 'Hà Nội' },
        { label: 'Bắc Ninh' },
        { label: 'Cao Bằng' },
        { label: 'Cao Lãnh' },
    ];

    return (
        <>
            <Box sx={{ bgcolor: '#FAFAFA' }} align="left">
                <Container className={styles.main}>
                    <CssBaseline />
                    <Box>
                        <Typography className={styles.headingtext} color="text.secondary">
                            Tuỳ chọn giao hàng
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                            <Grid container spacing={2}>
                                <Grid item sx={{ mt: 2 }}>
                                    <LocationOnIcon sx={{ color: 'text.secondary' }} />
                                </Grid>
                                <Grid item>
                                    <Autocomplete
                                        options={options}
                                        getOptionLabel={(option) => option.label}
                                        sx={{ width: '19vh' }}
                                        renderInput={(params) => (
                                            <TextField {...params} label="Địa chỉ nhận hàng" variant="standard" />
                                        )}
                                    />
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'row', mt: 2 }}>
                        <Grid item>
                            <FontDownloadOutlinedIcon />
                        </Grid>
                        <Grid item>
                            <Typography>Xử lý đơn hàng bởi Lazada</Typography>
                        </Grid>
                    </Grid>
                    {/* </Grid> */}
                    <Divider></Divider>
                    <Box sx={{ display: 'flex', flexDirection: 'row', mt: 1 }}>
                        <DeliveryDiningIcon />
                        <Grid container sx={{ ml: 2 }}>
                            <Grid item>
                                <Typography variant="body1">Giao Nhanh 24H </Typography>
                            </Grid>
                            <Grid item>
                                <Typography color="text.secondary" variant="body2">
                                    Đảm bảo nhận vào Ngày mai (29 thg 3) cho đơn đặt trước 20:00. Bạn sẽ nhận được
                                    voucher trị giá 20,000đ nếu đơn bị giao trễ 5.500 ₫
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', mt: 1 }}>
                        <MoneyOffIcon />
                        <Typography variant="body2" sx={{ ml: 2 }}>
                            Không áp dụng "Thanh toán bằng tiền mặt khi nhận hàng"
                        </Typography>
                    </Box>
                    <Divider />
                    <Typography className={styles.headingtext} color="text.secondary">
                        Đổi trả và Bảo hành
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', mt: 1 }}>
                        <CheckIcon />
                        <Typography variant="body2" sx={{ ml: 2 }}>
                            100% Chính hãng
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', mt: 1 }}>
                        <ChangeCircleIcon />
                        <Typography variant="body2" sx={{ ml: 2 }}>
                            Được đổi ý
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', mt: 1 }}>
                        <LocalShippingIcon />
                        <Typography variant="body2" sx={{ ml: 2 }}>
                            30 Ngày Trả Hàng Miễn Phí
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', mt: 1 }}>
                        <ShieldOutlinedIcon />
                        <Typography variant="body2" sx={{ ml: 2 }}>
                            Bằng Hóa đơn mua hàng 12 months
                        </Typography>
                    </Box>
                    <Divider />
                    <Box sx={{ mt: 1 }}>
                        <CardMedia component="img" src="/images/QR.png" alt="QR app" sx={{ width: '100px' }} />
                        <Box sx={{ display: 'flex', flexDirection: 'row', mt: 2 }}>
                            <PhoneAndroidIcon />
                            <Typography variant="body2" sx={{ ml: 2 }}>
                                Quét mã QR để tải app
                            </Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>
            <Box sx={{ bgcolor: '#FAFAFA', mt: 1 }}>
                <Container className={styles.main} align="left">
                    <Typography className={styles.headingtext} color="text.secondary">
                        Được bán bởi
                    </Typography>
                    <Typography variant="p" sx={{ fontWeight: 'bold' }}>
                        {name}
                    </Typography>
                    <CardMedia component="img" src="/images/LzAuth.png" alt="Auth" sx={{ width: '170px' }} />
                    <Divider sx={{ mt: 2 }} />
                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                        <Grid
                            container
                            className={styles.table}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Grid item>
                                <Typography className={styles.rate} color="text.secondary">
                                    Đánh giá tích cực
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography className={styles.percent}>98%</Typography>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            className={styles.table}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Grid item>
                                <Typography color="text.secondary" className={styles.rate}>
                                    Giao đúng hạn
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography className={styles.percent}>86%</Typography>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Grid item>
                                <Typography color="text.secondary" className={styles.rate}>
                                    Tỉ lệ phản hồi
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography className={styles.percent}>100%</Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    <Divider />
                    <Box
                        className={styles.boxlink}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Link underline="none" className={styles.link}>
                            Đến gian hàng
                        </Link>
                    </Box>
                </Container>
            </Box>
        </>
    );
}
export default Privacy;
