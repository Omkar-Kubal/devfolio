import { Badge } from '../ui/badge'
import { 
    IconBrandPython, 
    IconBrandMongodb, 
    IconBrandMysql, 
    IconDatabase, 
    IconChartBar, 
    IconBrain, 
    IconFlask,
    IconBrandGithub,
    IconBrandDocker,
    IconApi,
    IconCode,
    IconEye,
    IconNotebook,
    IconBulb,
    IconMessageCircle
} from '@tabler/icons-react'

const items = [
    // Programming & Databases
    {
        id: 1,
        name: "Python",
        image: <IconBrandPython className='w-8 h-8' />
    },
    {
        id: 2,
        name: "R",
        image: <IconCode className='w-8 h-8' />
    },
    {
        id: 3,
        name: "SQL",
        image: <IconDatabase className='w-8 h-8' />
    },
    {
        id: 4,
        name: "MongoDB",
        image: <IconBrandMongodb className='w-8 h-8' />
    },
    {
        id: 5,
        name: "MySQL",
        image: <IconBrandMysql className='w-8 h-8' />
    },
    {
        id: 6,
        name: "Git & GitHub",
        image: <IconBrandGithub className='w-8 h-8' />
    },
    // Machine Learning & Data Science
    {
        id: 7,
        name: "Machine Learning Algorithms",
        image: <IconBrain className='w-8 h-8' />
    },
    {
        id: 8,
        name: "Deep Learning & Neural Networks",
        image: <IconBrain className='w-8 h-8' />
    },
    {
        id: 9,
        name: "Deep Learning",
        image: <IconBrain className='w-8 h-8' />
    },
    {
        id: 10,
        name: "Scikit-Learn",
        image: <IconBrain className='w-8 h-8' />
    },
    // Data Analysis & Visualization
    {
        id: 11,
        name: "Statistics",
        image: <IconChartBar className='w-8 h-8' />
    },
    {
        id: 12,
        name: "MS-Excel",
        image: <IconChartBar className='w-8 h-8' />
    },
    {
        id: 13,
        name: "Data Analysis",
        image: <IconChartBar className='w-8 h-8' />
    },
    {
        id: 14,
        name: "Data Visualization",
        image: <IconChartBar className='w-8 h-8' />
    },
    // AI Specializations
    {
        id: 15,
        name: "Natural Language Processing (NLP)",
        image: <IconMessageCircle className='w-8 h-8' />
    },
    {
        id: 16,
        name: "Computer Vision (OpenCV)",
        image: <IconEye className='w-8 h-8' />
    },
    // Development & Deployment
    {
        id: 17,
        name: "FastAPI",
        image: <IconApi className='w-8 h-8' />
    },
    {
        id: 18,
        name: "Flask",
        image: <IconFlask className='w-8 h-8' />
    },
    {
        id: 19,
        name: "REST API Development",
        image: <IconApi className='w-8 h-8' />
    },
    {
        id: 20,
        name: "Docker (Basics)",
        image: <IconBrandDocker className='w-8 h-8' />
    },
    // Tools & Visualization
    {
        id: 21,
        name: "Power BI",
        image: <IconChartBar className='w-8 h-8' />
    },
    {
        id: 22,
        name: "Jupyter Notebook",
        image: <IconNotebook className='w-8 h-8' />
    },
    // Soft Skills
    {
        id: 23,
        name: "Problem Solving",
        image: <IconBulb className='w-8 h-8' />
    },
    {
        id: 24,
        name: "Analytical Thinking",
        image: <IconBrain className='w-8 h-8' />
    },
    {
        id: 25,
        name: "Communication",
        image: <IconMessageCircle className='w-8 h-8' />
    }
]

const Skills = () => {
    return (
        <div className='flex flex-col p-8  items-start justify-center gap-4 w-full'>
            <h2 className='text-4xl font-bold text-start'>Skills</h2>
            <div className='md:p-4 flex items-start justify-start flex-wrap gap-2 w-full'>
                {items.map(item => {
                    return (
                        <Badge key={item.id} variant="outline" className={`text-sm font-bold`}>{item.name} {item.image}</Badge>
                    )
                })}
            </div>
        </div>
    )
}

export default Skills