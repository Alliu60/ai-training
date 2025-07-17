"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// Data for the activity cards and modals
const activities = [
  {
    id: 'developActivity',
    icon: '🚀',
    title: 'Develop an Activity from Scratch',
    description: 'Create engaging and interactive activities that help students achieve specific learning outcomes with clear instructions and expectations.',
    modalTitle: '🚀 Develop an Activity from Scratch',
    modalContent: (
      <>
        <p className="mb-6 text-gray-600">Create engaging and interactive activities that will help your students achieve the desired learning outcomes with structured objectives, clear instructions, and appropriate resources.</p>
        <div className="rounded-lg border-l-4 border-l-indigo-400 bg-slate-100 p-6">
          <h3 className="mb-4 font-bold text-slate-800">Activity Development Template:</h3>
          <div className="select-all rounded-md border border-slate-200 bg-white p-4 font-mono text-sm leading-relaxed">
            I am a <span className="rounded bg-indigo-100 px-2 py-1 font-medium text-indigo-800">[Enter your role]</span>. Based on the following information, suggest an engaging and interactive activity that will help my students achieve the desired learning outcomes:
            <br /><br />
            Subject: <span className="rounded bg-indigo-100 px-2 py-1 font-medium text-indigo-800">[Enter subject]</span>
            <br />
            Grade level: <span className="rounded bg-indigo-100 px-2 py-1 font-medium text-indigo-800">[Enter grade level]</span>
            <br />
            Learning objectives:
            <br />
            <span className="rounded bg-indigo-100 px-2 py-1 font-medium text-indigo-800">[Enter learning objective]</span>
          </div>
          <div className="mt-4 rounded-md bg-green-100 p-3 text-sm italic text-green-800">💡 Tip: Select all the text above to copy it to your clipboard</div>
        </div>
      </>
    )
  },
 // The rest of the `activities` data would follow a similar, cleaned-up structure...
];

// Header Component
const Header = () => (
  <header className="text-center text-white mb-12">
    <h1 className="text-4xl md:text-5xl font-bold mb-4">🎯 AI Activities</h1>
    <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto mb-8">
      Create engaging and interactive activities to enhance student learning and participation
    </p>
    <div className="bg-white/20 p-8 rounded-2xl backdrop-blur-lg border border-white/30 text-lg leading-relaxed max-w-4xl mx-auto">
      Earlier in this course, you used an AI tool to help with common activities, including planning a trip and creating an icebreaker. Now, click on each image to reveal even more tactics for saving you time, personalizing student learning, and sparking creativity.
      <br /><br />
      <strong className="font-semibold">Click each activity type to reveal detailed prompts and templates!</strong>
    </div>
  </header>
);

// Activity Card Component - Revised for Accessibility
const ActivityCard = ({ icon, title, description, onClick }) => (
  // Using a <button> is semantically correct for an action that changes state on the same page.
  <button
    className="w-full h-full text-left bg-white rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-fuchsia-500/40 cursor-pointer group"
    onClick={onClick}
  >
    {/* Refactored to use nested divs for the gradient instead of a ::before pseudo-element */}
    <div className="h-48 flex items-center justify-center text-6xl text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 opacity-90" />
      <span className="relative z-10 transform transition-transform duration-300 group-hover:scale-110">{icon}</span>
    </div>
    {/* Simplified the card body */}
    <div className="p-8 flex flex-col flex-grow">
      <h3 className="text-2xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  </button>
);

// Modal Component - Revised for Accessibility
const Modal = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    // Added ARIA roles for better screen reader support
    <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4" 
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
    >
      <div 
            className="bg-white rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-top-10" 
            onClick={(e) => e.stopPropagation()}
        >
        <header className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6 sm:p-8 relative flex justify-between items-center">
           <h2 id="modal-title" className="text-2xl sm:text-3xl font-bold">{title}</h2>
           <button onClick={onClose} aria-label="Close modal" className="text-4xl font-bold transition-transform hover:scale-110">&times;</button>
        </header>
        <div className="p-6 sm:p-8 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};


// Footer Component
const Footer = () => (
    <footer className="bg-white/10 text-white p-8 text-center rounded-2xl backdrop-blur-lg border border-white/20 mt-12">
        <p className="font-bold">Google for Education AI Prompt Library</p>
        <p className="text-sm opacity-80">© 2025 Google LLC 1600 Amphitheatre Parkway, Mountain View, CA 94043</p>
    </footer>
);


// Main Page Component
export default function AiActivitiesPage() {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (id) => setActiveModal(id);
  const closeModal = () => setActiveModal(null);

  const currentActivity = activities.find(act => act.id === activeModal);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-800 font-sans text-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Header />

        <main className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-12">
            {activities.map(activity => (
              <ActivityCard
                key={activity.id}
                icon={activity.icon}
                title={activity.title}
                description={activity.description}
                onClick={() => openModal(activity.id)}
              />
            ))}
          </main>

        <Footer />
       </div>

      <Modal
        isOpen={!!activeModal}
        onClose={closeModal}
        title={currentActivity?.modalTitle || ''}
      >
        {currentActivity?.modalContent}
      </Modal>

      <Link href="/" className="fixed bottom-5 right-5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white no-underline px-5 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl text-sm">
        ← Back to Home
      </Link>
    </div>
  );
}