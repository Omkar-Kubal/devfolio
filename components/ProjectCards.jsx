import React from 'react'
import { Card, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card'
import Image from 'next/image'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import Link from 'next/link'
import { IconBrandGithub, IconCircleFilled, IconWorld } from '@tabler/icons-react'

const ProjectCards = ({ item }) => {
    return (
        <Card className='@container/card gap-3 border-none py-4'>
            <CardContent className='flex flex-col gap-3 p-4'>
                <div className='flex h-64 w-full items-center justify-center overflow-hidden rounded-lg bg-black/40 md:h-72'>
                    <Image src={item.image} alt={item.title} width={1024} height={720} className='h-full w-full object-contain p-0 m-0' />
                </div>
                <div className='flex flex-col gap-1'>
                    <div className='flex items-start justify-between gap-3 w-full'>
                        <CardTitle className='text-lg'>{item.title}</CardTitle>
                        <Badge variant="outline" className='shrink-0 text-xs font-bold'><IconCircleFilled className='w-2 h-2 text-green-500' />{item.type}</Badge>
                    </div>
                    <CardDescription className='text-xs'>{item.date}</CardDescription>
                </div>
                <CardDescription>{item.description}</CardDescription>
                <div className='flex items-center justify-start flex-wrap gap-1.5'>
                    {item.tech.map((tech, key) => <Badge key={key} variant="outline" className='bg-muted text-xs text-white border-none font-bold'>{tech}</Badge>)}
                </div>
            </CardContent>
            <CardFooter className='px-4 pt-0 pb-4'>
                <div className='flex items-center gap-2 w-full'>
                    {item.github && (
                        <Link href={item.github} target='_blank'>
                            <Button variant="default" size="sm" className='bg-white text-black border-none text-xs font-bold'><IconBrandGithub className='w-2 h-2' /> Source</Button>
                        </Link>
                    )}
                    {item.link && (
                        <Link href={item.link} target='_blank'>
                            <Button variant="default" size="sm" className='bg-white text-black border-none text-xs font-bold'><IconWorld className='w-2 h-2' /> {item.linkLabel || "Website"}</Button>
                        </Link>
                    )}
                </div>
            </CardFooter>
        </Card>
    )
}

export default ProjectCards
