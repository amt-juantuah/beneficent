'use client';

import { useEffect, useState } from 'react';
// import { cookieCategories } from '../app/_components/JSON';
import { setCookie, getCookie } from '../lib/cookieHelpers';
import { motion, AnimatePresence } from 'framer-motion';


export default function CookieConsent() {
    const [showBanner, setShowBanner] = useState(false);
    // const [showSettings, setShowSettings] = useState(false);
    const [consents, setConsents] = useState({
        functional: true,
        analytics: true,
        marketing: true,
    });

    useEffect(() => {
        const cookie = getCookie('cookieConsent');
        if (!cookie) setShowBanner(true);
    }, []);

    const handleAccept = () => {
        setCookie('cookieConsent', JSON.stringify(consents));
        setShowBanner(false);
        applyCookies(consents);
    };

    const handleReject = () => {
        setCookie('cookieConsent', JSON.stringify({
            functional: true,
            analytics: false,
            marketing: false,
        }));
        setShowBanner(false);
        applyCookies(consents);
    };

    const handleOpenSettings = () => {
        const cookie = getCookie('cookieConsent');
        if (cookie) {
            const saved = JSON.parse(decodeURIComponent(cookie));
            setConsents({
                functional: true,
                analytics: saved.analytics || false,
                marketing: saved.marketing || false,
            });
        }
        setShowBanner(true);
    };

    const applyCookies = (consents) => {
        if (consents.analytics) {
            // Example: init analytics script
        }
    };

    return (
        <>
            <AnimatePresence>
                {/* Floating Button */}
                {!showBanner && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 10 }}
                        transition={{ duration: 0.3 }}
                        onClick={handleOpenSettings}
                        className="fixed bottom-5 left-5 z-50 bg-gray-800 text-white text-xs px-4 py-2 rounded shadow-md hover:bg-gray-700 sm:text-sm"
                    >
                        Cookie Settings
                    </motion.button>
                )}
            </AnimatePresence>
            <AnimatePresence>
                {showBanner &&
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.4 }}
                        className="fixed bottom-0 w-full bg-white border-t p-4 shadow-md z-50 text-sm sm:text-base md:flex md:justify-between md:items-center"
                    >
                        <div className="md:w-2/3">
                        <p className="mb-2 font-semibold">We use cookies to improve your experience.</p>
                        <div className="space-y-1 md:space-y-0 md:flex md:gap-6">
                            <label className="block">
                                <input type="checkbox" checked disabled className="mr-1" /> Functional (required)
                            </label>
                            <label className="block">
                                <input type="checkbox" checked={consents.analytics}
                                    onChange={e => setConsents({ ...consents, analytics: e.target.checked })} className="mr-1" />
                                Analytics
                            </label>
                            <label className="block">
                                <input type="checkbox" checked={consents.marketing}
                                    onChange={e => setConsents({ ...consents, marketing: e.target.checked })} className="mr-1" />
                                Marketing
                            </label>
                        </div>
                        </div>
                        <div className="mt-4 flex gap-3 md:mt-0 md:w-1/3 md:justify-end">
                            <button className="w-full md:w-auto bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700" onClick={handleAccept}>
                                Accept Selected
                            </button>
                            <button className="w-full md:w-auto bg-gray-400 text-white px-4 py-2 rounded text-sm hover:bg-gray-500" onClick={handleReject}>
                                Reject All
                            </button>
                        </div>
                    </motion.div>}
            </AnimatePresence>
        </>
    )
}

