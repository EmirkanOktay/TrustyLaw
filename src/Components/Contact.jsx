import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Contact() {
    const navigate = useNavigate();
    return (
        <div style={{
            backgroundColor: 'rgba(227, 153, 14, 0.9)',
            height: 'auto',
            padding: '20px 0',
            display: 'flex',
            alignItems: 'center',
        }}>
            <Container sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: { xs: 'column', md: 'row' },
                textAlign: { xs: 'center', md: 'left' },
            }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: { xs: 'column', md: 'row' },
                }}>
                    <Typography sx={{
                        fontSize: { xs: '1em', md: '1.3em' },
                        color: 'white',
                        marginRight: { xs: '0', md: '30px' },
                        marginBottom: { xs: '15px', md: '0' },
                    }}>
                        We offer our expertise and support to help you navigate any legal challenges.
                    </Typography>
                    <Typography>
                        <span
                            onClick={() => (navigate('/contact'))}
                            className='contact-button'
                            style={{
                                fontSize: '.95rem',
                                cursor: 'pointer',
                                padding: '15px',
                                backgroundColor: 'white',
                                color: 'rgba(227, 153, 14, 0.9)',
                                borderRadius: '5px',
                            }}>
                            Contact Us
                        </span>
                    </Typography>
                </Box>
            </Container>
        </div>
    );
}

export default Contact;