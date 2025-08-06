"use client"

import React, { useState } from 'react';
import { Play, Calculator, BookOpen, Search, Mic, Heart, Globe, Users, Zap, ArrowRight, ExternalLink } from 'lucide-react';

interface LanguageText {
  zh: string;
  en: string;
}

interface YouTubeLink {
  title: LanguageText;
  url: string;
}

interface FeatureData {
  id: string;
  category: LanguageText;
  name: LanguageText;
  description: LanguageText;
  keyFeatures: LanguageText[];
  ageRange: LanguageText;
  youtubeLinks: YouTubeLink[];
  color: string;
  icon: string;
  isNew?: boolean;
}

const MicrosoftLearningAccelerators: React.FC = () => {
  const [currentLang, setCurrentLang] = useState<'zh' | 'en'>('zh');

  const getText = (text: LanguageText): string => text[currentLang];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'calculator':
        return <Calculator className="w-8 h-8" />;
      case 'book':
        return <BookOpen className="w-8 h-8" />;
      case 'search':
        return <Search className="w-8 h-8" />;
      case 'mic':
        return <Mic className="w-8 h-8" />;
      case 'heart':
        return <Heart className="w-8 h-8" />;
      default:
        return <Zap className="w-8 h-8" />;
    }
  };

  const heroContent = {
    title: {
      zh: "微软学习加速器",
      en: "Microsoft Learning Accelerators"
    },
    subtitle: {
      zh: "免费的AI增强工具，内置于Microsoft 365和Microsoft Teams教育版",
      en: "Free AI-enhanced tools built into Microsoft 365 and Microsoft Teams for Education"
    },
    description: {
      zh: "帮助教育工作者生成练习题并深入了解学生进步的智能教学工具套件",
      en: "A suite of intelligent teaching tools that help educators generate practice problems and gain insights into student progress"
    }
  };

  const features: FeatureData[] = [
    {
      id: 'math-progress',
      category: {
        zh: "数学学习",
        en: "Mathematics"
      },
      name: {
        zh: "数学进步",
        en: "Math Progress"
      },
      description: {
        zh: "微软最新的学习加速器，支持自动生成数学练习题、智能评分和错误分析",
        en: "Microsoft's newest learning accelerator with automatic math problem generation, intelligent grading, and error analysis"
      },
      keyFeatures: [
        {
          zh: "AI生成各类数学题目",
          en: "AI-generated math problems"
        },
        {
          zh: "自动评分和错误分类",
          en: "Automatic grading & error categorization"
        },
        {
          zh: "丰富的数学计算器",
          en: "Rich math calculator"
        },
        {
          zh: "解题步骤展示",
          en: "Solution step display"
        }
      ],
      ageRange: {
        zh: "适合9-18岁学生（4年级到高中）",
        en: "Ages 9-18 (4th grade through high school)"
      },
      youtubeLinks: [
        {
          title: {
            zh: "如何在Microsoft Teams教育版中使用数学进步",
            en: "How to use Math Progress in Microsoft Teams for Education"
          },
          url: "https://www.youtube.com/watch?v=dN9rsfQKQ_g&list=PLiluTszfwwMLaWAfwtUvrvgx_CpFqG8gf&index=3"
        }
      ],
      color: "from-blue-500 to-purple-600",
      icon: "calculator",
      isNew: true
    },
    {
      id: 'reading-progress',
      category: {
        zh: "阅读流畅性",
        en: "Reading Fluency"
      },
      name: {
        zh: "阅读进步与阅读教练",
        en: "Reading Progress & Reading Coach"
      },
      description: {
        zh: "支持116种语言和地区的阅读流畅性工具，提供个性化阅读练习",
        en: "Reading fluency tool supporting 116 languages and locales with personalized reading practice"
      },
      keyFeatures: [
        {
          zh: "支持116种语言朗读",
          en: "116 languages supported"
        },
        {
          zh: "AI驱动的故事创建",
          en: "AI-powered story creation"
        },
        {
          zh: "实时发音反馈",
          en: "Real-time pronunciation feedback"
        },
        {
          zh: "沉浸式阅读体验",
          en: "Immersive reading experience"
        }
      ],
      ageRange: {
        zh: "适合所有年龄段学生",
        en: "Suitable for all age groups"
      },
      youtubeLinks: [
        {
          title: {
            zh: "如何在Microsoft Teams中使用阅读进步和阅读教练（2023）",
            en: "How to use Reading Progress and Reading Coach in Microsoft Teams (2023)"
          },
          url: "https://www.youtube.com/watch?v=xVaHTlDZGLA&list=PLiluTszfwwMLaWAfwtUvrvgx_CpFqG8gf&index=1"
        },
        {
          title: {
            zh: "如何使用AI驱动的微软阅读教练进行个性化阅读练习",
            en: "How to use the AI-powered Microsoft Reading Coach for personalized reading practice"
          },
          url: "https://www.youtube.com/watch?v=kMTl7wyCyN4&list=PLiluTszfwwMLaWAfwtUvrvgx_CpFqG8gf&index=7"
        }
      ],
      color: "from-green-500 to-teal-600",
      icon: "book"
    },
    {
      id: 'search-progress',
      category: {
        zh: "信息素养",
        en: "Information Literacy"
      },
      name: {
        zh: "搜索进步",
        en: "Search Progress"
      },
      description: {
        zh: "帮助学生辨别信息来源可信度和有效搜索的信息素养工具",
        en: "Information literacy tool helping students discern source credibility and search effectively"
      },
      keyFeatures: [
        {
          zh: "搜索过程可视化",
          en: "Search process visibility"
        },
        {
          zh: "News Guard可靠性评级",
          en: "News Guard reliability ratings"
        },
        {
          zh: "无广告安全环境",
          en: "Ad-free safe environment"
        },
        {
          zh: "超级参考书目生成",
          en: "Super bibliography generation"
        }
      ],
      ageRange: {
        zh: "适合中学及以上学生",
        en: "Middle school and above"
      },
      youtubeLinks: [
        {
          title: {
            zh: "如何在Microsoft Teams中使用搜索进步 | 学习加速器系列",
            en: "How to use Search Progress in Microsoft Teams | Learning Accelerators series"
          },
          url: "https://www.youtube.com/watch?v=L-ucTjxgO5w&list=PLiluTszfwwMLaWAfwtUvrvgx_CpFqG8gf&index=4"
        }
      ],
      color: "from-orange-500 to-red-600",
      icon: "search"
    },
    {
      id: 'speaker-progress',
      category: {
        zh: "演讲技能",
        en: "Communication Skills"
      },
      name: {
        zh: "演讲进步",
        en: "Speaker Progress"
      },
      description: {
        zh: "帮助学生练习沟通和演示技能的AI增强学习工具，提供个性化反馈",
        en: "AI-enhanced learning tool helping students practice communication and presentation skills with personalized feedback"
      },
      keyFeatures: [
        {
          zh: "实时演讲指导",
          en: "Real-time speech coaching"
        },
        {
          zh: "AI生成排练报告",
          en: "AI-generated rehearsal reports"
        },
        {
          zh: "语调和语速分析",
          en: "Pace and pitch analysis"
        },
        {
          zh: "肢体语言反馈",
          en: "Body language feedback"
        }
      ],
      ageRange: {
        zh: "适合所有年龄段学生",
        en: "Suitable for all age groups"
      },
      youtubeLinks: [
        {
          title: {
            zh: "如何在Microsoft Teams教育版中使用演讲进步",
            en: "How to use Speaker Progress in Microsoft Teams for Education"
          },
          url: "https://www.youtube.com/watch?v=GzwwCD0bfOc&list=PLiluTszfwwMLaWAfwtUvrvgx_CpFqG8gf&index=2"
        }
      ],
      color: "from-purple-500 to-pink-600",
      icon: "mic",
      isNew: true
    },
    {
      id: 'reflect',
      category: {
        zh: "学生福祉",
        en: "Student Wellbeing"
      },
      name: {
        zh: "反思",
        en: "Reflect"
      },
      description: {
        zh: "Microsoft Teams中的签到功能，帮助教育工作者了解学生感受和福祉",
        en: "Check-in feature in Microsoft Teams helping educators gauge student feelings and well-being"
      },
      keyFeatures: [
        {
          zh: "情绪表情符号选择",
          en: "Emotion emoji selection"
        },
        {
          zh: "班级情绪洞察",
          en: "Class mood insights"
        },
        {
          zh: "大脑休息活动",
          en: "Brain break activities"
        },
        {
          zh: "LMS集成支持",
          en: "LMS integration support"
        }
      ],
      ageRange: {
        zh: "适合所有年龄段学生",
        en: "Suitable for all age groups"
      },
      youtubeLinks: [
        {
          title: {
            zh: "如何在Microsoft Teams中使用反思",
            en: "How to use Reflect in Microsoft Teams"
          },
          url: "https://www.youtube.com/watch?v=eMJfByH1ZN0&list=PLiluTszfwwMLaWAfwtUvrvgx_CpFqG8gf&index=5"
        },
        {
          title: {
            zh: "Microsoft反思的5大新功能",
            en: "Top 5 new features in Microsoft Reflect"
          },
          url: "https://www.youtube.com/watch?v=5nNn6yI8oMw&list=PLiluTszfwwMLaWAfwtUvrvgx_CpFqG8gf&index=6"
        }
      ],
      color: "from-pink-500 to-rose-600",
      icon: "heart"
    }
  ];

  const keyHighlights = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: {
        zh: "全球可用",
        en: "Globally Available"
      },
      description: {
        zh: "支持多种语言和地区的教学需求",
        en: "Supporting teaching needs across multiple languages and regions"
      }
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: {
        zh: "团队集成",
        en: "Teams Integration"
      },
      description: {
        zh: "直接集成到Microsoft Teams教育版",
        en: "Directly integrated into Microsoft Teams for Education"
      }
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: {
        zh: "AI驱动",
        en: "AI-Powered"
      },
      description: {
        zh: "利用人工智能提供个性化学习体验",
        en: "Leveraging AI for personalized learning experiences"
      }
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4" role="navigation" aria-label="Main navigation">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">
                {getText(heroContent.title)}
              </h1>
            </div>
            <button
              onClick={() => setCurrentLang(currentLang === 'zh' ? 'en' : 'zh')}
              className="px-4 py-2 bg-blue-100 hover:bg-blue-200 rounded-lg text-blue-700 font-medium transition-colors duration-200"
              aria-label={currentLang === 'zh' ? 'Switch to English' : '切换到中文'}
            >
              {currentLang === 'zh' ? 'English' : '中文'}
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            {getText(heroContent.title)}
          </h1>
          <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto">
            {getText(heroContent.subtitle)}
          </p>
          <p className="text-lg text-gray-500 max-w-4xl mx-auto mb-8">
            {getText(heroContent.description)}
          </p>
          
          {/* Key Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            {keyHighlights.map((highlight, index) => (
              <div key={index} className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                  {highlight.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{getText(highlight.title)}</h3>
                <p className="text-sm text-gray-600 text-center">{getText(highlight.description)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          {currentLang === 'zh' ? '学习加速器工具' : 'Learning Accelerator Tools'}
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature) => (
            <article 
              key={feature.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Card Header */}
              <div className={`bg-gradient-to-r ${feature.color} p-6 text-white relative`}>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-white/20 rounded-lg">
                      {getIcon(feature.icon)}
                    </div>
                    <div>
                      <span className="text-sm font-medium opacity-90">{getText(feature.category)}</span>
                      <h3 className="text-2xl font-bold">{getText(feature.name)}</h3>
                    </div>
                  </div>
                  {feature.isNew && (
                    <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-semibold">
                      {currentLang === 'zh' ? '新功能' : 'NEW'}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <p className="text-gray-600 mb-4">{getText(feature.description)}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    {currentLang === 'zh' ? '主要功能：' : 'Key Features:'}
                  </h4>
                  <ul className="space-y-2">
                    {feature.keyFeatures.map((keyFeature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <ArrowRight className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                        {getText(keyFeature)}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6 p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">{getText(feature.ageRange)}</span>
                </div>

                {/* YouTube Links */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 flex items-center">
                    <Play className="w-4 h-4 text-red-500 mr-2" />
                    {currentLang === 'zh' ? '视频教程：' : 'Video Tutorials:'}
                  </h4>
                  {feature.youtubeLinks.map((video, index) => (
                    <a
                      key={index}
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 bg-red-50 hover:bg-red-100 rounded-lg transition-colors group/video"
                      aria-label={`Watch tutorial: ${getText(video.title)}`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                          <Play className="w-4 h-4 text-white ml-0.5" />
                        </div>
                        <span className="text-sm font-medium text-gray-800 group-hover/video:text-red-700">
                          {getText(video.title)}
                        </span>
                      </div>
                      <ExternalLink className="w-4 h-4 text-red-500 opacity-0 group-hover/video:opacity-100 transition-opacity" />
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {currentLang === 'zh' ? '开始使用Microsoft学习加速器' : 'Get Started with Microsoft Learning Accelerators'}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {currentLang === 'zh' 
              ? '在Microsoft Teams教育版中免费访问这些强大的AI工具' 
              : 'Access these powerful AI tools for free in Microsoft Teams for Education'}
          </p>
          <a
            href="https://www.microsoft.com/en-us/education/products/teams"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-50 transition-colors shadow-lg"
          >
            {currentLang === 'zh' ? '访问Microsoft Teams教育版' : 'Visit Microsoft Teams for Education'}
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12" role="contentinfo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-semibold">{getText(heroContent.title)}</span>
            </div>
            <p className="text-gray-400">
              {currentLang === 'zh' 
                ? '© 2024 Microsoft Corporation. 保留所有权利。' 
                : '© 2024 Microsoft Corporation. All rights reserved.'}
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default MicrosoftLearningAccelerators;