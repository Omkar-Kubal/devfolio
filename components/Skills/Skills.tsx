import { Badge } from '../ui/badge'
import {
    IconDatabase,
    IconBrain,
    IconBrandGithub,
    IconBrandDocker,
    IconApi,
    IconCode
} from '@tabler/icons-react'

const categories = [
    {
        id: 1,
        title: "Machine Learning",
        icon: <IconBrain className='w-5 h-5' />,
        skills: ["Python", "ML", "Deep Learning", "LLMs", "Transformers", "Feature Engineering", "Model Evaluation"],
    },
    {
        id: 2,
        title: "Cybersecurity / Detection",
        icon: <IconCode className='w-5 h-5' />,
        skills: ["Zeek", "Suricata", "MITRE ATT&CK", "Network Security", "Behavioral Detection"],
    },
    {
        id: 3,
        title: "Data / Infrastructure",
        icon: <IconDatabase className='w-5 h-5' />,
        skills: ["SQL", "ClickHouse", "Docker", "NVIDIA Triton"],
    },
    {
        id: 4,
        title: "Android",
        icon: <IconBrandDocker className='w-5 h-5' />,
        skills: ["Flutter", "Dart", "Android"],
    },
    {
        id: 5,
        title: "Development",
        icon: <IconApi className='w-5 h-5' />,
        skills: ["Git", "GitHub", "REST APIs"],
    }
]

const Skills = () => {
    return (
        <div className='flex flex-col p-8  items-start justify-center gap-4 w-full'>
            <h2 className='text-4xl font-bold text-start'>Skills</h2>
            <div className='md:p-4 grid grid-cols-1 md:grid-cols-2 gap-4 w-full'>
                {categories.map(category => {
                    return (
                        <div key={category.id} className='flex flex-col items-start gap-2'>
                            <h3 className='flex items-center gap-2 text-lg font-semibold'>{category.icon}{category.title}</h3>
                            <div className='flex items-start justify-start flex-wrap gap-2'>
                                {category.skills.map(skill => (
                                    <Badge key={skill} variant="outline" className='text-sm font-bold'>{skill}</Badge>
                                ))}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Skills
