import React from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import { Box, Container, Typography, Grid, Paper, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function BusinessLaw() {
    const navigate = useNavigate();
    const services = [
        { title: 'Contract Drafting', description: 'Expertly crafted contracts to protect your business interests.' },
        { title: 'Corporate Compliance', description: 'Ensuring your business adheres to all legal regulations.' },
        { title: 'Mergers & Acquisitions', description: 'Legal assistance for smooth transitions and negotiations.' },
        { title: 'Intellectual Property', description: 'Protection and enforcement of your business’s intellectual property rights.' },
    ];
    return (
        <div>
            <Navbar />
            <Container maxWidth="lg" sx={{ paddingTop: '40px', paddingBottom: '40px' }}>

                <Box sx={{ textAlign: 'center', marginBottom: '40px' }}>
                    <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Business Law Services
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                        Legal expertise to support and grow your business.
                    </Typography>
                </Box>

                <Box sx={{ marginBottom: '60px' }}>
                    <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Empowering Businesses with Legal Expertise
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', marginBottom: '20px' }}>
                        Running a business comes with unique legal challenges. Our dedicated team of business lawyers is here to provide clear and effective legal solutions, helping you focus on growth and success.
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                        From contracts to compliance, we offer tailored services designed to meet your specific business needs.
                    </Typography>
                </Box>

                <Box sx={{ marginBottom: '60px' }}>
                    <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Our Services
                    </Typography>
                    <Grid container spacing={4}>
                        {services.map((service, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <Paper sx={{ padding: '20px', textAlign: 'center', backgroundColor: '#f5f5f5' }}>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                        {service.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary', marginTop: '10px' }}>
                                        {service.description}
                                    </Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                <Box sx={{ textAlign: 'center', padding: '40px', backgroundColor: '#e3f2fd', borderRadius: '8px' }}>
                    <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Ready to Partner with Us?
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', marginBottom: '20px' }}>
                        Contact our experienced business law attorneys today for a consultation.
                    </Typography>
                    <Button variant="contained" size="medium" sx={{ backgroundColor: 'rgba(227, 153, 14, 0.9)' }}>
                        <p onClick={() => (navigate('/contact'))}> Get in Touch</p>
                    </Button>
                </Box>
            </Container>
            <Footer />
        </div >)
}

export default BusinessLaw