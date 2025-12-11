import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col p-8 items-start justify-center gap-4'>
      <h2 className='text-4xl font-bold text-start w-full'>About Me</h2>
      <div className='md:p-4 flex items-start justify-center flex-col gap-4'>
          <p className='text-muted-foreground'><span className='text-white font-bold'>AI/ML Developer</span> building production models that turn messy data into business solutions. I work across the full pipeline—data engineering with <span className='text-white font-bold'>SQL</span>, model development in <span className='text-white font-bold'>Python</span>, deployment with <span className='text-white font-bold'>Scikit-learn and TensorFlow</span>.</p>
          <p className='text-muted-foreground'>I'm drawn to problems where the answer isn't obvious. The kind where you need to question your assumptions, dig into edge cases, and iterate until the model actually works in the real world, not just in notebooks.</p>
          <p className='text-muted-foreground'>Right now, I'm deep in <span className='text-white font-bold'>neural networks and deep learning architectures</span>—exploring how <span className='text-white font-bold'>transformers and computer vision</span> can solve more complex problems. When I'm not shipping code, I'm competing on <span className='text-white font-bold'>Kaggle</span> or experimenting with new techniques in my <span className='text-white font-bold'>GitHub</span>.</p>
          <p className='text-muted-foreground border-l-2 border-muted-foreground/50 pl-4 mt-8 italic'>I believe the best models come from understanding both the math and the business problem. That's where I focus.</p>
        </div>
    </div>
  )
}

export default About