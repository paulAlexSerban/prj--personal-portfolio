import { useState, useEffect } from 'react';
import { base } from '@/styles/atoms/backToTopButton.module.scss';
import Icon from './Icon.atom';

export default function BackToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll to top smoothly
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div className={base}>
            {isVisible && (
                <div onClick={scrollToTop}>
                    <Icon iconName="circleUp" />
                </div>
            )}
        </div>
    );
}
