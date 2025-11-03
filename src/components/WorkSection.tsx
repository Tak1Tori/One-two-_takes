import React, { useState, useEffect } from 'react';
import { Star, Camera, ArrowLeft, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from "react-router-dom";

interface WorkSectionProps {
    apiKey: string;
    folderId: string;
}

interface Testimonial {
    id: number;
    title: string;
    text: string;
    author: string;
    rating: number;
}

interface DriveFile {
    id: string;
    name: string;
    mimeType: string;
}

const WorkSection: React.FC<WorkSectionProps> = ({ apiKey, folderId }) => {
    const { t } = useLanguage();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [workImages, setWorkImages] = useState<DriveFile[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch images from Google Drive
    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch(
                    `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents+and+mimeType+contains+'image'&key=${apiKey}&fields=files(id,name,mimeType)&pageSize=20`
                );

                if (!response.ok) {
                    throw new Error('Failed to fetch images from Google Drive');
                }

                const data = await response.json();
                setWorkImages(data.files || []);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchImages();
    }, [apiKey, folderId]);

    // Get image URL from Google Drive
    const getImageUrl = (fileId: string) => {
        return `https://drive.google.com/thumbnail?id=${fileId}&sz=w800-h600`;
    };

    const testimonials: Testimonial[] = [
        {
            id: 1,
            title: t('testimonials.title1'),
            text: t('testimonials.text1'),
            author: t('testimonials.author1'),
            rating: 5
        },
        {
            id: 2,
            title: t('testimonials.title2'),
            text: t('testimonials.text2'),
            author: t('testimonials.author2'),
            rating: 5
        },
        {
            id: 3,
            title: t('testimonials.title3'),
            text: t('testimonials.text3'),
            author: t('testimonials.author3'),
            rating: 5
        },
        {
            id: 4,
            title: t('testimonials.title4'),
            text: t('testimonials.text4'),
            author: t('testimonials.author4'),
            rating: 5
        },
        {
            id: 5,
            title: t('testimonials.title5'),
            text: t('testimonials.text5'),
            author: t('testimonials.author5'),
            rating: 5
        },
        {
            id: 6,
            title: t('testimonials.title6'),
            text: t('testimonials.text6'),
            author: t('testimonials.author6'),
            rating: 5
        }
    ];

    // Auto-slide for images
    useEffect(() => {
        if (workImages.length === 0) return;

        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === workImages.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [workImages.length]);

    // Get visible testimonials (3 at a time)
    const getVisibleTestimonials = () => {
        const visible = [];
        for (let i = 0; i < 3; i++) {
            const index = (currentTestimonialIndex + i) % testimonials.length;
            visible.push(testimonials[index]);
        }
        return visible;
    };

    const nextTestimonials = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);

        setTimeout(() => {
            setCurrentTestimonialIndex((prevIndex) =>
                (prevIndex + 3) % testimonials.length
            );
            setIsTransitioning(false);
        }, 150);
    };

    const prevTestimonials = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);

        setTimeout(() => {
            setCurrentTestimonialIndex((prevIndex) =>
                prevIndex === 0 ? testimonials.length - 3 : prevIndex - 3
            );
            setIsTransitioning(false);
        }, 150);
    };

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, index) => (
            <Star
                key={index}
                className={`w-5 h-5 ${index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'
                    }`}
            />
        ));
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="text-white text-xl">Loading work images...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="text-red-400 text-xl">Error: {error}</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Header Section */}
            <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 lg:py-16">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 mb-8 md:mb-12 lg:mb-16">
                    <img className="w-20 h-16 md:w-24 md:h-18 lg:w-30 lg:h-22" src="/assets/Gen4_logo_film_productuon_one_two_takes_minimalism_camera_a_2,_3188451074 (1).png" alt="" />
                    <div className='text-center md:text-left'>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light">{t('work.title')}</h2>
                        <div className="w-24 md:w-32 h-0.5 bg-white mt-2 md:mt-4 mx-auto md:mx-0"></div>
                    </div>
                </div>

                {/* Auto-sliding Image Gallery */}
                <div className="mb-12 md:mb-16 lg:mb-20 relative">
                    {/* Gray background rectangle */}
                    <div className="absolute inset-0 bg-gray-800/20 -z-10 rounded-md md:rounded-lg"></div>

                    {workImages.length > 0 ? (
                        <div className="relative h-32 md:h-40 overflow-hidden rounded-md md:rounded-lg">
                            <div
                                className="flex absolute top-0 left-0 h-full transition-transform duration-1000 ease-in-out gap-2"
                                style={{
                                    width: `${workImages.length * 200}px`,
                                    transform: `translateX(-${currentImageIndex * 200}px)`
                                }}
                            >
                                {workImages.map((image) => {
                                    return (
                                        <div
                                            key={image.id}
                                            className="flex-shrink-0 w-48 md:w-64 h-32 md:h-40 overflow-hidden rounded-md"
                                        >
                                            <img
                                                src={getImageUrl(image.id)}
                                                alt={image.name}
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    const img = e.target as HTMLImageElement;
                                                    const fileId = image.id;
                                                    if (!img.src.includes('uc?export=view')) {
                                                        img.src = `https://drive.google.com/uc?export=view&id=${fileId}`;
                                                    } else if (!img.src.includes('uc?id=')) {
                                                        img.src = `https://drive.google.com/uc?id=${fileId}`;
                                                    }
                                                }}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ) : (
                        <div className="text-center py-12 md:py-20">
                            <Camera className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 text-gray-600" />
                            <p className="text-gray-400 text-lg md:text-xl">{t('work.noImages')}</p>
                        </div>
                    )}
                </div>

                {/* Testimonials Section */}
                <div className="relative overflow-hidden mb-8 md:mb-12">
                    <div
                        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 transition-all duration-500 ease-in-out ${isTransitioning ? 'opacity-0 transform translate-x-4' : 'opacity-100 transform translate-x-0'
                            }`}
                    >
                        {getVisibleTestimonials().map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="bg-neutral-700 p-4 md:p-6 rounded-lg border border-gray-800"
                            >
                                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">{testimonial.title}</h3>
                                <p className="text-gray-300 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                                    "{testimonial.text}"
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="text-base md:text-lg font-medium">{testimonial.author}</span>
                                    <div className="flex gap-1">
                                        {renderStars(testimonial.rating)}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-center mb-8 md:mb-12 lg:mb-16">
                    <div className="bg-neutral-500 flex gap-2 md:gap-4 rounded-full w-28 md:w-36 h-12 md:h-16">
                        <button
                            onClick={prevTestimonials}
                            className="w-14 md:w-24 h-12 md:h-16 bg-neutral-500 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-neutral-400 disabled:opacity-50"
                            disabled={isTransitioning}
                        >
                            <ArrowLeft className="w-4 h-4 md:w-6 md:h-6 text-black" />
                        </button>
                        <button
                            onClick={nextTestimonials}
                            className="w-14 md:w-24 h-12 md:h-16 bg-black rounded-full flex items-center justify-center transition-all duration-200 hover:bg-gray-800 disabled:opacity-50"
                            disabled={isTransitioning}
                        >
                            <ArrowRight className="w-4 h-4 md:w-6 md:h-6" />
                        </button>
                    </div>
                </div>

                {/* Contact Button */}
                <div className="text-center">
                    <button className="px-6 md:px-8 py-3 border-2 border-white/30 text-white hover:border-white/60 hover:bg-white/10 transition-all duration-300 rounded-lg text-base md:text-lg font-light tracking-wide">
                       <Link
                            to="/contacts"
                        >
                            {t('work.contact')}
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WorkSection;

