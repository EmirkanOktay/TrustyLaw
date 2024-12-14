import React from 'react'
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import { Box, Container, Typography, Grid, Paper, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';

function FamilyLaw() {
    const navigate = useNavigate();
    const services = [
        { title: 'Divorce Proceedings', description: 'Guidance and support through contested and uncontested divorce processes.' },
        { title: 'Child Custody', description: 'Helping you secure the best interests of your children in custody arrangements.' },
        { title: 'Prenuptial Agreements', description: 'Drafting and reviewing agreements to protect your assets and interests.' },
        { title: 'Domestic Violence', description: 'Legal representation and advice for victims of domestic violence.' }
    ];
    return (
        <div>
            <Navbar />
            <Container maxWidth="lg" sx={{ paddingTop: '40px', paddingBottom: '40px' }}>

                <Box sx={{ textAlign: 'center', marginBottom: '40px' }}>
                    <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', color: 'rgba(227, 153, 14, 0.9)' }} >
                        Family Law Services
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                        Compassionate and professional legal solutions for your family’s needs.
                    </Typography>
                </Box>

                <Box sx={{ marginBottom: '60px' }}>
                    <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: 'rgba(227, 153, 14, 0.9)' }}>
                        What We Offer
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', marginBottom: '20px' }}>
                        At our firm, we understand that family legal matters can be both sensitive and complex. Our experienced team is here to provide personalized support, ensuring the best outcomes for you and your loved ones.
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                        Whether you’re navigating a difficult divorce, seeking custody of your children, or protecting yourself from domestic issues, we are here to guide you every step of the way.
                    </Typography>
                </Box>

                <Box sx={{ marginBottom: '60px' }}>
                    <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: 'rgba(227, 153, 14, 0.9)' }}>
                        Our Services
                    </Typography>
                    <Grid container spacing={4}>
                        {services.map((service, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <Paper sx={{ padding: '20px', textAlign: 'center', backgroundColor: '#f5f5f5', height: '25vh' }}>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'rgba(227, 153, 14, 0.9)' }}>
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
                        Contact our expert family law attorneys today for a confidential consultation.
                    </Typography>
                    <Button variant="contained" size="medium" sx={{ backgroundColor: 'rgba(227, 153, 14, 0.9)' }}>
                        <p onClick={() => navigate('/contact')}>Get in Touch</p>
                    </Button>
                </Box>
            </Container>
            <Footer />
        </div>
    )
}

export default FamilyLaw