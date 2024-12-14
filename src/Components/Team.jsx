import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import '../Css/Team.css';
import Groups2Icon from '@mui/icons-material/Groups2';
import Team1 from '../Css/Images/Team1.webp';
import Team2 from '../Css/Images/Team2.webp';
import Team3 from '../Css/Images/Team3.webp';

function Team() {
    return (
        <div className='team-head'>
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
                <Box>
                    <Typography sx={{ borderBottom: '1px solid rgba(227, 153, 14, 0.9)' }}>
                        <h1>Meet Our Team</h1>
                    </Typography>
                </Box>
                <Box
                    sx={{
                        borderBottom: '1px solid rgba(227, 153, 14, 0.9)',
                        paddingBottom: '25px',
                        width: '30%',
                        marginTop: '25px',
                    }}
                >
                    <Groups2Icon
                        sx={{
                            fontSize: '50px',
                            color: 'white',
                            backgroundColor: 'rgba(227, 153, 14, 0.9)',
                            padding: '10px',
                            borderRadius: '50%',
                        }}
                    />
                </Box>

                <Grid
                    container
                    spacing={3}
                    sx={{
                        marginTop: '25px',
                    }}
                >
                    <Grid item xs={12} sm={6} md={4}>
                        <Box className='team-box'>
                            <div className='image'><img src={Team1} alt="Team Member 1" /></div>
                            <div className="name"><p>Josh Smith</p></div>
                            <div className="role"><p>Attorney</p></div>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Box className='team-box'>
                            <div className='image'><img src={Team3} alt="Team Member 2" /></div>
                            <div className="name"><p>Emily Johnson</p></div>
                            <div className="role"><p>Attorney</p></div>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Box className='team-box'>
                            <div className='image'><img src={Team2} alt="Team Member 3" /></div>
                            <div className="name"><p>Michael Brown</p></div>
                            <div className="role"><p>Attorney</p></div>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Team;
