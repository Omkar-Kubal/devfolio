import React from 'react'
import WorkTimeLine from '../WorkTimeLine'

const items = [
    {
        id: 1,
        date: "May 2025 - Present",
        title: "AI/ML Developer (Core Team)",
        description: [
            "• Designed a full-fledged Network IDS Solution to detect anomalies from unknown data and trigger real-time security alerts.",
            "• Created a Multi-modal system integrated with Triton Server, improving alert accuracy by 85% through IDS layers and model algorithms.",
        ],
        image: "/hackbook.png",
    },
    {
        id: 2,
        date: "Dec 2024 – May 2025",
        title: "Freelancing, Indie Hacking – Mumbai, Maharashtra",
        description: [
            "• Built AutoClip AI - YouTube Viral Clip Extractor: AI-powered tool that automatically identifies viral moments and creates 9:16 Shorts-ready videos with smart face-tracking crop.",
            "• Built Market-Pulse-Engine: Automated real-time market intelligence engine that continuously ingests live data, runs ML-driven models, and generates ranked stock-buy signals with confidence and risk context.",
            "• Built Voice CBT: AI-powered therapeutic assistant that delivers Cognitive Behavioral Therapy through natural voice conversations, combining emotion detection, voice processing, and personalized AI responses.",
            "• Delivered BrainDeck: AI-Powered Flashcard Learning Platform that revolutionizes studying through intelligent flashcard generation and spaced repetition learning.",
        ],
        image: "/laptop logo sticker _ Coding icons for free download _ Freepik.jpg",
    },
    {
        id: 3,
        date: "June 2024 – Dec 2024",
        title: "Data Analyst Intern - HR Talent Corner, Mumbai",
        description: [
            "• Performed data cleaning, EDA, and analysis on HR datasets.",
            "• Built visualizations and reports to support hiring and talent insights.",
        ],
        image: "/hr-talet-corner.png",
    }
]

const Work = () => {
    return (
        <div className='flex flex-col p-8  items-start justify-center gap-4 w-full'>
            <h2 className='text-4xl font-bold text-start'>Work</h2>
            <div className='md:p-4 flex items-start justify-center flex-col gap-4 w-full'>
                <WorkTimeLine items={items} />
            </div>
        </div>
    )
}

export default Work