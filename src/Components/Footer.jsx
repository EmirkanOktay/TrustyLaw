import React from 'react';
import { Box, Container, Typography, Grid, IconButton, Button } from '@mui/material';
import Logo from '../Css/Images/Logo.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import '../Css/Footer.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailIcon from '@mui/icons-material/Mail';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useNavigate } from 'react-router-dom';

function Footer() {
    const navItems = ['Home', 'About Us', 'Contact', 'Practice Areas'];
    const navigate = useNavigate();
    return (
        <Box sx={{ backgroundColor: '#1e1e1e', color: 'white', py: 4, display: 'flex' }}>
            <Container>
                <Grid container spacing={4} direction="row" sx={{ borderBottom: "1px solid rgba(227, 153, 14, 0.9)", paddingBottom: '10px' }}>
                    <Grid item lg={3} md={6} sm={12}>
                        <Box sx={{ mb: 1 }}>
                            <img src={Logo} alt="Logo" style={{ width: '35%' }} />
                        </Box>
                        <Typography variant="body2" sx={{ mb: 2, maxWidth: '290px', marginTop: '-30px' }}>
                            Velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue.
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                            <IconButton color="inherit" aria-label="Instagram">
                                <InstagramIcon className='icon-footer' />
                            </IconButton>
                            <IconButton color="inherit" aria-label="Facebook">
                                <FacebookIcon className='icon-footer' />
                            </IconButton>
                            <IconButton color="inherit" aria-label="X">
                                <XIcon className='icon-footer' />
                            </IconButton>
                        </Box>
                    </Grid>

                    <Grid item lg={3} md={6} sm={12}>
                        <Typography>
                            <h2 style={{ borderBottom: '1px solid rgba(227, 153, 14, 0.9)', width: '70%' }}>Get in Touch</h2>
                        </Typography>
                        <Typography sx={{ width: '70%', fontSize: '15px' }}>
                            <IconButton color="inherit" aria-label="Location">
                                <LocationOnIcon />
                            </IconButton>
                            <span> Plot 596 Independence Avenue
                                Central Business District, Abuja</span>
                        </Typography>
                        <Typography sx={{ width: '75%', fontSize: '15px' }}>
                            <IconButton color="inherit" aria-label="Phone">
                                <PhoneAndroidIcon />
                            </IconButton>
                            <span> +234 900 234 5675</span>
                        </Typography>
                        <Typography sx={{ width: '75%', fontSize: '15px' }}>
                            <IconButton color="inherit" aria-label="Mail">
                                <MailIcon />
                            </IconButton>
                            <span>legal@trustylaw.com </span>
                        </Typography>
                        <Typography sx={{ width: '75%', fontSize: '15px' }}>
                            <IconButton color="inherit" aria-label="Location">
                                <AccessTimeIcon />
                            </IconButton>
                            <span>Mon-Sat </span>
                        </Typography>
                    </Grid>

                    <Grid item lg={3} md={6} sm={12}>
                        <Typography>
                            <h2 style={{ borderBottom: '1px solid rgba(227, 153, 14, 0.9)', width: '70%' }}>Newsletter</h2>
                        </Typography>
                        <Typography sx={{ width: '70%', fontSize: '15px' }}>
                            <span>Signup for our newsletter to get the latest news, updates and special offers in your inbox.</span>
                        </Typography>
                        <Typography sx={{ marginTop: '20px' }}>
                            <input type="text" placeholder='Enter Your Mail' style={{ height: '45px' }} />
                            <input type="button" value={"Submit"} style={{
                                height: '49px', color: 'white', width: '75px',
                                backgroundColor: ' rgba(227, 153, 14, 0.9)'
                            }} />
                        </Typography>
                    </Grid>

                    <Grid item lg={3} md={6} sm={12}>
                        <Typography>
                            <h2 style={{
                                borderBottom: '1px solid rgba(227, 153, 14, 0.9)',
                                width: '70%',
                                fontSize: { md: '14px' }
                            }}>Quick Links</h2>
                        </Typography>
                        {navItems.map((item, index) => (
                            <Typography
                                key={index}
                                className='quick-links'
                                sx={{
                                    width: '75%',
                                    fontSize: { xs: '14px', sm: '15px' },
                                    display: 'flex',
                                    alignItems: 'center',
                                    whiteSpace: 'nowrap',
                                }}
                            >
                                <IconButton color="inherit" aria-label="Phone">
                                    <ArrowRightIcon />
                                </IconButton>
                                <span
                                    onClick={() => navigate(`/${item.replace(/\s+/g, '-').toLowerCase()}`)}
                                >
                                    {item}
                                </span>
                            </Typography>
                        ))}

                    </Grid>
                </Grid>
                <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '30px' }}>
                    <Typography>
                        Trusty Law © All Rights Reserved
                    </Typography>
                </Grid>
            </Container>
        </Box>
    );
}

export default Footer;
