import React from 'react';
import { Box, Container, Grid, Typography, Button, Card, CardContent, CardMedia } from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import BlogPhoto1 from '../Css/Images/business-law.webp';
import '../Css/Blog.css'

function Blog() {
    return (
        <div className="blog-index" style={{ backgroundColor: '#f9f9f9', padding: '40px 0' }}>
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                }}
            >
                <Box>
                    <Typography
                        sx={{
                            borderBottom: '1px solid rgba(227, 153, 14, 0.9)',
                            paddingBottom: '15px',
                        }}
                    >
                        <h1>Latest from Our Blog</h1>
                    </Typography>
                </Box>

                <Box
                    sx={{
                        paddingBottom: '15px',
                        paddingTop: '15px',
                        borderBottom: '1px solid rgba(227, 153, 14, 0.9)',
                        width: '30%',
                    }}
                >
                    <ArticleIcon
                        sx={{
                            fontSize: '50px',
                            color: 'white',
                            backgroundColor: 'rgba(227, 153, 14, 0.9)',
                            padding: '10px',
                            borderRadius: '50%',
                        }}
                    />
                </Box>

                <Box sx={{ width: '60%', paddingTop: '15px' }}>
                    <Typography>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                        </p>
                    </Typography>
                </Box>

                <Grid container spacing={3} sx={{ marginTop: '25px' }} >
                    {[1, 2, 3].map((_, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index} className='card'>
                            <Card sx={{ maxWidth: 345, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', margin: 'auto' }}>
                                <CardMedia
                                    component="img"
                                    height="180"
                                    image={BlogPhoto1}
                                    alt={`Blog Image ${index + 1}`}
                                />
                                <CardContent>
                                    <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                                        Blog Title {index + 1}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut urna vel nulla aliquet feugiat.
                                    </Typography>
                                </CardContent>
                                <Box sx={{ padding: '10px', textAlign: 'center' }}>
                                    <Button className='button-blog' variant="outlined" sx={{ color: 'rgba(227, 153, 14, 0.9)', borderColor: 'rgba(227, 153, 14, 0.9)' }}>
                                        Read More
                                    </Button>
                                </Box>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
}

export default Blog;
