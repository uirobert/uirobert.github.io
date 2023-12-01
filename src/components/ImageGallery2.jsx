import React from 'react';

const ImageGallery = () => {
    // Array of dummy image URLs for illustration purposes
    const images = [
        "https://via.placeholder.com/300x450", // Replace with your actual image URLs
        "https://via.placeholder.com/300x300",
        "https://via.placeholder.com/300x300",
        "https://via.placeholder.com/300x450",
        // ... Add more URLs to match the number of images in your gallery
    ];

    return (
        <div className="bg-gray-100 p-5">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {images.map((img, index) => (
                    <div key={index} className="flex justify-center items-center p-2">
                        <img className="rounded-lg w-full h-auto object-cover" src={img} alt={`Gallery Image ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ImageGallery;

