import React, { useState } from 'react';
import { Typography, Container, Alert, Box, Grid, CardMedia, Link, Divider, Button, Collapse } from '@mui/material';
import styles from './styles/About.module.css';
function Product() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };
    return (
        <Box sx={{ mb: 2 }}>
            <Box sx={{ bgcolor: '#FAFAFA' }}>
                <Typography sx={{ mt: 1, ml: 2, padding: 1, fontWeight: 'bold' }} variant="body1">
                    Mô tả sản phẩm iPhone 15 Pro Max - Hàng Chính Hãng VN/A
                </Typography>
            </Box>
            <Container>
                <Alert sx={{ fontSize: '12px' }} severity="info">
                    Đây là sản phẩm được bán và xuất hóa đơn bởi Lazada.
                </Alert>
                <Grid container component="main" spacing={2} sx={{ display: 'flex', flexDirection: 'row', mt: 1 }}>
                    <Grid item xs={12} md={6} lg={6}>
                        <Typography
                            component="li"
                            paragraph={true}
                            sx={{ fontSize: '15px', fontWeight: 400 }}
                            variant="body1"
                        >
                            ĐƯỢC ĐÚC TỪ TITAN — iPhone 15 Pro Max sở hữu thiết kế titan chuẩn hàng không vũ trụ, nhẹ và
                            bền chắc với mặt sau bằng kính nhám. Mặt trước Ceramic Shield bền chắc hơn mọi mặt kính điện
                            thoại thông minh. Và có khả năng chống tia nước, chống nước và chống bụi.(1)
                        </Typography>
                        <Typography
                            component="li"
                            sx={{ fontSize: '15px', fontWeight: 400 }}
                            variant="body1"
                            paragraph={true}
                        >
                            MÀN HÌNH TIÊN TIẾN — Màn hình Super Retina XDR 6,7"(2) với ProMotion tăng tốc độ làm mới lên
                            đến 120Hz khi bạn cần đến hiệu năng đồ họa vượt trội. Dynamic Island hiển thị linh động các
                            cảnh báo và Hoạt Động Trực Tiếp. Đồng thời, với màn hình Luôn Bật, Màn Hình Khóa của bạn
                            luôn hiển thị, nên bạn thậm chí không cần chạm vào màn hình để cập nhật thông tin.
                        </Typography>
                        <Typography
                            component="li"
                            sx={{ fontSize: '15px', fontWeight: 400 }}
                            variant="body1"
                            paragraph={true}
                        >
                            CHIP A17 PRO THAY ĐỔI CUỘC CHƠI — GPU đẳng cấp Pro mang lại cảm giác sống động hơn cho game
                            mobile, với môi trường ảo phong phú và nhân vật chân thực hơn. A17 Pro cũng cực kỳ tiết kiệm
                            pin và giúp mang đến thời lượng pin dùng cả ngày tuyệt đỉnh.(3)
                        </Typography>
                        <Typography
                            component="li"
                            sx={{ fontSize: '15px', fontWeight: 400 }}
                            variant="body1"
                            paragraph={true}
                        >
                            HỆ THỐNG CAMERA PRO MẠNH MẼ — Sở hữu khung hình linh hoạt đáng kinh ngạc với 7 ống kính
                            chuyên nghiệp. Chụp ảnh có độ phân giải siêu cao với nhiều màu sắc và chi tiết hơn bằng
                            camera Chính 48MP. Và chụp ảnh cận cảnh sắc nét hơn từ khoảng cách xa hơn với camera
                            Telephoto 5x trên iPhone 15 Pro Max.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <Typography
                            component="li"
                            sx={{ fontSize: '15px', fontWeight: 400 }}
                            variant="body1"
                            paragraph={true}
                        >
                            NÚT TÁC VỤ CÓ THỂ TÙY CHỈNH — Nút Tác Vụ là cách nhanh chóng đến tính năng yêu thích của
                            bạn. Chỉ cần đặt thành một tác vụ bạn muốn, chẳng hạn chế độ Im Lặng, Camera, Ghi Âm, Phím
                            Tắt và nhiều tác vụ khác. Sau đó nhấn và giữ để khởi chạy tác vụ đó.
                        </Typography>
                        <Typography
                            component="li"
                            sx={{ fontSize: '15px', fontWeight: 400 }}
                            variant="body1"
                            paragraph={true}
                        >
                            KẾT NỐI PRO — Cổng kết nối USB-C mới cho phép bạn sạc máy Mac hoặc iPad bằng cùng cáp sạc
                            với iPhone 15 Pro Max. Với USB 3, bạn sẽ thấy bước nhảy vọt về tốc độ truyền dữ liệu.4 Và
                            bạn có thể tải xuống tập tin nhanh hơn đến 2x bằng Wi-Fi 6E.(5)
                        </Typography>
                        <Typography
                            component="li"
                            sx={{ fontSize: '15px', fontWeight: 400 }}
                            variant="body1"
                            paragraph={true}
                        >
                            CÁC TÍNH NĂNG AN TOÀN QUAN TRỌNG — Với tính năng Phát Hiện Va Chạm, iPhone có thể phát hiện
                            va chạm ô tô nghiêm trọng và gọi trợ giúp khi cần kíp. (6)
                        </Typography>
                        <Typography
                            component="li"
                            sx={{ fontSize: '15px', fontWeight: 400 }}
                            variant="body1"
                            paragraph={true}
                        >
                            ĐƯỢC THIẾT KẾ ĐỂ TẠO NÊN KHÁC BIỆT — iPhone trang bị các biện pháp bảo vệ quyền riêng tư,
                            cho bạn quyền kiểm soát dữ liệu của mình. iPhone được làm từ nhiều vật liệu tái chế hơn để
                            giảm thiểu tác động tới môi trường. Và được tích hợp những tính năng giúp iPhone dễ sử dụng
                            hơn cho tất cả mọi người.
                        </Typography>
                        <Typography
                            component="li"
                            sx={{ fontSize: '15px', fontWeight: 400 }}
                            variant="body1"
                            paragraph={true}
                        >
                            ĐI KÈM VỚI BẢO HÀNH APPLECARE — Mỗi iPhone đều được bảo hành giới hạn trong một năm và hỗ
                            trợ kỹ thuật miễn phí trong tối đa 90 ngày. Mua AppleCare+ để kéo dài thời hạn bảo hành.
                        </Typography>
                    </Grid>
                </Grid>
                <Box className={styles.blurcontainer}>
                    <CardMedia
                        component="img"
                        height="700"
                        src="/images/productintro.webp"
                        alt="Iphone 15 Pro Max"
                        className={styles.mediaimg}
                    />
                    <Box className={!open ? styles.bluroverlay : ''}></Box>
                </Box>
                <Collapse in={open}>
                    <CardMedia
                        component="img"
                        height="2100"
                        src="/images/productImg.webp"
                        alt="Iphone 15 Pro Max"
                        sx={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: '8px',
                        }}
                    />
                    <CardMedia
                        component="img"
                        height="2150"
                        src="/images/productImg1.webp"
                        alt="Iphone 15 Pro Max"
                        sx={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: '8px',
                        }}
                    />
                    <CardMedia
                        component="img"
                        height="900"
                        src="/images/productImg2.webp"
                        alt="Iphone 15 Pro Max"
                        sx={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: '8px',
                        }}
                    />
                    <CardMedia
                        component="img"
                        height="1500"
                        src="/images/productImg3.jpg"
                        alt="Iphone 15 Pro Max"
                        sx={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: '8px',
                        }}
                    />

                    <Box>
                        <Typography sx={{ mt: 1, fontWeight: 'bold' }} variant="h6">
                            iPhone 15 Pro Max
                        </Typography>
                        <Typography sx={{ mt: 1, ml: 2 }} variant="body2">
                            Nay bằng titan
                        </Typography>
                        <Typography sx={{ mt: 1, fontWeight: 'bold' }} variant="h6">
                            Tính năng nổi bật
                        </Typography>
                        <Typography component="li" variant="body1" paragraph sx={{ fontSize: '13px' }}>
                            ĐƯỢC ĐÚC TỪ TITAN — iPhone 15 Pro Max sở hữu thiết kế titan chuẩn hàng không vũ trụ, nhẹ và
                            bền chắc với mặt sau bằng kính nhám. Mặt trước Ceramic Shield bền chắc hơn mọi mặt kính điện
                            thoại thông minh. Và có khả năng chống tia nước, chống nước và chống bụi.(1)
                        </Typography>
                        <Typography component="li" variant="body1" paragraph sx={{ fontSize: '13px' }}>
                            MÀN HÌNH TIÊN TIẾN — Màn hình Super Retina XDR 6,7"(2) với ProMotion tăng tốc độ làm mới lên
                            đến 120Hz khi bạn cần đến hiệu năng đồ họa vượt trội. Dynamic Island hiển thị linh động các
                            cảnh báo và Hoạt Động Trực Tiếp. Đồng thời, với màn hình Luôn Bật, Màn Hình Khóa của bạn
                            luôn hiển thị, nên bạn thậm chí không cần chạm vào màn hình để cập nhật thông tin.
                        </Typography>
                        <Typography component="li" variant="body1" paragraph sx={{ fontSize: '13px' }}>
                            CHIP A17 PRO THAY ĐỔI CUỘC CHƠI — GPU đẳng cấp Pro mang lại cảm giác sống động hơn cho game
                            mobile, với môi trường ảo phong phú và nhân vật chân thực hơn. A17 Pro cũng cực kỳ tiết kiệm
                            pin và giúp mang đến thời lượng pin dùng cả ngày tuyệt đỉnh.(3)
                        </Typography>
                        <Typography component="li" variant="body1" paragraph sx={{ fontSize: '13px' }}>
                            HỆ THỐNG CAMERA PRO MẠNH MẼ — Sở hữu khung hình linh hoạt đáng kinh ngạc với 7 ống kính
                            chuyên nghiệp. Chụp ảnh có độ phân giải siêu cao với nhiều màu sắc và chi tiết hơn bằng
                            camera Chính 48MP. Và chụp ảnh cận cảnh sắc nét hơn từ khoảng cách xa hơn với camera
                            Telephoto 5x trên iPhone 15 Pro Max.
                        </Typography>
                        <Typography component="li" variant="body1" paragraph sx={{ fontSize: '13px' }}>
                            NÚT TÁC VỤ CÓ THỂ TÙY CHỈNH — Nút Tác Vụ là cách nhanh chóng đến tính năng yêu thích của
                            bạn. Chỉ cần đặt thành một tác vụ bạn muốn, chẳng hạn chế độ Im Lặng, Camera, Ghi Âm, Phím
                            Tắt và nhiều tác vụ khác. Sau đó nhấn và giữ để khởi chạy tác vụ đó.
                        </Typography>
                        <Typography component="li" variant="body1" paragraph sx={{ fontSize: '13px' }}>
                            KẾT NỐI PRO — Cổng kết nối USB-C mới cho phép bạn sạc máy Mac hoặc iPad bằng cùng cáp sạc
                            với iPhone 15 Pro Max. Với USB 3, bạn sẽ thấy bước nhảy vọt về tốc độ truyền dữ liệu.4 Và
                            bạn có thể tải xuống tập tin nhanh hơn đến 2x bằng Wi-Fi 6E.(5)
                        </Typography>
                        <Typography component="li" variant="body1" paragraph sx={{ fontSize: '13px' }}>
                            CÁC TÍNH NĂNG AN TOÀN QUAN TRỌNG — Với tính năng Phát Hiện Va Chạm, iPhone có thể phát hiện
                            va chạm ô tô nghiêm trọng và gọi trợ giúp khi cần kíp. (6)
                        </Typography>
                        <Typography component="li" variant="body1" paragraph sx={{ fontSize: '13px' }}>
                            ĐƯỢC THIẾT KẾ ĐỂ TẠO NÊN KHÁC BIỆT — iPhone trang bị các biện pháp bảo vệ quyền riêng tư,
                            cho bạn quyền kiểm soát dữ liệu của mình. iPhone được làm từ nhiều vật liệu tái chế hơn để
                            giảm thiểu tác động tới môi trường. Và được tích hợp những tính năng giúp iPhone dễ sử dụng
                            hơn cho tất cả mọi người.
                        </Typography>
                        <Typography component="li" variant="body1" paragraph sx={{ fontSize: '13px' }}>
                            ĐI KÈM VỚI BẢO HÀNH APPLECARE — Mỗi iPhone đều được bảo hành giới hạn trong một năm và hỗ
                            trợ kỹ thuật miễn phí trong tối đa 90 ngày. Mua AppleCare+ để kéo dài thời hạn bảo hành.
                        </Typography>
                    </Box>
                    <Box>
                        <Typography sx={{ mt: 1, fontWeight: 'bold' }} variant="h6">
                            Pháp lý
                        </Typography>
                        <Typography variant="body2" sx={{ fontSize: '15px', mt: 1 }}>
                            (1)iPhone 15, iPhone 15 Plus, iPhone 15 Pro và iPhone 15 Pro Max có khả năng chống tia nước,
                            chống nước và chống bụi. Sản phẩm đã qua kiểm nghiệm trong điều kiện phòng thí nghiệm có
                            kiểm soát đạt mức IP68 theo tiêu chuẩn IEC 60529 (chống nước ở độ sâu tối đa 6 mét trong
                            vòng tối đa 30 phút). Khả năng chống tia nước, chống nước và chống bụi không phải là các
                            điều kiện vĩnh viễn. Khả năng này có thể giảm do hao mòn thông thường. Không sạc pin khi
                            iPhone đang bị ướt. Vui lòng tham khảo hướng dẫn sử dụng để biết cách lau sạch và làm khô
                            máy. Không bảo hành sản phẩm bị hỏng do thấm chất lỏng.
                            <br />
                            (2)Màn hình có các góc bo tròn. Khi tính theo hình chữ nhật chuẩn, kích thước màn hình theo
                            đường chéo là 6,12 inch (iPhone 15 Pro, iPhone 15) hoặc 6,69 inch (iPhone 15 Pro Max, iPhone
                            15 Plus). Diện tích hiển thị thực tế nhỏ hơn. <br />
                            (3)Thời lượng pin khác nhau tùy theo cách sử dụng và cấu hình; truy cập
                            apple.com/vn/batteries để biết thêm thông tin. <br />
                            (4)Yêu cầu cáp USB 3 với tốc độ 10Gb/s để đạt tốc độ truyền nhanh hơn đến 20x trên các phiên
                            bản iPhone 15 Pro. <br />
                            (5)Wi-Fi 6E khả dụng tại các quốc gia và khu vực có hỗ trợ. <br />
                            (6)iPhone 15 và iPhone 15 Pro có thể phát hiện va chạm ô tô nghiêm trọng và gọi trợ giúp.
                            Yêu cầu kết nối mạng di động hoặc cuộc gọi Wi-Fi.
                        </Typography>
                    </Box>
                    <Box>
                        <Typography sx={{ mt: 1, fontWeight: 'bold' }} variant="h6">
                            Thông số kỹ thuật
                        </Typography>
                        <Typography variant="body2" sx={{ fontSize: '15px', mt: 1 }}>
                            Truy cập <Link underline="none">apple.com/vn/iphone/compare</Link> để xem cấu hình đầy đủ.
                        </Typography>
                    </Box>
                    <Box>
                        <Typography sx={{ mt: 1, fontWeight: 'bold' }} variant="h6">
                            Thông tin bảo hành:
                        </Typography>
                        <Typography variant="body2" sx={{ fontSize: '15px', mt: 1 }}>
                            Bảo hành: 12 tháng kể từ ngày kích hoạt sản phẩm.
                            <br />
                            Kích hoạt bảo hành tại: {'  '}
                            <Link underline="none">https://checkcoverage.apple.com/vn/en/</Link>
                        </Typography>
                    </Box>
                    <Box>
                        <Typography sx={{ mt: 1, fontWeight: 'bold' }} variant="h6">
                            Hướng dẫn kiểm tra địa điểm bảo hành gần nhất:
                        </Typography>
                        <Typography variant="body2" sx={{ fontSize: '15px', mt: 1 }}>
                            Bước 1: Truy cập vào đường link{' '}
                            <Link underline="none">https://getsupport.apple.com/?caller=grl&locale=en_VN</Link>
                            <br />
                            Bước 2: Chọn sản phẩm. <br />
                            Bước 3: Điền Apple ID, nhập mật khẩu. <br />
                            Sau khi hoàn tất, hệ thống sẽ gợi ý những trung tâm bảo hành gần nhất.
                            <br />
                        </Typography>
                    </Box>
                    <Box>
                        <Typography sx={{ mt: 1, fontWeight: 'bold' }} variant="h6">
                            Tại Việt Nam, về Chính sách bảo hành và đổi trả của Apple, "sẽ được áp dụng chung" theo các
                            điều khoản được liệt kê dưới đây:
                        </Typography>
                        <Typography sx={{ fontSize: '15px', mt: 1 }}>
                            1. Chính sách chung:
                            <Link underline="none">
                                {'  '}
                                https://www.apple.com/legal/warranty/products/warranty-rest-of-apac-vietnamese.html
                            </Link>
                            <br />
                            2. Chính sách cho phụ kiện:
                            {'  '}
                            <Link underline="none">
                                https://www.apple.com/legal/warranty/products/accessory-warranty-vietnam.html
                            </Link>
                            <br />
                            3. Các trung tâm bảo hành Apple ủy quyền tại Việt Nam:
                            <Link underline="none">
                                {'  '}
                                https://getsupport.apple.com/repair-locations?locale=vi_VN
                            </Link>
                            <br />
                            Qúy khách vui lòng đọc kỹ hướng dẫn và quy định trên các trang được Apple công bố công khai,
                            Apple Flagship Store chỉ có thể hỗ trợ theo đúng chính sách được đăng công khai của thương
                            hiệu Apple tại Việt Nam.
                            <br />
                            Bài viết tham khảo chính sách hỗ trợ của nhà phân phối tiêu biểu:
                            <Link underline="none">
                                {'  '}
                                https://synnexfpt.com/bao-hanh/chinh-sach-bao-hanh/?agency-group=1&agency-slug=san-pham-apple
                            </Link>
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 2, fontSize: '15px' }}>
                            Để thuận tiện hơn trong việc xử lý khiếu nại, đơn hàng của Brand Apple thường có giá trị
                            cao, Qúy khách mua hàng vui lòng quay lại Clip khui mở kiện hàng (khách quan nhất có thể, đủ
                            6 mặt) giúp Lazada có thêm căn cứ để làm việc với các bên và đẩy nhanh tiến độ xử lý giúp
                            Qúy khách mua hàng.
                        </Typography>
                        <Divider sx={{ mt: 2 }} />
                        <Box>
                            <Typography sx={{ mt: 1, fontWeight: 'bold' }} variant="h6">
                                Đặc tính sản phẩm iPhone 15 Pro Max - Hàng Chính Hãng VN/A
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6} md={6} lg={6}>
                                    <Box sx={{ mb: 2 }}>
                                        <Typography variant="body2" color="text.secondary">
                                            Thương hiệu
                                        </Typography>
                                        <Typography sx={{ fontSize: '14px' }}>Apple</Typography>
                                    </Box>
                                    <Box sx={{ mb: 2 }}>
                                        <Typography variant="body2" color="text.secondary">
                                            Kích thước màn hình (inch)
                                        </Typography>
                                        <Typography sx={{ fontSize: '14px' }}>6.7 inches</Typography>
                                    </Box>
                                    <Box sx={{ mb: 2 }}>
                                        <Typography variant="body2" color="text.secondary">
                                            Hệ điều hành
                                        </Typography>
                                        <Typography sx={{ fontSize: '14px' }}>iOS</Typography>
                                    </Box>
                                    <Box sx={{ mb: 2 }}>
                                        <Typography variant="body2" color="text.secondary">
                                            Bảo hành
                                        </Typography>
                                        <Typography sx={{ fontSize: '14px' }}>12 months</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={6} md={6} lg={6}>
                                    <Box sx={{ mb: 2 }}>
                                        <Typography variant="body2" color="text.secondary">
                                            SKU
                                        </Typography>
                                        <Typography sx={{ fontSize: '14px' }}>2417233670_VNAMZ-11887332527</Typography>
                                    </Box>
                                    <Box sx={{ mb: 2 }}>
                                        <Typography variant="body2" color="text.secondary">
                                            Tình trạng
                                        </Typography>
                                        <Typography sx={{ fontSize: '14px' }}>Mới</Typography>
                                    </Box>
                                    <Box sx={{ mb: 2 }}>
                                        <Typography variant="body2" color="text.secondary">
                                            Loại Bảo Hành
                                        </Typography>
                                        <Typography sx={{ fontSize: '14px' }}>Bằng Hóa đơn mua hàng</Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="body2" color="text.secondary">
                                            Delivery_Option_Instant
                                        </Typography>
                                        <Typography sx={{ fontSize: '14px' }}>Có</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Grid container spacing={5} sx={{ my: 1 }}>
                                <Grid item>
                                    <Typography variant="body2" color="text.secondary">
                                        Bộ sản phẩm gồm:
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography sx={{ fontSize: '14px' }}>iPhone 15 Pro Max, Cáp Sạc USB‑C</Typography>
                                </Grid>
                            </Grid>
                            <Divider />
                        </Box>
                    </Box>
                </Collapse>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        my: 2,
                    }}
                >
                    <Button sx={{ border: '1px solid #1976D2' }} onClick={handleOpen}>
                        {open ? 'Thu gọn' : 'Xem thêm'}
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}
export default Product;
