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
    IconMessageCircle
} from '@tabler/icons-react'

const items = [
    // Programming
    {
        id: 1,
        name: "Python",
        image: <IconBrandPython className='w-8 h-8' />
    },
    {
        id: 2,
        name: "MySQL",
        image: <IconBrandMysql className='w-8 h-8' />
    },
    {
        id: 3,
        name: "R",
        image: <IconCode className='w-8 h-8' />
    },
    {
        id: 4,
        name: "Scala",
        image: <IconCode className='w-8 h-8' />
    },
    {
        id: 5,
        name: "Rust",
        image: <IconCode className='w-8 h-8' />
    },
    // AI / Machine Learning
    {
        id: 6,
        name: "Supervised Learning",
        image: <IconBrain className='w-8 h-8' />
    },
    {
        id: 7,
        name: "Unsupervised Learning",
        image: <IconBrain className='w-8 h-8' />
    },
    {
        id: 8,
        name: "Semi-Supervised Learning",
        image: <IconBrain className='w-8 h-8' />
    },
    {
        id: 9,
        name: "Feature Engineering",
        image: <IconBrain className='w-8 h-8' />
    },
    {
        id: 10,
        name: "Clustering",
        image: <IconBrain className='w-8 h-8' />
    },
    {
        id: 11,
        name: "Model Training & Evaluation",
        image: <IconBrain className='w-8 h-8' />
    },
    {
        id: 12,
        name: "Model Optimization",
        image: <IconBrain className='w-8 h-8' />
    },
    // Deep Learning & NLP
    {
        id: 13,
        name: "Neural Networks",
        image: <IconBrain className='w-8 h-8' />
    },
    {
        id: 14,
        name: "Transformers",
        image: <IconBrain className='w-8 h-8' />
    },
    {
        id: 15,
        name: "Autoencoders",
        image: <IconBrain className='w-8 h-8' />
    },
    {
        id: 16,
        name: "VAEs",
        image: <IconBrain className='w-8 h-8' />
    },
    {
        id: 17,
        name: "GANs",
        image: <IconBrain className='w-8 h-8' />
    },
    // LLMs & Automation
    {
        id: 18,
        name: "Large Language Models",
        image: <IconMessageCircle className='w-8 h-8' />
    },
    {
        id: 19,
        name: "Prompt Engineering",
        image: <IconMessageCircle className='w-8 h-8' />
    },
    {
        id: 20,
        name: "LLM-based Systems",
        image: <IconMessageCircle className='w-8 h-8' />
    },
    // Backend & APIs
    {
        id: 21,
        name: "Flask",
        image: <IconFlask className='w-8 h-8' />
    },
    {
        id: 22,
        name: "REST APIs",
        image: <IconApi className='w-8 h-8' />
    },
    // Databases
    {
        id: 23,
        name: "MongoDB",
        image: <IconBrandMongodb className='w-8 h-8' />
    },
    {
        id: 24,
        name: "SQL Databases",
        image: <IconDatabase className='w-8 h-8' />
    },
    {
        id: 25,
        name: "ClickHouse",
        image: <IconDatabase className='w-8 h-8' />
    },
    // Data & Analytics
    {
        id: 26,
        name: "Data Preprocessing",
        image: <IconChartBar className='w-8 h-8' />
    },
    {
        id: 27,
        name: "Exploratory Data Analysis (EDA)",
        image: <IconChartBar className='w-8 h-8' />
    },
    {
        id: 28,
        name: "Statistical Analysis",
        image: <IconChartBar className='w-8 h-8' />
    },
    {
        id: 29,
        name: "Data Visualization",
        image: <IconChartBar className='w-8 h-8' />
    },
    // Tools & DevOps
    {
        id: 30,
        name: "Git",
        image: <IconBrandGithub className='w-8 h-8' />
    },
    {
        id: 31,
        name: "GitHub",
        image: <IconBrandGithub className='w-8 h-8' />
    },
    {
        id: 32,
        name: "Docker",
        image: <IconBrandDocker className='w-8 h-8' />
    },
    {
        id: 33,
        name: "Nvidia Triton",
        image: <IconBrain className='w-8 h-8' />
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