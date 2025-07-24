"use client";

import React, { useState, FC, ReactNode } from 'react';

// --- DATA STORE (BILINGUAL CONTENT) ---
const content = {
  zh: {
    title: "Felo AI 功能分析",
    nav: {
      summary: "执行摘要",
      overview: "公司概览",
      features: "功能深度解析",
      enterprise: "企业方案",
      competition: "竞争格局",
      analysis: "分析师视角",
      appendix: "附录",
    },
    executiveSummary: {
      title: "1.0 执行摘要",
      p1: "Felo AI 正在将自身打造为一个远超传统搜索工具的&ldquo;工作流引擎&rdquo;。其战略身份和核心价值主张建立在三大支柱之上：",
      points: [
        "**全球优先的多语言架构**：利用跨语言信息检索（Cross-Language Information Retrieval, CLIR）技术作为其基础性差异化优势，旨在打破全球信息的语言壁垒。",
        "**一体化的&ldquo;研究到创造&rdquo;工作流**：将信息发现（搜索）、知识组织（思维导图、主题集）与内容生成（PPT演示文稿）无缝整合，形成一个闭环的生产力生态系统。",
        "**代理驱动的实时信息访问**：通过AI代理和机器人流程自动化（RPA）技术，主动抓取社交媒体等实时网络信息，为用户提供最新的动态和见解。",
      ],
      p2: "该平台精准定位于学术界、专业人士和全球企业用户，通过提供一套解决复杂、多步骤任务的集成工具，在与Perplexity AI和You.com等竞品的竞争中占据了独特的市场地位。Felo AI的战略并非简单地替代传统搜索引擎，而是旨在成为高价值知识工作的核心操作系统。"
    },
    companyOverview: {
      title: "2.0 公司与战略概览",
      section1: {
        title: "2.1 公司简介：Felo Inc.",
        p1: "Felo AI由日本初创公司Felo Inc.（日文名：Ｆｅｌｏ株式会社）开发 [1, 2]。该公司于2024年7月在东京成立，专注于生成式AI技术领域，旗下产品除核心的Felo AI Search外，还包括Felo Translator和Glarity等 [1]。公司首席执行官为金田 達也（Tatsuya Kaneda） [1]。",
        p2: "公司的日本背景为其强大的多语言能力提供了合理的解释。开发团队很可能亲身经历了互联网信息主要以英语为主的壁垒，从而将解决这一痛点作为产品设计的核心驱动力。值得注意的是，一份2024年9月的新闻稿将Felo AI的发布归因于&ldquo;Sparticle Inc.&rdquo; [3]，但鉴于Felo官方博客始终明确公司主体为Felo Inc. [1]，本报告将以Felo Inc.为准，并将&ldquo;Sparticle Inc.&rdquo;的提法视为公关稿中的潜在错误或关联实体名称。"
      },
      section2: {
          title: "2.2 “答案引擎”的范式转变",
          p1: "Felo AI将自身定位为“答案引擎”或“对话式搜索引擎”，致力于超越传统搜索引擎仅提供链接列表的模式 [1, 4, 5]。它利用先进的自然语言处理（NLP）技术，理解用户的真实意图，以对话形式直接提供精准答案 [1, 2]。",
          p2: "在此范式下，一个至关重要的战略要素是“信任层”的构建。生成式AI模型普遍存在“幻觉”（即捏造信息）的风险，这成为用户采纳的主要障碍。Felo通过反复强调其答案均附有“可追溯的来源”和“引用”，来正面应对这一挑战 [2, 6, 7, 8, 9]。这不仅仅是一项技术特性，更是一项战略决策。对于Felo的目标用户——研究人员和专业人士而言，答案的*可验证性*与答案本身同等重要。因此，引用机制成为其产品的基石，旨在克服其底层技术最主要的弱点，从而建立用户信任。"
      },
      section3: {
          title: "2.3 目标受众与用例分析",
          p1: "Felo AI明确将其平台设计为服务于学生、学者、研究人员、商业专业人士和内容创作者 [4, 10, 11, 12, 13, 14, 15]。其核心应用场景并非简单的即时查询，而是聚焦于解决复杂、多步骤的知识工作任务。这些任务包括撰写万字研究报告 [10]、规划假期旅行 [14]、以及起草关于市场趋势的新闻稿 [15] 等。",
          p2: "传统上，完成这些任务需要用户在多个工具之间切换，耗费大量时间进行搜索、组织、综合和创作。Felo的战略正是通过其集成的功能套件（搜索、思维导图、PPT生成、主题集）来覆盖这些任务的全流程。这表明，Felo并非意图在日常搜索领域与谷歌等巨头直接竞争，而是选择了一个服务尚不完善的利基市场：高价值的、多步骤的知识工作。这种专注使其能够打造出一款功能深度集成且用户粘性极高的产品。"
      }
    },
    featureDeepDive: {
        title: "3.0 功能深度解析：最新特性与能力",
        intro: "本节将详细阐述Felo AI平台的各项功能，结合现有截图进行说明，并分析每项功能在Felo整体战略中的定位和意义。",
        searchExperience: {
            title: "3.1 演进的搜索体验",
            multilingual: {
                title: "3.1.1 多语言对话式搜索 (CLIR)",
                p1: "这是Felo的基石功能。它提供的并非简单的翻译，而是真正的跨语言信息检索（CLIR）。用户可以使用母语提问，Felo则在全球范围内的多语言资源库中进行搜索，最后用用户所使用的语言综合并呈现答案，同时附上经过翻译的引用来源 [1, 2, 3, 4, 6, 8, 12, 13, 16]。此功能旨在彻底打破语言障碍，实现全球知识的平权访问 [6, 12]。",
                p2: "这种“全球优先”的理念已不仅仅是一个功能，而是融入了产品的底层架构。Felo能够在搜索阶段就处理多语言信息，而非在搜索完成后再进行翻译，这在技术上更为复杂和强大。这一架构很可能源于其日本的开发背景，并构成了其在全球市场，特别是非英语地区，最独特和最难被复制的战略护城河。"
            },
            agentSearch: {
                title: "3.1.2 AI代理搜索：实时情报",
                p1: "Felo利用“AI代理搜索”功能，通过机器人流程自动化（RPA）技术，主动抓取Reddit、Twitter等社交平台上的实时用户生成内容 [7, 17, 18, 19]。这使得Felo能够提供传统网络爬虫无法捕捉的最新趋势、公众情绪和即时见解 [18]，对于媒体监测和竞品分析等商业场景至关重要 [15]。",
                p2: "许多大型语言模型的主要局限在于其训练数据存在时间滞后性。Felo的代理搜索通过查询“实时网络”直接解决了这个问题。RPA技术的应用表明这是一个主动、自动化的信息获取过程，而非被动的索引。该功能将Felo从一个知识库转变为一个实时情报工具，极大地扩展了其对市场营销、公共关系和战略分析等专业人士的价值。"
            },
            proSearch: {
                title: "3.1.3 专业搜索模式：学术与文档",
                academic: "**学术搜索**：这是一个专用模式，能够检索一个包含超过2.45亿篇学术出版物（期刊文章、会议论文等）的庞大数据库 [9, 13, 16, 20]。它能直接提供基于文献内容的AI生成答案，并附带引用，同时支持将外文论文翻译成用户的母语。",
                document: "**文档搜索**：用户可以通过在查询词后附加文件格式（如“技术转让协议 PDF”）来专门搜索PDF、Word、Excel和PowerPoint等特定类型的文件 [7, 17, 19, 21]。",
                p1: "这些专业模式进一步证明了Felo对其目标用户的深刻理解。学术搜索是为研究人员和学生群体量身定制的强大工具，而文档搜索则为需要处理特定格式文件的专业人士提供了极大的便利。这再次体现了Felo致力于解决具体工作流程问题的产品哲学。"
            }
        },
        contentSuite: {
            title: "3.2 内容转化套件",
            ppt: {
                title: "3.2.1 AI演示文稿（PPT）生成",
                p1: "这是一项旗舰功能，用户可以根据搜索结果、上传的文档（PDF/Word）或文本大纲，一键生成专业级的演示文稿 [4, 10, 11, 22, 23, 24, 25, 26]。整个过程由AI代理收集信息，AI构建幻灯片框架，用户则可以从多种模板中选择并进行定制 [22]。该功能支持多语言生成，并可导出为PPT、PDF或图片格式 [22, 26]。2024年的一项更新增加了直接将上传的PDF和Word文件转换为演示文稿的功能 [22, 27]。",
                screenshot_title: "功能截图：",
                screenshot_desc: "一份动态GIF文件展示了该功能的运作流程，可在此处查看：",
                gif_alt: "Felo AI PPT生成功能GIF演示"
            },
            mindMap: {
                title: "3.2.2 思维导图生成",
                p1: "Felo能够将搜索结果或文本内容自动转化为可视化的思维导图或文本大纲 [3, 10, 11, 12, 16, 28, 29]。此功能旨在帮助用户实现知识可视化、整理思路并理解复杂主题 [12, 16]。版本日志显示，该功能已增加了多种专业模板，并支持将思维导图导出为Markdown格式 [30]。",
                screenshot_title: "功能截图：",
                screenshot_desc: "在所提供的研究资料中，未能找到该功能的直接截图。本报告将在描述其功能的同时，注明视觉材料的缺失。"
            },
            summarization: {
                title: "3.2.3 全面的内容摘要",
                p1: "Felo为多种内容类型提供摘要功能，这是连接原始信息与结构化知识的桥梁，也是整个工作流中的关键一环。",
                points: [
                    "**网页/URL摘要**：粘贴链接并输入“summarize”指令，即可获得页面的简洁摘要 [7, 17, 20]。",
                    "**YouTube视频摘要**：粘贴YouTube视频链接，可即时生成内容摘要，极大节省观看时间。这些摘要还可以进一步转化为PPT或思维导图 [31]。",
                    "**文档摘要**：支持对上传的PDF、Word等文件进行分析和总结 [9, 27]。"
                ]
            },
            interactiveWeb: {
                title: "3.2.4 交互式网页创建",
                p1: "这是一项较新的功能，在“深度搜索”模式下可用。用户可以将文本密集的搜索结果（如研究论文或长篇文章）一键转化为动态的交互式网页。这种形式将信息分解为更易于消化和导航的模块，提升了阅读体验 [32]。",
                screenshot_title: "功能截图：",
                screenshot_desc: "研究资料中未提供此功能的截图。根据描述，用户在深度搜索结果界面点击“生成交互式网页”按钮即可使用此功能 [32]。"
            }
        },
        knowledgeHub: {
            title: "3.3 集成知识中心",
            topicCollections: {
                title: "3.3.1 主题集（Topic Collections）：个人知识库",
                p1: "此功能允许用户将搜索结果、对话线索和其他信息保存并组织到“主题集”中 [3, 6, 11, 12, 16, 33, 34]。它超越了简单的书签工具，构建了一个动态的个人知识库。更重要的是，用户可以与自己的主题集进行“对话”——在已保存数据的语境下，提出后续问题、总结内容或重写信息 [6, 20, 33, 34]。",
                p2: "这种“与你的数据对话”的范式是Felo的一大创举。标准搜索是无状态的，每个查询都是独立的。而主题集为研究过程引入了“状态”和“记忆”。通过允许用户与自己筛选过的信息集合进行交互，Felo从一个公共搜索引擎转变为用户个人数据的智能分析师。这是一个强大的“锁定”功能：当用户在平台上构建了多个详尽的主题集后，该平台对他们的价值会呈指数级增长，从而显著提高了他们转向竞争对手的成本和难度。这是Felo“粘性工作流”战略的关键组成部分。"
            }
        },
        platformExtension: {
            title: "3.4 平台扩展性与定制化",
            customAgents: {
                title: "3.4.1 用户创建自定义AI代理",
                p1: "这是一项强大的功能，很可能面向专业版或企业版用户。它允许用户创建自定义的AI代理 [35, 36]。用户可以定义代理的名称、描述和核心指令（“自定义提示”），包括其角色（Persona）、任务（Task）、约束条件（Constraints）和输出格式（Output Format）。这使得用户可以为特定的工作流程创建高度专业化的工具，例如“营销文案助手”或“代码解释器” [36]。",
                p2: "这是Felo迈向真正“平台化”的一步。它从提供预置工具转向赋能用户构建自己的工具，极大地扩展了平台的适用性，并成为Felo企业版方案的核心价值主张 [35]。"
            },
            multiPlatform: {
                title: "3.4.2 多平台可访问性",
                p1: "Felo AI Search可通过多种渠道访问，确保用户随时随地都能使用：",
                points: [
                    "**网页界面**：felo.ai",
                    "**移动应用**：提供iOS和Android原生应用 [11]。",
                    "**浏览器扩展**：提供浏览器插件以增强集成体验 [16, 37]。",
                    "**社交媒体集成**：用户甚至可以通过在Twitter上提及`@felo`或`@felosearch`来直接进行查询 [3, 7, 12, 17]。"
                ],
                screenshot_title: "功能截图：",
                ios: "**iOS应用**：Apple App Store页面提供了多张应用截图 [7]。尽管原始链接为占位符，但报告确认在实际商店页面上可以查看这些截图，并列出了相关的功能描述 [7]。",
                android: "**Android应用**：Google Play Store页面提供了多张有效的截图URL，这些URL将在附录中列出 [17]。",
            }
        }
    },
    enterprise: {
        title: "4.0 面向商业：企业级解决方案",
        intro: "Felo为团队和企业提供了一个名为“Felo Enterprise”的专属方案，其核心目标是提升生产力、促进协作并保障数据安全 [35]。",
        subtitle: "企业版核心功能包括：",
        points: [
            "**自动化的多步骤搜索与报告**：AI代理能够执行复杂的调研任务（如竞品分析），并一键生成专业报告 [35]。",
            "**可定制的AI代理**：团队可以构建针对其特定工作流程（如代码调试、创意脑暴）的AI代理 [35]。",
            "**团队协作与管理**：管理员可以轻松管理团队成员、分配角色和控制访问权限 [35]。",
            "**强化的数据隐私与安全**：Felo Enterprise已通过SOC2认证，提供单点登录（SSO）功能，并郑重承诺**绝不使用企业客户数据来训练其AI模型** [35]。"
        ],
        conclusion: "企业版方案是Felo工作流战略的终极体现。它旨在将Felo不仅嵌入个人的工作流程，更嵌入公司的核心运营中。通过提供企业级安全保障（特别是承诺不使用客户数据训练模型），Felo消除了企业采用AI工具进行敏感工作的最大顾虑，从而将显著的生产力提升转化为可行的商业模式。"
    },
    competition: {
        title: "5.0 竞争格局与市场定位",
        analysis: {
            title: "5.1 对比分析",
            p1: "研究资料提供了Felo AI与Perplexity、You.com和GenSpark等主要竞争对手的直接比较 [2, 6, 8, 11, 38, 39, 40]。",
            points: [
                "**Felo vs. Perplexity**：Felo将自己定位为更可靠、更准确的替代品，拥有更慷慨的免费套餐和更先进的功能，如精细化的文件/学术搜索和主题对话功能 [38]。Perplexity以其对话式搜索著称，但据称在准确性方面偶有不足 [38]。",
                "**Felo vs. You.com**：Felo声称其优势在于全面的全球信息访问能力（CLIR）、可信的引用机制以及集成的知识管理功能（主题集），这些被认为比You.com提供的功能更为先进 [2]。",
                "**Felo vs. GenSpark**：Felo的关键优势在于其跨语言信息检索能力和强大的内容创作套件（AI-PPT），这些是GenSpark所缺乏的 [40]。",
            ],
            p2: "下表直观地总结了Felo AI与主要竞争对手在关键战略维度上的差异。"
        },
        table: {
            title: "表1：Felo AI 竞争分析摘要",
            headers: ["特性/维度", "Felo AI", "Perplexity AI", "You.com", "GenSpark"],
            rows: [
                ["**核心定位**", "集成工作流引擎", "对话式答案引擎", "个性化AI助手", "摘要式答案引擎"],
                ["**跨语言能力 (CLIR)**", "核心优势，全球优先架构", "有限", "有限", "有限"],
                ["**实时信息 (社交媒体)**", "AI代理主动抓取", "实时网络访问", "AI驱动", "实时验证"],
                ["**学术搜索**", "专用模式，功能强大", "通用搜索", "通用搜索", "通用搜索"],
                ["**内容生成**", "PPT、思维导图、网页", "文本、代码", "文本、代码", "摘要页面 (Sparkpages)"],
                ["**知识管理**", "主题集（可对话）", "收藏夹", "收藏夹", "-"],
                ["**引用透明度**", "核心承诺，非常高", "高", "高", "高"],
                ["**商业模式**", "Freemium / 企业版", "Freemium", "Freemium", "Beta"]
            ]
        },
        uvp: {
            title: "5.2 独特价值主张 (UVP)",
            p1: "Felo的独特价值主张并非单一功能，而是其三大战略支柱协同作用的结果：",
            points: [
                "它利用其**全球优先架构（CLIR）**来收集一套独特且多样化的信息。",
                "它利用其**代理搜索**来确保这些信息是实时的和相关的。",
                "它将这些优质信息输入一个**集成的工作流引擎**，允许用户在不离开平台的情况下完成组织（主题集、思维导图）和创作（PPT）。"
            ],
            p2: "Felo的赌注是，用户最终会选择一个能够处理整个知识生命周期的单一集成平台，而不是一个由多个分散的、单一功能的“最佳”解决方案组成的工具集。"
        }
    },
    analystView: {
        title: "6.0 分析师视角：优势、劣势与战略展望",
        strengths: {
            title: "6.1 核心优势",
            points: [
                "**工作流整合**：从研究到创作的无缝衔接是一个强大且具有高用户粘性的优势。",
                "**全球优先的CLIR**：一条坚固且难以复制的护城河，尤其是在非英语市场。",
                "**实时代理搜索**：在商业和趋势分析用例中的一个关键差异化因素。",
                "**平台化雄心**：向自定义代理和企业解决方案的迈进，显示出成熟的长期战略。",
                "**模型无关性**：通过支持多种领先的AI模型（如GPT-4o, Claude 3.7），Felo降低了对单一供应商的依赖，并能确保用户始终能使用到最先进的技术 [2, 4, 35]。"
            ]
        },
        weaknesses: {
            title: "6.2 已识别的劣势与挑战",
            points: [
                "**功能限制与用户感知**：免费增值模式虽然是商业上的必要之举，但如果免费套餐的限制过于严格（如每天5次专业搜索），可能会导致负面的用户评价和流失 [11, 17]。",
                "**AI的固有局限性**：与所有AI工具一样，Felo有时也会误解查询或提供并非最新的信息，Felo自身也承认这一点 [14, 28]。它必须持续与AI不可靠的普遍看法作斗争。",
                "**复杂性**：与一些界面更简洁的竞争对手相比，Felo丰富的功能在提供强大能力的同时，也可能让新用户感到不知所措。",
                "**关键功能缺乏视觉材料**：在所提供的文档中，思维导图和交互式网页等关键功能缺乏清晰的截图，这是一个市场营销和用户引导上的缺口。"
            ]
        },
        future: {
            title: "6.3 未来轨迹",
            p1: "Felo的版本更新日志 [30] 揭示了其快速且高度战略性的迭代步伐。这些更新并非随机的功能堆砌，而是持续强化其核心战略。例如，增加对Excel文件上传的支持、支持思维导图导出为Markdown、以及允许在聊天中附加图片，这些都深化了工作流的整合。不断升级所支持的AI模型（如引入Claude 4 Sonnet和GPT-O3）则证实了其模型无关的灵活性战略。",
            p2: "Felo的发展轨迹是积极且专注的。可以预见，该平台将继续深化其工作流集成，推出更强大、更专业的代理功能，并持续向企业协作工具领域拓展。Felo正在从一个功能集合，演变为一个专为知识工作设计的、连贯的智能操作系统。"
        }
    },
    appendix: {
        title: "7.0 附录",
        pricingTable: {
            title: "7.1 表2：Felo AI 功能与定价矩阵",
            headers: ["方案", "标准版 (Standard)", "专业版 (Pro)", "企业版 (Enterprise)"],
            rows: [
                ["**价格**", "免费 ($0)", "月付 $14.99 / 年付 $12.5/月", "定制报价"],
                ["**专业搜索次数**", "5次/天", "300次/天 (或更高，根据套餐)", "900次/天或无限制"],
                ["**PPT生成**", "有限", "无限制", "无限制"],
                ["**文件上传与分析**", "支持", "支持", "支持"],
                ["**高级AI模型访问**", "使用Felo自有模型", "访问GPT-4o, Claude 3.7 Sonnet等", "访问最先进模型"],
                ["**自定义AI代理**", "不支持", "不支持", "支持"],
                ["**团队管理**", "不支持", "不支持", "支持"],
                ["**安全与合规**", "标准", "标准", "SOC2, SSO, 数据隔离"],
                ["**数据用于模型训练**", "可能", "可能", "**绝不**"]
            ],
            source: "*数据来源* | *[11, 35]* | *[11, 35]* | *[35]*"
        },
        screenshots: {
            title: "7.2 功能截图URL汇总",
            intro: "本报告分析过程中，收集到的可用的功能截图URL如下：",
            ppt: {
                title: "**AI演示文稿生成 (GIF演示)**:",
                url: "https://blog-static.felo.ai/AI_13a97595d8.gif",
                alt: "AI演示文稿生成GIF"
            },
            android: {
                title: "**Android 应用 (Google Play Store)**: [17]",
                urls: [
                    "https://play-lh.googleusercontent.com/6NokuHPnn7PGdFR8RpaNY2YXo4xj0k_PFrLjfxHdiaYLLCXpKusD81VyNNwoPTmLT2g=w526-h296-rw",
                    "https://play-lh.googleusercontent.com/9XNjqsDffADSQ4a6lDnlucacgZEsU7JsAMhONk73EkvRjsNaYVGmhZYBAlbvmTccu8M=w526-h296-rw",
                    "https://play-lh.googleusercontent.com/yIE4h6Iwf5DOoxu8W7aIfIF7Oi3CV5D8RKVDdiZCvbAEP5AJWOFE1lDliKo_HzPS5A=w526-h296-rw",
                    "https://play-lh.googleusercontent.com/lnXjnZbOb6uWIiju8Eue42NQm35nThi_yyO2yAAyObPEonPYA4vef9I3wYRWVUuU6zk=w526-h296-rw",
                    "https://play-lh.googleusercontent.com/BaOeXNGlb_Q4Z0UuB8YoFwmpYFo9GTbCs7Jg4ViRHtxt2QfDe0nnq-WTWTAwrRgH2Fo=w526-h296-rw",
                    "https://play-lh.googleusercontent.com/FQqDdESB0dYa0Y2n2B1ghk1verR-lEFoiGuqBnP2mhhnuLN6M7ruZ983mjBe0NJgejM=w526-h296-rw",
                    "https://play-lh.googleusercontent.com/l1vwGDnyazX2Lnlp2JvgZmh7h9MOX_zrP8-_P_NISDKFSghvb8qxbEKuRE12b0IBjgui=w526-h296-rw",
                    "https://play-lh.googleusercontent.com/d8RT-IqQW9nJy6u8lat2gIQU-_JPcuCb9oCc8jm2acaBWQKgcb_zy_SZHeGAjN_myFn0=w526-h296-rw",
                    "https://play-lh.googleusercontent.com/DCYS7l9jp_7CgM_ySti4Z5npUVASv8bpihYIZJKQipQhKZFaFRndpH-7hOHLwXPEHw=w526-h296-rw"
                ],
                alt: "Felo AI 安卓应用截图"
            },
            ios: {
                title: "**iOS 应用 (Apple App Store)**:",
                desc: "iOS应用的截图可在其App Store页面查看，研究资料中提供的链接为占位符 [7]。"
            },
            missing: {
                title: "**思维导图、交互式网页等功能**：",
                desc: "在本次分析的研究资料中，未找到这些功能的静态或动态截图。"
            }
        }
    }
  },
  en: {
    title: "Felo AI Feature Analysis",
    nav: {
      summary: "Executive Summary",
      overview: "Company Overview",
      features: "Feature Deep Dive",
      enterprise: "Enterprise Solutions",
      competition: "Competitive Landscape",
      analysis: "Analyst&rsquo;s View",
      appendix: "Appendix",
    },
    executiveSummary: {
      title: "1.0 Executive Summary",
      p1: "Felo AI is positioning itself as a &ldquo;workflow engine&rdquo; that goes far beyond traditional search tools. Its strategic identity and core value proposition are built on three pillars:",
      points: [
        "**Global-First Multilingual Architecture**: Leveraging Cross-Language Information Retrieval (CLIR) as a foundational differentiator to break down global information barriers.",
        "**Integrated &ldquo;Research-to-Creation&rdquo; Workflow**: Seamlessly integrating information discovery (search), knowledge organization (mind maps, topic collections), and content generation (PPT presentations) into a closed-loop productivity ecosystem.",
        "**Agent-Driven Real-Time Information Access**: Actively scraping real-time web information from sources like social media through AI agents and Robotic Process Automation (RPA) to provide users with the latest trends and insights."
      ],
      p2: "The platform is precisely targeted at academics, professionals, and global enterprise users, carving out a unique market position against competitors like Perplexity AI and You.com by offering an integrated suite of tools that solve complex, multi-step tasks. Felo AI&rsquo;s strategy is not to simply replace traditional search engines, but to become the core operating system for high-value knowledge work."
    },
    companyOverview: {
      title: "2.0 Company & Strategy Overview",
      section1: {
        title: "2.1 Company Profile: Felo Inc.",
        p1: "Felo AI is developed by the Japanese startup Felo Inc. (Felo株式会社) [1, 2]. Founded in Tokyo in July 2024, the company specializes in generative AI technology, with a product portfolio that includes Felo Translator and Glarity in addition to its core Felo AI Search [1]. The CEO is Tatsuya Kaneda [1].",
        p2: "The company&rsquo;s Japanese origin provides a logical explanation for its strong multilingual capabilities. The development team likely experienced firsthand the barriers of an English-dominated internet, making this a core driver of the product&rsquo;s design. Notably, a September 2024 press release attributed Felo AI&rsquo;s launch to &ldquo;Sparticle Inc.&rdquo; [3]. However, as the official Felo blog consistently identifies the company as Felo Inc. [1], this report will proceed with Felo Inc. as the primary entity and treat the &ldquo;Sparticle Inc.&rdquo; mention as a potential error or affiliated entity name in the press release."
      },
      section2: {
        title: "2.2 The &ldquo;Answer Engine&rdquo; Paradigm Shift",
        p1: "Felo AI positions itself as an &ldquo;answer engine&rdquo; or &ldquo;conversational search engine,&rdquo; aiming to move beyond the traditional model of providing a list of links [1, 4, 5]. It uses advanced Natural Language Processing (NLP) to understand user intent and deliver precise, conversational answers directly [1, 2].",
        p2: "A critical strategic element in this paradigm is the creation of a &ldquo;trust layer.&rdquo; Generative AI models are prone to &ldquo;hallucinations&rdquo; (fabricating information), a major barrier to user adoption. Felo directly confronts this by repeatedly emphasizing that its answers come with &ldquo;traceable sources&rdquo; and &ldquo;citations&rdquo; [2, 6, 7, 8, 9]. This is more than a feature; it&rsquo;s a strategic decision. For Felo&rsquo;s target audience of researchers and professionals, the *verifiability* of an answer is as important as the answer itself. The citation mechanism is therefore a cornerstone of the product, designed to build trust by mitigating the primary weakness of its underlying technology."
      },
      section3: {
        title: "2.3 Target Audience & Use Case Analysis",
        p1: "Felo AI explicitly designs its platform for students, academics, researchers, business professionals, and content creators [4, 10, 11, 12, 13, 14, 15]. Its core use cases are not simple, one-off queries but complex, multi-step knowledge work tasks. These include writing a 10,000-word research report [10], planning a holiday trip [14], and drafting a press release on market trends [15].",
        p2: "Traditionally, these tasks require users to switch between multiple tools, spending significant time on searching, organizing, synthesizing, and creating. Felo&rsquo;s strategy is to cover this entire workflow with its integrated suite of features (Search, Mind Map, PPT Generation, Topic Collections). This indicates that Felo is not trying to compete directly with giants like Google for everyday search but is instead targeting an underserved niche: high-value, multi-step knowledge work. This focus allows it to build a deeply integrated and sticky product."
      }
    },
    featureDeepDive: {
        title: "3.0 Feature Deep Dive: Latest Features & Capabilities",
        intro: "This section details the various features of the Felo AI platform, explains them with available screenshots, and analyzes the role of each feature in Felo&rsquo;s overall strategy.",
        searchExperience: {
            title: "3.1 Evolving Search Experience",
            multilingual: {
                title: "3.1.1 Multilingual Conversational Search (CLIR)",
                p1: "This is Felo&rsquo;s cornerstone feature. It offers not just simple translation but true Cross-Language Information Retrieval (CLIR). A user can ask a question in their native language, and Felo will search a global repository of multilingual resources, then synthesize and present the answer in the user&rsquo;s language, complete with translated citations [1, 2, 3, 4, 6, 8, 12, 13, 16]. This feature aims to completely break down language barriers and democratize access to global knowledge [6, 12].",
                p2: "This &ldquo;global-first&rdquo; philosophy is not just a feature but is baked into the product&rsquo;s underlying architecture. Felo processes multilingual information at the search stage, rather than translating after the fact, which is technically more complex and powerful. This architecture likely stems from its Japanese development origins and forms its most unique and defensible strategic moat in the global market, especially in non-English speaking regions."
            },
            agentSearch: {
                title: "3.1.2 AI Agent Search: Real-Time Intelligence",
                p1: "Felo utilizes an &ldquo;AI Agent Search&rdquo; feature that employs Robotic Process Automation (RPA) to actively scrape real-time, user-generated content from social platforms like Reddit and Twitter [7, 17, 18, 19]. This allows Felo to provide up-to-the-minute trends, public sentiment, and immediate insights that traditional web crawlers cannot capture [18], making it crucial for business use cases like media monitoring and competitive analysis [15].",
                p2: "A major limitation of many large language models is their training data cutoff. Felo&rsquo;s agent search directly addresses this by querying the &ldquo;live web.&rdquo; The use of RPA suggests an active, automated information-gathering process, not passive indexing. This feature transforms Felo from a knowledge repository into a real-time intelligence tool, significantly expanding its value proposition for professionals in marketing, PR, and strategic analysis."
            },
            proSearch: {
                title: "3.1.3 Pro Search Modes: Academic & Document",
                academic: "**Academic Search**: A dedicated mode that queries a massive database of over 245 million academic publications (journal articles, conference papers, etc.) [9, 13, 16, 20]. It provides AI-generated answers based directly on the literature, complete with citations, and can translate foreign-language papers into the user&rsquo;s native tongue.",
                document: "**Document Search**: Users can search specifically for file types like PDF, Word, Excel, and PowerPoint by appending the format to their query (e.g., &ldquo;technology transfer agreement PDF&rdquo;) [7, 17, 19, 21].",
                p1: "These specialized modes further demonstrate Felo&rsquo;s deep understanding of its target users. Academic Search is a powerful tool tailored for the researcher and student demographic, while Document Search offers immense convenience for professionals who work with specific file formats. This again reflects Felo&rsquo;s product philosophy of solving concrete workflow problems."
            }
        },
        contentSuite: {
            title: "3.2 Content Transformation Suite",
            ppt: {
                title: "3.2.1 AI Presentation (PPT) Generation",
                p1: "A flagship feature that allows users to generate professional-grade presentations with a single click from search results, uploaded documents (PDF/Word), or a text outline [4, 10, 11, 22, 23, 24, 25, 26]. An AI agent gathers information, an AI builds the slide framework, and the user can customize from various templates [22]. The feature supports multilingual generation and can be exported as PPT, PDF, or image files [22, 26]. A 2024 update added the ability to convert uploaded PDF and Word files directly into presentations [22, 27].",
                screenshot_title: "Feature Screenshot:",
                screenshot_desc: "A GIF demonstrating the feature&rsquo;s workflow is available here:",
                gif_alt: "Felo AI PPT Generation Feature GIF Demo"
            },
            mindMap: {
                title: "3.2.2 Mind Map Generation",
                p1: "Felo can automatically transform search results or text content into a visual mind map or a text outline [3, 10, 11, 12, 16, 28, 29]. This feature is designed to help users visualize knowledge, organize their thoughts, and understand complex topics [12, 16]. Version logs show that this feature has been updated with various professional templates and support for exporting mind maps to Markdown format [30].",
                screenshot_title: "Feature Screenshot:",
                screenshot_desc: "No direct screenshot of this feature was found in the provided research materials. This report notes the absence of visual material while describing its functionality."
            },
            summarization: {
                title: "3.2.3 Comprehensive Content Summarization",
                p1: "Felo provides summarization for various content types, acting as a crucial bridge between raw information and structured knowledge, and a key link in the overall workflow.",
                points: [
                    "**Webpage/URL Summarization**: Paste a link and use the &ldquo;summarize&rdquo; command to get a concise summary of the page [7, 17, 20].",
                    "**YouTube Video Summarization**: Paste a YouTube video link to instantly generate a summary of its content, saving significant viewing time. These summaries can then be converted into PPTs or mind maps [31].",
                    "**Document Summarization**: Supports analysis and summarization of uploaded files like PDFs and Word documents [9, 27]."
                ]
            },
            interactiveWeb: {
                title: "3.2.4 Interactive Web Page Creation",
                p1: "A newer feature available in &ldquo;Deep Search&rdquo; mode. Users can transform text-heavy search results (like research papers or long articles) into a dynamic, interactive webpage with one click. This format breaks down information into more digestible and navigable modules, enhancing the reading experience [32].",
                screenshot_title: "Feature Screenshot:",
                screenshot_desc: "No screenshot of this feature was provided in the research materials. It is described as being accessible via a &ldquo;Generate Interactive Webpage&rdquo; button on the deep search results screen [32]."
            }
        },
        knowledgeHub: {
            title: "3.3 Integrated Knowledge Hub",
            topicCollections: {
                title: "3.3.1 Topic Collections: A Personal Knowledge Base",
                p1: "This feature allows users to save and organize search results, conversation threads, and other information into &ldquo;Topic Collections&rdquo; [3, 6, 11, 12, 16, 33, 34]. It goes beyond a simple bookmarking tool to build a dynamic, personal knowledge base. More importantly, users can &ldquo;chat&rdquo; with their collections—asking follow-up questions, summarizing content, or rewriting information within the context of their saved data [6, 20, 33, 34].",
                p2: "This &ldquo;chat with your data&rdquo; paradigm is a major innovation for Felo. Standard search is stateless; each query is independent. Topic Collections introduce &ldquo;state&rdquo; and &ldquo;memory&rdquo; to the research process. By allowing users to interact with their own curated set of information, Felo transforms from a public search engine into a personal data analyst. This is a powerful lock-in feature: as a user builds multiple, detailed collections, the platform becomes exponentially more valuable to them, significantly increasing the cost and difficulty of switching to a competitor. It is a key component of Felo&rsquo;s &ldquo;sticky workflow&rdquo; strategy."
            }
        },
        platformExtension: {
            title: "3.4 Platform Extensibility & Customization",
            customAgents: {
                title: "3.4.1 User-Created Custom AI Agents",
                p1: "A powerful feature, likely aimed at Pro or Enterprise users, that allows the creation of custom AI agents [35, 36]. Users can define an agent&rsquo;s name, description, and core instructions (&ldquo;Custom Prompt&rdquo;), including its Persona, Task, Constraints, and Output Format. This enables users to create highly specialized tools for specific workflows, such as a &ldquo;Marketing Copy Assistant&rdquo; or a &ldquo;Code Explainer&rdquo; [36].",
                p2: "This is Felo&rsquo;s move toward becoming a true &ldquo;platform.&rdquo; It shifts from providing pre-built tools to empowering users to build their own, dramatically expanding the platform&rsquo;s applicability and forming a core value proposition for Felo&rsquo;s enterprise offerings [35]."
            },
            multiPlatform: {
                title: "3.4.2 Multi-Platform Accessibility",
                p1: "Felo AI Search is accessible through multiple channels, ensuring users can access it wherever they are:",
                points: [
                    "**Web Interface**: felo.ai",
                    "**Mobile Apps**: Native apps for iOS and Android are available [11].",
                    "**Browser Extension**: A browser extension is offered for enhanced integration [16, 37].",
                    "**Social Media Integration**: Users can even perform queries by mentioning `@felo` or `@felosearch` on Twitter [3, 7, 12, 17]."
                ],
                screenshot_title: "Feature Screenshots:",
                ios: "**iOS App**: The Apple App Store page provides multiple screenshots [7]. Although the original link was a placeholder, the report confirms these are viewable on the actual store page and lists the relevant feature descriptions [7].",
                android: "**Android App**: The Google Play Store page provides multiple valid screenshot URLs, which are listed in the appendix [17].",
            }
        }
    },
    enterprise: {
        title: "4.0 For Business: Enterprise Solutions",
        intro: "Felo offers a dedicated plan for teams and businesses called &ldquo;Felo Enterprise,&rdquo; with the core goals of boosting productivity, fostering collaboration, and ensuring data security [35].",
        subtitle: "Core Enterprise Features Include:",
        points: [
            "**Automated Multi-Step Search & Reporting**: AI agents can perform complex research tasks (like competitive analysis) and generate professional reports with one click [35].",
            "**Customizable AI Agents**: Teams can build AI agents tailored to their specific workflows (e.g., code debugging, creative brainstorming) [35].",
            "**Team Collaboration & Management**: Admins can easily manage team members, assign roles, and control access permissions [35].",
            "**Enhanced Data Privacy & Security**: Felo Enterprise is SOC2 certified, offers Single Sign-On (SSO), and makes a firm commitment to **never use enterprise customer data to train its AI models** [35]."
        ],
        conclusion: "The enterprise plan is the ultimate expression of Felo&rsquo;s workflow strategy. It aims to embed Felo not just in an individual&rsquo;s workflow, but in a company&rsquo;s core operations. By providing enterprise-grade security assurances (especially the promise not to train on customer data), Felo removes the biggest hesitation for businesses to adopt AI tools for sensitive work, turning a significant productivity boost into a viable business model."
    },
    competition: {
        title: "5.0 Competitive Landscape & Market Positioning",
        analysis: {
            title: "5.1 Comparative Analysis",
            p1: "The research materials provide direct comparisons of Felo AI with key competitors like Perplexity, You.com, and GenSpark [2, 6, 8, 11, 38, 39, 40].",
            points: [
                "**Felo vs. Perplexity**: Felo positions itself as a more reliable and accurate alternative, with a more generous free plan and more advanced features like granular file/academic search and the topic chat function [38]. Perplexity is known for its conversational search but is noted to have occasional accuracy issues [38].",
                "**Felo vs. You.com**: Felo claims an edge with its comprehensive global information access (CLIR), trusted citations, and integrated knowledge management (Topic Collections), which are considered more advanced than what You.com offers [2].",
                "**Felo vs. GenSpark**: Felo&rsquo;s key advantages are its cross-language information retrieval and its powerful content creation suite (AI-PPT), which GenSpark lacks [40].",
            ],
            p2: "The table below visually summarizes the differences between Felo AI and its main competitors across key strategic dimensions."
        },
        table: {
            title: "Table 1: Felo AI Competitive Analysis Summary",
            headers: ["Feature/Dimension", "Felo AI", "Perplexity AI", "You.com", "GenSpark"],
            rows: [
                ["**Core Positioning**", "Integrated Workflow Engine", "Conversational Answer Engine", "Personalized AI Assistant", "Summarization Answer Engine"],
                ["**Cross-Language (CLIR)**", "Core Strength, Global-First", "Limited", "Limited", "Limited"],
                ["**Real-Time Info (Social)**", "Active Agent Scraping", "Live Web Access", "AI-Powered", "Real-Time Verification"],
                ["**Academic Search**", "Dedicated, Powerful Mode", "General Search", "General Search", "General Search"],
                ["**Content Generation**", "PPT, Mind Map, Webpage", "Text, Code", "Text, Code", "Summary Pages (Sparkpages)"],
                ["**Knowledge Management**", "Topic Collections (Chattable)", "Collections", "Bookmarks", "-"],
                ["**Citation Transparency**", "Core Commitment, Very High", "High", "High", "High"],
                ["**Business Model**", "Freemium / Enterprise", "Freemium", "Freemium", "Beta"]
            ]
        },
        uvp: {
            title: "5.2 Unique Value Proposition (UVP)",
            p1: "Felo&rsquo;s UVP is not a single feature but the result of its three strategic pillars working in synergy:",
            points: [
                "It uses its **global-first architecture (CLIR)** to gather a unique and diverse set of information.",
                "It uses its **agent search** to ensure that information is real-time and relevant.",
                "It feeds this quality information into an **integrated workflow engine** that allows users to organize (Topic Collections, Mind Maps) and create (PPTs) without ever leaving the platform."
            ],
            p2: "Felo is betting that users will ultimately prefer a single, integrated platform that can handle the entire knowledge lifecycle over a fragmented toolset of multiple, single-function &ldquo;best-in-class&rdquo; solutions."
        }
    },
    analystView: {
        title: "6.0 Analyst&rsquo;s View: Strengths, Weaknesses & Strategic Outlook",
        strengths: {
            title: "6.1 Core Strengths",
            points: [
                "**Workflow Integration**: The seamless flow from research to creation is a powerful and sticky advantage.",
                "**Global-First CLIR**: A strong and difficult-to-replicate moat, especially in non-English markets.",
                "**Real-Time Agent Search**: A key differentiator for business and trend analysis use cases.",
                "**Platform Ambition**: The move toward custom agents and enterprise solutions shows a mature, long-term strategy.",
                "**Model Agnosticism**: By supporting multiple leading AI models (like GPT-4o, Claude 3.7), Felo reduces dependency on a single vendor and can ensure users always have access to state-of-the-art technology [2, 4, 35]."
            ]
        },
        weaknesses: {
            title: "6.2 Identified Weaknesses & Challenges",
            points: [
                "**Feature Gating & User Perception**: While a freemium model is a business necessity, overly strict limits on the free tier (e.g., 5 pro searches/day) can lead to negative user reviews and churn [11, 17].",
                "**Inherent AI Limitations**: Like all AI tools, Felo can sometimes misunderstand queries or provide information that isn&rsquo;t current, which Felo itself acknowledges [14, 28]. It must constantly battle the general perception of AI unreliability.",
                "**Complexity**: Compared to some competitors with cleaner interfaces, Felo&rsquo;s rich feature set, while powerful, could be overwhelming for new users.",
                "**Lack of Visuals for Key Features**: The absence of clear screenshots for key features like Mind Maps and Interactive Webpages in the provided documentation is a marketing and user-onboarding gap."
            ]
        },
        future: {
            title: "6.3 Future Trajectory",
            p1: "Felo&rsquo;s version update log [30] reveals a rapid and highly strategic iteration pace. The updates are not random feature additions but continuous reinforcements of its core strategy. For example, adding support for Excel file uploads, enabling mind map export to Markdown, and allowing image attachments in chat all deepen the workflow integration. The constant upgrading of supported AI models (like introducing Claude 4 Sonnet and GPT-O3) confirms its model-agnostic flexibility strategy.",
            p2: "Felo&rsquo;s trajectory is aggressive and focused. It is foreseeable that the platform will continue to deepen its workflow integrations, introduce more powerful and specialized agent capabilities, and expand further into enterprise collaboration tools. Felo is evolving from a collection of features into a coherent, intelligent operating system designed for knowledge work."
        }
    },
    appendix: {
        title: "7.0 Appendix",
        pricingTable: {
            title: "7.1 Table 2: Felo AI Feature & Pricing Matrix",
            headers: ["Plan", "Standard", "Pro", "Enterprise"],
            rows: [
                ["**Price**", "Free ($0)", "$14.99/mo or $12.5/mo annually", "Custom Quote"],
                ["**Pro Searches**", "5/day", "300/day (or more, by plan)", "900/day or Unlimited"],
                ["**PPT Generation**", "Limited", "Unlimited", "Unlimited"],
                ["**File Upload & Analysis**", "Supported", "Supported", "Supported"],
                ["**Premium AI Model Access**", "Uses Felo&rsquo;s own model", "Access to GPT-4o, Claude 3.7 Sonnet, etc.", "Access to most advanced models"],
                ["**Custom AI Agents**", "Not Supported", "Not Supported", "Supported"],
                ["**Team Management**", "Not Supported", "Not Supported", "Supported"],
                ["**Security & Compliance**", "Standard", "Standard", "SOC2, SSO, Data Isolation"],
                ["**Data Used for Training**", "Potentially", "Potentially", "**Never**"]
            ],
            source: "*Data Source* | *[11, 35]* | *[11, 35]* | *[35]*"
        },
        screenshots: {
            title: "7.2 Feature Screenshot URL Summary",
            intro: "The following are the available feature screenshot URLs collected during this analysis:",
            ppt: {
                title: "**AI Presentation Generation (GIF Demo)**:",
                url: "https://blog-static.felo.ai/AI_13a97595d8.gif",
                alt: "AI Presentation Generation GIF"
            },
            android: {
                title: "**Android App (Google Play Store)**: [17]",
                urls: [
                    "https://play-lh.googleusercontent.com/6NokuHPnn7PGdFR8RpaNY2YXo4xj0k_PFrLjfxHdiaYLLCXpKusD81VyNNwoPTmLT2g=w526-h296-rw",
                    "https://play-lh.googleusercontent.com/9XNjqsDffADSQ4a6lDnlucacgZEsU7JsAMhONk73EkvRjsNaYVGmhZYBAlbvmTccu8M=w526-h296-rw",
                    "https://play-lh.googleusercontent.com/yIE4h6Iwf5DOoxu8W7aIfIF7Oi3CV5D8RKVDdiZCvbAEP5AJWOFE1lDliKo_HzPS5A=w526-h296-rw",
                    "https://play-lh.googleusercontent.com/lnXjnZbOb6uWIiju8Eue42NQm35nThi_yyO2yAAyObPEonPYA4vef9I3wYRWVUuU6zk=w526-h296-rw",
                    "https://play-lh.googleusercontent.com/BaOeXNGlb_Q4Z0UuB8YoFwmpYFo9GTbCs7Jg4ViRHtxt2QfDe0nnq-WTWTAwrRgH2Fo=w526-h296-rw",
                    "https://play-lh.googleusercontent.com/FQqDdESB0dYa0Y2n2B1ghk1verR-lEFoiGuqBnP2mhhnuLN6M7ruZ983mjBe0NJgejM=w526-h296-rw",
                    "https://play-lh.googleusercontent.com/l1vwGDnyazX2Lnlp2JvgZmh7h9MOX_zrP8-_P_NISDKFSghvb8qxbEKuRE12b0IBjgui=w526-h296-rw",
                    "https://play-lh.googleusercontent.com/d8RT-IqQW9nJy6u8lat2gIQU-_JPcuCb9oCc8jm2acaBWQKgcb_zy_SZHeGAjN_myFn0=w526-h296-rw",
                    "https://play-lh.googleusercontent.com/DCYS7l9jp_7CgM_ySti4Z5npUVASv8bpihYIZJKQipQhKZFaFRndpH-7hOHLwXPEHw=w526-h296-rw"
                ],
                alt: "Felo AI Android App Screenshot"
            },
            ios: {
                title: "**iOS App (Apple App Store)**:",
                desc: "Screenshots for the iOS app are available on its App Store page; the link provided in the research materials was a placeholder [7]."
            },
            missing: {
                title: "**Mind Map, Interactive Webpage, etc.**:",
                desc: "No static or dynamic screenshots for these features were found in the research materials for this analysis."
            }
        }
    }
  }
};

// --- TYPE DEFINITIONS ---
type Language = 'zh' | 'en';

interface SectionProps {
  title: string;
  children: ReactNode;
  id: string;
}

interface TextWithHtmlProps {
  text: string;
}

// --- HELPER COMPONENTS ---

// This component safely renders text that might contain simple markdown-like bold/italic.
const TextWithHtml: FC<TextWithHtmlProps> = ({ text }) => {
  const parts = text.split(/(\*\*.*?\*\*|\*.*?\*|`.*?`)/g);
  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={index}>{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith('*') && part.endsWith('*')) {
          return <em key={index}>{part.slice(1, -1)}</em>;
        }
        if (part.startsWith('`') && part.endsWith('`')) {
          return <code key={index} className="bg-gray-200 dark:bg-gray-700 text-red-500 dark:text-red-400 px-1 py-0.5 rounded-md text-sm">{part.slice(1, -1)}</code>;
        }
        return part;
      })}
    </>
  );
};


const Section: FC<SectionProps> = ({ title, children, id }) => (
  <section id={id} className="mb-12 scroll-mt-20">
    <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 border-b-2 border-blue-500 pb-2 mb-6">
      {title}
    </h2>
    <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
      {children}
    </div>
  </section>
);

const SubSection: FC<{ title: string; children: ReactNode }> = ({ title, children }) => (
  <article className="mb-8">
    <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
      {title}
    </h3>
    <div className="space-y-4 pl-4 border-l-4 border-gray-200 dark:border-gray-700">
      {children}
    </div>
  </article>
);

const List: FC<{ items: string[] }> = ({ items }) => (
  <ul className="space-y-3 list-disc list-inside">
    {items.map((item, index) => (
      <li key={index}>
        <TextWithHtml text={item} />
      </li>
    ))}
  </ul>
);

const Table: FC<{ title: string, headers: string[], rows: string[][] }> = ({ title, headers, rows }) => (
    <div className="my-6">
        <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">{title}</h4>
        <div className="overflow-x-auto rounded-lg shadow-md">
            <table className="w-full text-sm text-left text-gray-600 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-300">
                    <tr>
                        {headers.map((header, index) => (
                            <th key={index} scope="col" className="px-4 py-3">
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, rowIndex) => (
                        <tr key={rowIndex} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex} className={`px-4 py-4 ${cellIndex === 0 ? 'font-medium text-gray-900 dark:text-white' : ''}`}>
                                    <TextWithHtml text={cell} />
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

const PricingTable: FC<{ title: string, headers: string[], rows: string[][], source: string }> = ({ title, headers, rows, source }) => (
    <div className="my-6">
        <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">{title}</h4>
        <div className="overflow-x-auto rounded-lg shadow-md">
            <table className="w-full text-sm text-left text-gray-600 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-300">
                    <tr>
                        {headers.map((header, index) => (
                            <th key={index} scope="col" className="px-4 py-3 text-center">
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, rowIndex) => (
                         <tr key={rowIndex} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex} className={`px-4 py-4 text-center ${cellIndex === 0 ? 'font-medium text-gray-900 dark:text-white text-left' : ''}`}>
                                    <TextWithHtml text={cell} />
                                </td>
                            ))}
                        </tr>
                    ))}
                    <tr className="bg-gray-50 dark:bg-gray-700">
                        {source.split('|').map((part, index) => (
                            <td key={index} className="px-4 py-2 text-xs text-gray-500 dark:text-gray-400 italic text-center">
                                <TextWithHtml text={part.trim()} />
                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
);


// --- MAIN COMPONENT ---
const FeloAIAnalysis: FC = () => {
  const [language, setLanguage] = useState<Language>('zh');
  const [isNavOpen, setIsNavOpen] = useState(false);

  const t = content[language];

  const handleLanguageToggle = () => {
    setLanguage(prev => (prev === 'en' ? 'zh' : 'en'));
  };

  const navLinks = [
    { href: '#summary', text: t.nav.summary },
    { href: '#overview', text: t.nav.overview },
    { href: '#features', text: t.nav.features },
    { href: '#enterprise', text: t.nav.enterprise },
    { href: '#competition', text: t.nav.competition },
    { href: '#analysis', text: t.nav.analysis },
    { href: '#appendix', text: t.nav.appendix },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen font-sans">
      <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400">
              {t.title}
            </h1>
            <div className="flex items-center">
              <nav className="hidden md:flex items-center space-x-4">
                 <button
                    onClick={handleLanguageToggle}
                    className="px-3 py-2 text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    aria-label={language === 'en' ? '切换到中文' : 'Switch to English'}
                  >
                    {language === 'en' ? '中文' : 'English'}
                  </button>
              </nav>
              <button onClick={() => setIsNavOpen(!isNavOpen)} className="md:hidden ml-4 text-gray-600 dark:text-gray-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Nav */}
        {isNavOpen && (
            <div className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {navLinks.map(link => (
                        <a key={link.href} href={link.href} onClick={() => setIsNavOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">{link.text}</a>
                    ))}
                </div>
                <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center px-5">
                       <button
                          onClick={() => { handleLanguageToggle(); setIsNavOpen(false); }}
                          className="w-full px-3 py-2 text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                          aria-label={language === 'en' ? '切换到中文' : 'Switch to English'}
                        >
                          {language === 'en' ? '中文' : 'English'}
                        </button>
                    </div>
                </div>
            </div>
        )}
      </header>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="w-full lg:w-1/4 lg:sticky lg:top-24 self-start hidden lg:block">
            <nav className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-3 text-gray-800 dark:text-gray-100">{language === 'en' ? 'Table of Contents' : '目录'}</h3>
              <ul className="space-y-2">
                {navLinks.map(link => (
                  <li key={link.href}>
                    <a href={link.href} className="block text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-sm">{link.text}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <main className="w-full lg:w-3/4 bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg">
            {/* Executive Summary */}
            <Section title={t.executiveSummary.title} id="summary">
              <p>{t.executiveSummary.p1}</p>
              <List items={t.executiveSummary.points} />
              <p>{t.executiveSummary.p2}</p>
            </Section>

            {/* Company Overview */}
            <Section title={t.companyOverview.title} id="overview">
              <SubSection title={t.companyOverview.section1.title}>
                <p>{t.companyOverview.section1.p1}</p>
                <p>{t.companyOverview.section1.p2}</p>
              </SubSection>
              <SubSection title={t.companyOverview.section2.title}>
                <p>{t.companyOverview.section2.p1}</p>
                <p>{t.companyOverview.section2.p2}</p>
              </SubSection>
              <SubSection title={t.companyOverview.section3.title}>
                <p>{t.companyOverview.section3.p1}</p>
                <p>{t.companyOverview.section3.p2}</p>
              </SubSection>
            </Section>

            {/* Feature Deep Dive */}
            <Section title={t.featureDeepDive.title} id="features">
              <p>{t.featureDeepDive.intro}</p>
              <SubSection title={t.featureDeepDive.searchExperience.title}>
                  <article className="mb-6">
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">{t.featureDeepDive.searchExperience.multilingual.title}</h4>
                      <div className="space-y-3 pl-4 border-l-2 border-gray-200 dark:border-gray-600">
                          <p>{t.featureDeepDive.searchExperience.multilingual.p1}</p>
                          <p>{t.featureDeepDive.searchExperience.multilingual.p2}</p>
                      </div>
                  </article>
                  <article className="mb-6">
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">{t.featureDeepDive.searchExperience.agentSearch.title}</h4>
                       <div className="space-y-3 pl-4 border-l-2 border-gray-200 dark:border-gray-600">
                          <p>{t.featureDeepDive.searchExperience.agentSearch.p1}</p>
                          <p>{t.featureDeepDive.searchExperience.agentSearch.p2}</p>
                      </div>
                  </article>
                  <article>
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">{t.featureDeepDive.searchExperience.proSearch.title}</h4>
                       <div className="space-y-3 pl-4 border-l-2 border-gray-200 dark:border-gray-600">
                          <ul className="space-y-2 list-disc list-inside">
                              <li><TextWithHtml text={t.featureDeepDive.searchExperience.proSearch.academic} /></li>
                              <li><TextWithHtml text={t.featureDeepDive.searchExperience.proSearch.document} /></li>
                          </ul>
                          <p>{t.featureDeepDive.searchExperience.proSearch.p1}</p>
                      </div>
                  </article>
              </SubSection>
              <SubSection title={t.featureDeepDive.contentSuite.title}>
                  <article className="mb-6">
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">{t.featureDeepDive.contentSuite.ppt.title}</h4>
                      <div className="space-y-3 pl-4 border-l-2 border-gray-200 dark:border-gray-600">
                          <p>{t.featureDeepDive.contentSuite.ppt.p1}</p>
                          <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                              <p className="font-semibold">{t.featureDeepDive.contentSuite.ppt.screenshot_title}</p>
                              <p>{t.featureDeepDive.contentSuite.ppt.screenshot_desc}</p>
                              <img src="https://blog-static.felo.ai/AI_13a97595d8.gif" alt={t.featureDeepDive.contentSuite.ppt.gif_alt} className="mt-2 rounded-lg shadow-md w-full max-w-md mx-auto"/>
                          </div>
                      </div>
                  </article>
                   <article className="mb-6">
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">{t.featureDeepDive.contentSuite.mindMap.title}</h4>
                      <div className="space-y-3 pl-4 border-l-2 border-gray-200 dark:border-gray-600">
                          <p>{t.featureDeepDive.contentSuite.mindMap.p1}</p>
                           <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                              <p className="font-semibold">{t.featureDeepDive.contentSuite.mindMap.screenshot_title}</p>
                              <p className="italic">{t.featureDeepDive.contentSuite.mindMap.screenshot_desc}</p>
                          </div>
                      </div>
                  </article>
                   <article className="mb-6">
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">{t.featureDeepDive.contentSuite.summarization.title}</h4>
                      <div className="space-y-3 pl-4 border-l-2 border-gray-200 dark:border-gray-600">
                          <p>{t.featureDeepDive.contentSuite.summarization.p1}</p>
                          <List items={t.featureDeepDive.contentSuite.summarization.points} />
                      </div>
                  </article>
                   <article>
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">{t.featureDeepDive.contentSuite.interactiveWeb.title}</h4>
                      <div className="space-y-3 pl-4 border-l-2 border-gray-200 dark:border-gray-600">
                          <p>{t.featureDeepDive.contentSuite.interactiveWeb.p1}</p>
                           <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                              <p className="font-semibold">{t.featureDeepDive.contentSuite.interactiveWeb.screenshot_title}</p>
                              <p className="italic">{t.featureDeepDive.contentSuite.interactiveWeb.screenshot_desc}</p>
                          </div>
                      </div>
                  </article>
              </SubSection>
              <SubSection title={t.featureDeepDive.knowledgeHub.title}>
                   <article>
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">{t.featureDeepDive.knowledgeHub.topicCollections.title}</h4>
                      <div className="space-y-3 pl-4 border-l-2 border-gray-200 dark:border-gray-600">
                          <p>{t.featureDeepDive.knowledgeHub.topicCollections.p1}</p>
                          <p>{t.featureDeepDive.knowledgeHub.topicCollections.p2}</p>
                      </div>
                  </article>
              </SubSection>
              <SubSection title={t.featureDeepDive.platformExtension.title}>
                   <article className="mb-6">
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">{t.featureDeepDive.platformExtension.customAgents.title}</h4>
                      <div className="space-y-3 pl-4 border-l-2 border-gray-200 dark:border-gray-600">
                          <p>{t.featureDeepDive.platformExtension.customAgents.p1}</p>
                          <p>{t.featureDeepDive.platformExtension.customAgents.p2}</p>
                      </div>
                  </article>
                  <article>
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">{t.featureDeepDive.platformExtension.multiPlatform.title}</h4>
                      <div className="space-y-3 pl-4 border-l-2 border-gray-200 dark:border-gray-600">
                          <p>{t.featureDeepDive.platformExtension.multiPlatform.p1}</p>
                          <List items={t.featureDeepDive.platformExtension.multiPlatform.points} />
                           <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg space-y-2">
                                <p className="font-semibold">{t.featureDeepDive.platformExtension.multiPlatform.screenshot_title}</p>
                                <p><TextWithHtml text={t.featureDeepDive.platformExtension.multiPlatform.ios} /></p>
                                <p><TextWithHtml text={t.featureDeepDive.platformExtension.multiPlatform.android} /></p>
                           </div>
                      </div>
                  </article>
              </SubSection>
            </Section>

            {/* Enterprise Solutions */}
            <Section title={t.enterprise.title} id="enterprise">
              <p>{t.enterprise.intro}</p>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-4 mb-2">{t.enterprise.subtitle}</h4>
              <List items={t.enterprise.points} />
              <p className="mt-4">{t.enterprise.conclusion}</p>
            </Section>

            {/* Competitive Landscape */}
            <Section title={t.competition.title} id="competition">
              <SubSection title={t.competition.analysis.title}>
                <p>{t.competition.analysis.p1}</p>
                <List items={t.competition.analysis.points} />
                <p>{t.competition.analysis.p2}</p>
              </SubSection>
              <Table title={t.competition.table.title} headers={t.competition.table.headers} rows={t.competition.table.rows} />
              <SubSection title={t.competition.uvp.title}>
                <p>{t.competition.uvp.p1}</p>
                <List items={t.competition.uvp.points} />
                <p>{t.competition.uvp.p2}</p>
              </SubSection>
            </Section>

            {/* Analyst's View */}
            <Section title={t.analystView.title} id="analysis">
              <SubSection title={t.analystView.strengths.title}>
                <List items={t.analystView.strengths.points} />
              </SubSection>
              <SubSection title={t.analystView.weaknesses.title}>
                <List items={t.analystView.weaknesses.points} />
              </SubSection>
              <SubSection title={t.analystView.future.title}>
                <p>{t.analystView.future.p1}</p>
                <p>{t.analystView.future.p2}</p>
              </SubSection>
            </Section>
            
            {/* Appendix */}
            <Section title={t.appendix.title} id="appendix">
                <SubSection title={t.appendix.pricingTable.title}>
                    <PricingTable 
                        title=""
                        headers={t.appendix.pricingTable.headers} 
                        rows={t.appendix.pricingTable.rows} 
                        source={t.appendix.pricingTable.source}
                    />
                </SubSection>
                <SubSection title={t.appendix.screenshots.title}>
                    <p>{t.appendix.screenshots.intro}</p>
                    <article className="my-4 p-4 border rounded-lg dark:border-gray-700">
                        <h5 className="font-bold"><TextWithHtml text={t.appendix.screenshots.ppt.title} /></h5>
                        <a href={t.appendix.screenshots.ppt.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline break-all">{t.appendix.screenshots.ppt.url}</a>
                        <img src={t.appendix.screenshots.ppt.url} alt={t.appendix.screenshots.ppt.alt} className="mt-2 rounded-lg shadow-md w-full max-w-sm"/>
                    </article>
                    <article className="my-4 p-4 border rounded-lg dark:border-gray-700">
                        <h5 className="font-bold"><TextWithHtml text={t.appendix.screenshots.android.title} /></h5>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
                            {t.appendix.screenshots.android.urls.map((url, index) => (
                                <a key={index} href={url} target="_blank" rel="noopener noreferrer">
                                    <img src={url} alt={`${t.appendix.screenshots.android.alt} ${index + 1}`} className="rounded-lg shadow-md hover:opacity-80 transition-opacity"/>
                                </a>
                            ))}
                        </div>
                    </article>
                    <article className="my-4 p-4 border rounded-lg dark:border-gray-700">
                        <h5 className="font-bold"><TextWithHtml text={t.appendix.screenshots.ios.title} /></h5>
                        <p className="italic">{t.appendix.screenshots.ios.desc}</p>
                    </article>
                     <article className="my-4 p-4 border rounded-lg dark:border-gray-700">
                        <h5 className="font-bold"><TextWithHtml text={t.appendix.screenshots.missing.title} /></h5>
                        <p className="italic">{t.appendix.screenshots.missing.desc}</p>
                    </article>
                </SubSection>
            </Section>

          </main>
        </div>
      </div>
    </div>
  );
};

export default FeloAIAnalysis;
