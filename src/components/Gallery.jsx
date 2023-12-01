import React, { useState } from 'react';

const Gallery = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isZoomed, setIsZoomed] = useState(false);
    const items = [
        // Replace with your actual items
        { type: 'image', src: 'https://via.placeholder.com/600x400.png?text=Image+1', link: null },
        { type: 'image', src: 'https://via.placeholder.com/600x400.png?text=Image+2', link: '/projects' },
        // ... more items ...
    ];

    const goToPrevious = () => {
        setActiveIndex(prevIndex => prevIndex === 0 ? items.length - 1 : prevIndex - 1);
    };

    const goToNext = () => {
        setActiveIndex(prevIndex => prevIndex === items.length - 1 ? 0 : prevIndex + 1);
    };

    const handleItemClick = (item) => {
        if (item.link) {
            window.location.href = item.link;
        } else {
            setIsZoomed(true);
        }
    };

    const closeZoom = () => {
        setIsZoomed(false);
    };

    return (
        <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
            <div className="relative aspect-[5/3] w-full">
                {items.map((item, index) => (
                    <div
                        key={item.src}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
                        onClick={() => handleItemClick(item)}
                    >
                        {item.type === 'image' && (
                            <img src={item.src} alt={`Item ${index + 1}`} className="w-full h-full object-cover xl:rounded-3xl" />
                        )}
                        {item.type === 'pdf' && (
                            <iframe src={item.src} title={`PDF ${index + 1}`} className="w-full h-full"></iframe>
                        )}
                    </div>
                ))}
                <button onClick={goToPrevious} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-1 rounded-full shadow-lg">
                    Prev
                </button>
                <button onClick={goToNext} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-1 rounded-full shadow-lg">
                    Next
                </button>
            </div>

            {/* Zoomed Image Preview */}
            {isZoomed && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
                    <img src={items[activeIndex].src} alt="Zoomed Preview" className="max-w-full max-h-full p-4" />
                    <button onClick={closeZoom} className="absolute top-0 right-0 m-4 text-white text-2xl">&times;</button>
                </div>
            )}
        </div>
    );
};

export default Gallery;
