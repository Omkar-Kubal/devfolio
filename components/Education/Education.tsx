import React from 'react'
import EducationTimeLine from '../EducationTimeLine'

const items = [
    {
        id: 1,
        date: "2023 – 2026",
        title: "Seth L.U.J & Sir M.V. College of Arts, Commerce & Science",
        description:
            "Bachelor of Science in Computer Science",
    },
    {
        id: 2,
        date: "March 2022",
        title: "Bhartiya Vidya Bhavans",
        description:
            "12th Standard",
    },
    {
        id: 3,
        date: "April 2020",
        title: "Kalina Education Society",
        description:
            "10th Standard",
    }
]

const Education = () => {
    return (
        <div className='flex flex-col p-8  items-start justify-center gap-4 w-full'>
            <h2 className='text-4xl font-bold text-start'>Education</h2>
            <div className='md:p-4 flex items-start justify-center flex-col gap-4 w-full'>
                <EducationTimeLine items={items} />
            </div>
        </div>
    )
}

export default Education