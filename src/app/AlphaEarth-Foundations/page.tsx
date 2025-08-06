"use client"

import React, { useState, useEffect } from 'react';
import { ChevronRight, Globe, Brain, Satellite, Users, BookOpen, TrendingUp, Shield, ChevronDown, ChevronUp, Languages, Menu, X, ExternalLink, MapPin, Zap, Database, Cloud, Lock, Eye } from 'lucide-react';

// TypeScript Interfaces
interface LanguageText {
  zh: string;
  en: string;
}

interface SectionData {
  id: string;
  title: LanguageText;
  icon: React.ReactElement;
  content: LanguageText;
  subsections?: SubsectionData[];
}

interface SubsectionData {
  title: LanguageText;
  content: LanguageText;
  highlights?: LanguageText[];
}

interface TableData {
  headers: LanguageText[];
  rows: Array<{
    cells: LanguageText[];
  }>;
}

interface FeatureCard {
  icon: React.ReactElement;
  title: LanguageText;
  description: LanguageText;
  stat?: LanguageText;
}

const AlphaEarthFoundations: React.FC = () => {
  const [currentLang, setCurrentLang] = useState<'zh' | 'en'>('zh');
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / scrollHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getText = (text: LanguageText): string => text[currentLang];

  const toggleSection = (sectionId: string): void => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  // Header content
  const headerContent: LanguageText = {
    zh: "AlphaEarth Foundations：对学生学习和地理信息系统相关专业的影响",
    en: "AlphaEarth Foundations: Impact on Student Learning and GIS-Related Professions"
  };

  const executiveSummary: LanguageText = {
    zh: "AlphaEarth Foundations（AEF）是谷歌DeepMind推出的一项突破性人工智能模型，其功能类似于'虚拟卫星'，通过将海量的地球观测数据整合为紧凑且高度精确的'嵌入'表示，从而提供前所未有的全球洞察能力。",
    en: "AlphaEarth Foundations (AEF) is a breakthrough AI model from Google DeepMind that functions like a 'virtual satellite', providing unprecedented global insights by integrating massive Earth observation data into compact and highly accurate 'embedding' representations."
  };

  // Feature cards data
  const featureCards: FeatureCard[] = [
    {
      icon: <Satellite className="w-6 h-6" />,
      title: { zh: "虚拟卫星", en: "Virtual Satellite" },
      description: { zh: "处理和融合海量地球观测数据", en: "Process and fuse massive Earth observation data" },
      stat: { zh: "10x10米精度", en: "10x10m precision" }
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: { zh: "数据压缩", en: "Data Compression" },
      description: { zh: "存储空间减少16倍，成本大幅降低", en: "16x storage reduction, significant cost savings" },
      stat: { zh: "16倍效率", en: "16x efficiency" }
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: { zh: "AI准确性", en: "AI Accuracy" },
      description: { zh: "错误率平均降低24%", en: "24% average error reduction" },
      stat: { zh: "24%提升", en: "24% improvement" }
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: { zh: "全球覆盖", en: "Global Coverage" },
      description: { zh: "连续时间能力，实时追踪变化", en: "Continuous-time capability, real-time change tracking" },
      stat: { zh: "全球范围", en: "Global scale" }
    }
  ];

  // Main sections data
  const sections: SectionData[] = [
    {
      id: "introduction",
      title: { zh: "1. AlphaEarth Foundations 简介", en: "1. Introduction to AlphaEarth Foundations" },
      icon: <Satellite className="w-5 h-5" />,
      content: {
        zh: "AlphaEarth Foundations是地理空间智能的新时代。作为谷歌DeepMind开发的先进AI模型，它通过整合来自各种来源的数据，生成地球表面状况的全面、最新摘要。",
        en: "AlphaEarth Foundations represents a new era in geospatial intelligence. As an advanced AI model developed by Google DeepMind, it generates comprehensive, up-to-date summaries of Earth's surface conditions by integrating data from various sources."
      },
      subsections: [
        {
          title: { zh: "虚拟卫星概念", en: "Virtual Satellite Concept" },
          content: {
            zh: "AEF被称为'虚拟卫星'，因为它通过整合和合成数据，而非物理轨道卫星，提供地球观测能力。",
            en: "AEF is called a 'virtual satellite' because it provides Earth observation capabilities through data integration and synthesis, rather than physical orbital satellites."
          },
          highlights: [
            { zh: "处理海量地球观测数据", en: "Process massive Earth observation data" },
            { zh: "生成全面的地表摘要", en: "Generate comprehensive surface summaries" },
            { zh: "克服物理卫星限制", en: "Overcome physical satellite limitations" }
          ]
        },
        {
          title: { zh: "核心技术创新", en: "Core Technical Innovations" },
          content: {
            zh: "AEF采用时空精度(STP)架构和嵌入场模型，将多模态数据编码为紧凑的64维向量。",
            en: "AEF employs Spatio-Temporal Precision (STP) architecture and embedding field models to encode multimodal data into compact 64-dimensional vectors."
          },
          highlights: [
            { zh: "嵌入场模型技术", en: "Embedding field model technology" },
            { zh: "STP神经网络架构", en: "STP neural network architecture" },
            { zh: "多源数据融合能力", en: "Multi-source data fusion capability" }
          ]
        }
      ]
    },
    {
      id: "education",
      title: { zh: "2. 改变学生学习", en: "2. Transforming Student Learning" },
      icon: <BookOpen className="w-5 h-5" />,
      content: {
        zh: "AEF通过数据民主化和将教学重点从数据处理转向问题解决，极大地改变了教育格局。",
        en: "AEF dramatically transforms the educational landscape through data democratization and shifting teaching focus from data processing to problem-solving."
      },
      subsections: [
        {
          title: { zh: "数据民主化", en: "Data Democratization" },
          content: {
            zh: "通过Google Earth Engine集成，学生现在可以访问和分析全球卫星数据，无需管理原始图像或执行密集预处理。",
            en: "Through Google Earth Engine integration, students can now access and analyze global satellite data without managing raw images or performing intensive preprocessing."
          },
          highlights: [
            { zh: "降低技术门槛", en: "Lower technical barriers" },
            { zh: "平等获取高质量数据", en: "Equal access to quality data" },
            { zh: "专注于分析而非处理", en: "Focus on analysis over processing" }
          ]
        },
        {
          title: { zh: "基于问题的学习", en: "Problem-Based Learning" },
          content: {
            zh: "学生可以应对现实世界的环境和社会挑战，如监测森林砍伐、追踪城市增长和评估水资源。",
            en: "Students can tackle real-world environmental and social challenges such as monitoring deforestation, tracking urban growth, and assessing water resources."
          },
          highlights: [
            { zh: "真实世界项目实践", en: "Real-world project practice" },
            { zh: "跨学科协作", en: "Interdisciplinary collaboration" },
            { zh: "培养批判性思维", en: "Develop critical thinking" }
          ]
        }
      ]
    },
    {
      id: "professional",
      title: { zh: "3. 重塑GIS专业实践", en: "3. Reshaping GIS Professional Practice" },
      icon: <TrendingUp className="w-5 h-5" />,
      content: {
        zh: "AEF通过加速分析、拓展应用领域以及推动专业角色演变，重塑了GIS行业实践。",
        en: "AEF reshapes GIS industry practice by accelerating analysis, expanding application areas, and driving professional role evolution."
      },
      subsections: [
        {
          title: { zh: "加速分析决策", en: "Accelerated Analysis & Decision-Making" },
          content: {
            zh: "以前需要数周或数月才能完成的任务，现在可以在数天甚至数小时内完成。",
            en: "Tasks that previously took weeks or months can now be completed in days or even hours."
          },
          highlights: [
            { zh: "分析速度提升10倍以上", en: "10x+ analysis speed improvement" },
            { zh: "实时监测能力", en: "Real-time monitoring capability" },
            { zh: "成本大幅降低", en: "Significant cost reduction" }
          ]
        },
        {
          title: { zh: "应用领域拓展", en: "Application Domain Expansion" },
          content: {
            zh: "从环境监测到城市规划，从农业管理到灾害响应，AEF的应用范围广泛。",
            en: "From environmental monitoring to urban planning, from agricultural management to disaster response, AEF has wide-ranging applications."
          },
          highlights: [
            { zh: "保护与环境监测", en: "Conservation & environmental monitoring" },
            { zh: "农业与粮食安全", en: "Agriculture & food security" },
            { zh: "灾害响应与风险评估", en: "Disaster response & risk assessment" }
          ]
        }
      ]
    },
    {
      id: "future",
      title: { zh: "4. 未来展望", en: "4. Future Outlook" },
      icon: <Eye className="w-5 h-5" />,
      content: {
        zh: "AEF与大型语言模型的结合将使地理空间分析更加普及，预示着地球理解和决策制定新时代的到来。",
        en: "The combination of AEF with large language models will make geospatial analysis more accessible, heralding a new era of Earth understanding and decision-making."
      },
      subsections: [
        {
          title: { zh: "AI协同发展", en: "AI Synergistic Development" },
          content: {
            zh: "与Gemini等大型语言模型结合，用户将能使用自然语言提出复杂的地理空间问题。",
            en: "Combined with large language models like Gemini, users will be able to ask complex geospatial questions using natural language."
          },
          highlights: [
            { zh: "自然语言交互", en: "Natural language interaction" },
            { zh: "智能问答系统", en: "Intelligent Q&A systems" },
            { zh: "降低使用门槛", en: "Lower usage barriers" }
          ]
        },
        {
          title: { zh: "长期影响", en: "Long-term Impact" },
          content: {
            zh: "AEF被定位为地理空间科学的基础设施，将开启地球观测和环境建模的新研究途径。",
            en: "AEF is positioned as infrastructure for geospatial science, opening new research avenues in Earth observation and environmental modeling."
          },
          highlights: [
            { zh: "数字地球孪生", en: "Digital Earth twin" },
            { zh: "气候变化监测", en: "Climate change monitoring" },
            { zh: "可持续发展目标", en: "Sustainable development goals" }
          ]
        }
      ]
    }
  ];

  // Application areas table
  const applicationTable: TableData = {
    headers: [
      { zh: "应用领域", en: "Application Area" },
      { zh: "具体用例", en: "Specific Use Cases" },
      { zh: "受益者", en: "Beneficiaries" }
    ],
    rows: [
      {
        cells: [
          { zh: "保护与环境监测", en: "Conservation & Environmental Monitoring" },
          { zh: "森林砍伐监测、生态系统测绘、沙丘迁移追踪", en: "Deforestation monitoring, ecosystem mapping, dune migration tracking" },
          { zh: "联合国粮农组织、科学家、环保组织", en: "FAO, scientists, environmental organizations" }
        ]
      },
      {
        cells: [
          { zh: "农业", en: "Agriculture" },
          { zh: "作物健康追踪、水资源管理、土地利用变化", en: "Crop health tracking, water management, land use change" },
          { zh: "农民、食品生产商、农业部门", en: "Farmers, food producers, agricultural departments" }
        ]
      },
      {
        cells: [
          { zh: "城市规划", en: "Urban Planning" },
          { zh: "土地评估、发展趋势、绿地监测", en: "Land assessment, development trends, green space monitoring" },
          { zh: "城市规划师、地方政府、房地产公司", en: "Urban planners, local governments, real estate companies" }
        ]
      },
      {
        cells: [
          { zh: "灾害响应", en: "Disaster Response" },
          { zh: "损害评估、应急规划、风险分析", en: "Damage assessment, emergency planning, risk analysis" },
          { zh: "应急团队、保险公司、风险评估机构", en: "Emergency teams, insurance companies, risk assessors" }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation Header */}
      <header className="sticky top-1 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AlphaEarth Foundations
              </h1>
            </div>

            <div className="flex items-center space-x-4">
              {/* Language Toggle */}
              <button
                onClick={() => setCurrentLang(currentLang === 'zh' ? 'en' : 'zh')}
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                aria-label="Toggle language"
              >
                <Languages className="w-4 h-4" />
                <span className="font-medium">{currentLang === 'zh' ? 'EN' : '中文'}</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 py-4 border-t border-gray-200 dark:border-gray-700">
              <div className="space-y-2">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    {getText(section.title)}
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-pink-400/10" />
        <div className="container mx-auto px-4 py-16 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6">
              <Zap className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                {currentLang === 'zh' ? 'Google DeepMind 突破性技术' : 'Google DeepMind Breakthrough Technology'}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {getText(headerContent)}
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {getText(executiveSummary)}
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {featureCards.map((card, index) => (
                <div
                  key={index}
                  className="group p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex justify-center mb-3 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                    {card.icon}
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{getText(card.title)}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                    {getText(card.description)}
                  </p>
                  {card.stat && (
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {getText(card.stat)}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto space-y-8">
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Section Header */}
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full px-6 py-5 flex items-center justify-between bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 transition-colors"
                aria-expanded={expandedSections.has(section.id)}
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg text-white">
                    {section.icon}
                  </div>
                  <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                    {getText(section.title)}
                  </h2>
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {expandedSections.has(section.id) ? 
                    <ChevronUp className="w-5 h-5" /> : 
                    <ChevronDown className="w-5 h-5" />
                  }
                </div>
              </button>

              {/* Section Content */}
              <div className={`transition-all duration-500 ${expandedSections.has(section.id) ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <div className="p-6 space-y-6">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {getText(section.content)}
                  </p>

                  {/* Subsections */}
                  {section.subsections && (
                    <div className="space-y-4">
                      {section.subsections.map((subsection, idx) => (
                        <div key={idx} className="pl-4 border-l-4 border-gradient-to-b from-blue-500 to-purple-600">
                          <h3 className="font-semibold text-lg mb-2 text-gray-800 dark:text-gray-100">
                            {getText(subsection.title)}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 mb-3">
                            {getText(subsection.content)}
                          </p>
                          {subsection.highlights && (
                            <ul className="space-y-2">
                              {subsection.highlights.map((highlight, hidx) => (
                                <li key={hidx} className="flex items-start">
                                  <ChevronRight className="w-4 h-4 mr-2 mt-0.5 text-blue-500 flex-shrink-0" />
                                  <span className="text-sm text-gray-600 dark:text-gray-400">
                                    {getText(highlight)}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </section>
          ))}

          {/* Application Areas Table */}
          <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {currentLang === 'zh' ? '应用领域概览' : 'Application Areas Overview'}
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    {applicationTable.headers.map((header, idx) => (
                      <th key={idx} className="px-4 py-3 text-left font-semibold text-gray-800 dark:text-gray-200">
                        {getText(header)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {applicationTable.rows.map((row, ridx) => (
                    <tr key={ridx} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors">
                      {row.cells.map((cell, cidx) => (
                        <td key={cidx} className="px-4 py-3 text-gray-600 dark:text-gray-400">
                          {getText(cell)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Key Technologies Card */}
          <section className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-6">
              {currentLang === 'zh' ? '核心技术优势' : 'Core Technical Advantages'}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <Database className="w-6 h-6 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">
                      {currentLang === 'zh' ? '嵌入场模型' : 'Embedding Field Model'}
                    </h3>
                    <p className="text-sm text-white/80">
                      {currentLang === 'zh' ? 
                        '将多模态数据编码为64维向量，存储效率提升16倍' : 
                        'Encode multimodal data into 64-dimensional vectors, 16x storage efficiency'}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Brain className="w-6 h-6 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">
                      {currentLang === 'zh' ? 'STP架构' : 'STP Architecture'}
                    </h3>
                    <p className="text-sm text-white/80">
                      {currentLang === 'zh' ? 
                        '时空精度神经网络，同时处理空间、时间和分辨率维度' : 
                        'Spatio-Temporal Precision network processing space, time and resolution dimensions'}
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Cloud className="w-6 h-6 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">
                      {currentLang === 'zh' ? '云端集成' : 'Cloud Integration'}
                    </h3>
                    <p className="text-sm text-white/80">
                      {currentLang === 'zh' ? 
                        '通过Google Earth Engine提供即用型数据集' : 
                        'Ready-to-use datasets via Google Earth Engine'}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="w-6 h-6 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">
                      {currentLang === 'zh' ? '鲁棒性' : 'Robustness'}
                    </h3>
                    <p className="text-sm text-white/80">
                      {currentLang === 'zh' ? 
                        '即使在数据稀缺或云层覆盖情况下也能准确测绘' : 
                        'Accurate mapping even with sparse data or cloud coverage'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl shadow-xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">
              {currentLang === 'zh' ? '准备好拥抱地理空间AI的未来了吗？' : 'Ready to Embrace the Future of Geospatial AI?'}
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              {currentLang === 'zh' ? 
                'AlphaEarth Foundations正在改变我们理解和监测地球的方式。加入这场革命，释放地理空间智能的力量。' : 
                'AlphaEarth Foundations is transforming how we understand and monitor Earth. Join the revolution and unlock the power of geospatial intelligence.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://developers.google.com/earth-engine"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                {currentLang === 'zh' ? '访问 Google Earth Engine' : 'Visit Google Earth Engine'}
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
              <a
                href="https://deepmind.google/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow"
              >
                {currentLang === 'zh' ? '了解更多 DeepMind' : 'Learn More About DeepMind'}
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-white mb-4">
                {currentLang === 'zh' ? '关于 AlphaEarth' : 'About AlphaEarth'}
              </h3>
              <p className="text-sm">
                {currentLang === 'zh' ? 
                  'Google DeepMind的突破性AI模型，通过先进的地球观测技术为全球提供前所未有的洞察力。' : 
                  "Google DeepMind's breakthrough AI model providing unprecedented global insights through advanced Earth observation technology."}
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">
                {currentLang === 'zh' ? '关键特性' : 'Key Features'}
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  {currentLang === 'zh' ? '10x10米全球精度' : '10x10m global precision'}
                </li>
                <li className="flex items-center">
                  <Zap className="w-4 h-4 mr-2" />
                  {currentLang === 'zh' ? '实时变化追踪' : 'Real-time change tracking'}
                </li>
                <li className="flex items-center">
                  <Database className="w-4 h-4 mr-2" />
                  {currentLang === 'zh' ? '16倍数据压缩' : '16x data compression'}
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">
                {currentLang === 'zh' ? '资源链接' : 'Resources'}
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://earthengine.google.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Google Earth Engine
                  </a>
                </li>
                <li>
                  <a href="https://deepmind.google/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Google DeepMind
                  </a>
                </li>
                <li>
                  <a href="https://ai.google/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Google AI
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>
              {currentLang === 'zh' ? 
                '© 2025 AlphaEarth Foundations 教育资源。基于公开信息整理。' : 
                '© 2025 AlphaEarth Foundations Educational Resource. Based on publicly available information.'}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AlphaEarthFoundations;