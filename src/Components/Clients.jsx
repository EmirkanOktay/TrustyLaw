import React, { useState } from 'react';
import { Container, Box, Typography, Paper, Button } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import '../Css/Clients.css';

function Clients() {
    const [activeIndex, setActiveIndex] = useState(0);

    const items = [
        {
            headText: "Expert Legal Advice And Exceptional Service",
            description:
                "I had the pleasure of working with Trusty Law on a complex legal matter. The team’s expertise and attention to detail were instrumental in achieving a successful outcome. They were always available to answer my questions and provide updates.",
            clientName: "Sarah Locket",
            occupation: 'Ceo, ClearView Energy',
        },
        {
            headText: "Top-Notch Legal Services For Your Business Needs",
            description:
                "I have worked with several law firms, but none have matched Trusty Law level of service and expertise. They provided tailored solutions that helped me achieve my goals. I highly recommend them to anyone looking for top-notch legal services.",
            clientName: "John Elliot",
            occupation: 'CTO, BluePeak Industries',
        },
        {
            headText: "Professional And Knowledgeable",
            description:
                "Trusty Law navigated a complex legal issue with ease, and kept me informed every step of the way. Their attention to detail and commitment to clients is second to none. I was thoroughly impressed with their professionalism and knowledge.",
            clientName: "Amy Jenkins",
            occupation: 'CEO, Apex Analyticss',
        },
        {
            headText: "A Trusted Partner For All Legal Needs",
            description:
                "I have been working with Trusty Law for years, and they have become a trusted partner for all my legal needs. They consistently provide excellent service and legal advice, and have helped me navigate challenging situations. Highly recommend them.",
            clientName: "Mark Inverness",
            occupation: 'CEO, Highland Health',
        },
    ];


    return (
        <div>
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    padding: '40px 20px',
                }}
            >
                <Box mb={2} sx={{ borderBottom: '2px solid rgba(227, 153, 14, 0.9)', paddingBottom: '15px' }}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#333' }}>
                        Our Happy Clients
                    </Typography>
                </Box>

                <Box
                    sx={{
                        borderBottom: '2px solid rgba(227, 153, 14, 0.9)',
                        paddingBottom: '25px',
                        width: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <SentimentSatisfiedAltIcon
                        sx={{
                            fontSize: '50px',
                            color: 'white',
                            backgroundColor: 'rgba(227, 153, 14, 0.9)',
                            padding: '10px',
                            borderRadius: '50%',
                        }}
                    />
                </Box>

                <Box sx={{ width: '70%', marginTop: '20px' }}>
                    <Typography sx={{ color: '#555', fontStyle: 'italic' }}>
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
                    </Typography>
                </Box>
            </Container>

            <Carousel

                onChange={(index) => setActiveIndex(index)}
                indicators={true}
                navButtonsAlwaysInvisible
                animation="slide"
                sx={{ padding: '20px 0' }}
            >
                {items.map((item, index) => (
                    <Item key={index} item={item} isActive={index === activeIndex} />
                ))}
            </Carousel>
        </div>
    );
}

function Item({ item }) {
    return (
        <Paper
            className="carousel-item2"
            style={{
                background: '#f5f5f5',
                padding: '20px',
                borderRadius: '10px',
                textAlign: 'center',
                margin: '0 auto',
                maxWidth: '800px',
            }}
        >
            <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '10px', color: '#333' }}>
                {item.headText}
            </Typography>
            <Typography sx={{ marginBottom: '15px', color: '#555' }}>{item.description}</Typography>
            <Typography sx={{ fontWeight: 'bold', color: '#e3990e' }}>{item.clientName}</Typography>
            <Typography sx={{ fontStyle: 'italic', color: '#888' }}>{item.occupation}</Typography>
        </Paper>
    );
}

export default Clients;