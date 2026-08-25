import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col p-8 items-start justify-center gap-4'>
      <h2 className='text-[32px] font-bold leading-tight text-white/95 text-start w-full'>About Me</h2>
      <div className='md:p-4 flex items-start justify-center flex-col gap-4'>
        <p className='text-[15px] font-normal leading-7 text-white/70'>
          <span className='font-semibold text-white/90'>ML Engineer</span> working at intersection of
          <span className='font-semibold text-white/90'> cybersecurity</span>,
          <span className='font-semibold text-white/90'> network telemetry</span>, and
          <span className='font-semibold text-white/90'> behavioral detection</span>. My work focuses on
          building detection systems from high-volume network data,
          <span className='font-semibold text-white/90'> ML/LLM-based security workflows</span>, and
          production analytics pipelines.
        </p>

        <p className='text-[15px] font-normal leading-7 text-white/70'>
          I work with
          <span className='font-semibold text-white/90'> Python</span>,
          <span className='font-semibold text-white/90'> SQL</span>,
          <span className='font-semibold text-white/90'> ClickHouse</span>,
          <span className='font-semibold text-white/90'> Zeek</span>,
          <span className='font-semibold text-white/90'> Suricata</span>,
          <span className='font-semibold text-white/90'> MITRE ATT&CK</span>, ML models, and LLM systems
          to turn network telemetry into actionable security detections.
        </p>

        <p className='text-[15px] font-normal leading-7 text-white/70'>
          Outside work, I build
          <span className='font-semibold text-white/90'> Android products with Flutter</span>, currently
          developing <span className='font-semibold text-white/90'>SyncSpend</span> — a local-first
          personal finance application.
        </p>

      </div>
    </div>
  )
}

export default About
