import { useState } from 'react'
import ContactCard from './ContactCard'
import LinkedIn from '/assets/linkedin.png'
import Instagram from '/assets/instagram.png'
import Github from '/assets/github.png'

const data=[
  {id: 1, name: 'LinkedIn', username: 'Muhammad Raditya Alif Nugroho', img:LinkedIn, link: 'https://www.linkedin.com/in/radityalif'},
  {id: 2, name: 'Instagram', username: 'dityalif', img:Instagram, link: 'https://www.instagram.com/dityalif/'},
  {id: 3, name: 'GitHub', username: 'dityalif', img:Github, link: 'https://github.com/dityalif'}, 
];

const Contact = () => {
  const [contacts, setContacts] = useState();
  return (
    <div className="m-20 min-h-screen">
        <h1 className="text-center font-bold text-4xl py-5">You can Contact Me Here</h1>
        <div className='w-5/6 align-center mx-auto grid gap-2 md:gap-5 grid-cols-1 md:grid-cols-3'>
          {data.map((data) => 
            <ContactCard key={data.id} name={data.name} username={data.username} img={data.img} link={data.link}/>
          )}
        </div>
    </div>
  )
}

export default Contact