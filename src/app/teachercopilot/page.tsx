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
                    <strong>Example:</strong> "Draft a week-long lesson plan on cellular respiration for 9th-grade biology, including daily objectives, lab activities, and assessments."
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
    {
        id: 'communications',
        icon: '💬',
        title: 'Class Communications',
        description: 'Enhance parent and student communication with multilingual support and automated content generation.',
        details: (
            <>
                <h4>🌍 Multilingual Communication</h4>
                <p>Write classroom updates in English and generate versions in multiple languages spoken by families in your school community.</p>
                <h4>📋 Parent Resource Creation</h4>
                <ul>
                    <li>Comprehensive FAQ sheets for parents</li>
                    <li>Clear grading expectation documents</li>
                    <li>Homework policy explanations</li>
                    <li>Home learning support guides</li>
                </ul>
                <div className="highlight-box">
                    <strong>Time Saver:</strong> Upload your syllabus and school policies to automatically generate parent-friendly FAQ documents.
                </div>
            </>
        )
    },
    {
        id: 'funMaterials',
        icon: '🎨',
        title: 'Relevant & Fun Materials',
        description: 'Create engaging, differentiated content that appeals to various learning styles and abilities.',
        details: (
            <>
                <h4>🎧 Audio Overviews: Podcast-Style Learning</h4>
                <p>Transform any content into conversational, podcast-style discussions between AI hosts. Perfect for auditory learners and accessibility.</p>
                <h4>🧠 Mind Maps: Visual Learning</h4>
                <p>Automatically generate interactive mind maps that organize key concepts and show relationships between ideas.</p>
                <h4>📖 Differentiated Content</h4>
                <ul>
                    <li>Adapt text complexity for different reading levels</li>
                    <li>Create scaffolded resources for English Language Learner (ELL) students</li>
                    <li>Generate content for multiple learning modalities</li>
                    <li>Customize materials for individual student needs</li>
                </ul>
                <div className="case-study">
                    <h5>🌟 Success Story</h5>
                    <p>A science teacher uploads a complex research article and generates three versions: a grade-level version, a simplified one for struggling readers, and an enhanced one for advanced students, ensuring all can access the core concepts.</p>
                </div>
            </>
        )
    },
    {
        id: 'assessment',
        icon: '✅',
        title: 'Assessment Assistant',
        description: 'Streamline assessment creation and provide meaningful feedback with AI-powered tools.',
        details: (
            <>
                <h4>📊 One-Click Assessment Generation</h4>
                <p>Use the "Notebook Guide" to instantly create comprehensive assessment materials from your source documents.</p>
                <h4>Available Assessment Formats:</h4>
                <ul>
                    <li><strong>Study Guides:</strong> Short-answer questions with answer keys</li>
                    <li><strong>Glossaries:</strong> Key terms with definitions</li>
                    <li><strong>FAQs:</strong> Anticipated student questions</li>
                    <li><strong>Timelines:</strong> Chronological organization of events</li>
                    <li><strong>Briefing Documents:</strong> Concise content summaries</li>
                </ul>
                <div className="highlight-box">
                    <strong>Academic Integrity:</strong> Every AI-generated claim includes clickable citations linking directly to source passages, ensuring transparency and verifiability.
                </div>
            </>
        )
    },
    {
        id: 'readingLevel',
        icon: '📚',
        title: 'Reading Level Evaluation',
        description: 'Ensure equitable access to content by adapting materials to appropriate reading levels.',
        details: (
            <>
                <h4>📈 Adaptive Text Complexity</h4>
                <p>Generate multiple versions of the same content tailored to different reading abilities and comprehension levels.</p>
                <h4>Differentiation Strategies:</h4>
                <ul>
                    <li>Rewrite paragraphs at specific grade levels</li>
                    <li>Simplify complex concepts for struggling readers</li>
                    <li>Create enhanced versions for advanced students</li>
                    <li>Generate bilingual glossaries for ELL support</li>
                </ul>
                <div className="case-study">
                    <h5>🎯 Implementation Example</h5>
                    <p>Upload a single scientific article and generate three versions: one at an 8th-grade level for struggling readers, a standard grade-level version, and an advanced version with additional analysis questions.</p>
                </div>
            </>
        )
    },
    {
        id: 'summaries',
        icon: '💡',
        title: 'Insightful Summaries',
        description: 'Transform dense materials into clear, actionable insights with source-grounded analysis.',
        details: (
            <>
                <h4>🔗 Source-Grounded Analysis</h4>
                <p>Unlike general AI tools, NotebookLM operates exclusively on your provided documents, ensuring accuracy and relevance to your specific curriculum needs.</p>
                <h4>Key Advantages:</h4>
                <ul>
                    <li><strong>Verifiable Information:</strong> Every claim includes clickable citations</li>
                    <li><strong>No Hallucinations:</strong> Cannot invent facts outside your sources</li>
                    <li><strong>Curriculum Aligned:</strong> Responses based on your specific materials</li>
                    <li><strong>Transparent Process:</strong> Clear pathway for verification</li>
                </ul>
                <div className="case-study">
                    <h5>🏫 Real-World Impact: Chicago Public Schools</h5>
                    <p>CPS staff use NotebookLM to simplify and understand complex district guidance documents, particularly for financial reporting requirements and curriculum standards, saving hours of manual review time.</p>
                </div>
            </>
        )
    }
];

// Custom Styles Component
const Style = () => (
    <style>{`
      .highlight-box {
          background: #fff3cd;
          border-left: 4px solid #ffc107;
          padding: 1.5rem;
          margin: 1.5rem 0;
          border-radius: 5px;
      }
      .highlight-box strong {
          color: #856404;
      }
      .case-study {
          background: #e8f5e8;
          border-left: 4px solid #27ae60;
          padding: 1.5rem;
          margin: 1.5rem 0;
          border-radius: 5px;
      }
      .case-study h5 {
          color: #27ae60;
          margin-bottom: 1rem;
      }
      .feature-details {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;
        opacity: 0;
      }
      .feature-details.active {
        max-height: 1000px; /* Adjust as needed */
        opacity: 1;
      }
    `}</style>
);

// Hero Section Component
const Hero = () => (
    <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-16 text-center">
        <h1 className="text-4xl font-bold mb-4">📚 The Teacher's AI Co-Pilot</h1>
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
        <div
            ref={cardRef}
            className={`bg-white rounded-2xl shadow-lg transition-all duration-300 cursor-pointer border-2 ${isActive ? 'border-green-500 bg-green-50' : 'border-transparent hover:border-blue-500'} hover:-translate-y-2 overflow-hidden`}
            onClick={onClick}
        >
            <div className="p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
                    {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
            <div className={`feature-details ${isActive ? 'active' : ''}`}>
                <div className="bg-gray-100 p-8 border-t-2 border-blue-500">
                    {feature.details}
                </div>
            </div>
        </div>
    );
};

// Progress Indicator Component
const ProgressIndicator = ({ count, total }) => {
    const allExplored = count === total;
    return (
        <div className={`fixed bottom-8 right-8 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-colors duration-300 z-50 ${allExplored ? 'bg-green-500' : 'bg-blue-500'}`}>
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
        <>
            <Style />
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
        </>
    );
}