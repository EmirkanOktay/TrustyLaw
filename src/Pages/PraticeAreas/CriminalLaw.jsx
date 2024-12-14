import React from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import { Box, Container, Typography, Grid, Paper, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function CriminalLaw() {
    const navigate = useNavigate();
    const services = [
        { title: 'Defense Strategy', description: 'Comprehensive legal defense tailored to your case.' },
        { title: 'Bail Hearings', description: 'Assistance in securing bail and managing court proceedings.' },
        { title: 'Appeals', description: 'Expert representation in criminal appeals to overturn convictions.' },
        { title: 'Fraud Cases', description: 'Legal defense for fraud and white-collar crime accusations.' },
    ];
    return (
        <div>
            <Navbar />
            <Container maxWidth="lg" sx={{ paddingTop: '40px', paddingBottom: '40px' }}>

                <Box sx={{ textAlign: 'center', marginBottom: '40px' }}>
                    <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Criminal Law Services
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                        Dedicated to protecting your rights and delivering justice.
                    </Typography>
                </Box>

                <Box sx={{ marginBottom: '60px' }}>
                    <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Expert Criminal Defense
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', marginBottom: '20px' }}>
                        Facing criminal charges can be an overwhelming experience. Our experienced attorneys are here to guide you through the legal process with precision and care.
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                        From the initial investigation to courtroom representation, we work tirelessly to secure the best possible outcome for your case.
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
                        Need Legal Assistance?
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', marginBottom: '20px' }}>
                        Reach out to our skilled criminal defense attorneys today for a consultation.
                    </Typography>
                    <Button variant="contained" size="medium" sx={{ backgroundColor: 'rgba(227, 153, 14, 0.9)' }}>
                        <p onClick={() => (navigate('/contact'))}> Get in Touch</p>
                    </Button>
                </Box>
            </Container>
            <Footer />
        </div>)
}

export default CriminalLaw