import ProjectCards from '../ProjectCards'

const items = [
    {
        id: 1,
        title: "Predictive Modeling for Student Improvement",
        description: <p className='text-muted-foreground text-sm'>Developed a predictive model to enhance sales forecasting accuracy for a retail company. As <span className='text-white font-bold'>Project Lead</span>, I implemented algorithms like <span className='text-white font-bold'>Linear Regression and Decision Trees</span>, resulting in <span className='text-white font-bold underline'>increased forecasting precision by 20%</span>, which significantly aided inventory management and business planning.</p>,
        image: "/student-performance.jpg",
        link: "#",
        github: null,
        tech: ["Python", "Machine Learning", "Data Analysis", "Linear Regression", "Decision Trees"],
        date: "Academic Project",
        type: "Machine Learning Project",
    },
    {
        id: 2,
        title: "Sentiment Analysis on Social Media Data",
        description: <p className='text-muted-foreground text-sm'>
            Analyzed sentiment to gauge public opinion on a product launch. Conducted <span className='text-white font-bold'>data collection and preprocessing</span>, and applied <span className='text-white font-bold'>NLP techniques</span> to deliver insights that <span className='text-white font-bold underline'>informed marketing strategies</span> and helped understand customer sentiment.</p>,
        image: "/student-performance.jpg",
        link: "#",
        github: null,
        tech: ["R", "Machine Learning", "NLP", "Data Cleaning", "Sentiment Analysis"],
        date: "Academic Project",
        type: "NLP Project",
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