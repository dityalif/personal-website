import { useState } from 'react'
import IntroCard from './IntroCard'

const data=[
    {id: 1, title:'About Me', 
    text:"I am a Computer Engineering student at the University of Indonesia with a strong passion for technology, particularly in the software domains. My previous experience as Vice President of my high school's student council helped me develop my leadership and organizational skills. I am deeply committed in advancing my knowledge and skills in the world of technology. With a focus on software development and a keen interest in data analysis"
    },
    {id: 2, title:'Education', text:''},
    {id: 3, title:'Organization', text:''}
]

const Intro = () => {
    return (
    <div className="my-20">
        <h1 className="text-center font-bold text-4xl py-5">Get to Know Me</h1>
        <div className="flex place-content-center">
        
        {data.map((data) => 
          <IntroCard key={data.id} title={data.title} text={data.text}/>
        )}
        </div>
    </div>
  )
}

export default Intro