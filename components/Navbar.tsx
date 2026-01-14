import { IconBrandGithub, IconBrandGitlab, IconBrandGooglePlay, IconBrandInstagram, IconBrandLinkedin } from '@tabler/icons-react'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const Navbar = () => {
  return (
    <nav className='flex mt-4 w-full md:max-w-7xl rounded-2xl mx-auto justify-between items-center p-4 fixed top-0 z-20 bg-background/30 backdrop-blur-xs'>
        <div className='flex items-center gap-2'>
          <IconBrandGitlab className='w-6 h-6 text-primary' />
          <h1 className='text-xl md:text-2xl font-bold'>Omkar's Portfolio</h1>
        </div>
        <div className='flex gap-4'>
            <Link href="https://github.com/Omkar-Kubal" target='_blank'><IconBrandGithub className="w-6 h-6" /></Link>
            <Link href="https://www.linkedin.com/in/omkar-kubal-814169253/" target='_blank'><IconBrandLinkedin className="w-6 h-6" /></Link>
        </div>
    </nav>
  )
}

export default Navbar