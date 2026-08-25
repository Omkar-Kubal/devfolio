import ProjectCards from '../ProjectCards'

const items = [
    {
        id: 1,
        title: "SyncSpend",
        description: <p className='text-muted-foreground text-sm leading-6'>Android product and <span className='text-white font-semibold'>local-first expense tracking</span> application with expense management, analytics, budgets, recurring transactions, reporting, privacy-focused storage, and a <span className='text-white font-semibold'>Flutter · Dart · Android</span> stack.</p>,
        image: "/syncspend.jpg",
        link: "https://play.google.com/store/apps/details?id=com.appylab.syncspend&pcampaignid=web_share",
        linkLabel: "Play Store",
        github: null,
        tech: ["Flutter", "Dart", "Android"],
        date: "Shipped Android Product",
        type: "Android Product",
    },
    {
        id: 2,
        title: "Toki",
        description: <p className='text-muted-foreground text-sm leading-6'>Android focus timer product built around reliable <span className='text-white font-semibold'>Pomodoro sessions</span>, focus presets, home screen widgets, session history, settings, and optional Pro features.</p>,
        image: "/toki.jpg",
        link: "https://play.google.com/store/apps/details?id=com.focusfirst&pcampaignid=web_share",
        linkLabel: "Play Store",
        github: null,
        tech: ["Kotlin", "Jetpack Compose", "Android"],
        date: "Shipped Android Product",
        type: "Android Product",
    },
    {
        id: 3,
        title: "AutoClip AI",
        description: <p className='text-muted-foreground text-sm leading-6'>AI-powered YouTube viral clip extractor that identifies <span className='text-white font-semibold'>high-potential moments</span> and creates 9:16 Shorts-ready videos with smart face-tracking crop.</p>,
        image: "/autoclip-ai-screen.png",
        link: null,
        github: "https://github.com/Omkar-Kubal/yt-automation",
        tech: ["Python", "Gemini", "Whisper", "FFmpeg", "yt-dlp"],
        date: "Personal Project",
        type: "AI/Product Tool",
    },
    {
        id: 4,
        title: "Voice CBT",
        description: <p className='text-muted-foreground text-sm leading-6'>Voice-based conversational AI prototype exploring <span className='text-white font-semibold'>speech processing</span>, emotion signals, and LLM-driven interactions.</p>,
        image: "/voice-cbt.png",
        link: null,
        github: "https://github.com/Omkar-Kubal/voice-cbt",
        tech: ["Python", "Speech Processing", "Emotion Detection", "LLMs"],
        date: "Personal Project",
        type: "AI Prototype",
    }
]

const Projects = () => {
    return (
        <div className='flex flex-col p-8  items-start justify-center gap-8 w-full'>
            <div className='flex flex-col items-start justify-start gap-2 w-full'>
                <h2 className='text-4xl font-bold text-start'>Projects</h2>
                <p className='text-muted-foreground text-sm'>A few shipped products and AI tools I’m especially proud of.</p>
            </div>
            <div className='md:p-4 flex items-start justify-start flex-wrap gap-2 w-full'>
                <div className="grid gap-4 w-full md:grid-cols-2 xl:grid-cols-4">
                    {items.map(item => <ProjectCards key={item.id} item={item} />)}
                </div>
            </div>
        </div>
    )
}

export default Projects
