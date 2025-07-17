"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link'; // 已添加

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
                <p>Generate multiple versions of the