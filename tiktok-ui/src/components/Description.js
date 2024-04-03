import React from 'react';
import styles from './styles/Description.module.css';

import { Typography, Box, Link, Divider, Avatar, Grid, Button } from '@mui/material';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import StarHalfRoundedIcon from '@mui/icons-material/StarHalfRounded';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import { useState, useEffect } from 'react';

function Description() {
    const [count, setCount] = useState(0);
    const [stored, setStored] = useState('');

    useEffect(() => {
        setStored('');
    }, []);

    const handleIncrease = () => {
        setCount((prev) => prev + 1);
    };
    const handleDecrease = () => {
        if (count > 0) {
            setCount((prev) => prev - 1);
        }
    };

    return (
        <>
            <Box align="left" sx={{ ml: 2 }}>
                <Avatar
                    variant="square"
                    sx={{ width: 53, height: 26, mt: 2 }}
                    src="/images/lazadalogo.png"
                    alt="lazadalogo"
                ></Avatar>
                <Typography className={styles.typo} variant="h6">
                    iPhone 15 Pro Max - Hàng Chính Hãng VN/A
                </Typography>
                <Box className={styles.rate}>
                    <StarRateRoundedIcon fontSize="small" sx={{ color: 'orange' }}></StarRateRoundedIcon>
                    <StarRateRoundedIcon fontSize="small" sx={{ color: 'orange' }}></StarRateRoundedIcon>
                    <StarRateRoundedIcon fontSize="small" sx={{ color: 'orange' }}></StarRateRoundedIcon>
                    <StarRateRoundedIcon fontSize="small" sx={{ color: 'orange' }}></StarRateRoundedIcon>
                    <StarHalfRoundedIcon fontSize="small" sx={{ color: 'orange' }}></StarHalfRoundedIcon>
                    <Link className={styles.link} underline="none">
                        2034 đánh giá
                    </Link>
                </Box>
                <Box className={styles.brand}>
                    <Typography color="text.secondary" variant="body2">
                        Thương hiệu:{' '}
                    </Typography>
                    <Link className={styles.link} underline="none">
                        Apple
                    </Link>
                    {'|'}
                    <Link className={styles.link} underline="none">
                        Xem thêm Smartphones của Apple
                    </Link>
                </Box>
            </Box>
            <Divider></Divider>
            <Box align="left" sx={{ ml: 2 }} className={styles.price}>
                <Typography className={styles.pricetext1}>31.590.000đ</Typography>
                <Grid container spacing={1} sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Grid item variant="body1">
                        <Typography className={styles.pricetext2} color="text.secondary">
                            34.999.000đ
                        </Typography>
                    </Grid>
                    <Grid item variant="body2">
                        <Typography>-10%</Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'row', mt: 3 }}>
                    <Grid item variant="body1">
                        <Typography className={styles.promo} color="text.secondary">
                            Ưu đãi
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography className={styles.promotext1}>
                            🤑SINH NHẬT SALE XỊN - RINH DEAL GIẢM SỐC🤑
                        </Typography>
                        <Typography className={styles.promotext2}>Đơn hàng từ 31.500.000 ₫</Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'row', mt: 1 }}>
                    <Grid item variant="body1">
                        <Typography className={styles.paylater} color="text.secondary">
                            Trả góp 0%
                        </Typography>
                    </Grid>
                    <Grid item variant="body2" sx={{ display: 'flex', flexDirection: 'row' }}>
                        <CalendarMonthIcon className={styles.iconcalender}></CalendarMonthIcon>
                        <Typography className={styles.paylatertext}>
                            Trả góp trong 6 tháng, chỉ với 5.265.000 ₫ mỗi tháng
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <Divider></Divider>
            <Box align="left" sx={{ ml: 2 }}>
                <Grid
                    container
                    className={styles.categories}
                    spacing={10}
                    sx={{ display: 'flex', flexDirection: 'column' }}
                >
                    <Grid item>
                        <Typography className={styles.categoriesText1} color="text.secondary">
                            Nhóm Màu
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                            <Typography className={styles.categoriesText} color="text.secondary">
                                Dung Lượng Lưu Trữ:
                            </Typography>
                            <Box sx={{ ml: 2 }}>{stored}</Box>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row', mt: 1 }}>
                            <Box className={styles.stored}>
                                <button onClick={() => setStored('256GB')}>256GB</button>
                            </Box>
                            <Box className={styles.stored}>
                                <button onClick={() => setStored('512GB')}>512GB</button>
                            </Box>
                            <Box className={styles.stored}>
                                <button onClick={() => setStored('1TB')}>1TB</button>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item sx={{ display: 'flex', flexDirection: 'row' }}>
                        <Typography className={styles.categoriesText} color="text.secondary">
                            Số Lượng:
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                            <button className={styles.buttoncount} onClick={handleDecrease}>
                                -
                            </button>
                            <Box sx={{ ml: 2 }}>{count}</Box>
                            <button className={styles.buttoncount} onClick={handleIncrease}>
                                +
                            </button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ ml: 2, mb: 2 }}>
                <Grid container spacing={1} sx={{ mt: 2 }}>
                    <Grid item>
                        <Button variant="contained" className={styles.button1}>
                            Mua ngay
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" className={styles.button2}>
                            Thêm vào giỏ hàng
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
export default Description;
