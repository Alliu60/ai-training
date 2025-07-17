"use client";


import React, { useState, useEffect } from 'react';
import Link from 'next/link'; // 已添加

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
        <div className="prompt-section">
          <h3 className="prompt-title">Activity Development Template:</h3>
          <div className="prompt-text">
            I am a <span className="prompt-field">[Enter your role]</span>. Based on the following information, suggest an engaging and interactive activity that will help my students achieve the desired learning outcomes:
            <br /><br />
            Subject: <span className="prompt-field">[Enter subject]</span>
            <br />
            Grade level: <span className="prompt-field">[Enter grade level]</span>
            <br />
            Learning objectives:
            <br />
            <span className="prompt-field">[Enter learning objective]</span>
            <br />
            <span className="prompt-field">[Enter learning objective]</span>
            <br />
            <span className="prompt-field">[Enter learning objective]</span>
            <br /><br />
            Clear instructions and expectations: <span className="prompt-field">[Explain how the activity will be conducted and what students should accomplish]</span>
            <br />
            Resources: <span className="prompt-field">[List required resources]</span>
            <br />
            Constraints: <span className="prompt-field">[Note any potential limitations]</span>
            <br />
            Specific theme or context: <span className="prompt-field">[Include information about the activity's theme or the context in which it will exist]</span>
          </div>
          <div className="select-tip">💡 Tip: Select all the text above to copy it to your clipboard</div>
        </div>
      </>
    )
  },
  {
    id: 'reviewActivity',
    icon: '📚',
    title: 'Generate a Review Activity',
    description: 'Design comprehensive review activities that enable students to reinforce their understanding of specified content and concepts.',
    modalTitle: '📚 Generate a Review Activity',
    modalContent: (
      <>
        <p className="mb-6 text-gray-600">Develop engaging activities that enable students to review and reinforce their understanding of specified content, promoting critical thinking and deeper learning.</p>
        <div className="prompt-section">
          <h3 className="prompt-title">Comprehensive Review Activity Template:</h3>
          <div className="prompt-text">
            I am a <span className="prompt-field">[Enter your role]</span>. Based on the following information, develop an engaging activity that will enable students to review the specified content:
            <br /><br />
            Subject: <span className="prompt-field">[Enter subject]</span>
            <br />
            Grade level: <span className="prompt-field">[Enter grade level]</span>
            <br />
            Learning objectives:
            <br />
            <span className="prompt-field">[Enter learning objective]</span>
            <br />
            <span className="prompt-field">[Enter learning objective]</span>
            <br />
            <span className="prompt-field">[Enter learning objective]</span>
            <br /><br />
            Knowledge, skills, and understanding: <span className="prompt-field">[Note key facts, concepts, or processes covered in the material]</span>
            <br />
            Critical thinking: <span className="prompt-field">[Explain whether the students will be analyzing information, drawing conclusions, evaluating arguments, problem-solving, etc.]</span>
            <br />
            Content and material: <span className="prompt-field">[Specify the specific content area, lesson, or topic you want to focus on]</span>
            <br />
            Materials: <span className="prompt-field">[Paste in textbook chapters or sections, lecture notes, handouts, or other relevant resources]</span>
            <br />
            Reading level: <span className="prompt-field">[State the desired reading level for the review activity]</span>
            <br />
            Activity type and format: <span className="prompt-field">[Describe the desired type of activity, such as quiz, game, simulation, collaborative project, etc.]</span>
            <br />
            Difficulty and length: <span className="prompt-field">[Indicate the difficulty level and length]</span>
          </div>
           <div className="select-tip">💡 Tip: Select all the text above to copy it to your clipboard</div>
        </div>
        <div className="prompt-section mt-6">
          <h3 className="prompt-title">Quick Review Activity Version:</h3>
          <div className="prompt-text">
            I am a <span className="prompt-field">[Enter your role]</span>. Develop an engaging activity that will enable <span className="prompt-field">[Enter grade level and subject]</span> students to review <span className="prompt-field">[Enter content and material]</span>. This activity should help students achieve <span className="prompt-field">[Enter learning objectives]</span> in <span className="prompt-field">[number]</span> minutes.
          </div>
           <div className="select-tip">💡 Tip: Select all the text above to copy it to your clipboard</div>
        </div>
      </>
    )
  },
  {
    id: 'studentIntros',
    icon: '👥',
    title: 'Facilitate Student Introductions',
    description: 'Create ability-inclusive icebreaker activities that help students get to know each other in a comfortable and engaging way.',
    modalTitle: '👥 Facilitate Student Introductions',
    modalContent: (
       <>
        <p className="mb-6 text-gray-600">Create inclusive icebreaker activities that help students get to know each other while accommodating different abilities and comfort levels.</p>
        <div className="prompt-section">
          <h3 className="prompt-title">Student Introduction Activity Template:</h3>
          <div className="prompt-text">
            I am a <span className="prompt-field">[Enter your role]</span>. I need three ability-inclusive ideas to help <span className="prompt-field">[Enter grade level and subject]</span> students get to know each other.
          </div>
           <div className="select-tip">💡 Tip: Select all the text above to copy it to your clipboard</div>
        </div>
      </>
    )
  },
  {
    id: 'modifyActivities',
    icon: '🔧',
    title: 'Modify Existing Activities',
    description: 'Enhance and adapt your current project activities to better suit your students\' specific needs, interests, and learning objectives.',
    modalTitle: '🔧 Modify Existing Activities',
    modalContent: (
      <>
        <p className="mb-6 text-gray-600">Enhance and adapt your current project activities to better align with your students' needs, interests, and learning objectives for improved engagement and outcomes.</p>
        <div className="prompt-section">
          <h3 className="prompt-title">Detailed Activity Modification Template:</h3>
          <div className="prompt-text">
            I am a <span className="prompt-field">[Enter your role]</span>. Modify the following project activities to better suit the needs and interests of my students:
            <br /><br />
            Project title: <span className="prompt-field">[Enter the title of the project]</span>
            <br />
            Subject: <span className="prompt-field">[State the subject of the project]</span>
            <br />
            Grade level: <span className="prompt-field">[Enter grade level]</span>
            <br />
            Topic: <span className="prompt-field">[Note the specific topic covered by the project]</span>
            <br />
            Current project description: <span className="prompt-field">[Provide a brief description of the project as it currently is]</span>
            <br />
            Target audience: <span className="prompt-field">[Describe the students who will be participating in the project and their particular interests]</span>
            <br /><br />
            Desired Modifications:
            <br />
            Areas for modification: <span className="prompt-field">[Specify which aspects of the project you want to modify, such as the difficulty level, scope, assessment methods, or specific activities]</span>
            <br />
            Reasons for modification: <span className="prompt-field">[Explain why you want to make these modifications, such as making the project more engaging, accessible, or aligned with student interests]</span>
            <br />
            Desired outcomes: <span className="prompt-field">[Describe what you hope to achieve by modifying the project, such as promoting deeper learning, fostering collaboration, or addressing individual needs]</span>
            <br />
            Additional information: <span className="prompt-field">[Include any other relevant details, such as available resources, time constraints, or specific learning objectives you want to address]</span>
          </div>
           <div className="select-tip">💡 Tip: Select all the text above to copy it to your clipboard</div>
        </div>
        <div className="prompt-section mt-6">
          <h3 className="prompt-title">Quick Activity Modification Version:</h3>
          <div className="prompt-text">
            I am a <span className="prompt-field">[Enter your role]</span>. Modify the following project activities to better suit the needs and interests of my <span className="prompt-field">[Enter grade level]</span> students: <span className="prompt-field">[Describe the project]</span>. My students are <span className="prompt-field">[Describe the students who will be participating in the project and their particular interests]</span>.
          </div>
           <div className="select-tip">💡 Tip: Select all the text above to copy it to your clipboard</div>
        </div>
      </>
    )
  }
];

// Style Component for custom styles that can't be easily done with Tailwind
const Style = () => (
  <style>{`
    .prompt-section {
        background: #f8f9fa;
        padding: 1.5rem;
        border-radius: 10px;
        border-left: 4px solid #667eea;
    }
    .prompt-title {
        font-weight: 700;
        margin-bottom: 1rem;
        color: #333;
    }
    .prompt-text {
        background: white;
        padding: 1rem;
        border-radius: 8px;
        border: 1px solid #e9ecef;
        font-family: 'Courier New', monospace;
        font-size: 0.9rem;
        line-height: 1.5;
        user-select: all;
    }
    .prompt-field {
        background: #e3f2fd;
        color: #1565c0;
        padding: 2px 6px;
        border-radius: 4px;
        font-weight: 500;
    }
    .select-tip {
        background: #e8f5e8;
        color: #2e7d32;
        padding: 0.5rem;
        border-radius: 5px;
        margin-top: 1rem;
        font-size: 0.9rem;
        font-style: italic;
    }
    .activity-icon::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(135deg, #4285f4 0%, #ea4335 25%, #fbbc04 50%, #34a853 75%, #9aa0a6 100%);
        opacity: 0.9;
    }
    .animate-modalSlideIn {
        animation: modalSlideIn 0.3s ease-out forwards;
    }
    @keyframes modalSlideIn {
        from {
            opacity: 0;
            transform: translateY(-30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
  `}</style>
);

// Header Component
const Header = () => (
  <header className="text-center text-white mb-12">
    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-shadow-lg">🎯 AI Activities</h1>
    <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto mb-8">
      Create engaging and interactive activities to enhance student learning and participation
    </p>
    <div className="bg-white bg-opacity-20 p-8 rounded-2xl backdrop-filter backdrop-blur-lg border border-white border-opacity-30 text-lg leading-relaxed max-w-4xl mx-auto">
      Earlier in this course, you used an AI tool to help with common activities, including planning a trip and creating an icebreaker. Now, click on each image to reveal even more tactics for saving you time, personalizing student learning, and sparking creativity.
      <br /><br />
      <strong className="font-semibold">Click each activity type to reveal detailed prompts and templates!</strong>
    </div>
  </header>
);

// Activity Card Component
const ActivityCard = ({ icon, title, description, onClick }) => (
  <div
    className="bg-white rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-fuchsia-500/40 cursor-pointer group"
    onClick={onClick}
  >
    <div className="activity-icon h-48 flex items-center justify-center text-6xl text-white relative overflow-hidden">
      <span className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">{icon}</span>
    </div>
    <div className="p-8 flex flex-col flex-grow">
      <h3 className="text-2xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed flex-grow">{description}</p>
      <div className="mt-auto">
        <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 ease-in-out hover:from-indigo-600 hover:to-purple-700 hover:shadow-lg hover:-translate-y-1">
            Try It Out →
          </button>
      </div>
    </div>
  </div>
);

// Modal Component
const Modal = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
       document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col animate-modalSlideIn" onClick={(e) => e.stopPropagation()}>
        <header className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-8 rounded-t-3xl relative flex justify-between items-center">
           <h2 className="text-3xl font-bold">{title}</h2>
           <button onClick={onClose} className="text-4xl font-bold transition-transform hover:scale-110">&times;</button>
        </header>
        <div className="p-8 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};


// Footer Component
const Footer = () => (
    <footer className="bg-white bg-opacity-10 text-white p-8 text-center rounded-2xl backdrop-filter backdrop-blur-lg border border-white border-opacity-20 mt-12">
        <p className="font-bold">Google for Education AI Prompt Library</p>
        <p className="text-sm opacity-80">© 2024 Google LLC 1600 Amphitheatre Parkway, Mountain View, CA 94043</p>
    </footer>
);


// Main App Component
export default function App() {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (id) => setActiveModal(id);
  const closeModal = () => setActiveModal(null);

  const currentActivity = activities.find(act => act.id === activeModal);

  return (
    <>
      <Style />
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
</>
);
}
