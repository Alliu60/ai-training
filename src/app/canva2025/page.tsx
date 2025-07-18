"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Use Next.js optimized Image component

// --- TYPE DEFINITIONS ---

// Define the specific shape of the 'content' object
interface ContentShape {
  headline: string;
  description: string;
  highlight: string;
  highlightColor: string;
  image: string;
  alt: string;
}

// Define the shape for each item in our tabData array
interface TabDataItem {
    id: string;
    title: string;
    content: ContentShape;
}

// Define the props for our TabContent component
interface TabContentProps {
  id: string;
  content: ContentShape;
  isActive: boolean;
}


// --- DATA ---

// Data for the tab content, now typed with TabDataItem[]
const tabData: TabDataItem[] = [
    {
        id: 'suite',
        title: 'Visual Suite 2.0',
        content: {
            headline: 'Your All-in-One Creative Canvas',
            description: 'Visual Suite 2.0 is a beacon of creativity, allowing you to craft comprehensive lesson plans and engaging student activities seamlessly within a single design. It transforms abstract concepts into colorful, interactive experiences.',
            highlight: "With Visual Suite 2.0, lesson preparation becomes an inspiring journey, helping you captivate students' imaginations and foster a dynamic learning environment.",
            highlightColor: 'text-purple-700',
            image: '/placeholder-suite.png', // Using local images for Next.js Image component
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
            image: '/placeholder-sheets.png',
            alt: 'Illustration of dynamic charts and graphs'
        }
    },
    {
        id: 'ai',
        title: 'AI Tools',
        content: {
            headline: 'Your Creative Teaching Assistant',
            description: "Canva's AI tools act as an artist's brush, helping you create tailored visuals and lesson plans with remarkable speed and ease. It's like having a skilled assistant ready to generate captivating graphics at the click of a button.",
            highlight: 'This technology streamlines the creative process, allowing you to focus on what truly matters: inspiring students and igniting their passion for learning.',
            highlightColor: 'text-green-700',
            image: '/placeholder-ai.png',
            alt: 'Illustration of AI generating educational visuals'
        }
    },
];


// --- COMPONENTS ---

const Header = () => (
    <header className="text-center mb-8 md:mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Canva Education Webinar Summary</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">An interactive overview of the new tools and resources from Canva designed to enrich the classroom experience.</p>
    </header>
);

const YouTubeEmbed = () => (
    <div className="mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6">Watch the Official Presentation</h2>
        <div className="relative pb-[56.25%] h-0 overflow-hidden max-w-4xl mx-auto bg-black rounded-2xl shadow-xl">
            <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Example YouTube embed URL
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    </div>
);

// CORRECTED Tab Content Component
const TabContent = ({ id, content, isActive }: TabContentProps) => (
  <div role="tabpanel" id={`tabpanel-${id}`} aria-labelledby={`tab-${id}`} hidden={!isActive} className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-top-4">
    <div className="grid md:grid-cols-2 gap-8 items-center">
      {/* Left side with text content */}
      <div className="prose max-w-none">
        <h3 className={`text-2xl font-bold ${content.highlightColor}`}>{content.headline}</h3>
        <p>{content.description}</p>
        <p className="font-semibold">{content.highlight}</p>
      </div>

      {/* Right side with the Next.js Image component */}
      <div className="relative w-full h-64 md:h-80">
        <Image 
            src={content.image} 
            alt={content.alt} 
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-xl"
        />
      </div>
    </div>
  </div>
);


const Tabs = () => {
    const [activeTab, setActiveTab] = useState('suite');

    return (
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <div className="border-b border-gray-200 mb-6">
                <nav role="tablist" className="flex flex-wrap -mb-px" aria-label="Tabs">
                    {tabData.map(tab => (
                        <button
                            key={tab.id}
                            role="tab"
                            id={`tab-${tab.id}`}
                            aria-selected={activeTab === tab.id}
                            aria-controls={`tabpanel-${tab.id}`}
                            onClick={() => setActiveTab(tab.id)}
                            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm md:text-base mr-4 md:mr-8 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded-t-sm ${
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
                {tabData.map(tab => (
                    <TabContent 
                        key={tab.id}
                        id={tab.id}
                        content={tab.content} 
                        isActive={activeTab === tab.id} 
                    />
                ))}
            </div>
        </div>
    );
};

const BackButton = () => (
    <div className="mb-6">
        <Link href="/" className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
            <svg className="w-5 h-5 mr-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            返回首页
        </Link>
    </div>
);

const Footer = () => (
    <footer className="text-center mt-8 md:mt-12 text-gray-500 text-sm">
        <p>This page is an interactive summary of the Canva for Education webinar.</p>
    </footer>
);


export default function CanvaWebinarPage() {
    return (
        <div className="bg-gray-50 text-gray-800 font-sans">
            <div className="container mx-auto p-4 md:p-8">
                <BackButton />
                <Header />
                <YouTubeEmbed />
                <Tabs />
                <Footer />
            </div>
        </div>
    );
}