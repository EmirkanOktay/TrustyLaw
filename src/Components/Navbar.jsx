import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import '../Css/Navbar.css';
import logo from "../Css/Images/Logo.png";
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;
const navItems = ['Home', 'About Us', 'Contact', 'Practice Areas'];

function Navbar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const navigate = useNavigate();

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                <img src={logo} alt="Logo" className="navbar-logo" style={{ marginRight: '82px' }} />
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            textAlign: 'center',
                        }}>
                            <Box
                                sx={{
                                    display: 'inline-block',
                                    borderBottom: '1px solid orange',
                                    width: 'fit-content',
                                    paddingBottom: '2px',
                                    marginTop: '20px'
                                }}
                            >
                                <ListItemText primary={item} />
                            </Box>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className="navbar">
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar component="nav" sx={{ backgroundColor: 'white', color: 'black' }}>
                    <Toolbar
                        sx={{
                            justifyContent: 'space-between',
                            padding: { xs: '0 1rem', sm: '0 2rem' },
                        }}
                    >

                        <IconButton
                            color="warning"
                            aria-label="open drawer"
                            edge="end"
                            onClick={handleDrawerToggle}
                            sx={{
                                marginTop: '10px',
                                position: 'fixed',
                                right: 16,
                                display: { sm: 'none' },
                            }}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Typography
                            variant="h6"
                            component="div"
                            sx={{
                                flexGrow: 0,
                                display: { xs: 'none', sm: 'block' },
                                marginRight: { sm: '2rem' },
                            }}
                        >
                            <img
                                onClick={() => navigate('/')}
                                src={logo}
                                alt="Logo"
                                className="navbar-logo"
                                style={{
                                    marginLeft: '20px',
                                    marginTop: '11px',
                                    maxHeight: '100%',
                                }}
                            />
                        </Typography>

                        <Box
                            sx={{
                                display: { xs: 'none', sm: 'flex' },
                                gap: '1rem',
                            }}
                        >
                            {navItems.map((item, index) => (
                                <Button className='items'
                                    key={item}
                                    onClick={() => navigate(`/${item.replace(/\s+/g, '-').toLowerCase()}`)}
                                    sx={{
                                        fontFamily: 'Roboto, sans-serif',
                                        fontWeight: '700',
                                        fontSize: '13px',
                                        position: 'relative',
                                        color: '#1e1e1e',
                                        textTransform: 'uppercase',
                                        borderRadius: '0px',
                                        paddingRight: '18px',
                                        borderRight: index !== navItems.length - 1 ? '1px solid orange' : 'none',
                                        height: '2.4vh',
                                        "&::after": {
                                            content: "''",
                                            position: 'absolute',
                                            left: 0,
                                            bottom: '-5px',
                                            height: '2px',
                                            width: '0',
                                            backgroundColor: 'orange',
                                            transition: 'width 0.3s ease',
                                        },
                                        "&:hover::after": {
                                            width: '100%',
                                        },
                                        "&:hover": {
                                            color: 'orange',
                                        },
                                        '@media (max-width: 860px)': {
                                            fontSize: '11px', height: '3vh'
                                        },
                                        '@media (max-width: 761px)': {
                                            fontSize: '8px',
                                        },
                                    }}
                                >
                                    {item}
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </AppBar>


                <nav>
                    <Drawer
                        anchor="right"
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true,
                        }}
                        sx={{
                            display: { md: 'block', lg: 'none' },
                            "& .MuiDrawer-paper": {
                                boxSizing: "border-box",
                                width: drawerWidth,
                                maxWidth: "900px",
                                padding: 0,
                            },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </nav>
            </Box>
        </div>
    );
}

Navbar.propTypes = {
    window: PropTypes.func,
};

export default Navbar;
