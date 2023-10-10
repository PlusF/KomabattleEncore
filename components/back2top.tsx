import React, { useState, useEffect } from 'react';
import { IconButton } from '@chakra-ui/react';
import { FaChevronUp } from 'react-icons/fa';

const style = {
    fontFamily: 'Noto Sans JP',
    fontSize: '1rem',
    fontWeight: 400,
    position: 'fixed',
    bottom: '80px',
    right: {
        base: '15px',
        md: '40px'
    },
}

function Back2Top() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <IconButton
            className={`back2top ${isVisible ? 'visible' : ''}`}
            onClick={scrollToTop}
            icon={<FaChevronUp />}
            aria-label="Back to top"
            sx={style}
            colorScheme='gray'
        />
    );
};

export default Back2Top;
