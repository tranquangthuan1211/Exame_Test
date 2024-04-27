import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const SliderComponent = () => {

    const [startIndex, setStartIndex] = useState(0);

    const previousSlide = () => {
        setStartIndex(prevIndex => prevIndex === 0 ? urlImage.length - 1 : prevIndex - 1);
    };
    const urlImage = [
        { image: '/img1.png' },
        { image: '/img2.png' },
        { image: '/img3.png' },
        { image: '/img4.png' },
        { image: '/img5.png' },
        { image: '/img6.png' },
        { image: '/img3.png' },
        { image: '/img4.png' },
        { image: '/img5.png' },
        { image: '/img6.png' },
        { image: '/img3.png' },
        { image: '/img4.png' },
        { image: '/img5.png' },
        { image: '/img6.png' },
        { image: '/img5.png' },
        { image: '/img6.png' },
        { image: '/img3.png' },
        { image: '/img4.png' },
        { image: '/img5.png' },
        { image: '/img6.png' },
        { image: '/img5.png' },
        { image: '/img6.png' },
        { image: '/img3.png' },
        { image: '/img4.png' },
        { image: '/img5.png' },
        { image: '/img6.png' },
        { image: '/img5.png' },
        { image: '/img6.png' },
        { image: '/img3.png' },
        { image: '/img4.png' },
        { image: '/img5.png' },
        { image: '/img6.png' },
        { image: '/img5.png' },
        { image: '/img6.png' },
        { image: '/img3.png' },
        { image: '/img4.png' },
        { image: '/img5.png' },
        { image: '/img6.png' },
        { image: '/img6.png' },
        { image: '/img3.png' },
        { image: '/img4.png' },
        { image: '/img5.png' },
        { image: '/img6.png' },
        { image: '/img6.png' },
        { image: '/img3.png' },
        { image: '/img4.png' },
        { image: '/img5.png' },
        { image: '/img6.png' },
        { image: '/img6.png' },
        { image: '/img3.png' },
        { image: '/img4.png' },
        { image: '/img5.png' },
        { image: '/img6.png' }

    ];
    const nextSlide = () => {
        setStartIndex(prevIndex => prevIndex === urlImage.length - 1 ? 0 : prevIndex + 1);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin:'50px 0' }}>
            <FaArrowLeft style={{ width: '40px', height: '40px', cursor: 'pointer' }} onClick={previousSlide} />
            <div style={{ display: 'flex', overflow: 'hidden', width: '800px' }}>
                <div style={{ display: 'flex', transform: `translateX(-${startIndex * 280}px)`, transition: 'transform 0.5s ease' }}>
                    {urlImage.map((item, index) => (
                        index % 2 === 0 ? (
                            <img
                                key={index}
                                src={item.image}
                                alt={`anh-${index}`}
                                style={{ width: '100px',margin:'0 6px' }}
                            />
                        ): (
                            <img
                                key={index}
                                src={item.image}
                                alt={`anh-${index}`}
                                style={{ width: '140px',margin:'20px 6px' }}
                            />
                        )
                    ))}
                </div>
            </div>
            <FaArrowRight style={{ width: '40px', height: '40px', cursor: 'pointer' }} onClick={nextSlide} />
        </div>
    );
};

export default SliderComponent;
