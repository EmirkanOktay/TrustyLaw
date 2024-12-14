import React from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const CheckSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    message: Yup.string().required('Message is required'),
});

function Contact() {
    return (
        <div style={{ backgroundColor: 'rgb(249, 249, 249)' }}>
            <Navbar />
            <Box
                sx={{
                    minHeight: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Container
                    maxWidth="sm"
                    sx={{
                        padding: '20px',
                        backgroundColor: 'white',
                        borderRadius: '8px',
                        boxShadow: 3,
                    }}
                >
                    <Typography variant="h5" align="center" color="rgba(227, 153, 14, 0.9)" gutterBottom>
                        Contact Us
                    </Typography>

                    <Formik
                        initialValues={{
                            name: '',
                            email: '',
                            message: '',
                        }}
                        validationSchema={CheckSchema}
                        onSubmit={(values) => {
                            console.log('Form Data:', values);
                            toast.success("Message Has Been Sent Succesfully")
                        }}
                    >
                        {({ values, handleChange, handleSubmit, errors, touched }) => (
                            <form onSubmit={handleSubmit}>
                                <TextField
                                    label="Your Name"
                                    name="name"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    value={values.name}
                                    onChange={handleChange}
                                    error={touched.name && Boolean(errors.name)}
                                    helperText={touched.name && errors.name}
                                    sx={{
                                        backgroundColor: 'white',
                                        '& .MuiOutlinedInput-root': {
                                            '&:hover fieldset': {
                                                borderColor: 'rgba(227, 153, 14, 0.9)',
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: 'rgba(227, 153, 14, 0.9)',
                                            },
                                        },
                                        '& .MuiInputLabel-root.Mui-focused': {
                                            color: 'rgba(227, 153, 14, 0.9)',
                                        },
                                    }}
                                />

                                <TextField
                                    label="Your Email"
                                    name="email"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    value={values.email}
                                    onChange={handleChange}
                                    error={touched.email && Boolean(errors.email)}
                                    helperText={touched.email && errors.email}
                                    sx={{
                                        backgroundColor: 'white',
                                        '& .MuiOutlinedInput-root': {
                                            '&:hover fieldset': {
                                                borderColor: 'rgba(227, 153, 14, 0.9)',
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: 'rgba(227, 153, 14, 0.9)',
                                            },
                                        },
                                        '& .MuiInputLabel-root.Mui-focused': {
                                            color: 'rgba(227, 153, 14, 0.9)',
                                        },
                                    }}
                                />

                                <TextField
                                    label="Message"
                                    name="message"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    multiline
                                    rows={3}
                                    value={values.message}
                                    onChange={handleChange}
                                    error={touched.message && Boolean(errors.message)}
                                    helperText={touched.message && errors.message}
                                    sx={{
                                        backgroundColor: 'white',
                                        '& .MuiOutlinedInput-root': {
                                            '&:hover fieldset': {
                                                borderColor: 'rgba(227, 153, 14, 0.9)',
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: 'rgba(227, 153, 14, 0.9)',
                                            },
                                        },
                                        '& .MuiInputLabel-root.Mui-focused': {
                                            color: 'rgba(227, 153, 14, 0.9)',
                                        },
                                    }}
                                />

                                <Button
                                    type="submit"
                                    variant="contained"
                                    fullWidth
                                    sx={{
                                        backgroundColor: 'rgb(227, 153, 14)',
                                        marginTop: '16px',
                                        padding: '10px',
                                    }}
                                >
                                    Submit
                                </Button>
                            </form>
                        )}
                    </Formik>
                </Container>
            </Box>
            <Footer />
            <ToastContainer />
        </div>
    );
}

export default Contact;