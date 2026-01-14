import ProjectCards from '../ProjectCards'

const items = [
    {
        id: 1,
        title: "Voice CBT – AI Voice-Based Mental Health Assistant",
        description: <p className='text-muted-foreground text-sm'>Built an <span className='text-white font-bold'>AI-powered therapeutic assistant</span> delivering Cognitive Behavioral Therapy (CBT) via natural voice conversations. Integrated <span className='text-white font-bold'>emotion detection, voice processing</span>, and <span className='text-white font-bold'>personalized AI responses</span> for mental health support.</p>,
        image: "/voice-cbt.png",
        link: null,
        github: null,
        tech: ["Python", "NLP", "Speech-to-Text", "Emotion Detection", "Transformer Models"],
        date: "Personal Project",
        type: "AI/NLP Project",
    },
    {
        id: 2,
        title: "BrainDeck – AI-Powered Flashcard Learning Platform",
        description: <p className='text-muted-foreground text-sm'>
            A modern web application that revolutionizes studying through <span className='text-white font-bold'>intelligent flashcard generation</span> and <span className='text-white font-bold'>spaced repetition learning</span>. Transform any educational content into interactive flashcards using AI, and study smarter with <span className='text-white font-bold'>personalized learning algorithms</span>.</p>,
        image: "/brain-deck.png",
        link: null,
        github: null,
        tech: ["AI", "Web Development", "Spaced Repetition", "NLP", "Flashcard Generation"],
        date: "Personal Project",
        type: "AI/EdTech Project",
    }
]

const Projects = () => {
    return (
        <div className='flex flex-col p-8  items-start justify-center gap-8 w-full'>
            <div className='flex flex-col items-start justify-start gap-2 w-full'>
                <h2 className='text-4xl font-bold text-start'>Projects</h2>
                <p className='text-muted-foreground text-sm'>I’ve built everything from simple websites to complex web applications. Here are a few projects I’m especially proud of.</p>
            </div>
            <div className='md:p-4 flex items-start justify-start flex-wrap gap-2 w-full'>
                <div className="grid md:grid-cols-2 gap-4 w-full">
                    {items.map(item => <ProjectCards key={item.id} item={item} />)}
                </div>
            </div>
        </div>
    )
}

export default Projects