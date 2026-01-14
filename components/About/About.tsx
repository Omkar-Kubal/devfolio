import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col p-8 items-start justify-center gap-4'>
      <h2 className='text-4xl font-bold text-start w-full'>About Me</h2>
      <div className='md:p-4 flex items-start justify-center flex-col gap-4'>
        <p className='text-muted-foreground'><span className='text-white font-bold'>AI/ML Developer</span> specializing in applied machine learning for <span className='text-white font-bold'>cybersecurity systems</span>. Experienced in developing, training, and optimizing <span className='text-white font-bold'>ML and deep learning models</span> on real-world, high-volume datasets, with strong command over <span className='text-white font-bold'>Python</span>, <span className='text-white font-bold'>SQL</span>, and end-to-end <span className='text-white font-bold'>ML pipelines</span>.</p>
        <p className='text-muted-foreground'>Currently working in a cybersecurity environment on <span className='text-white font-bold'>LLM-based systems</span>, <span className='text-white font-bold'>intrusion detection models (IDS)</span>, <span className='text-white font-bold'>neural networks</span>, and <span className='text-white font-bold'>NLP pipelines</span>, contributing to model training, evaluation, and deployment workflows.</p>
        <p className='text-muted-foreground border-l-2 border-muted-foreground/50 pl-4 mt-8 italic'>Proven in building scalable, security-driven AI solutions that convert complex data into actionable intelligence for production use.</p>
      </div>
    </div>
  )
}

export default About