'use client';

import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { faqs } from '../JSON';



const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    // Toggle function for each accordion item
    const toggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="min-h-screen bg-gray-50 py-16 px-6">
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800">Frequently Asked Questions</h1>
                <p className="text-lg text-gray-600 mt-2">
                    Here are some of the most commonly asked questions about our services. If you have any other questions, don't hesitate to contact us.
                </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
                {faqs.map((faq, index) => (
                    <div key={index} className="border border-gray-300 rounded-lg overflow-hidden shadow-lg bg-white">
                        <button
                            onClick={() => toggle(index)}
                            className="w-full flex justify-between items-center px-6 py-4 bg-gray-100 hover:bg-gray-200 transition-colors duration-300 focus:outline-none"
                        >
                            <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                            {activeIndex === index ? (
                                <FaChevronUp className="text-gray-600" />
                            ) : (
                                <FaChevronDown className="text-gray-600" />
                            )}
                        </button>

                        {/* Answer section */}
                        {activeIndex === index && (
                            <div className="px-6 py-4 text-gray-700">
                                <p>{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Faq;
