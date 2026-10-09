import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // 1. Import useLocation

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { pathname } = useLocation(); // 2. Ambil properti pathname (URL) saat ini

    // OTOMATIS: Scroll ke atas seketika (instan) saat pindah halaman/URL
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]); // Akan berjalan otomatis setiap kali URL berubah

    // Tampilkan atau sembunyikan tombol berdasarkan posisi scroll
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    // MANUAL: Fungsi tombol untuk scroll halus ke paling atas saat diklik
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {isVisible && (
                <button
                    type="button"
                    onClick={scrollToTop}
                    aria-label="Scroll to top"
                    className="p-3 rounded-full bg-teal text-white shadow-lg hover:bg-primary hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 ease-in-out transform hover:-translate-y-1 active:scale-95 cursor-pointer"
                >
                    {/* Icon Panah Atas (SVG) */}
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            d="M5 10l7-7m0 0l7 7m-7-7v18"
                        />
                    </svg>
                </button>
            )}
        </div>
    );
};

export default ScrollToTop;