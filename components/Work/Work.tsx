import React from 'react'
import WorkTimeLine from '../WorkTimeLine'

const items = [
    {
        id: 1,
        date: "May 2025 - Present",
        title: "ML Engineer (Core Team) - PsyberQ Info Secure Pvt Ltd",
        description: [
            "• Building behavioral NIDS/NDR detection systems over high-volume network telemetry.",
            "• Developing detections using Zeek, Suricata, ClickHouse, Python and SQL.",
            "• Mapping detection logic to MITRE ATT&CK techniques and detection strategies.",
            "• Contributing to model training, evaluation, optimization and production deployment.",
        ],
        image: "/hackbook.png",
    },
    {
        id: 2,
        date: "Dec 2024 – May 2025",
        title: "Freelance & Indie Hacking",
        description: [
            "• SyncSpend: Android product and local-first expense tracking application with expense management, analytics, budgets, recurring transactions, reporting, privacy-focused storage, and a Flutter · Dart · Android stack.",
            "• Toki: Android focus timer product built around reliable Pomodoro sessions, focus presets, home screen widgets, session history, settings, and optional Pro features.",
            "• AutoClip AI: AI-powered YouTube viral clip extractor that identifies high-potential moments and creates 9:16 Shorts-ready videos with smart face-tracking crop.",
            "• Voice CBT: Voice-based conversational AI prototype exploring speech processing, emotion signals, and LLM-driven interactions.",
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
