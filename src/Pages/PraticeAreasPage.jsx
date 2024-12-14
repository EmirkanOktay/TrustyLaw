import { Box, Container, Typography, Grid } from '@mui/material';
import React from 'react';
import GavelIcon from '@mui/icons-material/Gavel';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import BalanceIcon from '@mui/icons-material/Balance';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import '../Css/PraticeAreas.css'
import { useNavigate } from 'react-router-dom';

function PraticeAreasPage() {
    const navigate = useNavigate();
    return (
        <div className="practice-areas-head" style={{
            backgroundColor: '#f9f9f9'
        }}>
            <Navbar />
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    padding: '20px',
                }}
            >
                <Box mb={2} sx={{ borderBottom: '1px solid rgba(227, 153, 14, 0.9)', paddingBottom: '15px' }}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                        Our Practice Areas
                    </Typography>
                </Box>

                <Box sx={{ borderBottom: '1px solid rgba(227, 153, 14, 0.9)', paddingBottom: '25px', width: '30%' }}>
                    <GavelIcon
                        sx={{
                            fontSize: '50px',
                            color: 'white',
                            backgroundColor: 'rgba(227, 153, 14, 0.9)',
                            padding: '10px',
                            borderRadius: '50%',
                        }}
                    />
                </Box>

                <Box mb={4} sx={{ textAlign: 'center', paddingTop: '25px' }}>
                    <Typography sx={{ width: { xs: '100%', md: '70%' }, margin: '0 auto' }}>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                    </Typography>
                </Box>

                <Grid container spacing={3}>
                    <Grid item xs={12} md={4}>
                        <Box className="box">
                            <FamilyRestroomIcon className="icon" />
                            <h2>Family Law</h2>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Typography>
                            <Typography className="link">
                                <p onClick={() => navigate('/Pratice-Areas/Family-law')}>Read More</p>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box className="box">
                            <BalanceIcon className="icon" />
                            <h2>Criminal Law</h2>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Typography>
                            <Typography
                                className="link">
                                <p onClick={() => navigate('/Pratice-Areas/Criminal-law')}>Read More</p>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box className="box">
                            <BusinessCenterIcon className="icon" />
                            <h2>Business Law</h2>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Typography>
                            <Typography className="link" >
                                <p onClick={() => navigate('/Pratice-Areas/Business-law')}>Read More</p>
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </div >
    )
}

export default PraticeAreasPage