"use client";

import React, { useState } from "react";
import { Globe, BookOpen, Mic, Video, Share, Brain, FileText, MessageCircle } from "lucide-react";

interface LanguageText {
  zh: string;
  en: string;
}

interface FeatureData {
  category: LanguageText;
  name: LanguageText;
  description: LanguageText;
  example: LanguageText;
  isNew?: boolean;
}

export default function NotebookLMFeatures() {
  const [currentLang, setCurrentLang] = useState<'zh' | 'en'>("zh");

  const toggleLanguage = (): void => {
    setCurrentLang(currentLang === "zh" ? "en" : "zh");
  };

  const getText = (text: LanguageText): string => text[currentLang];

  const headerText: LanguageText = {
    zh: "NotebookLM 完整功能列表 (2025年更新)",
    en: "Complete NotebookLM Feature List (2025 Updates)"
  };

  const introText: LanguageText = {
    zh: "NotebookLM 是 Google 开发的 AI 研究工具和思考伙伴，能够分析用户上传的来源，将复杂信息转化为清晰内容，并支持各种生成式输出。",
    en: "NotebookLM is an AI research tool and thinking partner developed by Google that analyzes user-uploaded sources, transforms complex information into clear content, and supports various generative outputs."
  };

  const features: FeatureData[] = [
    {
      category: { zh: "核心功能", en: "Core Features" },
      name: { zh: "来源上传与分析", en: "Source Upload & Analysis" },
      description: { zh: "支持上传多种来源，包括 PDF、文档、网页链接、YouTube 视频等。AI 会自动提取关键信息、生成摘要，并确保所有响应基于来源。2025 年增强支持批量上传。", en: "Supports uploading various sources including PDFs, documents, web links, YouTube videos, etc. AI automatically extracts key information, generates summaries, and ensures all responses are source-based. 2025 enhancement supports batch upload." },
      example: { zh: "用户上传一组研究论文，NotebookLM 自动分析并提取主题摘要，例如上传 10 个关于气候变化的 PDF，生成整体时间线摘要。", en: "Users upload a group of research papers, NotebookLM automatically analyzes and extracts thematic summaries, e.g., uploading 10 PDFs about climate change to generate an overall timeline summary." }
    },
    {
      category: { zh: "核心功能", en: "Core Features" },
      name: { zh: "问题回答与引用", en: "Q&A with Citations" },
      description: { zh: "AI 基于来源回答问题，并提供内联引用链接回原内容，确保准确性和可追溯性。2025 年增强了智能引用和上下文理解。", en: "AI answers questions based on sources and provides inline citation links back to original content, ensuring accuracy and traceability. 2025 enhanced smart citations and contextual understanding." },
      example: { zh: "用户询问'论文中关于量子计算的挑战是什么？'，AI 回答并引用具体段落，例如'挑战包括噪声干扰（来源：论文第 5 页）'。", en: "User asks 'What are the challenges of quantum computing in the paper?' AI responds with specific paragraph citations, e.g., 'Challenges include noise interference (Source: Paper page 5).'" }
    },
    {
      category: { zh: "核心功能", en: "Core Features" },
      name: { zh: "生成学习工具", en: "Generate Learning Tools" },
      description: { zh: "自动创建学习指南、FAQ、时间线、简报文档等，帮助用户组织信息。2025 年支持自定义输出长度和模式。", en: "Automatically creates study guides, FAQs, timelines, briefing documents, etc., helping users organize information. 2025 supports custom output length and modes." },
      example: { zh: "从历史书籍来源生成时间线，例如上传二战相关文档，创建'1939-1945 年关键事件时间线'，包括事件、日期和引用。", en: "Generate timelines from historical book sources, e.g., upload WWII-related documents to create '1939-1945 Key Events Timeline' with events, dates, and citations." }
    },
    {
      category: { zh: "核心功能", en: "Core Features" },
      name: { zh: "聊天界面", en: "Chat Interface" },
      description: { zh: "与 AI 进行互动对话，仅基于上传来源回答，支持自定义模式如'默认'、'指导模式'、'分析师模式'或完全自定义。2025 年更新使聊天更智能。", en: "Interactive dialogue with AI, answers only based on uploaded sources, supports custom modes like 'Default', 'Tutorial Mode', 'Analyst Mode', or fully custom. 2025 update makes chat smarter." },
      example: { zh: "在分析师模式下询问'分析这份财务报告的弱点'，AI 生成详细报告，例如'弱点包括高负债率（来源：报告第 10 页）'。", en: "In analyst mode, ask 'Analyze the weaknesses of this financial report', AI generates detailed report, e.g., 'Weaknesses include high debt ratio (Source: Report page 10).'" }
    },
    {
      category: { zh: "核心功能", en: "Core Features" },
      name: { zh: "音频概述", en: "Audio Overviews" },
      description: { zh: "生成类似播客的音频摘要，由 AI 主持人讨论来源内容。2025 年支持多语言（50+ 种）和自定义脚本长度。", en: "Generate podcast-like audio summaries with AI hosts discussing source content. 2025 supports multiple languages (50+) and custom script lengths." },
      example: { zh: "上传一篇科技文章，生成英语和西班牙语音频概述，例如'5 分钟播客讨论 AI 伦理问题'。", en: "Upload a tech article, generate English and Spanish audio overviews, e.g., '5-minute podcast discussing AI ethics issues.'" }
    },
    {
      category: { zh: "2025年新功能", en: "2025 New Features" },
      name: { zh: "输出语言选择器", en: "Output Language Selector" },
      description: { zh: "允许用户选择生成的文本输出语言，包括学习指南、简报和聊天响应，支持多种语言。", en: "Allows users to select the language for generated text outputs, including study guides, briefings, and chat responses, supporting multiple languages." },
      example: { zh: "生成一份学习指南，选择法语输出，例如从英语来源创建'气候变化 FAQ 的法语版'。", en: "Generate a study guide with French output selected, e.g., create 'French version of Climate Change FAQ' from English sources." },
      isNew: true
    },
    {
      category: { zh: "2025年新功能", en: "2025 New Features" },
      name: { zh: "互动思维导图", en: "Interactive Mind Maps" },
      description: { zh: "从来源自动生成可视化思维导图，支持颜色编码分支、缩放导航、多层子章节，并可下载为高分辨率 PNG。", en: "Automatically generate visual mind maps from sources, supporting color-coded branches, zoom navigation, multi-level subsections, and downloadable as high-resolution PNG." },
      example: { zh: "上传珊瑚礁生态论文，生成思维导图显示'海洋酸化'、'海水升温'、'污染'等分支，用户可点击扩展子主题。", en: "Upload coral reef ecosystem paper, generate mind map showing branches like 'Ocean Acidification', 'Sea Temperature Rise', 'Pollution', users can click to expand subtopics." },
      isNew: true
    },
    {
      category: { zh: "2025年新功能", en: "2025 New Features" },
      name: { zh: "互动音频模式", en: "Interactive Audio Mode" },
      description: { zh: "在音频概述播放中加入，用户可中途提问，AI 实时响应（Beta 功能）。", en: "Join during audio overview playback, users can ask questions mid-way, AI responds in real-time (Beta feature)." },
      example: { zh: "播放 5 分钟音频概述时，用户提问'这个概念的例子是什么？'，AI 暂停并回答。", en: "During 5-minute audio overview playback, user asks 'What are examples of this concept?' AI pauses and responds." },
      isNew: true
    },
    {
      category: { zh: "2025年新功能", en: "2025 New Features" },
      name: { zh: "移动应用", en: "Mobile App" },
      description: { zh: "iOS 和 Android 应用，支持随时访问笔记本、上传来源和生成输出。", en: "iOS and Android apps supporting anytime access to notebooks, source uploads, and output generation." },
      example: { zh: "在手机上上传会议录音，生成摘要，例如在通勤时创建音频概述。", en: "Upload meeting recordings on phone, generate summaries, e.g., create audio overviews during commute." },
      isNew: true
    },
    {
      category: { zh: "2025年新功能", en: "2025 New Features" },
      name: { zh: "公共分享", en: "Public Sharing" },
      description: { zh: "通过单一链接分享 AI 生成的笔记本，支持团队协作和公开访问。", en: "Share AI-generated notebooks through single links, supporting team collaboration and public access." },
      example: { zh: "创建项目笔记本，生成分享链接，例如团队成员通过链接查看思维导图和音频。", en: "Create project notebook, generate sharing link, e.g., team members view mind maps and audio through link." },
      isNew: true
    },
    {
      category: { zh: "2025年新功能", en: "2025 New Features" },
      name: { zh: "视频概述", en: "Video Overviews" },
      description: { zh: "生成叙述式幻灯片视频，作为音频概述的视觉替代。AI 创建图像、图表、引用和数字来解释数据。", en: "Generate narrative slide videos as visual alternatives to audio overviews. AI creates images, charts, citations, and numbers to explain data." },
      example: { zh: "上传科学论文，生成视频概述，例如'针对初学者的视频，解释论文中的图表'。", en: "Upload scientific paper, generate video overview, e.g., 'Beginner-friendly video explaining charts in the paper.'" },
      isNew: true
    },
    {
      category: { zh: "2025年新功能", en: "2025 New Features" },
      name: { zh: "NotebookLM Plus", en: "NotebookLM Plus" },
      description: { zh: "付费计划，提供更高限额、额外功能如增强协作和优先访问新特性。", en: "Paid plan offering higher limits, additional features like enhanced collaboration and priority access to new features." },
      example: { zh: "企业用户使用 Plus 版生成无限音频概述，例如在团队项目中分享高级思维导图。", en: "Enterprise users use Plus version to generate unlimited audio overviews, e.g., share advanced mind maps in team projects." },
      isNew: true
    }
  ];

  const getCategoryIcon = (categoryName: string) => {
    const icons: Record<string, React.ReactElement> = {
      "Core Features": <BookOpen className="w-5 h-5" />,
      "核心功能": <BookOpen className="w-5 h-5" />,
      "2025 New Features": <Brain className="w-5 h-5" />,
      "2025年新功能": <Brain className="w-5 h-5" />
    };
    return icons[categoryName] || <FileText className="w-5 h-5" />;
  };

  const getFeatureIcon = (featureName: string) => {
    if (featureName.includes("音频") || featureName.includes("Audio")) {
      return <Mic className="w-4 h-4" />;
    }
    if (featureName.includes("视频") || featureName.includes("Video")) {
      return <Video className="w-4 h-4" />;
    }
    if (featureName.includes("分享") || featureName.includes("Sharing")) {
      return <Share className="w-4 h-4" />;
    }
    if (featureName.includes("聊天") || featureName.includes("Chat")) {
      return <MessageCircle className="w-4 h-4" />;
    }
    return <FileText className="w-4 h-4" />;
  };

  const groupedFeatures = features.reduce((acc: Record<string, FeatureData[]>, feature) => {
    const category = getText(feature.category);
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(feature);
    return acc;
  }, {});

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <header className="text-center mb-12">
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200"
              aria-label={currentLang === "zh" ? "Switch to English" : "切换到中文"}
            >
              <Globe className="w-4 h-4 text-blue-600" />
              <span className="font-medium text-gray-700">
                {currentLang === "zh" ? "EN" : "中文"}
              </span>
            </button>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            {getText(headerText)}
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {getText(introText)}
          </p>
        </header>

        <div className="space-y-12">
          {Object.entries(groupedFeatures).map(([category, categoryFeatures]) => (
            <section key={category} className="space-y-6">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white">
                  {getCategoryIcon(category)}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                  {category}
                </h2>
                {category.includes("2025") && (
                  <span className="px-3 py-1 bg-gradient-to-r from-emerald-400 to-cyan-400 text-white text-sm font-semibold rounded-full">
                    NEW
                  </span>
                )}
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {categoryFeatures.map((feature, index) => (
                  <article 
                    key={index}
                    className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200 group"
                  >
                    <div className="p-6">
                      <div className="flex items-start gap-3 mb-4">
                        <div className="p-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg group-hover:from-blue-200 group-hover:to-purple-200 transition-colors duration-300">
                          {getFeatureIcon(getText(feature.name))}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg text-gray-800 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                            {getText(feature.name)}
                          </h3>
                          {feature.isNew && (
                            <span className="inline-block px-2 py-1 bg-gradient-to-r from-emerald-400 to-cyan-400 text-white text-xs font-semibold rounded-full">
                              {currentLang === "zh" ? "新功能" : "NEW"}
                            </span>
                          )}
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {getText(feature.description)}
                      </p>

                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 border-l-4 border-blue-400">
                        <h4 className="font-semibold text-sm text-blue-800 mb-2">
                          {currentLang === "zh" ? "具体实例：" : "Example:"}
                        </h4>
                        <p className="text-sm text-blue-700 leading-relaxed">
                          {getText(feature.example)}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>

        <footer className="mt-16 text-center">
          <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
            <p className="text-gray-600 text-lg mb-4">
              {currentLang === "zh" 
                ? "这些功能使 NotebookLM 成为强大的 AI 助手，适用于研究、学习和协作。2025 年的更新主要聚焦于多媒体输出、多语言支持和用户体验提升。"
                : "These features make NotebookLM a powerful AI assistant for research, learning, and collaboration. 2025 updates focus primarily on multimedia output, multilingual support, and user experience enhancement."
              }
            </p>
            <p className="text-sm text-gray-500">
              {currentLang === "zh" 
                ? "如需更多详细信息，可进一步探索官方页面。"
                : "For more details, explore the official pages further."
              }
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}