import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';
import SlidePhoto1 from '../Css/Images/Slide1.webp';
import SlidePhoto2 from '../Css/Images/Slide2.webp';
import SlidePhoto3 from '../Css/Images/Slide3.webp';
import '../Css/Header.css'

function Header() {
    const [activeIndex, setActiveIndex] = useState(0);
    const items = [
        {
            image: SlidePhoto1,
            headText: "The Voice Of Justice",
            secondHeadText: "24 hours legal services",
            description: "When you go into court you are putting your fate into the hands of twelve people who weren't smart enough to get out of jury duty.",
            link: 'Read More',
        },
        {
            image: SlidePhoto2,
            headText: "The Voice Of Justice",
            secondHeadText: "24 hours legal services",
            description: "When you go into court you are putting your fate into the hands of twelve people who weren't smart enough to get out of jury duty.",
            link: 'Read More',
        },
        {
            image: SlidePhoto3,
            headText: "The Voice Of Justice",
            secondHeadText: "24 hours legal services",
            description: "When you go into court you are putting your fate into the hands of twelve people who weren't smart enough to get out of jury duty.",
            link: 'Read More',
        }
    ];

    return (
        <div>
            <Carousel onChange={(index) => setActiveIndex(index)}>
                {items.map((item, index) => (
                    <Item
                        key={index}
                        item={item}
                        isActive={index === activeIndex} />
                ))}
            </Carousel>
        </div>
    );
}

function Item({ item, isActive }) {

    return (
        <Paper className="carousel-item" style={{
            backgroundImage: `url(${item.image})`,
            backgroundSize: 'cover',
            height: '70vh',
        }}>
            <div className={`carousel-content ${isActive ? 'active' : ''}`}>
                <h1 className='head-text'>{item.headText}</h1>
                <div className='box-for-second'> <h2 className='second-head-text'>{item.secondHeadText}</h2> </div>
                <p className='description'>{item.description}</p>
                <p className='link'>{item.link}</p>
                <Button></Button>
            </div>
        </Paper>
    );
}

export default Header;
