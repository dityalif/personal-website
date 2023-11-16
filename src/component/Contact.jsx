import { useState } from 'react'
import ContactCard from './ContactCard'

const data=[
  {id: 1, name: 'LinkedIn', username: 'Muhammad Raditya Alif Nugroho', img: 'src/assets/linkedin.png', link: 'https://www.linkedin.com/in/radityalif'},
  {id: 2, name: 'Instagram', username: 'dityalif', img: 'src/assets/instagram.png', link: 'https://www.instagram.com/dityalif/'}
];

const Contact = () => {
  const [contacts, setContacts] = useState();
  return (
    <div className="my-20 min-h-screen">
        <h1 className="text-center font-bold text-4xl py-5">You can Contact Me Here</h1>
        <div className='flex place-content-center'>
        {data.map((data) => 
          <ContactCard name={data.name} username={data.username} img={data.img} link={data.link}/>
        )}
        </div>
    </div>
  )
}

export default Contact