import React from 'react'
import WorkTimeLine from '../WorkTimeLine'

const items = [
    {
        id: 1,
        date: "Present",
        title: "Hackbook.ai - Junior AI/ML Developer",
        description:[
            "• Working as a Junior AI/ML Developer, developing and implementing machine learning solutions.",
            "• Building AI-powered applications and models to solve real-world problems.",
            "• Collaborating with the team to deliver innovative AI/ML solutions.",
        ],
        image: "/hackbook.png",
    },
    {
        id: 2,
        date: "Previous",
        title: "HR Talent Corner - Data Analyst",
        description: [
            "• Worked as a Data Analyst, applying data science techniques to solve business problems.",
            "• Gained hands-on experience in data analysis and visualization.",
        ],
        image: "/hr-talet-corner.png",
    }
]

const Work = () => {
    return (
        <div className='flex flex-col p-8  items-start justify-center gap-4 w-full'>
            <h2 className='text-4xl font-bold text-start'>Work</h2>
            <div className='md:p-4 flex items-start justify-center flex-col gap-4 w-full'>
                <WorkTimeLine items={items}/>
            </div>
        </div>
    )
}

export default Work