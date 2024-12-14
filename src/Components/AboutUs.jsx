import React from 'react';
import { Container, Grid, Box, Typography, Button } from '@mui/material';
import AboutPhoto from '../Css/Images/About.webp';
import '../Css/AboutUs.css';
import CheckIcon from '@mui/icons-material/Check';
import BalanceIcon from '@mui/icons-material/Balance';
import { useNavigate } from 'react-router-dom';

function AboutUs() {
    const navigate = useNavigate();
    return (
        <Container sx={{ padding: { xs: 2, md: 4 } }}>
            <Box className="head" textAlign="center" mb={4} sx={{ borderBottom: '1px solid rgba(227, 153, 14, 0.9)', paddingBottom: '15px' }}>
                <Typography variant="h3" className="first" fontWeight="bold" sx={{ fontSize: { xs: '2rem', md: '3rem' } }}>
                    About
                </Typography>
                <Typography variant="h3" className="second" color="primary" fontWeight="bold" sx={{ fontSize: { xs: '2rem', md: '3rem' }, }}>
                    TrustyLaw
                </Typography>
            </Box>
            <Box className="head-icon" sx={{ borderBottom: '1px solid rgba(227, 153, 14, 0.9)', paddingBottom: '15px' }}>
                <Typography>
                    <BalanceIcon sx={{
                        fontSize: '50px',
                        borderRadius: '50%',
                        color: 'white',
                        backgroundColor: 'rgba(227, 153, 14, 0.9);',
                        padding: '10px'
                    }} />
                </Typography>
            </Box>

            <Box className="description" textAlign="center" mb={4} sx={{ marginTop: '15px' }}>
                <Typography variant="body1" sx={{ fontSize: { xs: '1rem', md: '1.2rem' } }}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                </Typography>
            </Box>

            <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={6}>
                    <img
                        src={AboutPhoto}
                        alt="About Us"
                        className="about-image"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }}>
                        Our Legacy Precedes Us
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2, fontSize: { xs: '0.9rem', md: '1rem' } }}>
                        Velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augu.
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <CheckIcon className='icon' />
                            <Typography>Expert in various fields</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <CheckIcon className='icon' />
                            <Typography>Free counseling and support</Typography>
                        </Box>
                    </Box>
                    <Button
                        variant="contained"
                        onClick={() => navigate('/about-us')}
                        sx={{
                            mt: 3,
                            backgroundColor: 'rgba(227, 153, 14, 0.9)',
                            '&:hover': {
                                backgroundColor: 'rgba(227, 153, 14, 0.7)',
                            },
                        }}
                    >
                        Learn More
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
}

export default AboutUs;
