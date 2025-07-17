"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

// Data for the feature cards
const featuresData = [
    {
        id: 'lessonPlans',
        icon: '📝',
        title: 'Lesson Plans & Activities',
        description: 'Revolutionize your lesson planning with AI-powered content generation and curriculum alignment.',
        details: (
            <>
                <h4>🎯 Rapid Lesson Plan Generation</h4>
                <p>Upload curriculum standards, textbook chapters, and supplementary materials to create comprehensive lesson plans in minutes.</p>
                <div className="highlight-box">
                    {/* Corrected " to &quot; */}
                    <strong>Example:</strong> &quot;Draft a week-long lesson plan on cellular respiration for 9th-grade biology, including daily objectives, lab activities, and assessments.&quot;
                </div>
                <h4>📚 On-Demand Resource Creation</h4>
                <ul>
                    <li>Reading comprehension questions from any text</li>
                    <li>Vocabulary lists with definitions and examples</li>
                    <li>Discussion prompts for critical thinking</li>
                    <li>Study guides with key terms and concepts</li>
                </ul>
                <div className="case-study">
                    <h5>💡 Practical Application</h5>
                    <p>A history teacher uploads the Declaration of Independence and a textbook chapter, then generates a study guide with 10 questions, a glossary of 15 terms, and discussion prompts comparing historical grievances.</p>
                </div>
            </>
        )
    },
    // ... 请确保您本地文件中剩余的数据也已按此规则修正 ...
];

// Hero Section Component
const Hero = () => (
    <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-16 text-center">
        {/* Corrected Teacher's to Teacher&apos;s */}
        <h1 className="text-4xl font-bold mb-4">📚 The Teacher&apos;s AI Co-Pilot</h1>
        <p className="text-xl opacity-90">A Comprehensive Analysis of Google NotebookLM in the Modern School</p>
    </div>
);

// Feature Card Component
const FeatureCard = ({ feature, isActive, onClick }) => {
    const cardRef = useRef(null);

    useEffect(() => {
        if (isActive) {
            setTimeout(() => {
                cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 300);
        }
    }, [isActive]);

    return (
        <button
            ref={cardRef}
            className={`w-full text-left bg-white rounded-2xl shadow-lg transition-all duration-300 border-2 ${isActive ? 'border-green-500 bg-green-50' : 'border-transparent hover:border-blue-500'} hover:-translate-y-2 overflow-hidden`}
            onClick={onClick}
        >
            <div className="p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
                    {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
            <div className={`grid transition-all duration-500 ease-in-out ${isActive ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <div className="overflow-hidden">
                    <div className="bg-gray-100 p-8 border-t-2 border-blue-500">
                        <div className="prose max-w-none">
                            {feature.details}
                        </div>
                    </div>
                </div>
            </div>
        </button>
    );
};

// Progress Indicator Component
const ProgressIndicator = ({ count, total }) => {
    const allExplored = count === total;
    return (
        <div 
            role="status"
            aria-live="polite"
            className={`fixed bottom-8 right-8 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-colors duration-300 z-50 ${allExplored ? 'bg-green-500' : 'bg-blue-500'}`}
        >
            {allExplored ? '🎉 All Features Explored!' : `${count}/${total} Explored`}
        </div>
    );
};

// Back to Home Button Component
const BackToHomeButton = () => (
    <Link href="/" className="fixed bottom-8 left-8 bg-gradient-to-r from-indigo-500 to-purple-600 text-white no-underline px-5 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl text-sm z-50">
        ← Back to Home
    </Link>
);

// Main App Component
export default function App() {
    const [activeCards, setActiveCards] = useState([]);

    const toggleFeature = (id) => {
        setActiveCards(prev =>
            prev.includes(id) ? prev.filter(cardId => cardId !== id) : [...prev, id]
        );
    };

    return (
        <div className="bg-gradient-to-br from-indigo-100 to-purple-100 min-h-screen font-sans">
            <div className="container mx-auto bg-white min-h-screen shadow-xl">
                <Hero />
                <div className="p-8">
                    <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-6 rounded-lg mb-8">
                        <p>Earlier in this course, you used an AI tool to help with common activities, including planning a trip and creating an icebreaker. Now, click on each card below to reveal even more tactics for saving you time, personalizing student learning, and sparking creativity.</p>
                    </div>
                    <div className="bg-blue-500 text-white p-4 rounded-lg text-center mb-12 font-semibold">
                        <strong>Click each card below to reveal more information and explore practical applications!</strong>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuresData.map(feature => (
                            <FeatureCard
                                key={feature.id}
                                feature={feature}
                                isActive={activeCards.includes(feature.id)}
                                onClick={() => toggleFeature(feature.id)}
                            />
                        ))}
                    </div>
                </div>

                <footer className="bg-gray-800 text-white p-12 text-center mt-12">
                    <h3 className="text-2xl font-bold text-blue-400 mb-4">The Future of AI-Augmented Education</h3>
                    <p className="max-w-3xl mx-auto opacity-80">
                        NotebookLM represents a paradigm shift from open-ended AI generation to focused, verifiable synthesis. By handling information processing tasks, it frees educators to focus on the uniquely human aspects of teaching: fostering critical thinking, nurturing curiosity, building relationships, and guiding the interpersonal journey of learning.
                    </p>
                </footer>
            </div>
            <ProgressIndicator count={activeCards.length} total={featuresData.length} />
            <BackToHomeButton />
        </div>
    );
}