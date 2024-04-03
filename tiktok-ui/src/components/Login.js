import React from 'react';
import { Box, Container, Button, Link, CssBaseline, Grid, Typography, TextField, Autocomplete } from '@mui/material';

function Login() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
    };

    const sex = [
        {
            label: 'Male',
        },
        {
            label: 'Female',
        },
    ];
    return (
        <>
            <CssBaseline />
            <Grid
                container
                spacing={2}
                sx={{
                    height: '100vh',
                    mt: 0,
                    bgcolor: 'palette',
                    backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <Grid
                    item
                    lg={12}
                    component="paper"
                    elevation={6}
                    square
                    sx={{
                        display: 'flex',
                        // flexDirection: 'column',
                        flexFlow: 'column no-wrap',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Box
                        sx={{
                            my: 20,
                            // mx: 4,
                            alignItems: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                            Sign-in
                        </Typography>
                        <Box component="form" noValidate onCLick={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                placeholder="Email address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                sx={{ bgcolor: 'white' }}
                            ></TextField>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="password"
                                placeholder="Password"
                                name="password"
                                autoComplete="password"
                                sx={{ bgcolor: 'white' }}
                            ></TextField>
                            <Autocomplete
                                autoHighlight
                                id="country-select-demo"
                                options={sex}
                                sx={{ width: 300, bgcolor: 'white', mt: 2 }}
                                renderInput={(params) => <TextField {...params} placeholder="Sexual" />}
                            ></Autocomplete>
                            <Button
                                fullWidth
                                type="submit"
                                variant="contained"
                                sx={{ mt: 3, mb: 2, borderRadius: 5, bgcolor: 'black' }}
                            >
                                Sign-in
                            </Button>
                            <Link
                                color="text.primary"
                                href="https://www.facebook.com/login/identify/?ctx=recover&ars=facebook_login&from_login_screen=0"
                                sx={{ fontWeight: 'bold' }}
                            >
                                Forget your password?
                            </Link>
                            <Typography variant="body2" color="text.secondary" align="center">
                                {'Copyright © '}
                                <Link color="inherit" href="https://mui.com/">
                                    Future Co-OP
                                </Link>{' '}
                                {new Date().getFullYear()}
                                {'.'}
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}
export default Login;
