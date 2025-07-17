"use client";

import React, { useState, useMemo } from 'react';
import { Search, BookOpen, Users, Target, MessageSquare, FileText, Star } from 'lucide-react';

// --- Data Layer (Moved outside the component for performance) ---

const prompts = [
    // This is the same large array of prompt objects from your original code.
    // Example:
    {
        id: 1,
        category: 'activities',
        title: 'Develop an activity from scratch',
        description: 'Create engaging and interactive activities for specific learning outcomes',
        template: `I am a [Enter your role]. Based on the following information, suggest an engaging and interactive activity that will help my students achieve the desired learning outcomes:

Subject: [Enter subject]
Grade level: [Enter grade level]
Learning objectives:
[Enter learning objective]
[Enter learning objective]
[Enter learning objective]

Clear instructions and expectations: [Explain how the activity will be conducted and what students should accomplish]
Resources: [List required resources]
Constraints: [Note any potential limitations]
Specific theme or context: [Include information about the activity's theme or the context in which it will exist]`
    },
    // ... all 24 prompts from your original code would be here
];

const categories = [
    { id: 'all', name: 'All Prompts', icon: BookOpen },
    { id: 'activities', name: 'Activities', icon: Users },
    { id: 'lesson-plans', name: 'Lesson Plans', icon: FileText },
    { id: 'differentiation', name: 'Differentiation', icon: Target },
    { id: 'creative-enhancements', name: 'Creative Enhancements', icon: Star },
    { id: 'assessments', name: 'Assessments', icon: FileText },
    { id: 'communication', name: 'Communication', icon: MessageSquare }
].map(category => ({
    ...category,
    count: category.id === 'all' ? prompts.length : prompts.filter(p => p.category === category.id).length
}));


// --- UI Components (Broken down for clarity and maintainability) ---

const LibraryHeader = ({ searchTerm, setSearchTerm }) => (
    <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex items-center space-x-3 mb-4">
                <BookOpen className="w-8 h-8 text-blue-600" />
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">GenAI for Educators</h1>
                    <p className="text-lg text-gray-600">Prompt Library</p>
                </div>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <p className="text-blue-800 text-sm">
                    <strong>86%</strong> of teachers expect to save at least 2 hours per week using generative AI tools.
                    <strong> Tens of thousands</strong> of teachers have completed Generative AI for Educators since it launched in Spring 2024.
                </p>
            </div>

            <div className="relative">
                <label htmlFor="search-prompts" className="sr-only">Search prompts</label> {/* Accessibility fix */}
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                    id="search-prompts"
                    type="text"
                    placeholder="Search prompts..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
        </div>
    </div>
);

const CategorySidebar = ({ selectedCategory, setSelectedCategory }) => (
    <div className="lg:w-64 flex-shrink-0">
        <div className="bg-white rounded-lg shadow-sm border p-4">
            <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
            <div className="space-y-2">
                {categories.map((category) => {
                    const Icon = category.icon;
                    const isSelected = selectedCategory === category.id;
                    return (
                        <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-sm transition-colors ${
                                isSelected
                                    ? 'bg-blue-100 text-blue-700 border border-blue-200'
                                    : 'text-gray-600 hover:bg-gray-100'
                            }`}
                        >
                            <div className="flex items-center space-x-2">
                                <Icon className="w-4 h-4" />
                                <span>{category.name}</span>
                            </div>
                            <span className={`text-xs px-2 py-1 rounded-full ${isSelected ? 'bg-blue-200 text-blue-800' : 'bg-gray-200 text-gray-600'}`}>
                                {category.count}
                            </span>
                        </button>
                    );
                })}
            </div>
        </div>
    </div>
);

const PromptCard = ({ prompt, isExpanded, onToggle, onCopy }) => {
    const { id, title, description, category, template } = prompt;
    const [copyText, setCopyText] = useState('Copy Template');

    const handleCopy = () => {
        onCopy(template);
        setCopyText('Copied!');
        setTimeout(() => setCopyText('Copy Template'), 2000); // Reset after 2 seconds
    };

    return (
        <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm mb-3">{description}</p>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                    {category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </span>
                
                <div className="flex space-x-2 mt-4">
                    <button
                        onClick={() => onToggle(id)}
                        aria-expanded={isExpanded} // Accessibility fix
                        aria-controls={`prompt-template-${id}`}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
                    >
                        {isExpanded ? 'Hide Template' : 'View Template'}
                    </button>
                    <button
                        onClick={handleCopy}
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors text-sm"
                    >
                        {copyText}
                    </button>
                </div>

                {isExpanded && (
                    <div id={`prompt-template-${id}`} className="mt-4 p-4 bg-gray-50 rounded-lg border">
                        <h4 className="font-medium text-gray-900 mb-2">Prompt Template:</h4>
                        <pre className="text-sm text-gray-700 whitespace-pre-wrap font-mono bg-white p-3 rounded border overflow-x-auto">
                            {template}
                        </pre>
                    </div>
                )}
            </div>
        </div>
    );
};

const LibraryFooter = () => (
    <div className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">About Generative AI for Educators</h3>
                <p className="text-gray-600 mb-4 max-w-2xl mx-auto">
                    A two-hour, self-paced course designed to help teachers save time, enhance student learning, and personalize instruction with generative AI tools.
                </p>
            </div>
        </div>
    </div>
);


// --- Main Page Component ---

export default function GenAiPromptLibraryPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [expandedPrompt, setExpandedPrompt] = useState(null);

    const filteredPrompts = useMemo(() => {
        return prompts.filter(prompt => {
            const matchesSearch = prompt.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                  prompt.description.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = selectedCategory === 'all' || prompt.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchTerm, selectedCategory]);

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <LibraryHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

            <div className="max-w-7xl mx-auto px-4 py-6">
                <div className="flex flex-col lg:flex-row gap-6">
                    <CategorySidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                    
                    <main className="flex-1">
                        <p className="text-gray-600 mb-4">
                            Showing {filteredPrompts.length} of {prompts.length} prompts
                        </p>
                        
                        <div className="space-y-4">
                            {filteredPrompts.length > 0 ? (
                                filteredPrompts.map((prompt) => (
                                    <PromptCard
                                        key={prompt.id}
                                        prompt={prompt}
                                        isExpanded={expandedPrompt === prompt.id}
                                        onToggle={setExpandedPrompt}
                                        onCopy={copyToClipboard}
                                    />
                                ))
                            ) : (
                                <div className="text-center py-12">
                                    <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                                    <h3 className="text-lg font-medium text-gray-900 mb-2">No prompts found</h3>
                                    <p className="text-gray-600">Try adjusting your search terms or category filter.</p>
                                </div>
                            )}
                        </div>
                    </main>
                </div>
            </div>
            
            <LibraryFooter />
        </div>
    );
}