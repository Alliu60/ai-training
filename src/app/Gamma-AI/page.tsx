"use client";

import React, { useState, useMemo } from 'react';

// Data object containing all the text in both Chinese and English
const contentData = {
  header: {
    title: {
      zh: "Gamma 应用深度解析",
      en: "In-Depth Analysis of the Gamma App"
    },
    subtitle: {
      zh: "最新功能、AI 核心与实战指南",
      en: "Latest Features, AI Core, and Practical Guide"
    },
    toggle: {
      zh: "切换到英文",
      en: "Switch to Chinese"
    }
  },
  sections: [
    {
      id: "summary",
      title: {
        zh: "第一部分：执行摘要",
        en: "Part One: Executive Summary"
      },
      subtitle: {
        zh: "Gamma 在 AI 驱动的沟通新时代中的定位",
        en: "Gamma's Positioning in the New Era of AI-Driven Communication"
      },
      points: [
        {
          title: { zh: "核心价值主张", en: "Core Value Proposition" },
          text: {
            zh: "Gamma.app 作为一个开创性的 AI 原生平台，其核心价值在于彻底加速演示文稿、文档和网站的创建过程。它将自身定位为用户的 AI 设计伙伴，而非仅仅一个工具。通过自动化繁琐的格式化和设计任务，Gamma 使得用户能够将精力完全集中在思想的提炼和叙事的构建上。",
            en: "As a pioneering AI-native platform, Gamma.app&rsquo;s core value is to radically accelerate the creation process of presentations, documents, and websites. It positions itself as a user&rsquo;s AI design partner, not just a tool. By automating tedious formatting and design tasks, Gamma allows users to focus entirely on refining their ideas and constructing their narrative."
          }
        },
        {
          title: { zh: "目标受众与关键用例", en: "Target Audience & Key Use Cases" },
          text: {
            zh: "Gamma 的主要用户群体包括顾问、市场营销人员、销售专家、教育工作者以及初创公司创始人。这些专业人士需要在紧迫的时间内制作出精美、面向客户或公众的内容。关键用例包括商业提案、客户报告、市场营销材料和内部培训内容。",
            en: "Gamma&rsquo;s primary user base includes consultants, marketers, sales professionals, educators, and startup founders. These professionals need to produce polished, client-facing or public content under tight deadlines. Key use cases include business proposals, client reports, marketing materials, and internal training content."
          }
        },
        {
          title: { zh: "战略市场定位", en: "Strategic Market Positioning" },
          text: {
            zh: "在竞争激烈的办公软件市场中，Gamma 占据了一个明确的战略位置。它被视为“速度与便利”的首选，为传统工具（如 PowerPoint）的手动、耗时特性提供了一个强大的替代方案。其市场定位的核心是：为用户提供一种全新的、以网络为中心的内容创建与分享体验。",
            en: "In the competitive office software market, Gamma occupies a clear strategic position. It is positioned as the top choice for &ldquo;speed and convenience,&rdquo; offering a powerful alternative to the manual, time-consuming nature of traditional tools like PowerPoint. The core of its market positioning is to provide users with a new, web-centric content creation and sharing experience."
          }
        }
      ]
    },
    {
      id: "clarification",
      title: { zh: "第二部分：关键澄清", en: "Part Two: Key Clarification" },
      subtitle: { zh: "识别真正的 Gamma.app", en: "Identifying the Real Gamma.app" },
      points: [
        {
          title: { zh: "应对市场混淆", en: "Addressing Market Confusion" },
          text: {
            zh: "在深入研究之前，必须澄清本报告所分析的对象是且仅是那个通过官方域名 `gamma.app` 提供服务的 AI 内容创建平台。市场上存在多个使用“Gamma”名称或与其高度相似的应用，它们与真正的 `gamma.app` 平台并无关联，例如苹果应用商店中的“Mega AI”产品和 `gamma.design` 网站。",
            en: "Before diving deeper, it&rsquo;s crucial to clarify that this report analyzes the AI content creation platform available exclusively through the official domain `gamma.app`. Several apps in the market use the &ldquo;Gamma&rdquo; name or something similar, but they are not affiliated with the genuine `gamma.app` platform, such as the &ldquo;Mega AI&rdquo; product on the Apple App Store and the `gamma.design` website."
          }
        }
      ]
    },
    {
      id: "paradigm",
      title: { zh: "第三部分：Gamma 范式", en: "Part Three: The Gamma Paradigm" },
      subtitle: { zh: "解构基于“卡片”的架构与用户界面", en: "Deconstructing the “Card-Based” Architecture & UI" },
      points: [
        {
          title: { zh: "“卡片”：从“幻灯片”到根本性转变", en: "“Cards”: A Fundamental Shift from “Slides”" },
          text: {
            zh: "Gamma 的核心架构元素是“卡片”（Card），一个灵活、可扩展的内容容器，其高度会根据内容自动调整。这鼓励用户创建一种更流畅、类似网页的叙事结构，将他们从 PowerPoint 等工具固有的“矩形暴政”中解放出来。",
            en: "Gamma&rsquo;s core architectural element is the &ldquo;Card,&rdquo; a flexible, expandable content container whose height adjusts automatically based on its content. This encourages users to create a more fluid, web-like narrative structure, liberating them from the &ldquo;tyranny of the rectangle&rdquo; inherent in tools like PowerPoint."
          }
        },
        {
          title: { zh: "三种创作路径", en: "Three Creation Paths" },
          text: {
            zh: "Gamma 提供了三种创作方式：1. **AI 生成**：通过简单的文本提示生成完整初稿。 2. **粘贴文本**：AI 会智能地将粘贴的文本结构化为精美卡片。 3. **导入文件**：AI 会解析上传的 Word、PDF 或 PowerPoint 文件，并将其重新格式化为 Gamma 的原生卡片样式。",
            en: "Gamma offers three creation methods: 1. **Generate with AI**: Creates a complete first draft from a simple text prompt. 2. **Paste in Text**: The AI intelligently structures pasted text into beautiful cards. 3. **Import File**: The AI parses uploaded Word, PDF, or PowerPoint files and reformats them into Gamma&rsquo;s native card style."
          }
        }
      ]
    },
    {
      id: "ai_engine",
      title: { zh: "第四部分：AI 引擎", en: "Part Four: The AI Engine" },
      subtitle: { zh: "深入剖析 Gamma 的多模型智能层", en: "A Deep Dive into Gamma’s Multi-Model Intelligence Layer" },
      points: [
        {
          title: { zh: "作为智能调度者的 AI", en: "AI as an Intelligent Orchestrator" },
          text: {
            zh: "Gamma 的 AI 实力并非建立在单一模型之上，而是通过战略性地整合和调度业界最先进的多种 AI 模型来实现，包括来自 Anthropic, OpenAI, Google 等公司的模型。这使 Gamma 成为一个智能的 AI 能力聚合器。",
            en: "Gamma&rsquo;s AI strength isn&rsquo;t built on a single model but on the strategic integration and orchestration of various state-of-the-art AI models from companies like Anthropic, OpenAI, and Google. This makes Gamma an intelligent aggregator of AI capabilities."
          }
        },
        {
          title: { zh: "“与 AI 一同编辑”的副驾驶模式", en: "“Edit with AI” Copilot Mode" },
          text: {
            zh: "Gamma 提供了一个交互式的、基于聊天的编辑功能。用户可以通过自然语言指令来修改内容，例如输入“让这段话更简洁”或“为我找一张更合适的图片”，极大地提升了修改效率。",
            en: "Gamma provides an interactive, chat-based editing feature. Users can modify content with natural language commands, such as &ldquo;make this paragraph more concise&rdquo; or &ldquo;find a more suitable image for me,&rdquo; significantly improving editing efficiency."
          }
        },
        {
          title: { zh: "集成式 AI 图像生成器", en: "Integrated AI Image Generator" },
          text: {
            zh: "平台内建了一个强大的 AI 图像生成工具。用户无需离开当前工作流程，只需通过文本提示，即可即时创作出独一无二的、符合需求的图片。",
            en: "The platform has a powerful built-in AI image generation tool. Users can instantly create unique, requirement-compliant images via text prompts without leaving their current workflow."
          }
        }
      ]
    },
    {
      id: "visuals",
      title: { zh: "第五部分：视觉与互动大师", en: "Part Five: Visual & Interaction Master" },
      subtitle: { zh: "设计、多媒体与参与度", en: "Design, Multimedia, and Engagement" },
      points: [
        {
          title: { zh: "一键重塑风格与主题", en: "One-Click Restyling & Themes" },
          text: {
            zh: "用户可以在不改变任何内容的情况下，通过一次点击，瞬间切换整个作品的视觉主题。平台提供了丰富的主题库，包括近期新增的17个全新主题。",
            en: "Users can instantly switch the visual theme of their entire work with a single click without changing any content. The platform offers an extensive library of themes, including 17 new themes added recently."
          }
        },
        {
          title: { zh: "富媒体与应用嵌入", en: "Rich Media & App Embedding" },
          text: {
            zh: "Gamma 极大地扩展了“演示文稿”的边界，支持嵌入来自 YouTube, Loom, TikTok 的视频，以及 Figma, Miro, Airtable, Google Workspace 的互动应用。",
            en: "Gamma significantly expands the boundaries of a “presentation,” supporting embedded videos from YouTube, Loom, and TikTok, as well as interactive apps from Figma, Miro, Airtable, and Google Workspace."
          }
        }
      ]
    },
    {
      id: "latest_features",
      title: { zh: "第六部分：前沿动态 (2025年更新)", en: "Part Six: Frontier Dynamics (2025 Update)" },
      subtitle: { zh: "Gamma 最新功能发布解析", en: "Analysis of Gamma’s Latest Feature Releases" },
      points: [
        {
          title: { zh: "Pro 功能：卡片页眉和页脚", en: "Pro Feature: Card Headers & Footers" },
          text: {
            zh: "Pro 用户现在可以为每张卡片统一添加 Logo、自定义文本（如“机密文件”字样）以及卡片编号，这对于制作专业的企业级文档至关重要。",
            en: "Pro users can now add a uniform logo, custom text (e.g., &ldquo;Confidential&rdquo;), and card numbers to each card, which is crucial for creating professional, enterprise-grade documents."
          }
        },
        {
          title: { zh: "AI 图像编辑与动画", en: "AI Image Editing & Animation" },
          text: {
            zh: "用户现在可以对 AI 生成的图像进行编辑，如更换背景。Pro 用户还可以利用 AI 为静态图片添加动态効果，如脉冲、平移等。",
            en: "Users can now edit AI-generated images, such as changing the background. Pro users can also use AI to add dynamic effects like pulse and pan to static images."
          }
        },
        {
          title: { zh: "精细化内容风格调整", en: "Fine-Grained Content Style Adjustment" },
          text: {
            zh: "用户在 AI 生成内容时，可以明确指定所需的文本密度，例如选择“极简”风格，从而更好地控制输出结果。",
            en: "When generating content with AI, users can now specify the desired text density, such as selecting a “minimalist” style, to better control the output."
          }
        },
        {
          title: { zh: "跨作品复制卡片", en: "Copy Cards Across Decks" },
          text: {
            zh: "一项显著提升工作效率的功能。用户现在可以轻松地将一个 Gamma 作品中的一张或多张卡片，完整地复制到另一个作品中。",
            en: "A feature that significantly improves workflow efficiency. Users can now easily copy one or more cards from one Gamma project to another."
          }
        }
      ]
    },
    {
      id: "collaboration",
      title: { zh: "第七部分：协作、分发与分析", en: "Part Seven: Collaboration, Distribution & Analytics" },
      subtitle: { zh: "从创作到影响力衡量", en: "From Creation to Measuring Impact" },
      points: [
        {
          title: { zh: "实时团队协作", en: "Real-Time Team Collaboration" },
          text: {
            zh: "Gamma 支持团队成员在同一个项目上进行实时协作，功能包括同步共同编辑、添加评论和使用快速表情回应（主要面向付费计划）。",
            en: "Gamma supports real-time collaboration for team members on the same project, with features including synchronous co-editing, comments, and quick emoji reactions (primarily for paid plans)."
          }
        },
        {
          title: { zh: "导出选项及其兼容性", en: "Export Options & Compatibility" },
          text: {
            zh: "Gamma 允许导出为 PDF 或 PPTX 文件。然而，大量用户反馈指出，导出的 PPTX 文件经常会遇到格式错乱的问题，因为其“卡片”结构无法完美映射到 PowerPoint 的“幻灯片”结构上。",
            en: "Gamma allows exporting to PDF or PPTX files. However, significant user feedback indicates that exported PPTX files often suffer from formatting issues because its “card” structure cannot be perfectly mapped to PowerPoint&rsquo;s “slide” structure."
          }
        },
        {
          title: { zh: "内置分析功能", en: "Built-in Analytics" },
          text: {
            zh: "平台提供了内置的分析仪表板，用于追踪观众的参与度，包括总观看次数、每个观看者的互动情况，以及精确到卡片层级的参与度。",
            en: "The platform provides a built-in analytics dashboard to track audience engagement, including total views, individual viewer interactions, and engagement metrics down to the card level."
          }
        }
      ]
    }
  ],
  featureTable: {
    title: { zh: "第八部分：功能矩阵", en: "Part Eight: Feature Matrix" },
    subtitle: { zh: "功能、计划与 UI 位置对照", en: "Features, Plans & UI Location" },
    headers: [
      { zh: "功能类别", en: "Category" },
      { zh: "具体功能", en: "Feature" },
      { zh: "详细描述", en: "Description" },
      { zh: "适用计划", en: "Plan" },
    ],
    rows: [
      {
        category: { zh: "AI 生成", en: "AI Generation" },
        feature: { zh: "从提示生成", en: "Generate from Prompt" },
        description: { zh: "输入自然语言描述，AI 生成完整初稿。", en: "Input a natural language description, and the AI generates a full first draft." },
        plan: { zh: "所有计划", en: "All Plans" }
      },
      {
        category: { zh: "AI 编辑", en: "AI Editing" },
        feature: { zh: "与 AI 一同编辑", en: "Edit with AI" },
        description: { zh: "通过聊天式指令修改内容，如“缩短”、“改变语气”。", en: "Modify content via chat-like commands, e.g., “shorten,” “change tone.”" },
        plan: { zh: "所有计划", en: "All Plans" }
      },
      {
        category: { zh: "AI 图像", en: "AI Images" },
        feature: { zh: "图像生成与编辑", en: "Image Gen & Edit" },
        description: { zh: "在编辑器内通过文本提示生成和修改图像。", en: "Generate and modify images via text prompts within the editor." },
        plan: { zh: "所有计划 (Pro 增强)", en: "All (Pro Enhanced)" }
      },
      {
        category: { zh: "设计", en: "Design" },
        feature: { zh: "一键重塑风格", en: "One-Click Restyling" },
        description: { zh: "一次点击即可更换整个作品的主题。", en: "Change the entire project&rsquo;s theme with a single click." },
        plan: { zh: "所有计划", en: "All Plans" }
      },
      {
        category: { zh: "品牌化", en: "Branding" },
        feature: { zh: "页眉/页脚", en: "Headers/Footers" },
        description: { zh: "为卡片统一添加 Logo、文本和页码。", en: "Add a uniform logo, text, and page numbers to cards." },
        plan: { zh: "Pro", en: "Pro" }
      },
      {
        category: { zh: "互动", en: "Interactivity" },
        feature: { zh: "富媒体嵌入", en: "Media Embedding" },
        description: { zh: "嵌入视频、GIF、Figma/Miro 等应用。", en: "Embed videos, GIFs, and apps like Figma/Miro." },
        plan: { zh: "所有计划", en: "All Plans" }
      },
      {
        category: { zh: "分享", en: "Sharing" },
        feature: { zh: "导出为 PDF/PPTX", en: "Export to PDF/PPTX" },
        description: { zh: "导出为 PDF 或 PowerPoint。PPTX 兼容性有限。", en: "Export as PDF or PowerPoint. PPTX compatibility is limited." },
        plan: { zh: "所有计划", en: "All Plans" }
      },
      {
        category: { zh: "分析", en: "Analytics" },
        feature: { zh: "内置分析", en: "Built-in Analytics" },
        description: { zh: "追踪观看者的互动数据。", en: "Track audience engagement data." },
        plan: { zh: "所有计划 (Pro 增强)", en: "All (Pro Enhanced)" }
      }
    ]
  },
  strategicAnalysis: {
    title: { zh: "第九部分：战略分析", en: "Part Nine: Strategic Analysis" },
    subtitle: { zh: "市场定位与竞争展望", en: "Market Positioning & Competitive Outlook" },
    conclusion: {
      title: { zh: "最终结论与用户适用性建议", en: "Final Conclusion & User Suitability" },
      gamma: {
        title: { zh: "Gamma 最适合谁？", en: "Who is Gamma Best For?" },
        text: { 
          zh: "Gamma 是那些将**速度、现代美学和基于网络的互动性**置于首位的专业人士的理想选择。对于需要快速将想法原型化、为客户创建令人印象深刻的数字原生文档、或在短时间内制作出精美内容的顾问、销售和教育工作者来说，Gamma 提供的效率提升是革命性的。",
          en: "Gamma is the ideal choice for professionals who prioritize **speed, modern aesthetics, and web-based interactivity**. For consultants, sales teams, and educators who need to quickly prototype ideas, create impressive digital-native documents for clients, or produce polished content in a short amount of time, the efficiency gains offered by Gamma are revolutionary."
        }
      },
      others: {
        title: { zh: "谁应该考虑其他选择？", en: "Who Should Consider Alternatives?" },
        text: {
          zh: "对于那些工作流程严格要求**像素级设计控制、复杂动画效果或与微软 Office 套件完美无瑕集成**的用户，传统的 PowerPoint 仍然是更稳妥的选择。如果最终交付物必须是格式稳定、可离线编辑的 PPTX 文件，那么直接使用原生工具会避免很多兼容性问题。",
          en: "For users whose workflows strictly require **pixel-perfect design control, complex animations, or flawless integration with the Microsoft Office suite**, traditional PowerPoint remains a safer bet. If the final deliverable must be a format-stable, offline-editable PPTX file, using the native tool directly will avoid many compatibility issues."
        }
      }
    }
  }
};

type Language = 'zh' | 'en';

// Helper component for section titles
const SectionHeader: React.FC<{
  title: string;
  subtitle: string;
}> = ({ title, subtitle }) => (
  <div className="mb-8 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
      {title}
    </h2>
    <p className="mt-2 text-lg text-gray-400">{subtitle}</p>
  </div>
);

// Helper component for content points
const ContentPoint: React.FC<{
  title: string;
  text: string;
}> = ({ title, text }) => (
  <div className="bg-gray-800/50 p-6 rounded-xl shadow-lg backdrop-blur-sm border border-gray-700/50 transition-all duration-300 hover:border-purple-400/50 hover:shadow-purple-500/10">
    <h3 className="text-xl font-semibold text-purple-300 mb-2">{title}</h3>
    <p className="text-gray-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
  </div>
);


const GammaFeatureAnalysis: React.FC = () => {
  const [language, setLanguage] = useState<Language>('zh');

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'zh' ? 'en' : 'zh'));
  };

  const t = useMemo(() => {
    const translate = (data: any): any => {
      // 1. Handle null/undefined or non-object types
      if (typeof data !== 'object' || data === null) {
        return data;
      }

      // 2. Handle arrays: recursively translate each item
      if (Array.isArray(data)) {
        return data.map(item => translate(item));
      }

      // 3. Handle translation objects: { zh: '...', en: '...' }
      if (data.hasOwnProperty('zh') && data.hasOwnProperty('en')) {
        return data[language];
      }

      // 4. Handle generic objects: recursively translate each property
      const result: { [key: string]: any } = {};
      for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          result[key] = translate(data[key]);
        }
      }
      return result;
    };
    return translate(contentData);
  }, [language]);


  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <main className="container mx-auto px-4 py-8 md:py-12">
        {/* Header */}
        <header className="text-center mb-12 md:mb-16 relative">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-br from-white to-purple-300">
            {t.header.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300">{t.header.subtitle}</p>
          <button
            onClick={toggleLanguage}
            className="absolute top-0 right-0 mt-2 mr-2 md:mt-0 md:mr-0 bg-purple-600/50 text-white px-4 py-2 rounded-lg border border-purple-500/50 backdrop-blur-sm hover:bg-purple-500/70 transition-colors duration-300 flex items-center gap-2"
            aria-label={t.header.toggle}
          >
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 11.5a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0Z"/><path d="M12 22v-2"/><path d="M2 12H0"/><path d="M22 12h-2"/><path d="M18.36 18.36.88.88"/><path d="M5.64 5.64.12.12"/><path d="M18.36 5.64.88.88"/><path d="M5.64 18.36.12.12"/><path d="M12 6V4"/><path d="m12 12-2-3-2 3"/><path d="M12 12h4"/></svg>
            <span>{language === 'zh' ? 'EN' : '中文'}</span>
          </button>
        </header>

        {/* Content Sections */}
        {t.sections.map((section: any) => (
          <section key={section.id} className="mb-16">
            <SectionHeader title={section.title} subtitle={section.subtitle} />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.points.map((point: any, index: number) => (
                <ContentPoint key={index} title={point.title} text={point.text} />
              ))}
            </div>
          </section>
        ))}

        {/* Feature Table Section */}
        <section id="feature-table" className="mb-16">
          <SectionHeader title={t.featureTable.title} subtitle={t.featureTable.subtitle} />
          <div className="overflow-x-auto bg-gray-800/50 rounded-xl border border-gray-700/50 shadow-lg backdrop-blur-sm">
            <table className="w-full text-left">
              <thead className="bg-gray-700/50">
                <tr>
                  {t.featureTable.headers.map((header: string, index: number) => (
                    <th key={index} className="p-4 font-semibold text-purple-300">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t.featureTable.rows.map((row: any, rowIndex: number) => (
                  <tr key={rowIndex} className="border-t border-gray-700/50 hover:bg-gray-700/30 transition-colors duration-200">
                    <td className="p-4 text-gray-300">{row.category}</td>
                    <td className="p-4 font-medium text-white">{row.feature}</td>
                    <td className="p-4 text-gray-400">{row.description}</td>
                    <td className="p-4">
                      <span className={`px-3 py-1 text-sm rounded-full ${row.plan === 'Pro' ? 'bg-purple-500/20 text-purple-300' : 'bg-green-500/20 text-green-300'}`}>
                        {row.plan}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Strategic Analysis Section */}
        <section id="strategic-analysis" className="mb-12">
          <SectionHeader title={t.strategicAnalysis.title} subtitle={t.strategicAnalysis.subtitle} />
          <div className="bg-gray-800/50 p-8 rounded-xl shadow-lg backdrop-blur-sm border border-gray-700/50">
            <h3 className="text-2xl font-bold text-center text-purple-300 mb-6">{t.strategicAnalysis.conclusion.title}</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-l-4 border-green-400 pl-4">
                <h4 className="text-xl font-semibold text-green-300 mb-2">{t.strategicAnalysis.conclusion.gamma.title}</h4>
                <p className="text-gray-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.strategicAnalysis.conclusion.gamma.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
              </div>
              <div className="border-l-4 border-yellow-400 pl-4">
                <h4 className="text-xl font-semibold text-yellow-300 mb-2">{t.strategicAnalysis.conclusion.others.title}</h4>
                <p className="text-gray-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.strategicAnalysis.conclusion.others.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
              </div>
            </div>
          </div>
        </section>

        <footer className="text-center text-gray-500 mt-16">
          <p>&copy; 2025 Gamma App Analysis. All information based on publicly available data.</p>
        </footer>
      </main>
    </div>
  );
};

export default GammaFeatureAnalysis;
