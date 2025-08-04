"use client"

import React, { useState } from 'react';

interface LanguageText {
  zh: string;
  en: string;
}

interface ToolData {
  name: LanguageText;
  description: LanguageText;
  example: LanguageText;
  icon: string;
}

interface CategoryData {
  name: LanguageText;
  description: LanguageText;
  tools: ToolData[];
  color: string;
  bgColor: string;
}

interface StudentFeature {
  name: LanguageText;
  description: LanguageText;
  icon: string;
  isNew?: boolean;
}

interface EnterpriseFeature {
  name: LanguageText;
  description: LanguageText;
  icon: string;
}

interface TrainingProgram {
  name: LanguageText;
  description: LanguageText;
  level?: LanguageText;
  icon: string;
  isNew?: boolean;
}

interface Integration {
  name: LanguageText;
  description: LanguageText;
  icon: string;
}

interface UpdateFeature {
  name: LanguageText;
  description: LanguageText;
  icon: string;
  isNew: boolean;
}

interface StatData {
  value: string;
  label: LanguageText;
}

const MagicSchoolAI: React.FC = () => {
  const [currentLang, setCurrentLang] = useState<'zh' | 'en'>('zh');
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);

  const getText = (text: LanguageText): string => text[currentLang];

  const stats: StatData[] = [
    {
      value: '1.3万+',
      label: { zh: '全球学校', en: 'Global Schools' }
    },
    {
      value: '500万+',
      label: { zh: '用户数量', en: 'Users' }
    },
    {
      value: '80+',
      label: { zh: '教师工具', en: 'Teacher Tools' }
    },
    {
      value: '50+',
      label: { zh: '学生工具', en: 'Student Tools' }
    }
  ];

  const teacherCategories: CategoryData[] = [
    {
      name: { zh: '规划工具', en: 'Planning Tools' },
      description: { zh: '快速创建标准对齐的教学计划', en: 'Quickly create standards-aligned lesson plans' },
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      tools: [
        {
          name: { zh: '课程计划生成器', en: 'Lesson Plan Generator' },
          description: { zh: '自动生成包含目标、活动和评估的详细教学计划', en: 'Automatically generate detailed lesson plans with objectives, activities, and assessments' },
          example: { zh: '输入"7年级数学，分数"，生成包括目标、活动和评估的详细计划', en: 'Input "7th grade math, fractions" and generate detailed plans including objectives, activities and assessments' },
          icon: '📚'
        },
        {
          name: { zh: '单元计划生成器', en: 'Unit Plan Generator' },
          description: { zh: '创建多课时的完整单元教学方案', en: 'Create comprehensive multi-lesson unit teaching plans' },
          example: { zh: '为期两周的科学实验单元规划，包含实验设计和评估标准', en: 'Two-week science experiment unit planning with experiment design and assessment criteria' },
          icon: '📋'
        },
        {
          name: { zh: '教学大纲生成器', en: 'Syllabus Generator' },
          description: { zh: '快速创建结构化的课程大纲', en: 'Quickly create structured course syllabi' },
          example: { zh: '生成高中化学课程大纲，包含学习目标和评分政策', en: 'Generate high school chemistry syllabus with learning objectives and grading policies' },
          icon: '📑'
        }
      ]
    },
    {
      name: { zh: '内容工具', en: 'Content Tools' },
      description: { zh: '生成高质量的学术内容和评分标准', en: 'Generate high-quality academic content and rubrics' },
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      tools: [
        {
          name: { zh: '学术内容生成器', en: 'Academic Content Generator' },
          description: { zh: '创建符合课程标准的教学内容', en: 'Create curriculum-aligned teaching content' },
          example: { zh: '生成关于世界历史的深度学习材料，包含主要事件和分析', en: 'Generate in-depth learning materials on world history with major events and analysis' },
          icon: '✍️'
        },
        {
          name: { zh: '评分标准生成器', en: 'Rubric Generator' },
          description: { zh: '为各类作业创建详细的评分标准', en: 'Create detailed scoring rubrics for various assignments' },
          example: { zh: '为写作作业创建表格格式的评分标准，包含内容、组织和机制类别', en: 'Create tabular rubric for writing assignments with content, organization and mechanics categories' },
          icon: '📊'
        },
        {
          name: { zh: '工作表生成器', en: 'Worksheet Generator' },
          description: { zh: '创建互动练习和学习工作表', en: 'Create interactive exercises and learning worksheets' },
          example: { zh: '数学分数练习工作表，包含逐步解决方案', en: 'Math fractions practice worksheets with step-by-step solutions' },
          icon: '📄'
        }
      ]
    },
    {
      name: { zh: '问题工具', en: 'Question Tools' },
      description: { zh: '创建多样化的评估和练习题目', en: 'Create diverse assessment and practice questions' },
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      tools: [
        {
          name: { zh: '多项选择题生成器', en: 'Multiple Choice Generator' },
          description: { zh: '基于文本内容生成标准化测试题', en: 'Generate standardized test questions based on text content' },
          example: { zh: '生成基于文本的多项选择题测验，评估学生对历史事件的理解', en: 'Generate text-based multiple choice quiz assessing student understanding of historical events' },
          icon: '❓'
        },
        {
          name: { zh: 'DOK问题生成器', en: 'DOK Question Generator' },
          description: { zh: '创建深度知识问题，促进批判性思维', en: 'Create Depth of Knowledge questions to promote critical thinking' },
          example: { zh: '生成Level 3-4的DOK问题，培养学生分析和综合能力', en: 'Generate Level 3-4 DOK questions to develop student analysis and synthesis skills' },
          icon: '🧩'
        },
        {
          name: { zh: 'SAT练习测试', en: 'SAT Practice Test' },
          description: { zh: '生成SAT格式的标准化考试练习', en: 'Generate SAT-format standardized test practice' },
          example: { zh: '数学和阅读理解综合练习，模拟真实考试环境', en: 'Math and reading comprehension practice simulating real exam environment' },
          icon: '🎯'
        }
      ]
    },
    {
      name: { zh: '智力准备工具', en: 'Intellectual Preparation Tools' },
      description: { zh: '提供概念理解和教学指导支持', en: 'Provide concept understanding and teaching guidance' },
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      tools: [
        {
          name: { zh: '概念理解工具', en: 'Concept Understanding Tool' },
          description: { zh: '深入解释复杂学术概念', en: 'In-depth explanation of complex academic concepts' },
          example: { zh: '使用概念理解工具，解释复杂数学概念，如二次方程的解法', en: 'Use concept understanding tool to explain complex math concepts like quadratic equation solutions' },
          icon: '🧠'
        },
        {
          name: { zh: '示例和非示例生成器', en: 'Examples and Non-Examples Generator' },
          description: { zh: '创建概念的正面和反面实例', en: 'Create positive and negative examples of concepts' },
          example: { zh: '为"民主"概念提供具体示例和非示例', en: 'Provide concrete examples and non-examples for the concept of "democracy"' },
          icon: '🔍'
        },
        {
          name: { zh: '清晰指导生成器', en: 'Clear Instruction Generator' },
          description: { zh: '创建易于理解的教学指导', en: 'Create easy-to-understand teaching instructions' },
          example: { zh: '步骤化的实验操作指南，确保学生安全和理解', en: 'Step-by-step experiment guide ensuring student safety and understanding' },
          icon: '📖'
        }
      ]
    },
    {
      name: { zh: '学生支持工具', en: 'Student Support Tools' },
      description: { zh: '为特殊需求学生提供个性化支持', en: 'Provide personalized support for students with special needs' },
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
      tools: [
        {
          name: { zh: 'IEP生成器', en: 'IEP Generator' },
          description: { zh: '为特殊教育学生创建个性化教育计划', en: 'Create individualized education plans for special education students' },
          example: { zh: '为有学习障碍的学生生成IEP，包括目标和住宿建议', en: 'Generate IEP for students with learning disabilities, including goals and accommodation suggestions' },
          icon: '🤝'
        },
        {
          name: { zh: '504计划生成器', en: '504 Plan Generator' },
          description: { zh: '创建504计划支持有特殊需要的学生', en: 'Create 504 plans to support students with special needs' },
          example: { zh: '为ADHD学生制定504计划，包含课堂和考试调整', en: 'Develop 504 plan for ADHD students with classroom and testing accommodations' },
          icon: '📋'
        },
        {
          name: { zh: '住宿建议工具', en: 'Accommodation Suggestion Tool' },
          description: { zh: '提供适合不同学生需求的教学调整建议', en: 'Provide teaching adjustment suggestions for different student needs' },
          example: { zh: '视觉学习者的多媒体支持方案和学习策略', en: 'Multimedia support plan and learning strategies for visual learners' },
          icon: '🏠'
        }
      ]
    },
    {
      name: { zh: '沟通工具', en: 'Communication Tools' },
      description: { zh: '协助教师与家长和学生的专业沟通', en: 'Assist teachers in professional communication with parents and students' },
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      tools: [
        {
          name: { zh: '家长邮件生成器', en: 'Parent Email Generator' },
          description: { zh: '创建专业的家长沟通邮件', en: 'Create professional parent communication emails' },
          example: { zh: '生成家长邮件，报告学生进步并建议家庭活动，支持多语言翻译', en: 'Generate parent emails reporting student progress and suggesting home activities with multilingual support' },
          icon: '📧'
        },
        {
          name: { zh: '报告卡评论工具', en: 'Report Card Comment Tool' },
          description: { zh: '生成个性化的学生评价评论', en: 'Generate personalized student evaluation comments' },
          example: { zh: '综合评价学生学术和行为表现，提供建设性反馈', en: 'Comprehensive evaluation of student academic and behavioral performance with constructive feedback' },
          icon: '📝'
        },
        {
          name: { zh: '专业邮件助手', en: 'Professional Email Assistant' },
          description: { zh: '协助撰写各类专业邮件', en: 'Assist in writing various professional emails' },
          example: { zh: '与同事、管理者的专业沟通邮件模板', en: 'Professional communication email templates with colleagues and administrators' },
          icon: '💼'
        }
      ]
    },
    {
      name: { zh: '社区工具', en: 'Community Tools' },
      description: { zh: '增强课堂氛围和教师社区建设', en: 'Enhance classroom atmosphere and teacher community building' },
      color: 'text-teal-600',
      bgColor: 'bg-teal-50',
      tools: [
        {
          name: { zh: '团队建设活动', en: 'Team Building Activities' },
          description: { zh: '创建促进学生合作的课堂活动', en: 'Create classroom activities that promote student collaboration' },
          example: { zh: '生成课堂团队建设活动，如冰破游戏，增强课堂氛围', en: 'Generate classroom team building activities like icebreaker games to enhance classroom atmosphere' },
          icon: '🎪'
        },
        {
          name: { zh: '社交媒体内容', en: 'Social Media Content' },
          description: { zh: '为教育相关社交媒体创建内容', en: 'Create content for education-related social media' },
          example: { zh: '课堂成就展示和教学心得分享的社交媒体帖子', en: 'Social media posts showcasing classroom achievements and teaching insights' },
          icon: '📱'
        },
        {
          name: { zh: '教师笑话生成器', en: 'Teacher Joke Generator' },
          description: { zh: '生成适合课堂的幽默内容', en: 'Generate classroom-appropriate humor content' },
          example: { zh: '数学和科学相关的教育笑话，增添课堂趣味', en: 'Educational jokes related to math and science to add classroom fun' },
          icon: '😄'
        }
      ]
    }
  ];

  const updateFeatures: UpdateFeature[] = [
    {
      name: { zh: 'Canvas集成', en: 'Canvas Integration' },
      description: { zh: '无缝集成Canvas，访问企业版和学生版工具', en: 'Seamless Canvas integration with access to enterprise and student tools' },
      icon: '🔗',
      isNew: true
    },
    {
      name: { zh: '考试重写工具', en: 'Exam Rewrite Tool' },
      description: { zh: '缩短测试25%，强调关键词汇和DOK动词', en: 'Reduce test length by 25%, emphasizing key vocabulary and DOK verbs' },
      icon: '📝',
      isNew: true
    },
    {
      name: { zh: '夏令营培训计划', en: 'Summer Camp Training' },
      description: { zh: '两周计划，包括网络研讨会和资源，聚焦AI整合', en: 'Two-week program with webinars and resources focusing on AI integration' },
      icon: '🏕️',
      isNew: true
    },
    {
      name: { zh: 'BenQ板集成', en: 'BenQ Board Integration' },
      description: { zh: '在交互板中运行MagicSchool，提升课堂互动', en: 'Run MagicSchool on interactive boards to enhance classroom interaction' },
      icon: '📱',
      isNew: true
    }
  ];

  const studentFeatures: StudentFeature[] = [
    {
      name: { zh: '学生房间管理', en: 'Student Room Management' },
      description: { zh: '教师可创建虚拟房间，实时监控学生参与度和工具使用情况。例如，设置科学讨论房间，查看学生活动', en: 'Teachers can create virtual rooms and monitor student engagement and tool usage in real-time. For example, set up science discussion rooms and view student activities' },
      icon: '🏫',
      isNew: true
    },
    {
      name: { zh: '入门房间模板', en: 'Starter Room Templates' },
      description: { zh: '50多个预构建模板，覆盖ELA、科学等科目，支持快速启动活动', en: '50+ pre-built templates covering ELA, science and other subjects for quick activity startup' },
      icon: '📚'
    },
    {
      name: { zh: '实时AI反馈', en: 'Real-time AI Feedback' },
      description: { zh: '提供即时反馈，帮助学生改进写作或任务', en: 'Provide instant feedback to help students improve writing or tasks' },
      icon: '💬'
    },
    {
      name: { zh: '创意工具集', en: 'Creative Toolkit' },
      description: { zh: '包括图像生成器，支持学生创建视觉辅助', en: 'Including image generators to support student visual content creation' },
      icon: '🎨'
    }
  ];

  const enterpriseFeatures: EnterpriseFeature[] = [
    {
      name: { zh: '自定义企业工具', en: 'Custom Enterprise Tools' },
      description: { zh: '管理员可预填充字段、隐藏选项，基于区需求自定义工具', en: 'Administrators can pre-populate fields, hide options, and customize tools based on district needs' },
      icon: '⚙️'
    },
    {
      name: { zh: 'RAG技术支持', en: 'RAG Technology Support' },
      description: { zh: '上传区级文档（如政策手册），生成AI助手，支持文件上传（最多50MB）', en: 'Upload district documents (like policy manuals), generate AI assistants, support file uploads (up to 50MB)' },
      icon: '🤖'
    },
    {
      name: { zh: '学生房间洞察', en: 'Student Room Insights' },
      description: { zh: '提供实时使用数据，如工具频率，帮助数据驱动决策', en: 'Provide real-time usage data, such as tool frequency, to help data-driven decision making' },
      icon: '📊'
    },
    {
      name: { zh: '增强审核', en: 'Enhanced Moderation' },
      description: { zh: '实时警报高风险内容，自定义规则，确保安全', en: 'Real-time alerts for high-risk content, custom rules to ensure safety' },
      icon: '🛡️'
    }
  ];

  const trainingPrograms: TrainingProgram[] = [
    {
      name: { zh: '认证课程', en: 'Certification Courses' },
      description: { zh: '包括Level 1-4（基础到高级提示/工具创建），提供证书和实践', en: 'Includes Level 1-4 (basic to advanced prompting/tool creation), provides certificates and practice' },
      level: { zh: 'Level 1-4', en: 'Level 1-4' },
      icon: '🎓'
    },
    {
      name: { zh: '虚拟/现场培训', en: 'Virtual/On-site Training' },
      description: { zh: '在线或面对面会话，支持专业发展', en: 'Online or face-to-face sessions supporting professional development' },
      icon: '👥'
    },
    {
      name: { zh: '视频教程和指南', en: 'Video Tutorials and Guides' },
      description: { zh: '短视频和快速参考资料', en: 'Short videos and quick reference materials' },
      icon: '🎬'
    },
    {
      name: { zh: 'AI Literacy Day活动', en: 'AI Literacy Day Events' },
      description: { zh: '推广负责任AI使用，包括网络研讨会', en: 'Promote responsible AI use, including webinars' },
      icon: '🌟',
      isNew: true
    }
  ];

  const integrations: Integration[] = [
    {
      name: { zh: 'LMS集成', en: 'LMS Integration' },
      description: { zh: '支持Google Classroom、Canvas、Schoology（2025更新：嵌入学生房间）', en: 'Support Google Classroom, Canvas, Schoology (2025 update: embed student rooms)' },
      icon: '🔗'
    },
    {
      name: { zh: 'SSO集成', en: 'SSO Integration' },
      description: { zh: '单点登录，便于访问', en: 'Single sign-on for easy access' },
      icon: '🔐'
    },
    {
      name: { zh: '隐私与安全', en: 'Privacy & Security' },
      description: { zh: '93%隐私评级，内置偏见防护，符合COPPA、GDPR、FERPA标准', en: '93% privacy rating, built-in bias protection, compliant with COPPA, GDPR, FERPA standards' },
      icon: '🛡️'
    }
  ];

  const toggleCategory = (index: number): void => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  const getIcon = (iconName: string) => {
    const iconMap: { [key: string]: React.ReactElement } = {
      '📚': <span className="text-2xl">📚</span>,
      '📋': <span className="text-2xl">📋</span>,
      '📑': <span className="text-2xl">📑</span>,
      '✍️': <span className="text-2xl">✍️</span>,
      '📊': <span className="text-2xl">📊</span>,
      '📄': <span className="text-2xl">📄</span>,
      '❓': <span className="text-2xl">❓</span>,
      '🧩': <span className="text-2xl">🧩</span>,
      '🎯': <span className="text-2xl">🎯</span>,
      '🧠': <span className="text-2xl">🧠</span>,
      '🔍': <span className="text-2xl">🔍</span>,
      '📖': <span className="text-2xl">📖</span>,
      '🤝': <span className="text-2xl">🤝</span>,
      '🏠': <span className="text-2xl">🏠</span>,
      '📧': <span className="text-2xl">📧</span>,
      '📝': <span className="text-2xl">📝</span>,
      '💼': <span className="text-2xl">💼</span>,
      '🎪': <span className="text-2xl">🎪</span>,
      '📱': <span className="text-2xl">📱</span>,
      '😄': <span className="text-2xl">😄</span>,
      '🏫': <span className="text-2xl">🏫</span>,
      '💬': <span className="text-2xl">💬</span>,
      '🎨': <span className="text-2xl">🎨</span>,
      '🔗': <span className="text-2xl">🔗</span>,
      '🏕️': <span className="text-2xl">🏕️</span>,
      '⚙️': <span className="text-2xl">⚙️</span>,
      '🤖': <span className="text-2xl">🤖</span>,
      '🛡️': <span className="text-2xl">🛡️</span>,
      '🎓': <span className="text-2xl">🎓</span>,
      '👥': <span className="text-2xl">👥</span>,
      '🎬': <span className="text-2xl">🎬</span>,
      '🌟': <span className="text-2xl">🌟</span>,
      '🔐': <span className="text-2xl">🔐</span>
    };
    return iconMap[iconName] || <span className="text-2xl">{iconName}</span>;
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                MagicSchool AI
              </h1>
            </div>
            <button
              onClick={() => setCurrentLang(currentLang === 'zh' ? 'en' : 'zh')}
              className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              aria-label={currentLang === 'zh' ? 'Switch to English' : '切换到中文'}
            >
              {currentLang === 'zh' ? 'English' : '中文'}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            {getText({
              zh: '专为教育者设计的AI平台',
              en: 'AI Platform Designed for Educators'
            })}
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            {getText({
              zh: '通过超过80个教师工具和50个学生工具，帮助教师节省时间、提升教学质量，并促进学生AI素养。2025年重点更新包括Canvas集成、考试重写工具、夏令营培训计划等',
              en: 'Help teachers save time, improve teaching quality, and promote student AI literacy through 80+ teacher tools and 50+ student tools. 2025 key updates include Canvas integration, exam rewrite tools, summer camp training programs and more'
            })}
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-3xl font-bold text-purple-600 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{getText(stat.label)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white" aria-labelledby="enterprise-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="enterprise-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {getText({
                zh: '企业版功能',
                en: 'Enterprise Features'
              })}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {getText({
                zh: '2025年企业版增强了自定义、安全和洞察，支持学校和区级部署',
                en: '2025 Enterprise edition enhanced customization, security and insights, supporting school and district-level deployment'
              })}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {enterpriseFeatures.map((feature, index) => (
              <article key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    {getIcon(feature.icon)}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {getText(feature.name)}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {getText(feature.description)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Training & Support Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-50 to-teal-50" aria-labelledby="training-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="training-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {getText({
                zh: '培训与支持',
                en: 'Training & Support'
              })}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {getText({
                zh: '平台提供全面培训，促进AI素养发展',
                en: 'Platform provides comprehensive training to promote AI literacy development'
              })}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {trainingPrograms.map((program, index) => (
              <article key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 relative">
                {program.isNew && (
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-green-500 to-teal-500 text-white text-xs px-3 py-1 rounded-full font-bold">
                    {getText({ zh: '新功能', en: 'NEW' })}
                  </div>
                )}
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    {getIcon(program.icon)}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {getText(program.name)}
                  </h3>
                  {program.level && (
                    <div className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mb-3 font-medium">
                      {getText(program.level)}
                    </div>
                  )}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {getText(program.description)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Integration & Security Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100" aria-labelledby="integration-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="integration-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {getText({
                zh: '集成与安全性',
                en: 'Integration & Security'
              })}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {getText({
                zh: '全面的系统集成和企业级安全保障',
                en: 'Comprehensive system integration and enterprise-grade security'
              })}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {integrations.map((integration, index) => (
              <article key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                    {getIcon(integration.icon)}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {getText(integration.name)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {getText(integration.description)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 2025 Updates Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-purple-600" aria-labelledby="updates-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="updates-heading" className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {getText({
                zh: '2025年重大更新',
                en: '2025 Major Updates'
              })}
            </h2>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              {getText({
                zh: 'Canvas集成、考试重写工具、夏令营培训计划等重要功能上线',
                en: 'Canvas integration, exam rewrite tools, summer camp training programs and other important features launched'
              })}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {updateFeatures.map((feature, index) => (
              <article key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    {getIcon(feature.icon)}
                  </div>
                  <div className="flex items-center justify-center mb-2">
                    <h3 className="text-lg font-bold text-white mr-2">
                      {getText(feature.name)}
                    </h3>
                    {feature.isNew && (
                      <span className="bg-yellow-400 text-yellow-900 text-xs px-2 py-1 rounded-full font-bold">
                        {getText({ zh: '新', en: 'NEW' })}
                      </span>
                    )}
                  </div>
                  <p className="text-indigo-100 text-sm leading-relaxed">
                    {getText(feature.description)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Teacher Tools Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="teacher-tools-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="teacher-tools-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {getText({
                zh: '教师工具集',
                en: 'Teacher Toolkit'
              })}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {getText({
                zh: '七大类别，80多个专业工具，全面支持教学各个环节',
                en: 'Seven categories, 80+ professional tools, comprehensive support for all teaching aspects'
              })}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {teacherCategories.map((category, index) => (
              <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className={`${category.bgColor} p-6 border-b border-gray-100`}>
                  <div className="flex items-center justify-between">
                    <h3 className={`text-xl font-bold ${category.color}`}>
                      {getText(category.name)}
                    </h3>
                    <button
                      onClick={() => toggleCategory(index)}
                      className={`p-2 rounded-full hover:bg-white/50 transition-colors duration-200 ${category.color}`}
                      aria-expanded={expandedCategory === index}
                      aria-label={`Toggle ${getText(category.name)} details`}
                    >
                      <svg className={`w-5 h-5 transform transition-transform duration-200 ${expandedCategory === index ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                  <p className="text-gray-600 mt-2">{getText(category.description)}</p>
                </div>

                {expandedCategory === index && (
                  <div className="p-6">
                    <div className="space-y-4">
                      {category.tools.map((tool, toolIndex) => (
                        <div key={toolIndex} className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors duration-200">
                          <div className="flex items-start space-x-3">
                            {getIcon(tool.icon)}
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900 mb-1">
                                {getText(tool.name)}
                              </h4>
                              <p className="text-gray-600 text-sm mb-2">
                                {getText(tool.description)}
                              </p>
                              <div className="bg-gray-50 rounded-lg p-3">
                                <p className="text-xs text-gray-700">
                                  <span className="font-medium">
                                    {getText({ zh: '示例：', en: 'Example:' })}
                                  </span>
                                  {getText(tool.example)}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Student Tools Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-purple-50" aria-labelledby="student-tools-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="student-tools-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {getText({
                zh: '学生工具平台 - MagicStudent',
                en: 'Student Platform - MagicStudent'
              })}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {getText({
                zh: '2025年全面优化，50多个互动工具，强调AI素养和个性化学习',
                en: 'Fully optimized in 2025, 50+ interactive tools emphasizing AI literacy and personalized learning'
              })}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {studentFeatures.map((feature, index) => (
              <article key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 relative">
                {feature.isNew && (
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs px-3 py-1 rounded-full font-bold">
                    {getText({ zh: '新功能', en: 'NEW' })}
                  </div>
                )}
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    {getIcon(feature.icon)}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {getText(feature.name)}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {getText(feature.description)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <h3 className="text-2xl font-bold">MagicSchool AI</h3>
          </div>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            {getText({
              zh: '赋能全球教育者，让每个课堂都充满魔力。现提供免费开学指南，减少教师倦怠，促进AI整合',
              en: 'Empowering educators worldwide, making every classroom magical. Now offering free back-to-school guides to reduce teacher burnout and promote AI integration'
            })}
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            <div className="text-gray-400">
              {getText({ zh: '✨ 93%隐私评级', en: '✨ 93% Privacy Rating' })}
            </div>
            <div className="text-gray-400">
              {getText({ zh: '🔒 COPPA/GDPR/FERPA合规', en: '🔒 COPPA/GDPR/FERPA Compliant' })}
            </div>
            <div className="text-gray-400">
              {getText({ zh: '🏫 支持1.3万+学校', en: '🏫 Supporting 13K+ Schools' })}
            </div>
          </div>
          <div className="text-sm text-gray-400">
            {getText({
              zh: '© 2025 MagicSchool AI. 致力于教育创新与技术进步，持续更新工具以跟上教育趋势.',
              en: '© 2025 MagicSchool AI. Dedicated to educational innovation and technological advancement, continuously updating tools to keep pace with educational trends.'
            })}
          </div>
        </div>
      </footer>
    </main>
  );
};

export default MagicSchoolAI;