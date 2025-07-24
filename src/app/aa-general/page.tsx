"use client";

import React, { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';

// TypeScript Interfaces for type safety
interface ToolInfo {
  name: { zh: string; en: string };
  link: string;
  image?: string; // Optional image path
  example: { zh: string; en: string };
  info: { zh: string; en: string };
}

interface ToolScenario {
  category: { zh: string; en: string };
  scenario: { zh: string; en: string };
  tools: ToolInfo[];
}

type Language = 'zh' | 'en';

// --- Data ---
// Merged and structured data from the user's comprehensive list.
const aiToolsData: ToolScenario[] = [
    {
        category: { zh: '多媒体创作', en: 'Multimedia Creation' },
        scenario: { zh: '会议记录', en: 'Meeting Recording' },
        tools: [
            { name: { zh: 'Notta', en: 'Notta' }, link: 'https://www.notta.ai', example: { zh: '将Zoom会议录音转录为文本，自动生成会议摘要和行动项。', en: 'Transcribe Zoom meeting recordings to text, automatically generating summaries and action items.' }, info: { zh: '免费计划提供每月120分钟转录。', en: 'Free plan offers 120 minutes of transcription per month.' } },
            { name: { zh: 'Fireflies.ai', en: 'Fireflies.ai' }, link: 'https://www.fireflies.ai', example: { zh: '自动加入Teams会议，生成带时间戳的笔记并发送到Slack。', en: 'Automatically joins Teams meetings, generates time-stamped notes and sends them to Slack.' }, info: { zh: '免费计划提供无限转录，付费解锁高级功能（$10/月起）。', en: 'Free plan offers unlimited transcription, paid to unlock advanced features (from $10/month).' } },
        ]
    },
    {
        category: { zh: '多媒体创作', en: 'Multimedia Creation' },
        scenario: { zh: '语音转文字', en: 'Speech-to-Text' },
        tools: [
            { name: { zh: 'Descript', en: 'Descript' }, link: 'https://www.descript.com', example: { zh: '将采访录音转为可编辑文本，自动去除填充词。', en: 'Convert interview recordings into editable text, automatically removing filler words.' }, info: { zh: '免费计划提供1小时转录，付费$12/月起。', en: 'Free plan offers 1 hour of transcription, paid plans start at $12/month.' } },
            { name: { zh: 'ElevenLabs', en: 'ElevenLabs' }, link: 'https://www.elevenlabs.io', example: { zh: '转录多达32位发言者的会议音频。', en: 'Transcribe meeting audio with up to 32 speakers.' }, info: { zh: '免费计划提供10,000字符/月。', en: 'Free plan offers 10,000 characters/month.' } },
            { name: { zh: 'MS Word online version', en: 'MS Word online version' }, link: 'https://www.microsoft.com/en-us/microsoft-365/online-document-editor', image: '/tools/Transcribe-word.png', example: { zh: '在Word Online中直接进行语音转录，方便地在文档中整理和编辑。', en: 'Transcribe audio directly in Word Online for easy organization and editing within your document.' }, info: { zh: '通常包含在Microsoft 365订阅中。', en: 'Usually included with a Microsoft 365 subscription.' } },
            { name: { zh: 'oTranscribe', en: 'oTranscribe' }, link: 'https://otranscribe.com/', example: { zh: '一个免费的开源在线工具，集成了音频播放器和文本编辑器，可以通过快捷键控制音频，提高手动转录效率。', en: 'A free, open-source online tool that integrates an audio player and text editor. Control audio with shortcuts to improve manual transcription efficiency.' }, info: { zh: '完全免费。', en: 'Completely free.' } },
        ]
    },
    {
        category: { zh: '多媒体创作', en: 'Multimedia Creation' },
        scenario: { zh: '文字转语音', en: 'Text-to-Speech' },
        tools: [
            { name: { zh: 'Google AI Studio', en: 'Google AI Studio' }, link: 'https://aistudio.google.com', example: { zh: '为培训视频生成多语种旁白。', en: 'Generate multilingual narration for training videos.' }, info: { zh: '免费试用，需Google Cloud账户，200字符限制。', en: 'Free trial, requires Google Cloud account, 200-character limit.' } },
            { name: { zh: 'Lovo.ai', en: 'Lovo.ai' }, link: 'https://www.lovo.ai', example: { zh: '为广告视频生成多语言配音。', en: 'Generate multilingual voiceovers for ad videos.' }, info: { zh: '免费计划提供基本功能，付费$24/月起。', en: 'Free plan with basic features, paid plans from $24/month.' } },
        ]
    },
    {
        category: { zh: '多媒体创作', en: 'Multimedia Creation' },
        scenario: { zh: '文字生成图片', en: 'Text-to-Image Generation' },
        tools: [
            { name: { zh: 'DALL·E 3 (OpenAI)', en: 'DALL·E 3 (OpenAI)' }, link: 'https://platform.openai.com', example: { zh: '生成营销海报，包含特定文本和风格。', en: 'Generate marketing posters with specific text and styles.' }, info: { zh: '需ChatGPT Plus订阅，$20/月起。', en: 'Requires ChatGPT Plus subscription, from $20/month.' } },
            { name: { zh: 'Leonardo AI', en: 'Leonardo AI' }, link: 'https://www.leonardo.ai', example: { zh: '为NFT项目生成独特艺术品。', en: 'Generate unique artworks for NFT projects.' }, info: { zh: '免费计划每日150个代币，付费$10/月起。', en: 'Free plan with 150 tokens daily, paid plans from $10/month.' } },
        ]
    },
    {
        category: { zh: '多媒体创作', en: 'Multimedia Creation' },
        scenario: { zh: '图片识别', en: 'Image Recognition' },
        tools: [
            { name: { zh: 'Google Gemini', en: 'Google Gemini' }, link: 'https://gemini.google.com', example: { zh: '识别照片中的物体和场景，生成描述。', en: 'Recognize objects and scenes in photos, generating descriptions.' }, info: { zh: '免费试用，需Google账户，付费$20/月起。', en: 'Free trial, requires Google account, paid plans from $20/month.' } },
            { name: { zh: 'Clarifai', en: 'Clarifai' }, link: 'https://www.clarifai.com', example: { zh: '为电商平台自动标记产品图像元数据。', en: 'Automatically tag product image metadata for e-commerce platforms.' }, info: { zh: '免费计划提供5000次操作/月，付费$30/月起。', en: 'Free plan with 5,000 operations/month, paid plans from $30/month.' } },
        ]
    },
    {
        category: { zh: '多媒体创作', en: 'Multimedia Creation' },
        scenario: { zh: '图片编辑', en: 'Image Editing' },
        tools: [
            { name: { zh: 'Canva', en: 'Canva' }, link: 'https://www.canva.com', example: { zh: '为社交媒体帖子调整图像颜色和添加文本。', en: 'Adjust image colors and add text for social media posts.' }, info: { zh: '免费计划提供基本编辑，付费$12.99/月起。', en: 'Free plan with basic editing, paid plans from $12.99/month.' } },
            { name: { zh: 'Pixlr', en: 'Pixlr' }, link: 'https://www.pixlr.com', example: { zh: '移除照片背景，添加滤镜。', en: 'Remove photo backgrounds and add filters.' }, info: { zh: '免费计划提供基本功能，付费$7.99/月起。', en: 'Free plan with basic features, paid plans from $7.99/month.' } },
        ]
    },
    {
        category: { zh: '多媒体创作', en: 'Multimedia Creation' },
        scenario: { zh: '文字生成视频', en: 'Text-to-Video Generation' },
        tools: [
            { name: { zh: 'Google Veo 3', en: 'Google Veo 3' }, link: 'https://workspace.google.com', example: { zh: '为营销活动生成8秒带音频的视频片段。', en: 'Generate 8-second video clips with audio for marketing campaigns.' }, info: { zh: '需Google Workspace账户，免费试用，付费$20/用户/月起。', en: 'Requires Google Workspace account, free trial, paid from $20/user/month.' } },
            { name: { zh: 'Kling AI', en: 'Kling AI' }, link: 'https://app.klingai.com', example: { zh: '从文本生成短视频，适合社交媒体。', en: 'Generate short videos from text, suitable for social media.' }, info: { zh: '免费试用，付费¥69/月起。', en: 'Free trial, paid from ¥69/month.' } },
        ]
    },
    {
        category: { zh: '多媒体创作', en: 'Multimedia Creation' },
        scenario: { zh: '图片生成视频', en: 'Image-to-Video Generation' },
        tools: [
            { name: { zh: 'Luma Dream Machine', en: 'Luma Dream Machine' }, link: 'https://dream-machine.lumalabs.ai', example: { zh: '将产品照片转为展示视频。', en: 'Turn product photos into showcase videos.' }, info: { zh: '免费计划每月30次生成，付费$29.99/月起。', en: 'Free plan with 30 generations/month, paid from $29.99/month.' } },
            { name: { zh: 'Runway Gen-3', en: 'Runway Gen-3' }, link: 'https://www.runwayml.com', example: { zh: '将插图转为动画短片。', en: 'Turn illustrations into animated shorts.' }, info: { zh: '免费计划提供125个信用，付费$15/月起。', en: 'Free plan offers 125 credits, paid from $15/month.' } },
        ]
    },
    {
        category: { zh: '多媒体创作', en: 'Multimedia Creation' },
        scenario: { zh: '图片视频编辑工具', en: 'Image & Video Editing Tools' },
        tools: [
            { name: { zh: 'CapCut', en: 'CapCut' }, link: 'https://www.capcut.com', example: { zh: '为TikTok视频添加字幕和特效。', en: 'Add captions and effects to TikTok videos.' }, info: { zh: '免费计划提供基本功能，付费$7.99/月起。', en: 'Free plan with basic features, paid plans from $7.99/month.' } },
            { name: { zh: 'Adobe Express', en: 'Adobe Express' }, link: 'https://www.adobe.com/express', example: { zh: '快速剪辑短视频，添加动画效果。', en: 'Quickly edit short videos and add animated effects.' }, info: { zh: '免费计划提供基本功能，付费$9.99/月起。', en: 'Free plan with basic features, paid plans from $9.99/month.' } },
        ]
    },
    {
        category: { zh: '多媒体创作', en: 'Multimedia Creation' },
        scenario: { zh: 'Logo生成', en: 'Logo Generation' },
        tools: [
            { name: { zh: 'Brandmark.io', en: 'Brandmark.io' }, link: 'https://brandmark.io/', example: { zh: '输入品牌名称和关键词，AI即可生成数百个专业的Logo设计方案供你选择和编辑。', en: 'Enter your brand name and keywords, and the AI will generate hundreds of professional logo designs for you to choose from and edit.' }, info: { zh: '一次性付费模式。Basic套餐$25；Designer套餐$65。', en: 'One-time payment model. Basic package for $25; Designer package for $65.' } },
            { name: { zh: 'Looka', en: 'Looka' }, link: 'https://looka.com/', example: { zh: '在确定Logo后，自动生成配套的社交媒体头像、名片设计、邮件签名和品牌风格指南。', en: 'After finalizing a logo, automatically generate matching social media avatars, business card designs, email signatures, and brand style guides.' }, info: { zh: 'Basic Logo套餐$20；Brand Kit订阅$96/年。', en: 'Basic Logo package for $20; Brand Kit subscription for $96/year.' } },
        ]
    },
    {
        category: { zh: '多媒体创作', en: 'Multimedia Creation' },
        scenario: { zh: '音乐生成', en: 'Music Generation' },
        tools: [
            { name: { zh: 'Suno AI', en: 'Suno AI' }, link: 'https://suno.com', example: { zh: '根据“爵士风格的植物浇水歌曲”提示生成带歌词的完整歌曲。', en: 'Generate a complete song with lyrics from a prompt like &ldquo;a jazz-style song about watering plants.&rdquo;' }, info: { zh: '每日10首免费歌曲，专业版$8/月起。', en: '10 free songs per day, Pro version from $8/month.' } },
            { name: { zh: 'Udio', en: 'Udio' }, link: 'https://www.udio.com', example: { zh: '为视频生成定制背景音乐。', en: 'Generate custom background music for videos.' }, info: { zh: '每日10个免费信用（约100首/月），付费计划$8/月起。', en: '10 free credits daily (approx. 100 songs/month), paid plans from $8/month.' } },
        ]
    },
    {
        category: { zh: '多媒体创作', en: 'Multimedia Creation' },
        scenario: { zh: '视频添加声音', en: 'Adding Audio to Video' },
        tools: [
            { name: { zh: 'Descript', en: 'Descript' }, link: 'https://www.descript.com', example: { zh: '从媒体库添加背景音乐到教学视频。', en: 'Add background music from a media library to tutorial videos.' }, info: { zh: '免费计划有限制，爱好者计划$12/月起。', en: 'Free plan has limitations, Hobbyist plan from $12/month.' } },
            { name: { zh: 'ElevenLabs', en: 'ElevenLabs' }, link: 'https://elevenlabs.io', example: { zh: '为城市场景视频生成逼真的环境音效。', en: 'Generate realistic ambient sound effects for city scene videos.' }, info: { zh: '免费计划包含基本音效生成，付费计划$5/月起。', en: 'Free plan includes basic sound effect generation, paid plans from $5/month.' } },
        ]
    },
    {
        category: { zh: '多媒体创作', en: 'Multimedia Creation' },
        scenario: { zh: '视频口型同步', en: 'Video Lip Sync' },
        tools: [
            { name: { zh: 'HeyGen', en: 'HeyGen' }, link: 'https://www.heygen.com', example: { zh: '为教学视频生成多语言口型同步的AI头像。', en: 'Generate multilingual lip-synced AI avatars for tutorial videos.' }, info: { zh: '每月3个免费视频，付费计划$29/月起。', en: '3 free videos per month, paid plans start at $29/month.' } },
            { name: { zh: 'CAMB.AI', en: 'CAMB.AI' }, link: 'https://www.camb.ai', example: { zh: '将英语视频配音为西班牙语，保持原声口型同步。', en: 'Dub an English video into Spanish while maintaining original lip sync.' }, info: { zh: '免费试用，付费计划$14.99/月起。', en: 'Free trial, paid plans start at $14.99/month.' } },
        ]
    },
    {
        category: { zh: '信息与知识管理', en: 'Info & Knowledge Management' },
        scenario: { zh: 'YouTube视频总结', en: 'YouTube Video Summary' },
        tools: [
            { name: { zh: 'Eightify', en: 'Eightify' }, link: 'https://www.eightify.app', example: { zh: '总结1小时YouTube讲座为关键点列表。', en: 'Summarize a 1-hour YouTube lecture into a list of key points.' }, info: { zh: '免费计划提供有限总结，付费$4.99/月起。', en: 'Free plan offers limited summaries, paid from $4.99/month.' } },
            { name: { zh: 'Google NotebookLM', en: 'Google NotebookLM' }, link: 'https://notebooklm.google.com', example: { zh: '将长视频转为结构化摘要，适合研究。', en: 'Convert long videos into structured summaries, suitable for research.' }, info: { zh: '免费使用，需Google账户。', en: 'Free to use, requires a Google account.' } },
        ]
    },
    {
        category: { zh: '信息与知识管理', en: 'Info & Knowledge Management' },
        scenario: { zh: 'YouTube视频生成交互式网页', en: 'YouTube to Interactive Webpage' },
        tools: [
            { name: { zh: 'Google Gemini', en: 'Google Gemini' }, link: 'https://gemini.google.com', example: { zh: '将YouTube视频内容转为交互式FAQ页面。', en: 'Convert YouTube video content into an interactive FAQ page.' }, info: { zh: '免费试用，需Google账户，付费$20/月起。', en: 'Free trial, requires Google account, paid from $20/month.' } },
            { name: { zh: 'MagicForm', en: 'MagicForm' }, link: 'https://www.magicform.app', example: { zh: '从视频生成交互式表单，收集用户反馈。', en: 'Generate interactive forms from videos to collect user feedback.' }, info: { zh: '免费试用，付费$10/月起。', en: 'Free trial, paid from $10/month.' } },
        ]
    },
    {
        category: { zh: '信息与知识管理', en: 'Info & Knowledge Management' },
        scenario: { zh: '智能与深度搜索', en: 'Smart & Deep Search' },
        tools: [
            { name: { zh: 'Perplexity AI', en: 'Perplexity AI' }, link: 'https://www.perplexity.ai', example: { zh: '查询“量子计算最新进展”，获取带引用的总结。', en: 'Query &ldquo;latest progress in quantum computing&rdquo; to get a summary with citations.' }, info: { zh: '免费额度；付费计划$20/月起。', en: 'Free tier; paid plans from $20/month.' } },
            { name: { zh: 'Elicit', en: 'Elicit' }, link: 'https://elicit.com', example: { zh: '自动化“气候变化对生物多样性影响”的文献综述。', en: 'Automate a literature review on &ldquo;the impact of climate change on biodiversity.&rdquo;' }, info: { zh: '免费有限制；付费计划。', en: 'Free with limitations; paid plans available.' } },
        ]
    },
    {
        category: { zh: '信息与知识管理', en: 'Info & Knowledge Management' },
        scenario: { zh: '知识整合整理', en: 'Knowledge Integration & Organization' },
        tools: [
            { name: { zh: 'NotebookLM', en: 'NotebookLM' }, link: 'https://notebooklm.google', example: { zh: '整理研究笔记并生成总结。', en: 'Organize research notes and generate summaries.' }, info: { zh: '免费；有高级版。', en: 'Free; premium version available.' } },
            { name: { zh: 'Guru', en: 'Guru' }, link: 'https://www.getguru.com', example: { zh: '使用Guru AI搜索快速查找公司知识库答案。', en: 'Quickly find answers in the company knowledge base using Guru AI.' }, info: { zh: '免费试用；企业计划定制定价。', en: 'Free trial; custom pricing for enterprise plans.' } },
        ]
    },
    {
        category: { zh: '信息与知识管理', en: 'Info & Knowledge Management' },
        scenario: { zh: '文件自动生成报告', en: 'Automatic Report Generation' },
        tools: [
            { name: { zh: 'Google Gemini', en: 'Google Gemini' }, link: 'https://gemini.google.com', example: { zh: '使用Gemini分析数据文件生成市场趋势报告。', en: 'Use Gemini to analyze data files and generate market trend reports.' }, info: { zh: '通过Google AI Studio访问；定价不定。', en: 'Accessible via Google AI Studio; pricing varies.' } },
            { name: { zh: 'Deepseek', en: 'Deepseek' }, link: 'https://www.deepseek.com', example: { zh: '分析大数据集生成报告。', en: 'Analyze large datasets to generate reports.' }, info: { zh: '免费使用。', en: 'Free to use.' } },
        ]
    },
    {
        category: { zh: '信息与知识管理', en: 'Info & Knowledge Management' },
        scenario: { zh: 'AI笔记工具', en: 'AI Note-Taking Tools' },
        tools: [
            { name: { zh: 'Notion AI', en: 'Notion AI' }, link: 'https://www.notion.so', example: { zh: '总结会议笔记并生成行动项。', en: 'Summarize meeting notes and generate action items.' }, info: { zh: 'Business计划$20/月起。', en: 'Business plan from $20/month.' } },
            { name: { zh: 'Obsidian (with AI)', en: 'Obsidian (with AI)' }, link: 'https://obsidian.md', example: { zh: '通过AI Assistant插件生成笔记摘要。', en: 'Generate note summaries with the AI Assistant plugin.' }, info: { zh: '个人使用免费，AI插件可能需API密钥。', en: 'Free for personal use, AI plugins may require an API key.' } },
        ]
    },
    {
        category: { zh: '商业与办公自动化', en: 'Business & Office Automation' },
        scenario: { zh: '数据分析与报表', en: 'Data Analysis & Reporting' },
        tools: [
            { name: { zh: 'Tableau', en: 'Tableau' }, link: 'https://www.tableau.com', example: { zh: '从复杂数据集创建交互式可视化仪表板。', en: 'Create interactive visual dashboards from complex datasets.' }, info: { zh: '多种定价计划。', en: 'Various pricing plans.' } },
            { name: { zh: 'Power BI', en: 'Power BI' }, link: 'https://powerbi.microsoft.com', example: { zh: '从业务数据生成实时报告和洞察。', en: 'Generate real-time reports and insights from business data.' }, info: { zh: '免费和付费计划。', en: 'Free and paid plans.' } },
        ]
    },
    {
        category: { zh: '商业与办公自动化', en: 'Business & Office Automation' },
        scenario: { zh: '邮件自动草拟与回复', en: 'Email Drafting & Replying' },
        tools: [
            { name: { zh: 'MS Copilot for Outlook', en: 'MS Copilot for Outlook' }, link: 'https://www.microsoft.com', example: { zh: '在Outlook中使用Copilot草拟和总结邮件。', en: 'Draft and summarize emails in Outlook with Copilot.' }, info: { zh: '需Microsoft 365订阅。', en: 'Requires Microsoft 365 subscription.' } },
            { name: { zh: 'Gemini for Gmail', en: 'Gemini for Gmail' }, link: 'https://www.google.com/gmail', example: { zh: '使用Gemini总结邮件线程并草拟回复。', en: 'Summarize email threads and draft replies with Gemini.' }, info: { zh: 'Gmail包含；部分功能需订阅。', en: 'Included in Gmail; some features require a subscription.' } },
        ]
    },
    {
        category: { zh: '商业与办公自动化', en: 'Business & Office Automation' },
        scenario: { zh: '实时翻译', en: 'Real-time Translation' },
        tools: [
            { name: { zh: '通义千问 Mobile APP', en: 'Qwen Mobile APP' }, link: 'https://tongyi.aliyun.com/qianwen/mobile', example: { zh: '使用移动应用实时翻译对话。', en: 'Use the mobile app for real-time conversation translation.' }, info: { zh: '免费使用。', en: 'Free to use.' } },
            { name: { zh: 'DeepL', en: 'DeepL' }, link: 'https://www.deepl.com', example: { zh: '高质量翻译文本和文档。', en: 'High-quality translation of texts and documents.' }, info: { zh: '免费版；DeepL Pro可用。', en: 'Free version; DeepL Pro available.' } },
        ]
    },
    {
        category: { zh: '商业与办公自动化', en: 'Business & Office Automation' },
        scenario: { zh: '智能聊天机器人', en: 'Smart Chatbots' },
        tools: [
            { name: { zh: 'MS Copilot', en: 'MS Copilot' }, link: 'https://www.microsoft.com', example: { zh: '使用Copilot草拟消息并提供沟通信息。', en: 'Draft messages and get communication insights with Copilot.' }, info: { zh: '需Microsoft 365订阅。', en: 'Requires Microsoft 365 subscription.' } },
            { name: { zh: 'Jotform AI Agents', en: 'Jotform AI Agents' }, link: 'https://www.jotform.com/ai/agents', example: { zh: '在表单上实现聊天机器人引导用户。', en: 'Implement chatbots on forms to guide users.' }, info: { zh: '免费和付费计划。', en: 'Free and paid plans.' } },
        ]
    },
    {
        category: { zh: '商业与办公自动化', en: 'Business & Office Automation' },
        scenario: { zh: '演示文稿自动生成', en: 'Presentation Generation' },
        tools: [
            { name: { zh: 'Gamma AI', en: 'Gamma AI' }, link: 'https://gamma.app', example: { zh: '从文本提示生成完整演示文稿。', en: 'Generate a complete presentation from a text prompt.' }, info: { zh: '免费使用；高级计划。', en: 'Free to use; premium plans available.' } },
            { name: { zh: 'Beautiful.ai', en: 'Beautiful.ai' }, link: 'https://www.beautiful.ai', example: { zh: '使用AI辅助布局设计专业演示文稿。', en: 'Design professional presentations with AI-assisted layouts.' }, info: { zh: '订阅计划。', en: 'Subscription plans.' } },
        ]
    },
    {
        category: { zh: '商业与办公自动化', en: 'Business & Office Automation' },
        scenario: { zh: '任务与项目管理', en: 'Task & Project Management' },
        tools: [
            { name: { zh: 'ClickUp', en: 'ClickUp' }, link: 'https://clickup.com', example: { zh: '使用AI自动化任务分配和优先级排序。', en: 'Automate task assignment and prioritization with AI.' }, info: { zh: '免费和付费计划。', en: 'Free and paid plans.' } },
            { name: { zh: 'Asana', en: 'Asana' }, link: 'https://asana.com', example: { zh: '使用AI洞察跟踪项目进度。', en: 'Track project progress with AI insights.' }, info: { zh: '免费和付费计划。', en: 'Free and paid plans.' } },
        ]
    },
    {
        category: { zh: '商业与办公自动化', en: 'Business & Office Automation' },
        scenario: { zh: '流程图制作', en: 'Flowchart Creation' },
        tools: [
            { name: { zh: 'Napkin AI', en: 'Napkin AI' }, link: 'https://www.napkin.ai', example: { zh: '将项目管理的文本描述转换为流程图。', en: 'Convert text descriptions of project management into flowcharts.' }, info: { zh: '免费计划有限制，测试期间专业版免费。', en: 'Free plan has limitations, Pro version is free during beta.' } },
            { name: { zh: 'Mermaid Chart', en: 'Mermaid Chart' }, link: 'https://www.mermaidchart.com', example: { zh: '通过自然语言生成Mermaid格式的流程图代码。', en: 'Generate Mermaid-format flowchart code from natural language.' }, info: { zh: '免费计划包含3个图表，付费计划$8/月起。', en: 'Free plan includes 3 diagrams, paid plans start at $8/month.' } },
        ]
    },
    {
        category: { zh: '个人生产力与学习', en: 'Personal Productivity & Learning' },
        scenario: { zh: '个性化学习资源推荐', en: 'Personalized Learning Resources' },
        tools: [
            { name: { zh: 'Google Gemini', en: 'Google Gemini' }, link: 'https://gemini.google.com', example: { zh: '获取个性化学习推荐和解释。', en: 'Get personalized learning recommendations and explanations.' }, info: { zh: '免费，订阅选项。', en: 'Free, with subscription options.' } },
            { name: { zh: 'Khanmigo', en: 'Khanmigo' }, link: 'https://www.khanacademy.org', example: { zh: '使用AI导师进行交互式学习。', en: 'Use an AI tutor for interactive learning.' }, info: { zh: '免费使用。', en: 'Free to use.' } },
        ]
    },
    {
        category: { zh: '个人生产力与学习', en: 'Personal Productivity & Learning' },
        scenario: { zh: '学习进度跟踪与反馈', en: 'Learning Progress Tracking' },
        tools: [
            { name: { zh: 'Edcafe.ai', en: 'Edcafe.ai' }, link: 'https://www.edcafe.ai', example: { zh: '监控学习进度并接收AI反馈。', en: 'Monitor learning progress and receive AI feedback.' }, info: { zh: '网站提供定价信息。', en: 'Pricing information available on the website.' } },
            { name: { zh: 'Quizlet', en: 'Quizlet' }, link: 'https://quizlet.com', example: { zh: '使用AI创建个性化学习集并跟踪进度。', en: 'Use AI to create personalized study sets and track progress.' }, info: { zh: '免费，高级订阅。', en: 'Free, with premium subscription.' } },
        ]
    },
    {
        category: { zh: '个人生产力与学习', en: 'Personal Productivity & Learning' },
        scenario: { zh: '自动生成思维导图', en: 'Automatic Mind Map Generation' },
        tools: [
            { name: { zh: 'NotebookLM', en: 'NotebookLM' }, link: 'https://notebooklm.google.com', example: { zh: '生成可可视化为思维导图的结构化笔记。', en: 'Generate structured notes that can be visualized as a mind map.' }, info: { zh: '免费。', en: 'Free.' } },
            { name: { zh: 'Felo AI', en: 'Felo AI' }, link: 'https://felo.ai', example: { zh: '有生成mindmap的模板。', en: 'Has templates for generating mind maps.' }, info: { zh: '每天免费3次。', en: '3 free uses per day.' } },
        ]
    },
    {
        category: { zh: '个人生产力与学习', en: 'Personal Productivity & Learning' },
        scenario: { zh: '创意灵感捕捉', en: 'Idea Capture' },
        tools: [
            { name: { zh: 'Google Gemini Gems', en: 'Google Gemini Gems' }, link: 'https://gemini.google.com', example: { zh: '创建定制的创意项目Gems。', en: 'Create custom Gems for creative projects.' }, info: { zh: '包含在Gemini中。', en: 'Included in Gemini.' } },
            { name: { zh: 'Ideanote', en: 'Ideanote' }, link: 'https://ideanote.io', example: { zh: '管理并优先级排序团队创意。', en: 'Manage and prioritize team ideas.' }, info: { zh: '免费和付费计划。', en: 'Free and paid plans.' } },
        ]
    },
    {
        category: { zh: '个人生产力与学习', en: 'Personal Productivity & Learning' },
        scenario: { zh: '语言学习与训练', en: 'Language Learning & Practice' },
        tools: [
            { name: { zh: 'Google Gemini', en: 'Google Gemini' }, link: 'https://gemini.google.com', example: { zh: '进行角色扮演对话来练习口语。', en: 'Practice speaking with role-playing conversations.' }, info: { zh: '免费。', en: 'Free.' } },
            { name: { zh: 'Call Annie', en: 'Call Annie' }, link: 'https://apps.apple.com/us/app/call-annie/id6447928729', example: { zh: '与AI虚拟人物进行视频通话练习。', en: 'Practice with video calls to an AI virtual character.' }, info: { zh: '有免费试用。', en: 'Has a free trial.' } },
        ]
    },
    {
        category: { zh: '个人生产力与学习', en: 'Personal Productivity & Learning' },
        scenario: { zh: 'AI帮助使用Excel', en: 'AI Help with Excel' },
        tools: [
            { name: { zh: 'Google Gemini Realtime', en: 'Google Gemini Realtime' }, link: 'https://gemini.google.com', example: { zh: '生成Excel公式并解释其功能。', en: 'Generate Excel formulas and explain their functions.' }, info: { zh: '免费使用，需Google账号。', en: 'Free to use, requires a Google account.' } },
            { name: { zh: 'Kimi', en: 'Kimi' }, link: 'https://www.moonshot.ai/', example: { zh: '分析Excel数据并提供可视化建议。', en: 'Analyze Excel data and provide visualization suggestions.' }, info: { zh: '免费基础功能，高级分析需订阅。', en: 'Basic features are free, advanced analysis requires a subscription.' } },
        ]
    },
    {
        category: { zh: '个人生产力与学习', en: 'Personal Productivity & Learning' },
        scenario: { zh: 'AI帮助使用电脑软件', en: 'AI Help with Software' },
        tools: [
            { name: { zh: 'Google Gemini Realtime', en: 'Google Gemini Realtime' }, link: 'https://gemini.google.com', example: { zh: '提供Adobe Premiere Pro平滑缩放转场效果的步骤。', en: 'Provide steps for a smooth zoom transition effect in Adobe Premiere Pro.' }, info: { zh: '免费使用，需Google账号。', en: 'Free to use, requires a Google account.' } },
            { name: { zh: 'ChatGPT', en: 'ChatGPT' }, link: 'https://chat.openai.com', example: { zh: '分析防火墙配置错误并提供修复建议。', en: 'Analyze firewall configuration errors and provide recommendations for fixes.' }, info: { zh: '免费计划有限制，Plus计划$20/月起。', en: 'Free plan has limitations, Plus plan from $20/month.' } },
        ]
    },
    {
        category: { zh: '生活与通用辅助', en: 'Life & General Assistance' },
        scenario: { zh: '日常生活AI辅助', en: 'AI Assistance for Daily Life' },
        tools: [
            { name: { zh: 'Google Gemini', en: 'Google Gemini' }, link: 'https://gemini.google.com', example: { zh: '通过图片识别野花并提供信息。', en: 'Identify wildflowers from a picture and provide information.' }, info: { zh: '免费使用，需Google账号。', en: 'Free to use, requires a Google account.' } },
            { name: { zh: 'ChatGPT', en: 'ChatGPT' }, link: 'https://chat.openai.com', example: { zh: '回答日常生活问题，如食谱建议。', en: 'Answer daily life questions, such as recipe suggestions.' }, info: { zh: '免费计划有限制，Plus计划$20/月起。', en: 'Free plan has limitations, Plus plan from $20/month.' } },
        ]
    },
    {
        category: { zh: '生活与通用辅助', en: 'Life & General Assistance' },
        scenario: { zh: 'AI个人助手', en: 'AI Personal Assistant' },
        tools: [
            { name: { zh: 'Google Gemini', en: 'Google Gemini' }, link: 'https://gemini.google.com', example: { zh: '通过语音命令安排会议并发送提醒。', en: 'Schedule meetings and send reminders via voice commands.' }, info: { zh: '免费使用，部分功能需Google One订阅。', en: 'Free to use, some features require a Google One subscription.' } },
            { name: { zh: 'Meta AI', en: 'Meta AI' }, link: 'https://www.meta.ai', example: { zh: '协助规划旅行行程并提供实时建议。', en: 'Assist in planning travel itineraries and provide real-time suggestions.' }, info: { zh: '免费使用，部分高级功能需订阅。', en: 'Free to use, some advanced features require a subscription.' } },
        ]
    },
    {
        category: { zh: '生活与通用辅助', en: 'Life & General Assistance' },
        scenario: { zh: 'AI全能助手 (Agent)', en: 'All-in-One AI Assistant (Agent)' },
        tools: [
            { name: { zh: 'Genspark AI', en: 'Genspark AI' }, link: 'https://www.genspark.ai', example: { zh: '自动化多任务处理，如数据分析和内容生成。', en: 'Automate multitasking, such as data analysis and content generation.' }, info: { zh: '具体信息需咨询官网。', en: 'Contact official website for details.' } },
            { name: { zh: 'OpenAI Agent', en: 'OpenAI Agent' }, link: 'https://openai.com', example: { zh: '执行复杂任务，如代码调试和文档撰写。', en: 'Execute complex tasks, such as code debugging and document writing.' }, info: { zh: '需OpenAI API密钥，费用按使用量计。', en: 'Requires OpenAI API key, fees are based on usage.' } },
        ]
    },
];

// --- Components ---

const ToolModal: React.FC<{ tool: ToolInfo | null; scenario: string; lang: Language; onClose: () => void }> = ({ tool, scenario, lang, onClose }) => {
    if (!tool) return null;

    return (
        <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 opacity-100 transition-opacity duration-300" onClick={onClose}>
            <div className="modal-content bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8 transform scale-100 opacity-100 transition-transform transition-opacity duration-300" onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900">{tool.name[lang]}</h2>
                        <p className="text-slate-500 mt-1">{scenario}</p>
                    </div>
                    <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition-colors" aria-label={lang === 'zh' ? '关闭' : 'Close'}>
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>
                
                <div className="space-y-6">
                    <div>
                        <h3 className="text-lg font-semibold text-slate-800 border-b pb-2 mb-3">🚀 {lang === 'zh' ? '应用示例' : 'Application Example'}</h3>
                        {tool.image && (
                            <div className="mb-4">
                                <Image 
                                    src={tool.image} 
                                    alt={`${tool.name[lang]} screenshot`}
                                    width={600}
                                    height={400}
                                    className="rounded-lg shadow-md w-full h-auto"
                                />
                            </div>
                        )}
                        <p className="text-slate-600 leading-relaxed">{tool.example[lang]}</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-slate-800 border-b pb-2 mb-3">💰 {lang === 'zh' ? '附加信息' : 'Additional Info'}</h3>
                        <p className="text-slate-600 leading-relaxed">{tool.info[lang]}</p>
                    </div>
                    <div className="pt-4">
                         <a href={tool.link} target="_blank" rel="noopener noreferrer" className="inline-block w-full text-center bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                           {lang === 'zh' ? '访问官网 →' : 'Visit Website →'}
                         </a>
                    </div>
                </div>
            </div>
        </div>
    );
};


const ScenarioCard: React.FC<{ item: ToolScenario; lang: Language; onToolClick: (tool: ToolInfo, scenario: string) => void }> = ({ item, lang, onToolClick }) => {
    return (
        <article className="card bg-white rounded-2xl p-6 shadow-md border border-slate-100 flex flex-col transition-transform duration-200 ease-in-out hover:-translate-y-1 hover:shadow-xl">
            <div className="flex-grow">
                <span className="inline-block bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-1 rounded-full mb-4">{item.category[lang]}</span>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.scenario[lang]}</h3>
                <ul className="divide-y divide-slate-200">
                    {item.tools.map(tool => (
                        <li key={tool.name.en} className="flex items-center justify-between py-3">
                            <span className="font-semibold text-indigo-700">{tool.name[lang]}</span>
                            <button 
                                className="text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
                                onClick={() => onToolClick(tool, item.scenario[lang])}
                            >
                                {lang === 'zh' ? '查看详情 →' : 'View Details →'}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    );
};

const App: React.FC = () => {
    const [language, setLanguage] = useState<Language>('zh');
    const [activeCategory, setActiveCategory] = useState<string>('全部');
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [selectedTool, setSelectedTool] = useState<{ tool: ToolInfo; scenario: string } | null>(null);

    const categories = useMemo(() => {
        const uniqueCategories = new Set(aiToolsData.map(item => item.category[language]));
        const allText = language === 'zh' ? '全部' : 'All';
        const sortedCategories = Array.from(uniqueCategories).sort((a, b) => a.localeCompare(b, language === 'zh' ? 'zh-Hans-CN' : 'en-US'));
        return [allText, ...sortedCategories];
    }, [language]);
    
    useEffect(() => {
        setActiveCategory(language === 'zh' ? '全部' : 'All');
    }, [language]);

    const filteredData = useMemo(() => {
        return aiToolsData.filter(item => {
            const allText = language === 'zh' ? '全部' : 'All';
            const categoryMatch = activeCategory === allText || item.category[language] === activeCategory;
            const searchMatch = searchTerm === '' || 
                item.scenario[language].toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.tools.some(t => t.name[language].toLowerCase().includes(searchTerm.toLowerCase()));
            return categoryMatch && searchMatch;
        });
    }, [activeCategory, searchTerm, language]);

    const handleToolClick = (tool: ToolInfo, scenario: string) => {
        setSelectedTool({ tool, scenario });
    };

    const closeModal = () => {
        setSelectedTool(null);
    };
    
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
           if (event.key === 'Escape') {
              closeModal();
           }
        };
        window.addEventListener('keydown', handleEsc);
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, []);

    return (
        <div className="bg-slate-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <header className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900">{language === 'zh' ? 'AI 工具导航' : 'AI Tools Navigator'}</h1>
                    <p className="mt-4 text-lg text-slate-600">
                        {language === 'zh' ? '您的现代化AI工具箱，助您高效完成各项任务。' : 'Your modern AI toolbox to help you complete tasks efficiently.'}
                    </p>
                    <div className="mt-6">
                        <button
                            onClick={() => setLanguage(l => l === 'zh' ? 'en' : 'zh')}
                            className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 flex items-center mx-auto"
                        >
                           {language === 'zh' ? 'Switch to English' : '切换到中文'}
                        </button>
                    </div>
                </header>

                <div className="mb-10">
                    <div className="relative">
                        <input 
                            type="search" 
                            placeholder={language === 'zh' ? '搜索场景或工具...' : 'Search scenarios or tools...'}
                            className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-full focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-shadow"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-slate-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>

                <nav className="mb-12">
                    <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                        {categories.map(cat => (
                            <button 
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`filter-btn text-sm md:text-base font-semibold px-4 py-2 rounded-full border border-slate-300 bg-white hover:bg-slate-100 transition-colors duration-200 ${activeCategory === cat ? 'bg-indigo-600 text-white' : ''}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </nav>

                <main>
                    {filteredData.length > 0 ? (
                        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredData.map(item => (
                                <ScenarioCard key={item.scenario.en} item={item} lang={language} onToolClick={handleToolClick} />
                            ))}
                        </section>
                    ) : (
                        <div className="text-center py-16">
                            <h3 className="text-2xl font-semibold text-slate-700">{language === 'zh' ? '未找到匹配项' : 'No Matches Found'}</h3>
                            <p className="text-slate-500 mt-2">{language === 'zh' ? '请尝试其他关键词或筛选条件。' : 'Please try other keywords or filter criteria.'}</p>
                        </div>
                    )}
                </main>
            </div>
            
            {selectedTool && (
                <ToolModal 
                    tool={selectedTool.tool} 
                    scenario={selectedTool.scenario} 
                    lang={language} 
                    onClose={closeModal} 
                />
            )}
        </div>
    );
};

export default App;
