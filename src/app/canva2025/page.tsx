"use client";

import React, { useState } from 'react';
import Link from 'next/link'; // 已添加

// Data for the tab content
const tabData = [
    {
        id: 'suite',
        title: 'Visual Suite 2.0',
        content: {
            headline: 'Your All-in-One Creative Canvas',
            description: 'Visual Suite 2.0 is a beacon of creativity, allowing you to craft comprehensive lesson plans and engaging student activities seamlessly within a single design. It transforms abstract concepts into colorful, interactive experiences.',
            highlight: 'With Visual Suite 2.0, lesson preparation becomes an inspiring journey, helping you captivate students\' imaginations and foster a dynamic learning environment.',
            highlightColor: 'text-purple-700',
            image: 'https://placehold.co/600x400/8E44AD/FFFFFF?text=Visual+Suite+2.0',
            alt: 'Illustration of a digital canvas with educational elements'
        }
    },
    {
        id: 'sheets',
        title: 'Canva Sheets',
        content: {
            headline: 'Bring Data to Life',
            description: 'Transform rigid, lifeless tables of data into vibrant, dynamic resources. Canva Sheets integrates features like Magic Charts and Magic Insights to illuminate trends and provide deeper understanding.',
            highlight: 'These tools empower you to manage student data with a finesse that turns analysis into an engaging educational narrative for personalized progress monitoring.',
            highlightColor: 'text-blue-700',
            image: 'https://placehold.co/600x400/3498DB/FFFFFF?text=Canva+Sheets',
            alt: 'Illustration of dynamic charts and graphs'
        }
    },
    {
        id: 'ai',
        title: 'AI Tools',
        content: {
            headline: 'Your Creative Teaching Assistant',
            description: 'Canva\'s AI tools act as an artist\'s brush, helping you create tailored visuals and lesson plans with remarkable speed and ease. It\'s like having a skilled assistant ready to generate captivating graphics at the click of a button.',
            highlight: 'This technology streamlines the creative process, allowing you to focus on what truly matters: inspiring students and igniting their passion for learning.',
            highlightColor: 'text-green-700',
            image: 'https://placehold.co/600x400/2ECC71/FFFFFF?text=AI+Tools',
            alt: 'Illustration of AI generating educational visuals'
        }
    },
    {
        id: 'code',
        title: 'Canva Code',
        content: {
            headline: 'Learning Through Play',
            description: 'The introduction of Canva Code opens a door to a world of interactive educational games, seamlessly blending technology with creativity. It\'s a powerful way for students to engage in learning through play.',
            highlight: 'Create custom games to tailor learning experiences to your curriculum, fostering an atmosphere of collaboration, critical thinking, and problem-solving.',
            highlightColor: 'text-orange-600',
            image: 'https://placehold.co/600x400/E67E22/FFFFFF?text=Canva+Code',
            alt: 'Illustration of a simple coding interface for games'
        }
    },
    {
        id: 'school',
        title: 'Design School',
        content: {
            headline: 'Continuous Professional Growth',
            description: 'Canva\'s Design School is a treasure trove of free tutorials and resources. It offers a continuous learning journey, equipping you with the skills to refine and enhance your teaching practices.',
            highlight: 'Just as a gardener nurtures plants, Design School cultivates your professional development, ensuring you remain at the forefront of innovative teaching strategies.',
            highlightColor: 'text-red-600',
            image: 'https://placehold.co/600x400/E74C3C/FFFFFF?text=Design+School',
            alt: 'Illustration of online tutorials and learning resources'
        }
    }
];

// Header Component
const Header = () => (
    <header className="text-center mb-8 md:mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Canva Education Webinar Summary</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">An interactive overview of the new tools and resources from Canva designed to enrich the classroom experience.</p>
    </header>
);

// YouTube Embed Component
const YouTubeEmbed = () => (
    <div className="mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6">Watch the Official Presentation</h2>
        <div className="relative pb-[56.25%] h-0 overflow-hidden max-w-4xl mx-auto bg-black rounded-2xl shadow-xl">
            <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/Yq3iKsq86ZU?start=2568"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
            </iframe>
        </div>
    </div>
);

// Tab Content Component
const TabContent = ({ content }) => (
    <div className="grid md:grid-cols-2 gap-8 items-center animate-fadeIn">
        <div className="prose max-w-none">
            <h3 className="text-2xl font-semibold text-gray-900">{content.headline}</h3>
            <p className="text-gray-600">{content.description}</p>
            <p className={`mt-4 font-medium ${content.highlightColor}`}>{content.highlight}</p>
        </div>
        <img src={content.image} alt={content.alt} className="rounded-lg shadow-md w-full h-auto" />
    </div>
);

// Tabs Component
const Tabs = () => {
    const [activeTab, setActiveTab] = useState('suite');
    const activeContent = tabData.find(tab => tab.id === activeTab)?.content;

    return (
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <div className="border-b border-gray-200 mb-6">
                <nav className="flex flex-wrap -mb-px" aria-label="Tabs">
                    {tabData.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm md:text-base mr-4 md:mr-8 transition-colors duration-200 ${
                                activeTab === tab.id
                                    ? 'border-purple-500 text-purple-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                            }`}
                        >
                            {tab.title}
                        </button>
                    ))}
                </nav>
            </div>
            <div>
                {activeContent && <TabContent content={activeContent} />}
            </div>
        </div>
    );
};

// Back Button Component
const BackButton = () => (
    <div className="mb-6">
        <Link href="/" className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            返回首页
        </Link>
    </div>
);

// Footer Component
const Footer = () => (
    <footer className="text-center mt-8 md:mt-12 text-gray-500 text-sm">
        <p>This page is an interactive summary of the Canva for Education webinar.</p>
    </footer>
);

// Style Component for Animations
const Style = () => (
    <style>{`
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
            animation: fadeIn 0.5s ease-in-out;
        }
    `}</style>
);


// Main App Component
export default function App() {
    return (
        <>
            <Style />
            <div className="bg-gray-50 text-gray-800 font-sans">
                <div className="container mx-auto p-4 md:p-8">
                    <BackButton />
                    <Header />
                    <YouTubeEmbed />
                    <Tabs />
                    <Footer />
                </div>
            </div>
        </>
    );
}