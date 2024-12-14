import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Box, Container, Typography, Grid, Paper } from '@mui/material'

function AboutUsPage() {
    const values = [
        {
            head: 'Integrity',
            description: 'We value honesty and transparency in all our actions.'
        },
        {
            head: 'Innovation',
            description: 'We embrace change and strive to lead in our industry through creativity.'
        },
        {
            head: 'Collaboration',
            description: 'We believe in the power of teamwork and partnerships to achieve our goals.'
        },
        {
            head: 'Excellence',
            description: 'We are committed to providing exceptional service and delivering quality results.'
        }
    ]
    return (
        <div>
            <Navbar />
            <Container maxWidth="lg" sx={{ paddingTop: '40px' }}>
                <Box>
                    <Box sx={{ marginBottom: '60px' }}>
                        <Typography variant="h3" gutterBottom align="center" sx={{ fontWeight: 'bold' }}>
                            Who Are We?
                        </Typography>
                        <Typography variant="h6" align="center" sx={{ color: 'text.secondary' }}>
                            We are a team of passionate individuals committed to delivering innovative solutions and exceptional service.
                        </Typography>
                        <Box sx={{ marginTop: '20px', textAlign: 'center' }}>
                            <Paper sx={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
                                <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi unde nobis beatae maxime, dignissimos commodi optio eveniet ad corporis. Iure earum, cupiditate consequuntur eum iste accusantium, saepe aspernatur ea laudantium quas necessitatibus asperiores rem voluptatem numquam, quam suscipit similique aliquam!
                                </Typography>
                            </Paper>
                        </Box>
                    </Box>

                    <Box sx={{ marginBottom: '60px' }}>
                        <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold' }}>
                            Our Mission
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'text.secondary', textAlign: 'center' }}>
                            Our mission is to provide the best services to our clients, focusing on innovation, quality, and customer satisfaction. We strive to create lasting relationships based on trust and mutual respect, while continuously improving and adapting to meet the evolving needs of the market.
                        </Typography>
                    </Box>

                    <Box sx={{ paddingTop: '40px', paddingBottom: '40px' }}>
                        <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold' }}>
                            Our Values
                        </Typography>
                        <Grid container spacing={4} justifyContent="center">
                            {values.map((item, index) => (
                                <Grid item xs={12} sm={6} md={3} key={index}>
                                    <Paper sx={{ padding: '30px', textAlign: 'center', backgroundColor: 'rgba(227, 153, 14, 0.9)', height: '20vh' }}>
                                        <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'white' }}>
                                            {item.head}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'white' }}>
                                            {item.description}
                                        </Typography>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Box>
            </Container >
            <Footer />
        </div >
    )
}

export default AboutUsPage
